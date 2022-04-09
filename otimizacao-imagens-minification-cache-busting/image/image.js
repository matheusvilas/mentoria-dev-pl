import Compressor from "compressorjs";

function compressImage(file) {
  return new Compressor(file, {
    quality: 0.6,
  });
}

compressImage();
