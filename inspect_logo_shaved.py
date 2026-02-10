from PIL import Image
import sys

try:
    img = Image.open('/Users/apple/Desktop/tyv/public/images/PNG_logo_shaved.png').convert('RGBA')
    width, height = img.size
    print(f"Shaved Image Size: {width}x{height}")
    
    # Check corners (new image)
    corners = [
        (0, 0), (width-1, 0),
        (0, height-1), (width-1, height-1)
    ]
    
    print("New Corner pixels (RGBA):")
    for x, y in corners:
        print(f"  ({x}, {y}): {img.getpixel((x, y))}")

except Exception as e:
    print(f"Error: {e}")
