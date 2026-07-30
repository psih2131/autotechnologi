/**
 * Нормализует shared.map-component из Strapi для MapAbout.
 * center_map: "широта, долгота" (как копируется из Яндекс.Карт).
 * point[]: longitude + latitude → [lng, lat] для API 3.0.
 */
export function useStrapiMap() {
  const mediaUrl = useStrapiMedia()

  function parseCoordPair(value) {
    if (value == null || value === '') return null
    if (Array.isArray(value) && value.length >= 2) {
      const lng = Number(value[0])
      const lat = Number(value[1])
      if (Number.isFinite(lng) && Number.isFinite(lat)) return [lng, lat]
      return null
    }

    const parts = String(value)
      .trim()
      .split(/[,;\s]+/)
      .map((part) => Number(part.replace(',', '.')))
      .filter((n) => Number.isFinite(n))

    if (parts.length < 2) return null

    const [a, b] = parts
    // "55.75, 37.61" → lat, lng; иначе считаем lng, lat
    if (Math.abs(a) <= 90 && Math.abs(b) <= 180) {
      return [b, a]
    }
    return [a, b]
  }

  function normalizeMap(map) {
    if (!map) {
      return {
        center: null,
        zoom: 13,
        iconUrl: '',
        markers: [],
      }
    }

    const markers = (map.point || [])
      .map((item) => {
        const lng = Number(String(item?.longitude ?? '').replace(',', '.'))
        const lat = Number(String(item?.latitude ?? '').replace(',', '.'))
        if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null
        return [lng, lat]
      })
      .filter(Boolean)

    let center = parseCoordPair(map.center_map)
    if (!center && markers.length) {
      center = markers[0]
    }

    const zoom = Number(map.zoom)
    return {
      center,
      zoom: Number.isFinite(zoom) && zoom >= 1 && zoom <= 20 ? zoom : 13,
      iconUrl: mediaUrl(map.icon_marker),
      markers,
    }
  }

  return { normalizeMap, parseCoordPair }
}
