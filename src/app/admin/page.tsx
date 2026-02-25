'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@supabase/supabase-js'

// Public Supabase client for real-time subscriptions (anon key, read-only)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'

interface Order {
    id: string
    order_ref: string
    status: OrderStatus
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: {
        address: string
        city: string
        state: string
        pincode: string
        country: string
    }
    items: { id: string; name: string; price: number; quantity: number; image: string }[]
    subtotal: number
    shipping: number
    total: number
    notes: string | null
    created_at: string
}

interface Product {
    id: string
    name: string
    price: number
    category: string
    description: string
    short_description: string
    badge: string | null
    variants: { size: string; price: number }[] | null
    updated_at: string
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; color: string; bg: string }> = {
    pending: { label: 'Pending', color: 'text-amber-700', bg: 'bg-amber-100' },
    confirmed: { label: 'Confirmed', color: 'text-blue-700', bg: 'bg-blue-100' },
    shipped: { label: 'Shipped', color: 'text-purple-700', bg: 'bg-purple-100' },
    delivered: { label: 'Delivered', color: 'text-green-700', bg: 'bg-green-100' },
    cancelled: { label: 'Cancelled', color: 'text-red-700', bg: 'bg-red-100' },
}

export default function AdminDashboard() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders')
    const [orders, setOrders] = useState<Order[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all')
    const [loading, setLoading] = useState(true)
    const [productsLoading, setProductsLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null)
    const [seedingProducts, setSeedingProducts] = useState(false)

    const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
        setToast({ msg, type })
        setTimeout(() => setToast(null), 3000)
    }

    // Fetch orders
    const fetchOrders = useCallback(async () => {
        const res = await fetch('/api/orders')
        if (res.status === 401) { router.push('/admin/login'); return }
        const data = await res.json()
        if (data.orders) setOrders(data.orders)
        setLoading(false)
    }, [router])

    // Fetch products
    const fetchProducts = useCallback(async () => {
        setProductsLoading(true)
        const res = await fetch('/api/admin/products')
        if (res.status === 401) { router.push('/admin/login'); return }
        const data = await res.json()
        if (data.products) setProducts(data.products)
        setProductsLoading(false)
    }, [router])

    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    useEffect(() => {
        if (activeTab === 'products' && products.length === 0) {
            fetchProducts()
        }
    }, [activeTab, products.length, fetchProducts])

    // Real-time subscription for new orders
    useEffect(() => {
        const channel = supabase
            .channel('orders-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
                if (payload.eventType === 'INSERT') {
                    setOrders(prev => [payload.new as Order, ...prev])
                    showToast('🛒 New order received!', 'success')
                } else if (payload.eventType === 'UPDATE') {
                    setOrders(prev => prev.map(o => o.id === payload.new.id ? payload.new as Order : o))
                }
            })
            .subscribe()

        return () => { supabase.removeChannel(channel) }
    }, [])

    const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
        setSaving(true)
        const res = await fetch(`/api/orders/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
        })
        const data = await res.json()
        if (data.success) {
            setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o))
            if (selectedOrder?.id === orderId) setSelectedOrder(prev => prev ? { ...prev, status } : null)
            showToast('Order status updated')
        } else {
            showToast('Failed to update status', 'error')
        }
        setSaving(false)
    }

    const saveProduct = async () => {
        if (!editingProduct) return
        setSaving(true)
        const res = await fetch(`/api/admin/products/${editingProduct.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: editingProduct.name,
                price: editingProduct.price,
                description: editingProduct.description,
                short_description: editingProduct.short_description,
                badge: editingProduct.badge,
            }),
        })
        const data = await res.json()
        if (data.success) {
            setProducts(prev => prev.map(p => p.id === editingProduct.id ? data.product : p))
            setEditingProduct(null)
            showToast('Product updated!')
        } else {
            showToast('Failed to update product', 'error')
        }
        setSaving(false)
    }

    const seedProducts = async () => {
        setSeedingProducts(true)
        const res = await fetch('/api/admin/products', {
            method: 'POST',
        })
        const data = await res.json()
        if (data.success) {
            showToast(`Seeded ${data.seeded} products!`)
            await fetchProducts()
        } else {
            showToast('Failed to seed products', 'error')
        }
        setSeedingProducts(false)
    }

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' })
        router.push('/admin/login')
    }

    const filteredOrders = statusFilter === 'all'
        ? orders
        : orders.filter(o => o.status === statusFilter)

    const stats = {
        total: orders.length,
        pending: orders.filter(o => o.status === 'pending').length,
        revenue: orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0),
        today: orders.filter(o => new Date(o.created_at).toDateString() === new Date().toDateString()).length,
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <header className="bg-[#1a2e1f] text-white px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🌿</span>
                    <div>
                        <h1 className="font-serif text-lg leading-none">The Young Vaidyas</h1>
                        <p className="text-[#c9a227] text-xs tracking-wider">Admin Dashboard</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 bg-white/10 rounded-lg p-1">
                        {(['orders', 'products'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition ${activeTab === tab ? 'bg-[#c9a227] text-[#1a2e1f]' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-xs text-white/50 hover:text-white transition px-3 py-1.5 border border-white/20 rounded-lg"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed top-20 right-6 z-50 px-5 py-3 rounded-xl shadow-xl text-sm font-medium ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                            }`}
                    >
                        {toast.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

                {/* --- ORDERS TAB --- */}
                {activeTab === 'orders' && (
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { label: 'Total Orders', value: stats.total, icon: '📦', color: 'text-gray-900' },
                                { label: 'Pending', value: stats.pending, icon: '⏳', color: 'text-amber-600' },
                                { label: "Today's Orders", value: stats.today, icon: '📅', color: 'text-blue-600' },
                                { label: 'Revenue', value: `₹${stats.revenue.toLocaleString('en-IN')}`, icon: '💰', color: 'text-green-600' },
                            ].map(stat => (
                                <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">{stat.icon}</div>
                                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-gray-500">Filter:</span>
                            {(['all', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] as const).map(s => (
                                <button
                                    key={s}
                                    onClick={() => setStatusFilter(s)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${statusFilter === s
                                            ? 'bg-[#1a2e1f] text-white'
                                            : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                                        }`}
                                >
                                    {s === 'all' ? 'All orders' : STATUS_CONFIG[s].label}
                                    {s !== 'all' && (
                                        <span className="ml-1.5 opacity-70">
                                            ({orders.filter(o => o.status === s).length})
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Orders Table */}
                        {loading ? (
                            <div className="text-center py-20 text-gray-400">Loading orders...</div>
                        ) : filteredOrders.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-5xl mb-4">📭</div>
                                <p className="text-gray-500">No orders yet</p>
                                <p className="text-gray-400 text-sm mt-1">Orders will appear here in real time</p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-100 bg-gray-50">
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Order Ref</th>
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Customer</th>
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Items</th>
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Total</th>
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Status</th>
                                                <th className="text-left px-5 py-3 text-xs text-gray-500 font-medium uppercase tracking-wider">Date</th>
                                                <th className="px-5 py-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredOrders.map((order, i) => {
                                                const cfg = STATUS_CONFIG[order.status]
                                                return (
                                                    <motion.tr
                                                        key={order.id}
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.02 }}
                                                        className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition"
                                                        onClick={() => setSelectedOrder(order)}
                                                    >
                                                        <td className="px-5 py-4 font-mono text-xs text-gray-700">{order.order_ref}</td>
                                                        <td className="px-5 py-4">
                                                            <div className="font-medium text-gray-900">{order.customer_name}</div>
                                                            <div className="text-gray-400 text-xs">{order.customer_phone}</div>
                                                        </td>
                                                        <td className="px-5 py-4 text-gray-600">{order.items?.length ?? 0} item{(order.items?.length ?? 0) !== 1 ? 's' : ''}</td>
                                                        <td className="px-5 py-4 font-semibold text-[#1a2e1f]">₹{order.total?.toLocaleString('en-IN')}</td>
                                                        <td className="px-5 py-4">
                                                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${cfg.bg} ${cfg.color}`}>
                                                                {cfg.label}
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                                                            {new Date(order.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                            <br />
                                                            {new Date(order.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                                        </td>
                                                        <td className="px-5 py-4">
                                                            <button
                                                                onClick={e => { e.stopPropagation(); setSelectedOrder(order) }}
                                                                className="text-xs text-[#1a2e1f] font-medium hover:text-[#c9a227] transition"
                                                            >
                                                                View →
                                                            </button>
                                                        </td>
                                                    </motion.tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* --- PRODUCTS TAB --- */}
                {activeTab === 'products' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-serif text-gray-900">Product Catalogue</h2>
                            <button
                                onClick={seedProducts}
                                disabled={seedingProducts}
                                className="text-sm px-4 py-2 bg-[#1a2e1f] text-white rounded-lg hover:bg-[#2a3e2f] transition disabled:opacity-50"
                            >
                                {seedingProducts ? 'Seeding...' : '⬆️ Seed from Code'}
                            </button>
                        </div>

                        {productsLoading ? (
                            <div className="text-center py-20 text-gray-400">Loading products...</div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="text-5xl mb-4">📦</div>
                                <p className="text-gray-500">No products in database yet.</p>
                                <p className="text-gray-400 text-sm mt-1">Click "Seed from Code" to load products from your codebase.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                {products.map(product => (
                                    <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    {product.badge && (
                                                        <span className="text-xs bg-[#c9a227]/20 text-[#8a6a00] px-2 py-0.5 rounded-full font-medium">
                                                            {product.badge}
                                                        </span>
                                                    )}
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize">
                                                        {product.category.replace('-', ' ')}
                                                    </span>
                                                </div>
                                                <h3 className="font-serif text-lg text-gray-900 truncate">{product.name}</h3>
                                                <p className="text-2xl font-bold text-[#1a2e1f] mt-1">₹{product.price}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.short_description}</p>
                                        {product.variants && product.variants.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {product.variants.map(v => (
                                                    <span key={v.size} className="text-xs border border-gray-200 rounded-full px-2 py-0.5 text-gray-600">
                                                        {v.size} — ₹{v.price}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                            <span className="text-xs text-gray-400">
                                                Updated {new Date(product.updated_at).toLocaleDateString('en-IN')}
                                            </span>
                                            <button
                                                onClick={() => setEditingProduct(product)}
                                                className="text-xs text-[#1a2e1f] font-medium hover:text-[#c9a227] transition px-3 py-1.5 border border-gray-200 rounded-lg hover:border-[#c9a227]"
                                            >
                                                ✏️ Edit
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* ── Order Detail Modal ── */}
            <AnimatePresence>
                {selectedOrder && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedOrder(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-gray-100 flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-serif text-gray-900">{selectedOrder.order_ref}</h2>
                                    <p className="text-sm text-gray-400 mt-0.5">
                                        {new Date(selectedOrder.created_at).toLocaleString('en-IN')}
                                    </p>
                                </div>
                                <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-600 transition text-xl p-1">✕</button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Customer */}
                                <div>
                                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Customer</h3>
                                    <p className="font-semibold text-gray-900">{selectedOrder.customer_name}</p>
                                    <p className="text-sm text-gray-600">{selectedOrder.customer_email}</p>
                                    <p className="text-sm text-gray-600">{selectedOrder.customer_phone}</p>
                                </div>

                                {/* Address */}
                                <div>
                                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Shipping Address</h3>
                                    <p className="text-sm text-gray-700">
                                        {selectedOrder.shipping_address?.address}<br />
                                        {selectedOrder.shipping_address?.city}, {selectedOrder.shipping_address?.state}<br />
                                        {selectedOrder.shipping_address?.country} — {selectedOrder.shipping_address?.pincode}
                                    </p>
                                </div>

                                {/* Items */}
                                <div>
                                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Items Ordered</h3>
                                    <div className="space-y-2">
                                        {selectedOrder.items?.map((item, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-gray-700">{item.name} × {item.quantity}</span>
                                                <span className="font-medium text-gray-900">₹{item.price * item.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-3 pt-3 space-y-1">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Subtotal</span><span>₹{selectedOrder.subtotal}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Shipping</span><span>{selectedOrder.shipping === 0 ? 'Free' : `₹${selectedOrder.shipping}`}</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-[#1a2e1f] pt-1 border-t border-gray-100">
                                            <span>Total</span><span>₹{selectedOrder.total}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Notes */}
                                {selectedOrder.notes && (
                                    <div>
                                        <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Notes</h3>
                                        <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{selectedOrder.notes}</p>
                                    </div>
                                )}

                                {/* Status Update */}
                                <div>
                                    <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-3">Update Status</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {(Object.keys(STATUS_CONFIG) as OrderStatus[]).map(s => {
                                            const cfg = STATUS_CONFIG[s]
                                            const isActive = selectedOrder.status === s
                                            return (
                                                <button
                                                    key={s}
                                                    onClick={() => updateOrderStatus(selectedOrder.id, s)}
                                                    disabled={isActive || saving}
                                                    className={`px-3 py-2 rounded-lg text-xs font-medium transition ${isActive
                                                            ? `${cfg.bg} ${cfg.color} ring-2 ring-offset-1 ring-current`
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50'
                                                        }`}
                                                >
                                                    {cfg.label}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Edit Product Modal ── */}
            <AnimatePresence>
                {editingProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setEditingProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                <h2 className="text-xl font-serif text-gray-900">Edit Product</h2>
                                <button onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-gray-600 text-xl p-1">✕</button>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Name</label>
                                    <input
                                        value={editingProduct.name}
                                        onChange={e => setEditingProduct(p => p ? { ...p, name: e.target.value } : p)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Base Price (₹)</label>
                                    <input
                                        type="number"
                                        value={editingProduct.price}
                                        onChange={e => setEditingProduct(p => p ? { ...p, price: Number(e.target.value) } : p)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Badge (e.g. Bestseller)</label>
                                    <input
                                        value={editingProduct.badge || ''}
                                        onChange={e => setEditingProduct(p => p ? { ...p, badge: e.target.value } : p)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
                                        placeholder="Leave blank for none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Short Description</label>
                                    <input
                                        value={editingProduct.short_description}
                                        onChange={e => setEditingProduct(p => p ? { ...p, short_description: e.target.value } : p)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Full Description</label>
                                    <textarea
                                        rows={4}
                                        value={editingProduct.description}
                                        onChange={e => setEditingProduct(p => p ? { ...p, description: e.target.value } : p)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227] resize-none"
                                    />
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-100 flex gap-3 justify-end">
                                <button
                                    onClick={() => setEditingProduct(null)}
                                    className="px-5 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={saveProduct}
                                    disabled={saving}
                                    className="px-5 py-2.5 text-sm bg-[#1a2e1f] text-white rounded-lg hover:bg-[#2a3e2f] transition disabled:opacity-50"
                                >
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
