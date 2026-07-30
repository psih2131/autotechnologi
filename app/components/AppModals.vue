<template>
  <Teleport to="body">
    <Transition name="modals">
      <div
        v-if="modalStore.isOpen"
        class="modals"
        @click.self="modalStore.close()"
      >
        <ModalRequest v-if="modalStore.active === 'request'" />
        <ModalSuccess v-else-if="modalStore.active === 'success'" />
        <ModalError v-else-if="modalStore.active === 'error'" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import ModalRequest from '~/components/modals/ModalRequest.vue'
import ModalSuccess from '~/components/modals/ModalSuccess.vue'
import ModalError from '~/components/modals/ModalError.vue'

const modalStore = useModalStore()

function onKeydown(event) {
  if (event.key === 'Escape') modalStore.close()
}

watch(
  () => modalStore.isOpen,
  (isOpen) => {
    if (!import.meta.client) return
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      document.addEventListener('keydown', onKeydown)
    } else {
      document.removeEventListener('keydown', onKeydown)
    }
  },
)

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>
