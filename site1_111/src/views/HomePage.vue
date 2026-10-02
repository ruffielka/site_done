<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { RouterLink } from 'vue-router';

let observer = null;

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-subtitle', { y: 20, duration: 0.8 })
    .from('.hero-title', { y: 30, duration: 1 }, '-=0.4')
    .from('.hero-description', { y: 20, duration: 0.8 }, '-=0.5')
    .from('.hero-buttons a', { y: 20, duration: 0.6, stagger: 0.2 }, '-=0.3');

  gsap.from('.service-card', {
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    delay: 0.5
  });

  const benefitItems = document.querySelectorAll('.benefit-item');

  if (benefitItems.length > 0) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    benefitItems.forEach((item) => {
      observer.observe(item);
    });
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <p class="hero-subtitle">Психология · Массаж поющими чашами · Опора</p>
        <h1 class="hero-title">
          Пространство<br />
          для вашей <span class="accent">внутренней силы</span>
        </h1>
        <p class="hero-description">
          Сочетание глубинной психологической работы и целительной силы тибетских чаш.
          Помогу найти внутреннюю опору, справиться с тревогой, вернуть ощущение целостности и обрести баланс.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/contacts" class="btn-primary">📍 Контакты и адрес</RouterLink>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Два пути к внутренней ясности</h2>

        <div class="services-grid">
          <RouterLink to="/psychology" class="service-card psychology clickable-card">
            <div class="service-overlay"></div>
            <div class="service-content">
              <div class="service-icon">
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <path d="M20 55C20 55 28 50 35 50"/>
                  <path d="M60 55C60 55 52 50 45 50"/>
                  <path d="M40 45C40 45 32 40 32 35C32 32 34 30 37 30C39 30 40 32 40 32C40 32 41 30 43 30C46 30 48 32 48 35C48 40 40 45 40 45Z"/>
                </svg>
              </div>
              <h3>Психологическая<br />помощь</h3>
              <div class="divider"></div>
              <p>
                Бережно работаю с эмоциями,
                тревогой, самооценкой и
                жизненными кризисами.
                Создам безопасное пространство,
                где легко быть собой.
              </p>
              <span class="service-link">Подробнее →</span>
            </div>
          </RouterLink>

          <RouterLink to="/massage" class="service-card massage clickable-card">
            <div class="service-overlay"></div>
            <div class="service-content">
              <div class="service-icon massage-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25 45C25 45 28 60 40 60C52 60 55 45 55 45"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="25"
                    y1="45"
                    x2="55"
                    y2="45"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33 39C33 39 36 35 40 35C44 35 47 39 47 39"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M31 33C31 33 35 28 40 28C45 28 49 33 49 33"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <h3>Массаж поющими<br />чашами</h3>
              <div class="divider"></div>
              <p>
                Глубокое расслабление через
                вибрации и звук. Снимаю напряжение.
                Восстанавливаю энергию.
                Возвращаю ощущение покоя
              </p>
              <span class="service-link">Подробнее →</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <h2 class="section-title">Почему выбирают меня</h2>

        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-number">01</div>
            <h4>Профессиональное образование</h4>
            <p>
              Обучаюсь на 2 ступени гештальт-терапии в МИГИП.
              Посещаю групповую и личную супервизию.
              Регулярно посещаю личную терапию.
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-number">02</div>
            <h4>Безопасное пространство</h4>
            <p>
              Полная конфиденциальность.
              Соблюдение этического кодекса.
              Поддержка без осуждения.
              Сопровождение в ваших личных процессах.
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-number">03</div>
            <h4>Опорность. Устойчивость</h4>
            <p>
              Ко мне приходят со сложными темами.
              Способна выдерживать сильные чувства разной интенсивности:
              горе, вину, стыд, страх.
              Рядом со мной можно расслабиться, поплакать и быть собой.
            </p>
          </div>

          <div class="benefit-item">
            <div class="benefit-number">04</div>
            <h4>Внимательность</h4>
            <p>
              Внимательна к человеку, к деталям, к процессу.
              Вижу нюансы и мелочи, которые важны для понимания вашей ситуации.
              Отслеживаю динамику изменений и помогаю замечать прогресс.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Готовы начать путь к себе?</h2>
        <p>Запишитесь на первую консультацию или сеанс массажа</p>
        <RouterLink to="/price" class="btn-primary">Прайс-лист</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>

