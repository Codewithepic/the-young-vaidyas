from PIL import Image
import sys

try:
    img = Image.open('/Users/apple/Desktop/tyv/public/images/PNG_logo_cleaned.png').convert('RGBA')
    width, height = img.size
    print(f"Image Size: {width}x{height}")
    
    # Check corners
    corners = [
        (0, 0), (width-1, 0),
        (0, height-1), (width-1, height-1)
    ]
    
    print("Corner pixels (RGBA):")
    for x, y in corners:
        print(f"  ({x}, {y}): {img.getpixel((x, y))}")
        
    # Check slightly inner pixels (in case of 1px border)
    print("Inner pixels (5px in):")
    inner = [
        (5, 5), (width-6, 5),
        (5, height-6), (width-6, height-6)
    ]
    for x, y in inner:
        print(f"  ({x}, {y}): {img.getpixel((x, y))}")

except Exception as e:
    print(f"Error: {e}")
