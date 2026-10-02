<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import { Phone, MapPin, Mail, Clock } from 'lucide-vue-next';

const mapContainer = ref(null);

const contacts = {
  phone: '+7 (905) 271-63-49',
  phoneLink: 'tel:+79052716349',
  email: 'madam.pugovckina@yandex.ru',
  address: 'Санкт-Петербург, ул. Гатчинская, д. 1, кв. 11',
  workHours: 'По предварительной записи',
  socials: {
    whatsapp: 'https://wa.me/message/N4CTIQ536NDWE1',
    telegram: 'https://t.me/AprilGirl08',
    instagram: 'https://www.instagram.com/anyuta_pugowkina?igsh=MzU0bXM4bHA5dHNy'
  }
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.contact-title', { y: 30, duration: 0.8 })
    .from('.contact-subtitle', { y: 20, duration: 0.8 }, '-=0.6')
    .from('.contact-info', { y: 30, duration: 0.8, stagger: 0.2 }, '-=0.6')
    .from('.social-section', { y: 30, duration: 0.8 }, '-=0.6')
    .from('.map-section', { y: 30, duration: 0.8 }, '-=0.6')
    .from('.back-section', { y: 30, duration: 0.8 }, '-=0.6');

  initYandexMap();
});

const loadYmaps = () => new Promise((resolve, reject) => {
  if (window.ymaps) return resolve(window.ymaps);
  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  script.onload = () => resolve(window.ymaps);
  script.onerror = reject;
  document.head.appendChild(script);
});

const initYandexMap = async () => {
  try {
    const ymaps = await loadYmaps();
    ymaps.ready(() => {
      if (!mapContainer.value) return;
      const map = new ymaps.Map(mapContainer.value, {
        center: [59.960899, 30.303444],
        zoom: 16,
        controls: ['zoomControl']
      });
      map.geoObjects.add(new ymaps.Placemark(
        [59.960899, 30.303444],
        {
          hintContent: 'Кабинет на Петроградке',
          balloonContent: 'ул. Гатчинская, д. 1, кв. 11<br/>Лестница N3, во дворе направо по диагонали в дальний угол'
        },
        { preset: 'islands#brownIcon' }
      ));
    });
  } catch {}
};
</script>

<template>
  <div class="contacts-page">
    <div class="container">
      <h1 class="contact-title">Контакты</h1>
      <p class="contact-subtitle">Свяжитесь со мной удобным способом</p>

      <div class="contact-info-grid">
        <div class="contact-info">
          <div class="contact-icon">
            <Phone :size="26" :stroke-width="1.5" />
          </div>
          <h3>Телефон</h3>
          <a :href="contacts.phoneLink" class="contact-link">{{ contacts.phone }}</a>
        </div>

        <div class="contact-info">
          <div class="contact-icon">
            <Clock :size="26" :stroke-width="1.5" />
          </div>
          <h3>Время работы</h3>
          <p class="contact-text work-hours">{{ contacts.workHours }}</p>
        </div>

        <div class="contact-info">
          <div class="contact-icon">
            <MapPin :size="26" :stroke-width="1.5" />
          </div>
          <h3>Адрес кабинета</h3>
          <p class="contact-text">{{ contacts.address }}</p>
        </div>

        <div class="contact-info">
          <div class="contact-icon">
            <Mail :size="26" :stroke-width="1.5" />
          </div>
          <h3>Email</h3>
          <a :href="'mailto:' + contacts.email" class="contact-link email-link">
            <span class="email-part">madam.pugovckina</span>
            <span class="email-part">@yandex.ru</span>
          </a>
          <p class="contact-note">Отвечаю в течение дня</p>
        </div>
      </div>

      <div class="social-section">
        <h3>Или напишите мне</h3>
        <div class="social-links">
          <div class="social-item">
            <span class="social-label">WhatsApp</span>
            <a
              :href="contacts.socials.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-link whatsapp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          <div class="social-item">
            <span class="social-label">Telegram</span>
            <a
              :href="contacts.socials.telegram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-link telegram"
              aria-label="Telegram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>

          <div class="social-item">
            <span class="social-label">Instagram</span>
            <a
              :href="contacts.socials.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-link instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="map-section">
        <h2 class="map-title">Как добраться</h2>
        <p class="map-description">
          Кабинет находится на Петроградской стороне.
          Уютное пространство для ваших сессий.
        </p>
        <div ref="mapContainer" class="map-container"></div>
        <div class="address-hint">
          <p><strong>ул. Гатчинская, д. 1, кв. 11</strong></p>
          <p>Лестница N3, во дворе направо по диагонали в дальний угол</p>
        </div>
      </div>

      <div class="back-section">
        <h2>Хотите узнать больше?</h2>
        <p>Вернитесь на главную страницу, чтобы увидеть все услуги</p>
        <RouterLink to="/" class="btn-back">
          <span class="btn-icon">←</span>
          <span>На главную</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.contacts-page {
  --bg-dark: #1a1a1a;
  --bg-card: #242424;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --accent: #c9a882;
  --accent-soft: #e8d5c4;

  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.contact-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 4rem;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contact-info {
  background: var(--bg-card);
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.contact-info:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.contact-icon {
  width: 55px;
  height: 55px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: rgba(201, 168, 130, 0.08);
  border: 1px solid rgba(201, 168, 130, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.contact-info:hover .contact-icon {
  background: rgba(201, 168, 130, 0.15);
  transform: scale(1.05);
}

.contact-icon svg {
  width: 26px;
  height: 26px;
}

.contact-info h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--accent);
}

.contact-link {
  display: block;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  word-break: break-all;
  line-height: 1.4;
}

.contact-link:hover {
  color: var(--accent);
}

.contact-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.contact-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.8;
}

.work-hours {
  white-space: pre-line;
}

.email-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.email-part {
  display: block;
  text-align: center;
  line-height: 1.4;
}

.social-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: var(--bg-card);
  border-radius: 15px;
}

