<template>
  <ClientOnly>
    <yandex-map
      v-if="center"
      v-model="map"
      class="map-about"
      :settings="{
        location: {
          center,
          zoom,
        },
      }"
      width="100%"
      height="100%"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />

      <template v-if="markers.length">
        <yandex-map-marker
          v-for="(coords, idx) in markers"
          :key="`${coords[0]}-${coords[1]}-${idx}`"
          position="top left-center"
          :settings="{ coordinates: coords }"
        >
          <div class="map-about__marker">
            <img
              v-if="iconUrl"
              :src="iconUrl"
              alt=""
              class="map-about__marker-icon"
            >
            <svg
              v-else
              class="map-about__marker-pin"
              width="32"
              height="42"
              viewBox="0 0 32 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z"
                fill="#3D558F"
              />
              <circle cx="16" cy="16" r="6" fill="#fff" />
            </svg>
          </div>
        </yandex-map-marker>
      </template>

      <yandex-map-default-marker
        v-else
        :settings="{ coordinates: center }"
      />
    </yandex-map>

    <template #fallback>
      <div class="map-about map-about--fallback" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapMarker,
} from 'vue-yandex-maps'

const props = defineProps({
  mapData: {
    type: Object,
    default: () => ({}),
  },
})

const map = shallowRef<null | YMap>(null)

const center = computed(() => {
  const value = props.mapData?.center
  if (!Array.isArray(value) || value.length < 2) return null
  const lng = Number(value[0])
  const lat = Number(value[1])
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null
  return [lng, lat] as [number, number]
})

const zoom = computed(() => {
  const value = Number(props.mapData?.zoom)
  return Number.isFinite(value) && value >= 1 && value <= 20 ? value : 13
})

const iconUrl = computed(() => props.mapData?.iconUrl || '')

const markers = computed(() => {
  const list = Array.isArray(props.mapData?.markers) ? props.mapData.markers : []
  return list
    .map((item: unknown) => {
      if (!Array.isArray(item) || item.length < 2) return null
      const lng = Number(item[0])
      const lat = Number(item[1])
      if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null
      return [lng, lat] as [number, number]
    })
    .filter(Boolean)
})
</script>

<style scoped>
.map-about {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.map-about--fallback {
  background: #e8edf5;
}

.map-about__marker {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 1px;
  height: 1px;

}

.map-about__marker-icon {
  display: block;
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0;
}

.map-about__marker-pin {
  display: block;
}
</style>
