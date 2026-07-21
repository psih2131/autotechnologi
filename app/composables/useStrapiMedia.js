// Превращает media-объект Strapi в абсолютный URL картинки
export function useStrapiMedia() {
  const config = useRuntimeConfig()

  return (media) => {
    const url = media?.url
    if (!url) return ''
    return /^https?:\/\//.test(url) ? url : `${config.public.apiUrl}${url}`
  }
}
