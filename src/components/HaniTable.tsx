import { useMemo } from 'preact/hooks'
import { hani } from '../lib/hani'

export default function HaniTable() {
  const shuffled = useMemo(() => hani.sort(() => Math.random() - 0.5), [])

  return (
    <table class="mx-auto">
      <thead class="text-2xl font-bold sm:text-4xl">
        <tr>
          <th
            class="py-3 pl-6 pr-3 border-b-2 border-slate-700 dark:border-slate-200 sm:py-6 sm:pl-12 sm:pr-6"
            lang="zh-Hans"
          >
            陆简
          </th>
          <th
            class="py-3 pl-3 pr-3 border-b-2 border-slate-700 dark:border-slate-200 sm:py-6 sm:pl-6 sm:pr-6"
            lang="zh-Hant"
          >
            臺正
          </th>
          <th
            class="py-3 pl-3 pr-6 border-b-2 border-slate-700 dark:border-slate-200 sm:py-6 sm:pl-6 sm:pr-12"
            lang="ja"
          >
            日新
          </th>
        </tr>
      </thead>
      <tbody class="text-7xl sm:text-9xl">
        {shuffled.map(({ simp, trad, shin }) => (
          <tr>
            <td
              class="py-6 pl-6 pr-3 border-b border-slate-400 sm:py-12 sm:pl-12 sm:pr-6"
              lang="zh-Hans"
            >
              {simp}
            </td>
            <td
              class="py-6 pl-3 pr-3 border-b border-slate-400 sm:py-12 sm:pl-6 sm:pr-6"
              lang="zh-Hant"
            >
              {trad}
            </td>
            <td
              class="py-6 pl-3 pr-6 border-b border-slate-400 sm:py-12 sm:pl-6 sm:pr-12"
              lang="ja-Jpan"
            >
              {shin}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
