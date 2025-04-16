FROM node:20-alpine

# Install system dependencies required by sharp
RUN apk add --no-cache \
    vips-dev \
    vips \
    vips-tools \
    vips-heif \
    vips-webp \
    vips-giflib \
    vips-libjpeg \
    vips-libexif \
    vips-lcms2 \
    vips-fftw \
    vips-libpng \
    vips-libwebp \
    vips-libtiff \
    vips-libheif \
    vips-libimagequant \
    vips-libspng \
    vips-libjxl \
    vips-libvips \
    vips-libvips-dev

WORKDIR /app

# Copy package files
COPY package.json package-lock.json .npmrc ./

# Install dependencies
RUN npm install --platform=linux --arch=x64

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"] 