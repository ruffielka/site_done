<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { RouterLink } from 'vue-router';

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.subtitle', { y: 20, duration: 0.8 })
    .from('.title', { y: 30, duration: 1 }, '-=0.4')
    .from('.description', { y: 20, duration: 0.8 }, '-=0.5')
    .from('.case-clients-card', { y: 40, duration: 0.8 }, '-=0.3');

  gsap.from('.price-card', {
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    delay: 0.5
  });
});
</script>

<template>
  <div class="price-page">
    <section class="price-header">
      <div class="container">
        <p class="subtitle">Стоимость услуг</p>
        <h1 class="title">Прайс-лист</h1>
        <p class="description">
          Выберите подходящий формат работы.
          Все сеансы проводятся в комфортной и безопасной обстановке.
        </p>
      </div>
    </section>

    <section class="case-section">
      <div class="container">
        <div class="case-clients-card">
          <div class="case-badge">-50%</div>
          <div class="case-content">
            <h3 class="case-title">Для кейсовых клиентов</h3>
            <div class="case-price-block">
              <div class="case-price">2 000 ₽</div>
              <div class="case-price-note">за сессию</div>
            </div>
            <p class="case-description">
              Специальные условия для тех, кто готов участвовать в моей профессиональной подготовке.
            </p>
            <div class="case-features">
              <div class="case-feature">
                <span class="case-feature-icon">✓</span>
                <span>Стоимость <strong>2 000 ₽</strong> за сессию (50% скидка)</span>
              </div>
              <div class="case-feature">
                <span class="case-feature-icon">✓</span>
                <span>Цена действует на <strong>первые 20 сессий</strong></span>
              </div>
              <div class="case-feature">
                <span class="case-feature-icon">✓</span>
                <span>Минимальный пакет — <strong>10 сессий</strong></span>
              </div>
              <div class="case-feature">
                <span class="case-feature-icon">✓</span>
                <span>После 20 сессий стоимость обсуждается индивидуально</span>
              </div>
            </div>
            <div class="case-conditions">
              <h4>Условия участия:</h4>
              <ul>
                <li>Сессии записываются на аудио</li>
                <li>Запись используется для анализа моей работы и получения сертификата</li>
                <li>Полная конфиденциальность: запись нигде не публикуется и не афишируется</li>
                <li>Личность клиента не разглашается — только детали работы</li>
                <li>Доступ к записям имею только я, мой супервизор и принимающий тренер</li>
              </ul>
            </div>
            <p class="case-note">
              Это отличная возможность получить качественную психологическую помощь по сниженной стоимости.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section psychology-section">
      <div class="container">
        <h2 class="section-title">Психологическая помощь</h2>

        <div class="price-grid">
          <div class="price-card">
            <div class="card-image">
              <img src="/images/psy1.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Индивидуальная консультация</h3>
              <div class="service-price">4 000 ₽</div>
              <p class="duration">⏱ 50 минут</p>
              <ul class="features">
                <li>Личная встреча или онлайн</li>
                <li>Работа с запросом</li>
                <li>Рекомендации и техники</li>
              </ul>
            </div>
          </div>

          <div class="price-card featured">
            <div class="badge">Популярное</div>
            <div class="card-image">
              <img src="/images/psy2.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Пакет из 5 сессий</h3>
              <div class="service-price">17 500 ₽</div>
              <div class="old-price">20 000 ₽</div>
              <p class="duration">⏱ 50 минут каждая</p>
              <ul class="features">
                <li>Экономия 2 500 ₽</li>
                <li>Глубокая проработка темы</li>
                <li>Гибкий график</li>
              </ul>
            </div>
          </div>

          <div class="price-card">
            <div class="card-image">
              <img src="/images/psy3.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Пакет из 10 сессий</h3>
              <div class="service-price">32 000 ₽</div>
              <div class="old-price">40 000 ₽</div>
              <p class="duration">⏱ 50 минут каждая</p>
              <ul class="features">
                <li>Экономия 8 000 ₽</li>
                <li>Комплексная работа</li>
                <li>Приоритетная запись</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section massage-section">
      <div class="container">
        <h2 class="section-title">Массаж поющими чашами</h2>

        <div class="price-grid">
          <div class="price-card">
            <div class="card-image">
              <img src="/images/cap1.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Сеанс массажа</h3>
              <div class="service-price">4 800 ₽</div>
              <p class="duration">⏱ 60 минут</p>
              <ul class="features">
                <li>Звуковая терапия</li>
                <li>Глубокое расслабление</li>
                <li>Снятие напряжения</li>
              </ul>
            </div>
          </div>

          <div class="price-card featured">
            <div class="badge">Популярное</div>
            <div class="card-image">
              <img src="/images/cap2.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Абонемент на 3 массажа</h3>
              <div class="service-price">13 000 ₽</div>
              <div class="old-price">14 400 ₽</div>
              <p class="duration">⏱ 60 минут каждый</p>
              <ul class="features">
                <li>Экономия 1 400 ₽</li>
                <li>Действует 3 месяца</li>
                <li>Можно делиться с близкими</li>
              </ul>
            </div>
          </div>

          <div class="price-card">
            <div class="card-image">
              <img src="/images/cap3.webp" alt="" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <h3 class="service-title">Абонемент на 5 массажей</h3>
              <div class="service-price">20 000 ₽</div>
              <div class="old-price">24 000 ₽</div>
              <p class="duration">⏱ 60 минут каждый</p>
              <ul class="features">
                <li>Экономия 4 000 ₽</li>
                <li>Действует 6 месяцев</li>
                <li>Приоритетная запись</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Готовы записаться?</h2>
        <p>Свяжитесь со мной удобным способом для выбора времени</p>
        <RouterLink to="/" class="btn-primary">На главную</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>

