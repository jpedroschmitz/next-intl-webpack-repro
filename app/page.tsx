import { useExtracted } from 'next-intl'

import { Counter } from './Counter'

export default function Page() {
  const t = useExtracted()
  return (
    <main>
      <h1>{t('Hello world')}</h1>
      <Counter />
    </main>
  )
}
