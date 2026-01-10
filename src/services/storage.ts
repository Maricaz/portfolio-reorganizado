import { supabase } from '@/lib/supabase/client'

export const uploadFile = async (
  file: File,
  bucket: string = 'portfolio-media',
  folder: string = 'general',
) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
  const filePath = `${folder}/${fileName}`

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      upsert: true,
    })

  if (uploadError) {
    throw uploadError
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)

  return data.publicUrl
}
