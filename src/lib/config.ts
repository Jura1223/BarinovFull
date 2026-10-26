/**
 * Конфигурация путей для разных окружений
 * Используется для правильных путей к статическим ресурсам
 */

// Базовый путь приложения: '/BarinovFull/' для GitHub Pages, '/' для собственного домена
// Определяется автоматически из Vite или по умолчанию '/'
export const BASE_PATH = import.meta.env.BASE_URL || '/'

// Основной домен сайта (для canonical URL, OG-тегов, SEO)
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://jura1223.github.io/BarinovFull/'

// Вспомогательная функция для построения путей к статическим ресурсам
export function assetPath(path: string): string {
  // Если путь уже начинается с http:// или https://, возвращаем как есть
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  // Убираем ведущий слеш, если он есть, и добавляем BASE_PATH
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${BASE_PATH}${cleanPath}`
}
