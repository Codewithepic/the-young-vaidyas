'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/hita/Header'
import Footer from '@/components/Footer'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <Header />

            <main>
                {/* ULTRA CREATIVE HERO SECTION */}
                <section className="relative min-h-screen bg-[#1a2e1f] overflow-hidden">

                    {/* Animated Glowing Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: Math.random() * 100 + "%",
                                    opacity: 0
                                }}
                                animate={{
                                    y: [null, "-100%"],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 6,
                                    repeat: Infinity,
                                    delay: Math.random() * 5
                                }}
                                className="absolute w-1 h-1 bg-[#c9a227] rounded-full"
                                style={{ left: `${10 + i * 8}%` }}
                            />
                        ))}
                    </div>

                    {/* Morphing Background Blobs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                                borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "30% 70% 70% 30%"]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#c9a227]/5 to-transparent"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [360, 180, 0],
                                borderRadius: ["70% 30% 30% 70%", "30% 70% 70% 30%", "70% 30% 30% 70%"]
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#c9a227]/3 to-transparent"
                        />
                    </div>

                    {/* Rotating Circles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-[#c9a227]/10 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-[#c9a227]/5 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] border border-white/5 rounded-full"
                        />
                    </div>

                    {/* Floating Botanical Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-32 right-20 text-6xl opacity-20 hidden lg:block"
                    >
                        🌿
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-40 left-16 text-5xl opacity-15 hidden lg:block"
                    >
                        🍃
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-8 text-4xl opacity-10 hidden xl:block"
                    >
                        ✧
                    </motion.div>

                    {/* Infinite Scrolling Marquee */}
                    <div className="absolute bottom-24 left-0 right-0 overflow-hidden opacity-10">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex whitespace-nowrap gap-16 text-[#c9a227] text-9xl font-serif italic"
                        >
                            <span>Ayurveda</span>
                            <span>•</span>
                            <span>Wisdom</span>
                            <span>•</span>
                            <span>Healing</span>
                            <span>•</span>
                            <span>Purity</span>
                            <span>•</span>
                            <span>Ayurveda</span>
                            <span>•</span>
                            <span>Wisdom</span>
                            <span>•</span>
                            <span>Healing</span>
                            <span>•</span>
                            <span>Purity</span>
                            <span>•</span>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 min-h-screen flex items-center">
                        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
                            <div className="grid lg:grid-cols-12 gap-8 items-center">

                                {/* Left Side - Creative Typography */}
                                <div className="lg:col-span-7">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {/* Decorative Line with Glow */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "3rem" }}
                                            transition={{ delay: 0.5, duration: 0.6 }}
                                            className="h-px bg-[#c9a227] mb-8 shadow-[0_0_10px_#c9a227]"
                                        />

                                        {/* Label */}
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-[#c9a227] text-xs uppercase tracking-[0.4em] mb-6"
                                        >
                                            Est. 2026 — The Young Vaidyas
                                        </motion.p>

                                        {/* Giant Display Heading with Effects */}
                                        <h1 className="relative">
                                            <motion.span
                                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                transition={{ delay: 0.4, type: "spring" }}
                                                className="block text-6xl sm:text-7xl lg:text-8xl font-serif text-white leading-none"
                                            >
                                                Ancient
                                            </motion.span>
                                            <motion.span
                                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                transition={{ delay: 0.5, type: "spring" }}
                                                className="block text-6xl sm:text-7xl lg:text-8xl font-serif italic leading-none mt-2 relative"
                                            >
                                                {/* Shimmer Effect on Wisdom */}
                                                <span className="relative">
                                                    <span className="text-[#c9a227]">Wisdom</span>
                                                    <motion.span
                                                        animate={{ x: ["-100%", "200%"] }}
                                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                        style={{ WebkitBackgroundClip: "text" }}
                                                    />
                                                </span>
                                            </motion.span>
                                            <motion.span
                                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                transition={{ delay: 0.6, type: "spring" }}
                                                className="block text-6xl sm:text-7xl lg:text-8xl font-serif text-white/30 leading-none mt-2"
                                            >
                                                Reimagined
                                            </motion.span>

                                            {/* Decorative Number */}
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.1 }}
                                                transition={{ delay: 1 }}
                                                className="absolute -right-8 top-0 text-[200px] font-serif text-[#c9a227] leading-none hidden xl:block"
                                            >
                                                ॐ
                                            </motion.span>
                                        </h1>

                                        {/* Sanskrit Quote - Creative Placement */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1 }}
                                            className="mt-12 flex items-start gap-4"
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,162,39,0.2)]"
                                            >
                                                <span className="text-xl text-[#c9a227]">॥</span>
                                            </motion.div>
                                            <div>
                                                <p className="font-serif italic text-white/70 text-lg">
                                                    "हृदय तिष्ठति संहिता"
                                                </p>
                                                <p className="text-[#c9a227]/60 text-sm mt-1">
                                                    The Samhita stays in the heart
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Right Side - Overlapping Image Composition */}
                                <div className="lg:col-span-5 relative">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 1 }}
                                        className="relative"
                                    >
                                        {/* Main Image with Pulsing Aura */}
                                        <div className="relative h-[400px] lg:h-[500px] w-full">
                                            <motion.div
                                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="absolute -inset-1 bg-[#c9a227]/20 blur-xl"
                                            />
                                            <Image
                                                src="/images/philosophy_bg.jpg"
                                                alt="Ayurvedic traditions"
                                                fill
                                                className="object-cover rounded-sm relative z-10"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1f]/50 to-transparent z-20" />
                                        </div>

                                        {/* Floating Stats Card with Hover */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ delay: 0.8 }}
                                            className="absolute -bottom-6 -left-6 bg-[#c9a227] text-[#1a2e1f] p-6 w-48 z-30 cursor-pointer"
                                        >
                                            <p className="text-5xl font-serif">100%</p>
                                            <p className="text-xs uppercase tracking-widest mt-1">Natural & Pure</p>
                                        </motion.div>

                                        {/* Second Floating Card */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 }}
                                            className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 z-30"
                                        >
                                            <p className="text-3xl font-serif text-white">2026</p>
                                            <p className="text-[10px] text-white/60 uppercase tracking-widest">Established</p>
                                        </motion.div>

                                        {/* Decorative Border */}
                                        <motion.div
                                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute -inset-4 border border-[#c9a227]/30 rounded-sm pointer-events-none"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator with Pulse */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-[9px] text-white/50 uppercase tracking-widest"
                        >
                            Scroll
                        </motion.span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-px h-10 bg-gradient-to-b from-[#c9a227] to-transparent"
                        />
                    </motion.div>
                </section>

                {/* ORIGIN STORY */}
                <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            <span className="text-[#c9a227] text-[10px] tracking-[0.3em] uppercase block mb-4">Our Story</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1a2e1f] mb-6 leading-tight">
                                Guided by Tradition,
                                <br />
                                <span className="italic text-[#c9a227]">Driven by Discipline</span>
                            </h2>
                            <div className="w-16 h-px bg-[#c9a227] mb-8" />
                            <div className="space-y-6 text-gray-600">
                                <p className="text-lg font-serif italic text-[#1a2e1f]/80">
                                    "हृदय तिष्ठति संहिता" — The Samhita stays in the heart.
                                </p>
                                <p className="leading-relaxed">
                                    We are a student-led initiative founded by scholars of Ayurveda who believe that tradition is a legacy, not a trend. In a world rushing towards instant results, we choose the path of patience.
                                </p>
                                <p className="leading-relaxed">
                                    Our formulations are not invented; they are rediscovered. We treat the preparation of medicine as a sacred responsibility, demanding humility, precision, and deep respect for the ancient texts.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src="/images/ayurvedic_heritage.jpg"
                                    alt="Ayurvedic Heritage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a227]/30 -z-10" />
                        </motion.div>
                    </div>
                </section>

                {/* FOUNDERS */}
                <section className="py-20 md:py-32 bg-[#1a2e1f]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-[#c9a227] text-[10px] tracking-[0.3em] uppercase block mb-4">Meet the Team</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                                The <span className="italic text-[#c9a227]">Scholars</span> Behind the Vision
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            {[
                                {
                                    name: "Vd. Harshit Jain",
                                    role: "Founder",
                                    batch: "BAMS Final Prof (Batch 2021)",
                                    quote: "A new generation thinker rooted in classical knowledge. We must practice Ayurveda with the same rigor as centuries ago.",
                                    image: "/images/founder_harshit.jpg"
                                },
                                {
                                    name: "Vd. Muskan Agrawal",
                                    role: "Co-Founder",
                                    batch: "BAMS Second Prof (Batch 2023)",
                                    quote: "Bringing elegance and balance to ancient wisdom. True healing restores harmony to body and mind.",
                                    image: "/images/founder_muskan.jpg"
                                }
                            ].map((founder, i) => (
                                <motion.div
                                    key={founder.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group"
                                >
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                                        <div className="w-40 h-40 sm:w-48 sm:h-48 relative flex-shrink-0 rounded-full overflow-hidden border-2 border-[#c9a227]/30 group-hover:border-[#c9a227]/60 transition-colors">
                                            <Image
                                                src={founder.image}
                                                alt={founder.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h3 className="text-2xl font-serif text-white mb-1">{founder.name}</h3>
                                            <p className="text-[#c9a227] text-sm tracking-wide uppercase mb-1">{founder.role}</p>
                                            <p className="text-white/40 text-xs mb-4">{founder.batch}</p>
                                            <p className="text-white/60 text-sm italic leading-relaxed">"{founder.quote}"</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY PILLARS */}
                <section className="py-20 md:py-32 bg-[#faf8f5]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[#c9a227] text-[10px] tracking-[0.3em] uppercase block mb-4">Our Pillars</span>
                            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a2e1f]">
                                What We <span className="italic text-[#c9a227]">Stand</span> For
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Classical Roots",
                                    icon: "📜",
                                    desc: "We adhere strictly to preparation methods described in the classical Samhitas."
                                },
                                {
                                    title: "Sincere & Handmade",
                                    icon: "🤲",
                                    desc: "No shortcuts. No chemical stabilizers. Just pure, honest ingredients prepared with care."
                                },
                                {
                                    title: "Slow Healing",
                                    icon: "⏳",
                                    desc: "We value root-cause correction over temporary relief. True wellness takes time."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="p-8 border border-[#1a2e1f]/10 hover:border-[#c9a227]/30 transition-colors text-center"
                                >
                                    <div className="text-4xl mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-serif text-[#1a2e1f] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main >

            <Footer />
        </div >
    )
}
