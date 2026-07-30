export function formatRuPhone(value) {
  let digits = String(value || '').replace(/\D/g, '')

  if (!digits) return ''

  if (digits[0] === '8') {
    digits = `7${digits.slice(1)}`
  }

  if (digits[0] !== '7') {
    digits = `7${digits}`
  }

  digits = digits.slice(0, 11)
  const local = digits.slice(1)

  let result = '+7'
  if (!local.length) return result

  result += ` (${local.slice(0, 3)}`
  if (local.length >= 3) result += ')'
  if (local.length > 3) result += ` ${local.slice(3, 6)}`
  if (local.length > 6) result += ` ${local.slice(6, 8)}`
  if (local.length > 8) result += ` ${local.slice(8, 10)}`

  return result
}

export function isRuPhoneComplete(value) {
  const digits = String(value || '').replace(/\D/g, '')
  return digits.length === 11 && digits[0] === '7'
}
