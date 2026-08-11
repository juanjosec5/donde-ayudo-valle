export function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime()
  const minute = 60_000
  const hour = 60 * minute
  const day = 24 * hour

  if (diffMs < hour) {
    const mins = Math.max(1, Math.round(diffMs / minute))
    return `hace ${mins} minuto${mins === 1 ? '' : 's'}`
  }
  if (diffMs < day) {
    const hours = Math.round(diffMs / hour)
    return `hace ${hours} hora${hours === 1 ? '' : 's'}`
  }
  const days = Math.round(diffMs / day)
  return `hace ${days} día${days === 1 ? '' : 's'}`
}

export function esDatoVencido(iso: string, horasLimite = 48): boolean {
  const diffMs = Date.now() - new Date(iso).getTime()
  return diffMs > horasLimite * 60 * 60 * 1000
}