.social-section h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  color: var(--text-primary);
}

.social-links {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.social-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon-link svg {
  width: 28px;
  height: 28px;
}

.social-icon-link.whatsapp {
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.4);
  color: #25D366;
}

.social-icon-link.whatsapp:hover {
  background: rgba(37, 211, 102, 0.2);
  border-color: #25D366;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 25px rgba(37, 211, 102, 0.5), 0 10px 30px rgba(37, 211, 102, 0.3);
}

.social-icon-link.telegram {
  background: rgba(34, 158, 217, 0.1);
  border: 1px solid rgba(34, 158, 217, 0.4);
  color: #229ED9;
}

.social-icon-link.telegram:hover {
  background: rgba(34, 158, 217, 0.2);
  border-color: #229ED9;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 25px rgba(34, 158, 217, 0.5), 0 10px 30px rgba(34, 158, 217, 0.3);
}

.social-icon-link.instagram {
  background: linear-gradient(135deg, rgba(240, 148, 51, 0.1) 0%, rgba(220, 39, 67, 0.1) 50%, rgba(188, 24, 136, 0.1) 100%);
  border: 1px solid rgba(220, 39, 67, 0.4);
  color: #E1306C;
}

.social-icon-link.instagram:hover {
  background: linear-gradient(135deg, rgba(240, 148, 51, 0.25) 0%, rgba(220, 39, 67, 0.25) 50%, rgba(188, 24, 136, 0.25) 100%);
  border-color: #E1306C;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 25px rgba(220, 39, 67, 0.5), 0 10px 30px rgba(220, 39, 67, 0.3);
}

.map-section {
  margin-bottom: 4rem;
  text-align: center;
}

.map-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
}

.map-description {
  color: var(--text-secondary);
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(201, 168, 130, 0.2);
  margin-bottom: 1.5rem;
}

.address-hint {
  background: var(--bg-card);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(201, 168, 130, 0.2);
  display: inline-block;
}

.address-hint p {
  color: var(--text-secondary);
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.address-hint strong {
  color: var(--accent);
  font-weight: 500;
  font-size: 1.05rem;
}

.back-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%);
  border-radius: 20px;
  border: 1px solid rgba(201, 168, 130, 0.2);
}

.back-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 300;
  margin-bottom: 1rem;
}

.back-section p {
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  position: relative;
  overflow: hidden;
}

.btn-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  transition: left 0.3s ease;
  z-index: 0;
}

.btn-back:hover::before {
  left: 0;
}

.btn-back span {
  position: relative;
  z-index: 1;
}

.btn-back:hover {
  color: var(--bg-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(201, 168, 130, 0.3);
}

.btn-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.btn-back:hover .btn-icon {
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .contacts-page {
    padding: 2rem 0;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 350px;
  }

  .social-links {
    gap: 2rem;
  }
}
</style>