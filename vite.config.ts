import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// Адрес, на котором лежит сайт:
//   "/"             — свой домен yurabarinov.ru (по умолчанию)
//   "/BarinovFull/" — временный адрес GitHub Pages (jura1223.github.io/BarinovFull/)
// Задаётся переменной VITE_BASE_PATH при сборке (см. .github/workflows/deploy.yml).
function normalizeBase(raw: string | undefined) {
  let b = (raw ?? '/').trim()
  if (!b.startsWith('/')) b = '/' + b
  if (!b.endsWith('/')) b += '/'
  return b
}
const base = normalizeBase(process.env.VITE_BASE_PATH)

// В коде сайта пути к картинкам и аудио записаны как "/images/..." и "/audio/...".
// Если сайт лежит не в корне, добавляем к ним префикс (на своём домене плагин ничего не делает).
function prefixPublicPaths(): Plugin {
  const re = /(["'`])\/(images|audio)\//g
  return {
    name: 'prefix-public-paths',
    enforce: 'pre',
    transform(code, id) {
      if (base === '/' || id.includes('node_modules') || !/\.(tsx?|jsx?)$/.test(id.split('?')[0])) return null
      if (!re.test(code)) return null
      re.lastIndex = 0
      return { code: code.replace(re, `$1${base}$2/`), map: null }
    },
  }
}

export default defineConfig({
  base,
  plugins: [prefixPublicPaths(), react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
