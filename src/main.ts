import { el, q } from './dom'
import { hani, Hani } from './hani'

const main = q('main')!
const table = el('table')
const thead = el('thead')
const tbody = el('tbody')

const row = ({ trad, simp, shin }: Hani) => {
  const tr = el('tr')
  tbody.append(tr)
  ;[
    { lang: 'zh-Hans', label: simp },
    { lang: 'zh-Hant', label: trad },
    { lang: 'ja-Japn', label: shin },
  ].forEach(({ lang, label }) => {
    const td = el('td')
    tr.append(td)
    td.lang = lang

    if (label !== '　') {
      td.textContent = label
    } else {
      td.style.opacity = '.67'
      td.textContent = trad
    }
  })

  return tr
}

main.append(table)
table.append(thead)
table.append(tbody)

thead.append(row({ trad: '正', simp: '简', shin: '日' }))

hani
  .sort(() => Math.random() - 0.5)
  .forEach((han) => {
    tbody.append(row(han))
  })
