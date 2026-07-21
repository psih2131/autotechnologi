export function useSeoFromStrapi(seoRef, mediaUrl) {
  useSeoMeta({
    title: () => seoRef.value?.metaTitle || undefined,
    description: () => seoRef.value?.metaDescription || undefined,
    keywords: () => seoRef.value?.keywords || undefined,
    robots: () => seoRef.value?.metaRobots || undefined,
    ogTitle: () => seoRef.value?.ogTitle || seoRef.value?.metaTitle || undefined,
    ogDescription: () => seoRef.value?.ogDescription || seoRef.value?.metaDescription || undefined,
    ogType: () => seoRef.value?.ogType || undefined,
    ogUrl: () => seoRef.value?.ogUrl || undefined,
    ogImage: () => mediaUrl(seoRef.value?.shareImage) || undefined,
    twitterCard: () => seoRef.value?.twitterCard || undefined,
    twitterTitle: () =>
      seoRef.value?.twitterTitle
      || seoRef.value?.ogTitle
      || seoRef.value?.metaTitle
      || undefined,
    twitterDescription: () =>
      seoRef.value?.twitterDescription
      || seoRef.value?.ogDescription
      || seoRef.value?.metaDescription
      || undefined,
    twitterImage: () =>
      mediaUrl(seoRef.value?.twitterImage)
      || mediaUrl(seoRef.value?.shareImage)
      || undefined,
  })

  useHead({
    link: () => (seoRef.value?.canonicalUrl
      ? [{ rel: 'canonical', href: seoRef.value.canonicalUrl }]
      : []),
  })
}
