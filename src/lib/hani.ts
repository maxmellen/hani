import txt from './hani.txt?raw'

export type Hani = Record<'trad' | 'simp' | 'shin', string>
export const hani: Hani[] = txt
  .split('\n')
  .filter((line) => !line.startsWith('#') && line.length >= 3)
  .map((line) => line.slice(0, 3).split(''))
  .map(([trad, simp, shin]) => ({ trad, simp, shin } as Hani))
