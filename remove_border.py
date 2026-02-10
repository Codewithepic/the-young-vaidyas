from PIL import Image, ImageOps
import numpy as np
import sys

def check_and_remove_border(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        print(f"Opened image: {input_path}, Size: {img.size}")
        
        # Check for border by looking at corners or edges
        # Convert to numpy array
        arr = np.array(img)
        
        # Check if there's a solid border
        # This is a simple heuristic: crop 1px from edges
        # But let's try to auto-crop meaningful content
        
        # Get alpha channel
        alpha = arr[:, :, 3]
        
        # Find bounding box of non-transparent pixels
        bbox = img.getbbox()
        if bbox:
            print(f"Content bbox: {bbox}")
            # If bbox is smaller than size, we can crop
            if bbox != (0, 0, img.width, img.height):
                print("Cropping transparency...")
                img = img.crop(bbox)
        
        # Now assume the user means a VISIBLE border (like a black line)
        # We can try to trim specific colors if needed, but let's start with auto-trimming
        # background if it's white/solid.
        
        # Check corners to guess background color
        # If transparent, we are good. If white, maybe that's the "border" box?
        
        top_left = img.getpixel((0, 0))
        print(f"Top-left pixel: {top_left}")
        
        # If top-left is not transparent, try to make it transparent?
        # Or simply save the cropped version.
        
        img.save(output_path)
        print(f"Saved processed image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

check_and_remove_border('/Users/apple/Desktop/tyv/public/images/PNG logo.png', '/Users/apple/Desktop/tyv/public/images/PNG_logo_cleaned.png')
