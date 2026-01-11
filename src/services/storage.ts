import { supabase } from '@/lib/supabase/client'
import { optimizeImage } from '@/lib/image-optimizer'

export const uploadFile = async (
  file: File,
  bucket: string = 'portfolio-media',
  folder: string = 'general',
) => {
  let fileToUpload = file

  try {
    // Attempt to optimize image before upload
    fileToUpload = await optimizeImage(file)
  } catch (error) {
    console.warn(
      'Image optimization failed, proceeding with original file:',
      error,
    )
  }

  const fileExt = fileToUpload.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
  const filePath = `${folder}/${fileName}`

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, fileToUpload, {
      upsert: true,
    })

  if (uploadError) {
    throw uploadError
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)

  return data.publicUrl
}
