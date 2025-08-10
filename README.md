# 🚀 Михаил Кравченко - Технологичная Визитка

Современная, интерактивная визитка-портфолио, созданная с использованием передовых веб-технологий.

## ✨ Особенности

- 🎨 **Современный дизайн** - Минималистичный и элегантный интерфейс
- 🌟 **Интерактивные анимации** - Плавные переходы и эффекты
- 📱 **Полностью адаптивный** - Оптимизирован для всех устройств
- ⚡ **Высокая производительность** - Оптимизированная загрузка и рендеринг
- 🔧 **Технологичный стек** - Использование современных веб-стандартов
- 🎯 **SEO-оптимизация** - Структурированные данные и мета-теги

## 🛠 Технологии

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Анимации**: CSS Animations, Intersection Observer API
- **Частицы**: Particles.js
- **Шрифты**: Inter, JetBrains Mono
- **Иконки**: Font Awesome 6
- **Сборка**: Jekyll 4.3
- **Хостинг**: GitHub Pages

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий**

   ```bash
   git clone https://github.com/MikhailKravchenko/mikhailkravchenko.github.io.git
   cd mikhailkravchenko.github.io
   ```

2. **Установите зависимости**

   ```bash
   bundle install
   ```

3. **Запустите локальный сервер**

   ```bash
   bundle exec jekyll serve
   ```

4. **Откройте в браузере**
   ```
   http://localhost:4000
   ```

### Деплой на GitHub Pages

1. **Настройте GitHub Pages** в настройках репозитория
2. **Выберите ветку** `main` или `master`
3. **Настройте GitHub Actions** (автоматически при пуше)
4. **Сайт будет доступен** по адресу: `https://mikhailkravchenko.github.io`

## 📁 Структура проекта

```
mikhailkravchenko.github.io/
├── _config.yml              # Конфигурация Jekyll
├── index.md                 # Главная страница
├── assets/                  # Статические ресурсы
│   ├── css/                # Стили
│   │   └── style.css       # Дополнительные стили
│   └── js/                 # JavaScript
│       └── main.js         # Основная логика
├── _includes/               # Включаемые шаблоны
│   └── head.html           # Мета-теги и SEO
├── .github/                 # GitHub настройки
│   └── workflows/          # GitHub Actions
│       └── deploy.yml      # Автоматический деплой
├── Gemfile                  # Ruby зависимости
└── README.md               # Документация
```

## 🎨 Кастомизация

### Цветовая схема

Измените переменные CSS в `assets/css/style.css`:

```css
:root {
  --primary: #00d4ff; /* Основной цвет */
  --secondary: #0099cc; /* Вторичный цвет */
  --accent: #ff6b6b; /* Акцентный цвет */
  --dark: #0a0a0a; /* Темный фон */
  --text: #e0e0e0; /* Основной текст */
}
```

### Контент

Отредактируйте `index.md` для изменения:

- Личной информации
- Технологического стека
- Опыта работы
- Проектов
- Контактных данных

### Анимации

Настройте анимации в `assets/js/main.js`:

- Скорость частиц
- Эффекты прокрутки
- Интерактивность элементов

## 🔧 Настройка

### Jekyll плагины

В `_config.yml` настроены плагины:

- `jekyll-feed` - RSS лента
- `jekyll-seo-tag` - SEO оптимизация
- `jekyll-sitemap` - Карта сайта

### GitHub Actions

Автоматический деплой настроен в `.github/workflows/deploy.yml`:

- Сборка при каждом пуше
- Автоматический деплой на GitHub Pages
- Кэширование зависимостей

## 📱 Адаптивность

Сайт оптимизирован для:

- 🖥️ **Desktop** (1200px+)
- 💻 **Laptop** (768px - 1199px)
- 📱 **Mobile** (320px - 767px)
- 📱 **Small Mobile** (< 320px)

## 🚀 Производительность

- **Lazy Loading** - Отложенная загрузка изображений
- **CSS Optimization** - Минимизированные стили
- **JavaScript Optimization** - Оптимизированный код
- **Image Optimization** - Оптимизированные изображения
- **CDN** - Использование CDN для внешних ресурсов

## 🔍 SEO

- **Meta Tags** - Полная SEO оптимизация
- **Open Graph** - Социальные сети
- **Structured Data** - Структурированные данные
- **Sitemap** - Автоматическая генерация карты сайта
- **Canonical URLs** - Правильные ссылки

## 📊 Аналитика

Для добавления аналитики добавьте в `_includes/head.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🤝 Вклад в проект

1. **Fork** репозитория
2. **Создайте ветку** для новой функции
3. **Сделайте коммит** изменений
4. **Отправьте Pull Request**

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 📞 Контакты

- **GitHub**: [@MikhailKravchenko](https://github.com/MikhailKravchenko)
- **Email**: pirog11@ya.ru
- **Telegram**: @pirog

---

⭐ **Если проект понравился, поставьте звездочку!** ⭐
