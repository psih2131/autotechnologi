export function useRequestForm() {
  const modalStore = useModalStore()
  const route = useRoute()

  const name = ref('')
  const phone = ref('')
  const agreed = ref(false)
  const loading = ref(false)

  const canSubmit = computed(() =>
    Boolean(name.value.trim())
    && isRuPhoneComplete(phone.value)
    && agreed.value
    && !loading.value,
  )

  function onPhoneInput(event) {
    const formatted = formatRuPhone(event.target.value)
    phone.value = formatted
    // Если значение не изменилось (ввели букву), Vue не обновит DOM — сбрасываем вручную
    event.target.value = formatted
  }

  function onPhoneKeypress(event) {
    // Разрешаем только цифры и служебные клавиши
    if (event.ctrlKey || event.metaKey || event.altKey) return
    if (event.key.length > 1) return
    if (!/\d/.test(event.key)) {
      event.preventDefault()
    }
  }

  function reset() {
    name.value = ''
    phone.value = ''
    agreed.value = false
  }

  async function submit() {
    if (!canSubmit.value) return false

    loading.value = true

    try {
      const pageUrl = import.meta.client
        ? window.location.href
        : route.fullPath

      await $fetch('/api/forms', {
        method: 'POST',
        body: {
          name: name.value.trim(),
          phone: phone.value.trim(),
          page_request: pageUrl,
        },
      })

      reset()
      modalStore.open('success')
      return true
    } catch {
      modalStore.open('error')
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    name,
    phone,
    agreed,
    loading,
    canSubmit,
    onPhoneInput,
    onPhoneKeypress,
    submit,
    reset,
  }
}