.price-page {
  --bg-dark: #1a1a1a;
  --bg-card: #242424;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --accent: #c9a882;
  --accent-soft: #e8d5c4;

  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.price-header {
  padding: 6rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.case-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2420 50%, #1a1a1a 100%);
}

.services-section {
  padding: 6rem 0;
}

.psychology-section {
  background: linear-gradient(180deg, #1a1a1a 0%, #2d2225 50%, #1a1a1a 100%);
}

.massage-section {
  background: linear-gradient(180deg, #1a1a1a 0%, #282418 50%, #1a1a1a 100%);
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 3.5rem;
  letter-spacing: 0.02em;
  color: var(--text-primary);
}

.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.price-card {
  background: var(--bg-card);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  height: 100%;
}

.price-card:hover {
  transform: translateY(-10px);
  border-color: rgba(201, 168, 130, 0.5);
  box-shadow: 0 20px 60px rgba(201, 168, 130, 0.25);
}

.price-card.featured {
  border: 2px solid var(--accent);
  background: linear-gradient(180deg, rgba(201, 168, 130, 0.2) 0%, rgba(36, 36, 36, 0.95) 100%);
  transform: scale(1.02);
}

.price-card.featured:hover {
  transform: scale(1.02) translateY(-10px);
  box-shadow: 0 25px 70px rgba(201, 168, 130, 0.4);
}

.badge {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: var(--bg-dark);
  padding: 0.5rem 1.8rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(201, 168, 130, 0.4);
}

.card-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(26, 26, 26, 0.3) 0%, rgba(26, 26, 26, 0.9) 100%);
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.service-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
  line-height: 1.3;
  text-align: center;
}

.service-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 20px rgba(201, 168, 130, 0.3);
}

.old-price {
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-decoration: line-through;
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.duration {
  color: var(--accent);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 0.8rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.3s ease;
  text-align: center;
}

.price-card:hover .features li {
  color: var(--text-primary);
}

.features li:last-child {
  border-bottom: none;
}

.case-clients-card {
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(201, 168, 130, 0.15) 0%, rgba(36, 36, 36, 0.95) 100%);
  border-radius: 25px;
  padding: 3rem;
  border: 2px solid var(--accent);
  position: relative;
  box-shadow: 0 20px 60px rgba(201, 168, 130, 0.2);
}

.case-badge {
  position: absolute;
  top: -20px;
  right: 30px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: var(--bg-dark);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Cormorant Garamond', serif;
  box-shadow: 0 8px 25px rgba(201, 168, 130, 0.5);
  letter-spacing: 0.05em;
}

.case-content {
  text-align: center;
}

.case-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--accent);
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.case-price-block {
  margin-bottom: 1.5rem;
}

.case-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 30px rgba(201, 168, 130, 0.4);
  line-height: 1;
}

.case-price-note {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.case-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.case-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.case-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(201, 168, 130, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(201, 168, 130, 0.2);
}

.case-feature-icon {
  color: var(--accent);
  font-size: 1.3rem;
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1;
}

.case-feature span {
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.case-feature strong {
  color: var(--accent);
  font-weight: 600;
}

.case-conditions {
  background: rgba(26, 26, 26, 0.5);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  border: 1px solid rgba(201, 168, 130, 0.15);
  text-align: left;
}

.case-conditions h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--accent);
  margin-bottom: 1.2rem;
  text-align: center;
}

.case-conditions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.case-conditions li {
  padding: 0.7rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  padding-left: 1.8rem;
}

.case-conditions li:last-child {
  border-bottom: none;
}

.case-conditions li::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: var(--accent);
  font-size: 1.2rem;
  line-height: 1;
}

.case-note {
  font-size: 1rem;
  color: var(--accent-soft);
  font-style: italic;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(201, 168, 130, 0.2);
}

.cta-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
}

.cta-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 300;
  margin-bottom: 1rem;
}

.cta-section p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.btn-primary {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%);
  color: var(--bg-dark);
  font-size: 1.05rem;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(201, 168, 130, 0.4);
}

@media (max-width: 768px) {
  .price-header {
    padding: 4rem 1rem 3rem;
  }

  .case-section {
    padding: 3rem 0;
  }

  .services-section {
    padding: 4rem 0;
  }

  .price-grid {
    grid-template-columns: 1fr;
  }

  .price-card.featured {
    transform: none;
  }

  .price-card.featured:hover {
    transform: translateY(-10px);
  }

  .card-image {
    height: 200px;
  }

  .service-price {
    font-size: 2.5rem;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .case-clients-card {
    padding: 2rem 1.5rem;
  }

  .case-badge {
    top: -15px;
    right: 15px;
    padding: 0.6rem 1.5rem;
    font-size: 1.2rem;
  }

  .case-title {
    font-size: 1.8rem;
  }

  .case-price {
    font-size: 2.8rem;
  }

  .case-features {
    grid-template-columns: 1fr;
  }

  .case-conditions {
    padding: 1.5rem;
  }
}
</style>