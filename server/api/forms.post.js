export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = String(body?.name || '').trim()
  const phone = String(body?.phone || '').trim()
  const pageRequest = String(body?.page_request || body?.pageUrl || '').trim()

  if (!name || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Укажите имя и телефон',
    })
  }

  const digits = phone.replace(/\D/g, '')
  if (digits.length !== 11 || digits[0] !== '7') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Некорректный номер телефона',
    })
  }

  const config = useRuntimeConfig()
  const headers = {
    'Content-Type': 'application/json',
  }

  if (config.strapiToken) {
    headers.Authorization = `Bearer ${config.strapiToken}`
  }

  try {
    const response = await $fetch(`${config.public.apiUrl}/api/forms`, {
      method: 'POST',
      headers,
      body: {
        data: {
          name,
          phone,
          page_request: pageRequest,
        },
      },
    })

    return {
      success: true,
      data: response?.data ?? null,
    }
  } catch (error) {
    const statusCode = error?.statusCode || error?.response?.status || 500
    throw createError({
      statusCode,
      statusMessage: 'Не удалось отправить заявку',
    })
  }
})
