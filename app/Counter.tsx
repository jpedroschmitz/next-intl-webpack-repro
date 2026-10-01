'use client'

import { useExtracted } from 'next-intl'

export function Counter() {
  const t = useExtracted()
  return <button>{t('Click me')}</button>
}
