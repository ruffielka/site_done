import { watch } from 'vue'
import { useRoute } from 'vue-router'

const titles = {
  '/': 'Анна Пуговкина — Психолог и массаж поющими чашами | Главная',
  '/psychology': 'Психологическая помощь | Анна Пуговкина',
  '/massage': 'Массаж поющими чашами | Анна Пуговкина',
  '/price': 'Прайс-лист | Анна Пуговкина',
  '/contacts': 'Контакты и адрес | Анна Пуговкина'
}

export function usePageTitle() {
  const route = useRoute()

  watch(
    () => route.path,
    (path) => {
      document.title = titles[path] || titles['/']
    },
    { immediate: true }
  )
}