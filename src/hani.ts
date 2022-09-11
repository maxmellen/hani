import txt from './wiki.txt?raw'

export type Hani = Record<'trad' | 'simp' | 'shin', string>
export const hani: Hani[] = txt
  .split('\n')
  .slice(1, -1)
  .map((line) => line.split(''))
  .map(([trad, simp, shin]) => ({ trad, simp, shin }))