:root {
  --bg-dark: #1a1a1a;
  --bg-card: #242424;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --accent: #c9a882;
  --accent-soft: #e8d5c4;
}

.home-page {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.hero-subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.accent {
  color: var(--accent);
  font-style: italic;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(201, 168, 130, 0.3);
}

.services-section {
  padding: 6rem 0;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: 0.02em;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.service-card {
  position: relative;
  min-height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  text-decoration: none;
  color: inherit;
}

.service-card.clickable-card {
  cursor: pointer;
}

.service-card:hover {
  border-color: rgba(201, 168, 130, 0.6);
  box-shadow:
    0 0 20px rgba(201, 168, 130, 0.4),
    0 0 40px rgba(201, 168, 130, 0.2),
    0 10px 30px rgba(201, 168, 130, 0.3);
  transform: translateY(-5px);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition: all 0.8s ease;
  z-index: 0;
}

.service-card.psychology::before {
  background-image: url('/images/psychology.webp');
}

.service-card.massage::before {
  background-image: url('/images/massage.webp');
}

.service-card:hover::before {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.85) 100%);
  z-index: 1;
}

.service-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem 2rem;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  padding-top: 3rem;
}

.service-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon svg {
  width: auto;
  height: 100%;
  max-width: 100%;
}

.massage-icon {
  width: 90px;
  height: 90px;
}

.massage-icon svg {
  width: auto;
  height: 100%;
  max-width: 100%;
}

.service-card:hover .service-icon {
  opacity: 1;
  transform: scale(1.05);
  color: var(--accent-soft);
}

.service-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 0.8rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  flex-shrink: 0;
}

.divider {
  width: 60px;
  height: 1px;
  background: var(--accent);
  margin: 0.8rem auto 1.2rem;
  opacity: 0.5;
  flex-shrink: 0;
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.service-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 1px solid var(--accent);
  border-radius: 50px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  transition: all 0.3s ease;
  opacity: 0.9;
  margin-top: auto;
  flex-shrink: 0;
}

.service-card:hover .service-link {
  background: var(--accent);
  color: var(--bg-dark);
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(201, 168, 130, 0.3);
}

.benefits-section {
  padding: 6rem 0;
  background: var(--bg-card);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 5rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.benefit-item {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  text-align: center;
}

.benefit-item:nth-child(1) { transition-delay: 0s; }
.benefit-item:nth-child(2) { transition-delay: 0.15s; }
.benefit-item:nth-child(3) { transition-delay: 0.3s; }
.benefit-item:nth-child(4) { transition-delay: 0.45s; }

.benefit-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.benefit-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  color: var(--text-primary);
  font-weight: 300;
  margin-bottom: 1rem;
  display: block;
}

.benefit-item h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.benefit-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

.cta-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
}

.cta-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  margin-bottom: 1rem;
}

.cta-section p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 3rem 1.25rem;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .hero-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .services-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1.25rem;
  }

  .service-card {
    min-height: auto;
    height: auto;
    padding: 2rem 1.5rem;
  }

  .service-content {
    padding: 1.5rem 0;
  }

  .service-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .massage-icon {
    width: 60px;
    height: 60px;
  }

  .service-card h3 {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }

  .divider {
    width: 40px;
    margin: 0.6rem auto 1rem;
  }

  .service-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  .service-link {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  .benefits-section {
    padding: 3rem 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0 1.25rem;
  }

  .benefit-number {
    font-size: 2.5rem;
  }

  .benefit-item h4 {
    font-size: 1.3rem;
  }

  .benefit-item p {
    font-size: 0.9rem;
  }

  .cta-section {
    padding: 3rem 0;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-section p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .btn-primary {
    width: 100%;
    max-width: 300px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}
</style>