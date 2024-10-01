
#!/bin/bash

# Convert all images in a directory to WebP format

path="$1"
quality="$2"

# Loop through files
for file in "$path"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Check if the file exists
    if [ -f "$file" ]; then
        # convert to webp
        cwebp -q $quality "$file" -o "${file%.*}.webp"
        echo "$file"
    fi
done
