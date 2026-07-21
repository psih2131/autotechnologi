// Простой рендер markdown/plain-текста из Strapi richtext в безопасный HTML
export function useRichText() {
  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  return (raw) => {
    if (!raw) return ''

    // Уже HTML из редактора — отдаём как есть
    if (/<[a-z][\s\S]*>/i.test(raw)) return raw

    const blocks = String(raw).split(/\n{2,}/)
    const html = []

    for (const block of blocks) {
      const lines = block.split('\n').map((l) => l.trimEnd())
      const first = lines[0]?.trim() || ''

      if (/^###\s+/.test(first) && lines.length === 1) {
        html.push(`<h3>${escapeHtml(first.replace(/^###\s+/, ''))}</h3>`)
        continue
      }

      if (/^##\s+/.test(first) && lines.length === 1) {
        html.push(`<h2>${escapeHtml(first.replace(/^##\s+/, ''))}</h2>`)
        continue
      }

      if (/^#\s+/.test(first) && lines.length === 1) {
        html.push(`<h2>${escapeHtml(first.replace(/^#\s+/, ''))}</h2>`)
        continue
      }

      const dashLines = lines.filter((l) => /^[—–\-]\s+/.test(l.trim()))
      if (dashLines.length && dashLines.length === lines.filter(Boolean).length) {
        html.push(
          `<p class="dash-list">${dashLines
            .map((l) => escapeHtml(l.trim()))
            .join('<br>')}</p>`,
        )
        continue
      }

      html.push(`<p>${escapeHtml(lines.join('\n')).replace(/\n/g, '<br>')}</p>`)
    }

    return html.join('')
  }
}
