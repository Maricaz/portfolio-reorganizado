export async function optimizeImage(
  file: File,
  maxWidth = 1200,
  quality = 0.8,
): Promise<File> {
  // Only optimize images, skip SVGs
  if (!file.type.startsWith('image/') || file.type.includes('svg')) {
    return file
  }

  return new Promise((resolve, reject) => {
    const img = new Image()
    const reader = new FileReader()

    reader.onload = (e) => {
      img.src = e.target?.result as string
    }

    reader.onerror = (e) => reject(e)

    img.onload = () => {
      let width = img.width
      let height = img.height

      // Resize logic
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width)
        width = maxWidth
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        // Fallback if context is not available
        resolve(file)
        return
      }

      // Draw image
      ctx.drawImage(img, 0, 0, width, height)

      // Compress
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file)
            return
          }
          // If optimization increased size (rare but possible), keep original
          if (blob.size > file.size) {
            resolve(file)
            return
          }
          const optimizedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          })
          resolve(optimizedFile)
        },
        file.type,
        quality,
      )
    }

    reader.readAsDataURL(file)
  })
}
