<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateOnScroll, setupReducedMotion } from '@/utils/scrollAnimations';

import {
  Music, Heart, Moon, Zap, Leaf, Shield, Clock,
  Sparkles, Wind, HeartPulse, ChevronDown, ChevronUp
} from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const warningsList = [
  'Острые лихорадочные состояния с повышенной температурой тела',
  'Тромбофлебиты и тромбозы',
  'Аритмия',
  'Камни в почках или желчном пузыре',
  'Склонность к кровотечениям, определённые заболевания крови',
  'Гнойные процессы (любой локализации)',
  'Выраженное варикозное расширение вен',
  'Аневризма сердца и аорты',
  'Острое воспаление лимфатических или кровеносных сосудов',
  'Заболевания желудочно-кишечного тракта с наклонностью к кровотечениям',
  'Острая ишемия миокарда',
  'Хронический остеомиелит',
  'Склероз сосудов мозга',
  'Острые респираторные и вирусные заболевания'
];

const physicalResultsList = [
  'Глубокое расслабление мышц',
  'Снятие спазмов и зажимов в спине и шее',
  'Улучшение кровообращения и лимфотока',
  'Снижение болевых ощущений при остеохондрозе, мигренях',
  'Нормализация давления',
  'Ускоренное восстановление после травм',
  'Колебания стенок чаши резонируют с жидкими средами организма',
  'Облегчение болей в суставах'
];

const emotionalResultsList = [
  'Снятие стресса и тревожности',
  'Избавление от бессонницы',
  'Повышение концентрации',
  'Гармонизация работы нервной системы',
  'Эффект перезагрузки',
  'Уходит эмоциональное напряжение',
  'Ощущение лёгкости',
  'Звуковые волны замедляют ритм мозга, погружая в медитативный транс',
  'Борьба с хронической усталостью и апатией',
  'Помощь при панических атаках'
];

const energeticResultsList = [
  'Работа с энергетическими центрами (чакрами)',
  'Балансировка всего организма',
  'Сонастройка с естественными ритмами',
  'Работа с блоками и зажимами',
  'Прилив сил и энергии'
];

const showAllWarnings = ref(false);
const INITIAL_WARNINGS_COUNT = 6;

const visibleWarnings = computed(() => {
  return showAllWarnings.value
    ? warningsList
    : warningsList.slice(0, INITIAL_WARNINGS_COUNT);
});

const toggleWarnings = () => {
  showAllWarnings.value = !showAllWarnings.value;
};

const activeResult = ref(0);

const selectResult = (index) => {
  activeResult.value = index;

  const progress = document.querySelector('.results-progress');
  if (progress) {
    const targetScale = index / 2;

    gsap.to(progress, {
      scaleX: targetScale,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: true
    });
  }

  requestAnimationFrame(() => {
    const element = document.querySelector('.result-detail');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  });
};

onMounted(() => {
  const reducedMotion = setupReducedMotion();
  if (reducedMotion) return;

  gsap.from('.hero-subtitle', { y: 20, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-title', { y: 30, duration: 1, delay: 0.2, ease: 'power3.out' });
  gsap.from('.hero-description', { y: 20, duration: 0.8, delay: 0.4, ease: 'power3.out' });

  animateOnScroll('.intro-section', { y: 40 });
  animateOnScroll('.effect-card', { y: 40, stagger: 0.15 });
  animateOnScroll('.process-step', { y: 30, stagger: 0.2 });
  animateOnScroll('.warnings-section', { y: 40 });
  animateOnScroll('.suitable-item', { y: 30, stagger: 0.15 });
  animateOnScroll('.result-detail-card', { y: 40, stagger: 0.2 });
  animateOnScroll('.timing-card', { y: 30, stagger: 0.2 });
  animateOnScroll('.author-section', { y: 40 });
  animateOnScroll('.cta-section', { y: 30 });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<template>
  <div class="massage-page">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <p class="hero-subtitle">Звуковая терапия · Вибрационный массаж</p>
        <h1 class="hero-title">
          Массаж<br />
          <span class="accent">поющими чашами</span>
        </h1>
        <p class="hero-description">
          Древняя тибетская практика, сочетающая звуковую терапию,
          вибрационный массаж и медитацию для глубокого расслабления
          и восстановления
        </p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-icon">
            <Music :size="50" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Что такое массаж поющими чашами?</h2>
          <p class="intro-text">
            Массаж поющими чашами — это сеанс глубокого расслабления,
            при котором человек ложится, а мастер ставит металлические
            чаши на тело или проводит ими рядом. Чаши издают обволакивающие
            звуки и мягкие вибрации, которые проникают в ткани, расслабляют
            мышцы, снимают стресс и погружают в медитативное состояние.
          </p>
        </div>
      </div>
    </section>

    <section class="effects-section">
      <div class="container">
        <h2 class="section-title">Эффекты массажа</h2>
        <div class="effects-grid">
          <div class="effect-card">
            <div class="effect-icon"><Leaf :size="36" :stroke-width="1.2" /></div>
            <h3>Глубокое расслабление</h3>
            <p>Снятие стресса и тревожности, погружение в состояние покоя</p>
          </div>
          <div class="effect-card">
            <div class="effect-icon"><Moon :size="36" :stroke-width="1.2" /></div>
            <h3>Улучшение сна</h3>
            <p>Борьба с бессонницей, более глубокий и качественный отдых</p>
          </div>
          <div class="effect-card">
            <div class="effect-icon"><Heart :size="36" :stroke-width="1.2" /></div>
            <h3>Улучшение кровообращения</h3>
            <p>Вибрации стимулируют ток крови и лимфы, снимают отёки</p>
          </div>
          <div class="effect-card">
            <div class="effect-icon"><Sparkles :size="36" :stroke-width="1.2" /></div>
            <h3>Гармонизация энергетики</h3>
            <p>Балансировка чакр и очищение энергетических блоков</p>
          </div>
          <div class="effect-card">
            <div class="effect-icon"><Zap :size="36" :stroke-width="1.2" /></div>
            <h3>Снятие мышечных зажимов</h3>
            <p>Особенно полезно при остеохондрозе и болях в спине</p>
          </div>
          <div class="effect-card">
            <div class="effect-icon"><Music :size="36" :stroke-width="1.2" /></div>
            <h3>Медитативный эффект</h3>
            <p>Погружение в состояние лёгкого транса и ясности ума</p>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="section-title">Как проходит процедура</h2>
        <div class="process-grid">
          <div class="process-step">
            <div class="step-number">01</div>
            <p class="step-title">Запрос.</p>
            <p class="step-description">
              Формулируем то, с чем будем работать. Это может быть место
              в теле, которое беспокоит (например, боль в плече, колене,
              спине), или же состояние, которое хочется обрести
              (спокойствие, уверенность, энергичность) или поменять
              (беспокойство, тревога, неуверенность).
            </p>
          </div>
          <div class="process-step">
            <div class="step-number">02</div>
            <p class="step-title">Звучание чаш.</p>
            <p class="step-description">
              Вы стоите, и я прозваниваю вас чашами относительно вашего
              запроса. В теле проявляются те или иные места, становится
              видна их связь. С этим работаю.
            </p>
          </div>
          <div class="process-step">
            <div class="step-number">03</div>
            <p class="step-title">Массаж чашами.</p>
            <p class="step-description">
              Вы ложитесь, и я вожу чашами по телу. На этом этапе часто
              происходит вход в медитативное состояние, похожее на
              пространство между сном и не-сном, и оптимизация
              энергетических процессов.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="warnings-section">
      <div class="container">
        <div class="warnings-wrapper">
          <div class="warnings-header">
            <div class="warning-shield-icon">
              <Shield :size="32" :stroke-width="1.5" />
            </div>
            <h2 class="warnings-title">Противопоказания</h2>
            <p class="warnings-subtitle">
              Массаж звуковыми тибетскими чашами противопоказан людям,
              у которых наблюдаются:
            </p>
          </div>

          <ul class="warnings-list-compact">
            <li v-for="(warning, index) in visibleWarnings" :key="index">
              <svg class="warning-triangle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>{{ warning }}</span>
            </li>
          </ul>

          <button
            v-if="warningsList.length > INITIAL_WARNINGS_COUNT"
            class="toggle-warnings-btn"
            @click="toggleWarnings"
            :aria-expanded="showAllWarnings"
          >
            <span>{{ showAllWarnings ? 'Скрыть' : 'Показать все' }}</span>
            <component :is="showAllWarnings ? ChevronUp : ChevronDown" :size="18" />
          </button>

          <div class="warning-important">
            <svg class="important-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div class="important-text">
              <strong>Важно:</strong> массаж данного вида противопоказан людям с кардиостимулятором.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="suitable-section">
      <div class="container">
        <h2 class="section-title">Кому подходит</h2>
        <div class="suitable-grid">
          <div class="suitable-item">
            <div class="suitable-icon"><Wind :size="40" :stroke-width="1.2" /></div>
            <p>Людям с высоким уровнем стресса</p>
          </div>
          <div class="suitable-item">
            <div class="suitable-icon"><Moon :size="40" :stroke-width="1.2" /></div>
            <p>Тем, кто страдает бессонницей или хронической усталостью</p>
          </div>
          <div class="suitable-item">
            <div class="suitable-icon"><HeartPulse :size="40" :stroke-width="1.2" /></div>
            <p>При воспалениях или после травм (как вспомогательный метод)</p>
          </div>
          <div class="suitable-item">
            <div class="suitable-icon"><Sparkles :size="40" :stroke-width="1.2" /></div>
            <p>Поклонникам духовных и энергетических практик</p>
          </div>
        </div>
      </div>
    </section>

    <section class="results-section">
      <div class="container">
        <h2 class="section-title">Результаты после сеанса</h2>
        <p class="results-subtitle">Выберите уровень, чтобы узнать подробнее</p>

        <div class="results-timeline">
          <div class="results-line">
            <div class="results-progress"></div>
          </div>

          <div class="results-nodes">
            <button class="result-node" :class="{ active: activeResult === 0 }" @click="selectResult(0)" aria-label="Физический уровень">
              <div class="result-node-circle">
                <Heart :size="34" :stroke-width="1.3" />
              </div>
              <span class="result-node-title">Физический уровень</span>
            </button>

            <button class="result-node" :class="{ active: activeResult === 1 }" @click="selectResult(1)" aria-label="Ментальный и эмоциональный уровень">
              <div class="result-node-circle">
                <Sparkles :size="34" :stroke-width="1.3" />
              </div>
              <span class="result-node-title">Ментальный и эмоциональный уровень</span>
            </button>

            <button class="result-node" :class="{ active: activeResult === 2 }" @click="selectResult(2)" aria-label="Энергетический уровень">
              <div class="result-node-circle">
                <Zap :size="34" :stroke-width="1.3" />
              </div>
              <span class="result-node-title">Энергетический уровень</span>
            </button>
          </div>
        </div>

        <div class="result-detail">
          <transition name="result-fade" mode="out-in">
            <div v-if="activeResult === 0" key="physical" class="result-detail-card physical-detail">
              <div class="result-detail-header">
                <div class="result-detail-icon"><Heart :size="30" :stroke-width="1.2" /></div>
                <div>
                  <span class="result-detail-number">01</span>
                  <h3>Физический уровень</h3>
                </div>
              </div>
              <ul class="result-detail-list">
                <li v-for="(result, index) in physicalResultsList" :key="index">
                  <span class="result-bullet">✦</span>
                  <span>{{ result }}</span>
                </li>
              </ul>
            </div>

            <div v-else-if="activeResult === 1" key="emotional" class="result-detail-card emotional-detail">
              <div class="result-detail-header">
                <div class="result-detail-icon"><Sparkles :size="30" :stroke-width="1.2" /></div>
                <div>
                  <span class="result-detail-number">02</span>
                  <h3>Ментальный и эмоциональный уровень</h3>
                </div>
              </div>
              <ul class="result-detail-list">
                <li v-for="(result, index) in emotionalResultsList" :key="index">
                  <span class="result-bullet">✦</span>
                  <span>{{ result }}</span>
                </li>
              </ul>
            </div>

            <div v-else key="energetic" class="result-detail-card energetic-detail">
              <div class="result-detail-header">
                <div class="result-detail-icon"><Zap :size="30" :stroke-width="1.2" /></div>
                <div>
                  <span class="result-detail-number">03</span>
                  <h3>Энергетический уровень</h3>
                </div>
              </div>
              <ul class="result-detail-list">
                <li v-for="(result, index) in energeticResultsList" :key="index">
                  <span class="result-bullet">✦</span>
                  <span>{{ result }}</span>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="timing-section">
      <div class="container">
        <h2 class="section-title">Как быстро появляется эффект?</h2>
        <div class="timing-grid">
          <div class="timing-card">
            <div class="timing-icon"><Clock :size="32" :stroke-width="1.2" /></div>
            <h3>Сразу после сеанса</h3>
            <p>Глубокое расслабление, лёгкость в теле, ясность ума</p>
          </div>
          <div class="timing-card">
            <div class="timing-icon"><Leaf :size="32" :stroke-width="1.2" /></div>
            <h3>После курса 5–10 сеансов</h3>
            <p>Стойкое улучшение сна, уменьшение хронических болей, снижение уровня стресса</p>
          </div>
        </div>
      </div>
    </section>

    <section class="author-section">
      <div class="container">
        <div class="author-content">
          <div class="author-header">
            <div class="author-icon author-photo">
              <img src="/images/me.webp" alt="Анна Пуговкина" loading="lazy"/>
            </div>
            <h2 class="section-title">Обо мне</h2>
          </div>

          <p class="author-name-intro">Меня зовут Анюта Пуговкина.</p>

          <div class="author-story">
            <p>
              В 2019 году я побывала в Камбодже на углублённом курсе Цигун.
              После года интенсивных тренировок в Питере я поехала к мастеру
              моего мастера в Камбоджу. Это был 10-дневный тур с 8-часовой
              ежедневной практикой Цигуна, от франко-камбоджийца Бруно
              с опытом преподавания более 30 лет. Это была мощная прокачка
              и физики, и энергетики.
            </p>
            <p>
              Там я впервые познакомилась с гонгами и влюбилась.
              Влюбилась в звучание и вибрацию, которая от них исходила.
              Эту любовь я привезла обратно в Питер.
            </p>
            <p>
              И уже тут по возвращению купила поющие чаши из желания звуком
              работать со своим телом. Тогда меня интересовало горло.
              Но почти мистическим образом я начала делать массаж поющими
              чашами другим людям исходя из внутреннего интуитивного знания.
            </p>
            <p class="final-paragraph">
              Духовные поиски и исследование собственных пределов интересовали
              меня всегда. И сейчас вдобавок к эзотерической части добавилась
              и психологическая. Но это уже отдельная глава моей жизни.
            </p>
          </div>

          <div class="author-signature">
            <p>Запись открыта - пишите в личные сообщения.</p>
            <p class="signature-main">Буду рада тебя видеть!</p>
            <p class="signature-love">С любовью и заботой 💛</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Понравилась информация?</h2>
        <p>Вернитесь на главную страницу, чтобы увидеть все услуги</p>
        <RouterLink to="/" class="btn-secondary">← На главную</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>

.massage-page {
  --bg-dark: #1a1a1a;
  --bg-card: #242424;
  --bg-section: #1f1f1f;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --accent: #c9a882;
  --accent-soft: #e8d5c4;
  --khaki: #8b956d;
  --khaki-soft: #a8b089;
  --wood: #8b6f47;
  --wood-soft: #a0826d;
  --wood-dark: #5c4a32;

  width: 100%;
  min-height: 100%;
  overflow-x: clip;
  background: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.massage-page *,
.massage-page *::before,
.massage-page *::after {
  box-sizing: border-box;
}

.container {
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0 32px;
}

section {
  padding: 96px 0;
}

.section-title {
  margin: 0 0 48px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--text-primary);
}

.hero {
  position: relative;
  min-height: 72vh;
  min-height: 72dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 96px 0;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.88) 0%, rgba(92, 74, 50, 0.76) 50%, rgba(26, 26, 26, 0.9) 100%);
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  margin: 0 0 24px;
  color: var(--khaki-soft);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0 0 28px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(46px, 6vw, 76px);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: 0.015em;
}

.accent {
  color: var(--accent);
  font-style: italic;
}

.hero-description {
  width: min(680px, 100%);
  margin: 0 auto;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1.75;
}

.intro-section {
  background: var(--bg-dark);
}

.intro-content {
  width: min(900px, 100%);
  margin: 0 auto;
  text-align: center;
}

.intro-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--khaki);
  background: rgba(139, 149, 109, 0.1);
  border: 1px solid rgba(139, 149, 109, 0.3);
  border-radius: 50%;
}

.intro-text {
  margin: 0;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1.85;
}

.effects-section {
  background: var(--bg-section);
}

.effects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.effect-card {
  padding: 40px 28px;
  background: var(--bg-card);
  border: 1px solid transparent;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.effect-card:hover {
  border-color: var(--khaki);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.effect-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--khaki);
  background: rgba(139, 149, 109, 0.08);
  border: 1px solid rgba(139, 149, 109, 0.3);
  border-radius: 50%;
}

.effect-card h3 {
  margin: 0 0 12px;
  color: var(--accent);
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
}

.effect-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.65;
}

.process-section {
  background: var(--bg-dark);
}

.process-grid {
  width: min(1000px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.process-step {
  padding: 36px 28px;
  background: var(--bg-card);
  border-radius: 16px;
  border-left: 3px solid var(--wood);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.step-number {
  margin-bottom: 24px;
  color: var(--wood);
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 1;
}

.process-step .step-title,
.process-step .step-description {
  color: var(--text-secondary);
  text-align: left;
  line-height: 1.65;
}

.process-step .step-title {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 600;
}

.process-step .step-description {
  margin: 0;
}

.warnings-section {
  background: var(--bg-dark);
  padding: 80px 0;
}

.warnings-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-card);
  border-radius: 24px;
  padding: 48px 40px;
  border: 1px solid rgba(201, 168, 130, 0.15);
}

.warnings-header {
  text-align: center;
  margin-bottom: 40px;
}

.warning-shield-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wood);
  background: rgba(139, 111, 71, 0.1);
  border: 1px solid rgba(139, 111, 71, 0.3);
  border-radius: 50%;
}

.warnings-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.warnings-subtitle {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
  font-style: italic;
}

.warnings-list-compact {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.warnings-list-compact li {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 0;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.warnings-list-compact li:last-child {
  border-bottom: none;
}

.warning-triangle {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  color: var(--wood);
  margin-top: 2px;
}

.warning-important {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(139, 111, 71, 0.08);
  border: 1px solid rgba(139, 111, 71, 0.25);
  border-radius: 12px;
}

.important-icon {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  color: var(--wood);
}

.important-text {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.5;
}

.important-text strong {
  color: var(--wood);
  font-weight: 600;
}

.toggle-warnings-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto 32px;
  padding: 12px 24px;
  color: var(--text-secondary);
  background: rgba(139, 111, 71, 0.08);
  border: 1px solid rgba(139, 111, 71, 0.25);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-warnings-btn:hover {
  background: rgba(139, 111, 71, 0.15);
  border-color: var(--wood);
  color: var(--text-primary);
}

.toggle-warnings-btn svg {
  transition: transform 0.3s ease;
}

.suitable-section {
  background: var(--bg-dark);
}

.suitable-grid {
  width: min(1000px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.suitable-item {
  padding: 36px 24px;
  background: var(--bg-card);
  border: 1px solid rgba(139, 149, 109, 0.2);
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.suitable-item:hover {
  border-color: var(--khaki);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.suitable-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--khaki);
  background: rgba(139, 149, 109, 0.1);
  border: 1px solid rgba(139, 149, 109, 0.3);
  border-radius: 50%;
}

.suitable-item p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.6;
}

.results-section {
  position: relative;
  overflow: hidden;
  background: #000;
  padding: 120px 0 140px;
}

.results-section .section-title {
  margin-bottom: 12px;
}

.results-subtitle {
  margin: 0 auto 90px;
  color: #777;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
}

.results-timeline {
  position: relative;
  width: min(1100px, 100%);
  height: 210px;
  margin: 0 auto;
}

.results-line {
  position: absolute;
  top: 82px;
  left: 7%;
  right: 7%;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
}

.results-progress {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--accent) 0%, var(--khaki) 50%, var(--wood) 100%);
  transform-origin: left center;
  transform: scaleX(0);
}

.results-nodes {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
}

.result-node {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  color: var(--text-secondary);
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.4s ease, transform 0.4s ease;
}

.result-node-circle {
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  color: #777;
  background: #151515;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 0 8px #000;
  transition: color 0.4s ease, border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
}

.result-node-title {
  display: block;
  max-width: 230px;
  color: #777;
  font-family: 'Cormorant Garamond', serif;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  transition: color 0.4s ease;
}

.result-node.active {
  color: var(--text-primary);
}

.result-node.active .result-node-circle {
  color: var(--accent);
  background: #242424;
  border-color: var(--accent);
  box-shadow: 0 0 0 8px #000, 0 0 35px rgba(201, 168, 130, 0.18);
  transform: scale(1.08);
}

.result-node.active .result-node-title {
  color: var(--text-primary);
}

.result-node:nth-child(2).active .result-node-circle {
  color: var(--khaki);
  border-color: var(--khaki);
  box-shadow: 0 0 0 8px #000, 0 0 35px rgba(139, 149, 109, 0.18);
}

.result-node:nth-child(3).active .result-node-circle {
  color: var(--wood);
  border-color: var(--wood);
  box-shadow: 0 0 0 8px #000, 0 0 35px rgba(139, 111, 71, 0.18);
}

.result-node:focus { outline: none; }

.result-node:focus-visible .result-node-circle {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.result-node:hover .result-node-circle {
  transform: scale(1.05);
  border-color: rgba(201, 168, 130, 0.7);
}

.result-node:hover .result-node-title {
  color: #ddd;
}

.result-detail {
  width: min(850px, 100%);
  min-height: 400px;
  margin: 20px auto 0;
}

.result-detail-card {
  position: relative;
  padding: 44px 48px;
  background: #181818;
  border: 1px solid rgba(201, 168, 130, 0.18);
  border-radius: 18px;
  overflow: hidden;
}

.result-detail-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.emotional-detail::before { background: var(--khaki); }
.energetic-detail::before { background: var(--wood); }

.result-detail-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.result-detail-icon {
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: rgba(201, 168, 130, 0.08);
  border: 1px solid rgba(201, 168, 130, 0.25);
  border-radius: 50%;
}

.emotional-detail .result-detail-icon {
  color: var(--khaki);
  background: rgba(139, 149, 109, 0.08);
  border-color: rgba(139, 149, 109, 0.25);
}

.energetic-detail .result-detail-icon {
  color: var(--wood);
  background: rgba(139, 111, 71, 0.08);
  border-color: rgba(139, 111, 71, 0.25);
}

.result-detail-number {
  display: block;
  margin-bottom: 4px;
  color: #666;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
}

.result-detail-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
}

.result-detail-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
}

.result-detail-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 17px 20px 17px 0;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.6;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.result-bullet {
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 11px;
  margin-top: 4px;
}

.emotional-detail .result-bullet { color: var(--khaki); }
.energetic-detail .result-bullet { color: var(--wood); }

.result-fade-enter-active,
.result-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.result-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.result-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.timing-section {
  background: var(--bg-dark);
}

.timing-grid {
  width: min(900px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.timing-card {
  padding: 40px 28px;
  background: linear-gradient(135deg, var(--bg-card) 0%, rgba(92, 74, 50, 0.15) 100%);
  border: 1px solid rgba(139, 111, 71, 0.2);
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.timing-card:hover {
  border-color: var(--wood);
  transform: translateY(-5px);
}

.timing-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wood);
  background: rgba(139, 111, 71, 0.1);
  border: 1px solid rgba(139, 111, 71, 0.3);
  border-radius: 50%;
}

.timing-card h3 {
  margin: 0 0 16px;
  color: var(--accent);
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
}

.timing-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.65;
}

.author-section {
  background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(139, 149, 109, 0.05) 50%, var(--bg-dark) 100%);
}

.author-content {
  width: min(800px, 100%);
  margin: 0 auto;
  padding: 56px 48px;
  background: var(--bg-card);
  border: 1px solid rgba(139, 149, 109, 0.15);
  border-radius: 24px;
}

.author-header {
  margin-bottom: 40px;
  text-align: center;
}

.author-icon {
  width: 150px;
  height: 150px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 4px solid rgba(139, 149, 109, 0.4);
  border-radius: 50%;
}

.author-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.author-name-intro {
  margin: 0 0 40px;
  color: var(--accent);
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
}

.author-story {
  margin-bottom: 40px;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1.85;
}

.author-story p {
  margin: 0 0 28px;
  text-align: left;
}

.author-story p:last-child {
  margin-bottom: 0;
}

.final-paragraph {
  margin-top: 40px !important;
  padding-top: 28px;
  color: var(--khaki-soft);
  font-style: italic;
  text-align: center !important;
  border-top: 1px solid rgba(201, 168, 130, 0.15);
}

.author-signature {
  margin-top: 48px;
  padding-top: 32px;
  text-align: center;
  border-top: 1px solid rgba(201, 168, 130, 0.15);
}

.author-signature p {
  margin: 8px 0;
  color: var(--text-secondary);
  font-size: 17px;
}

.signature-main {
  margin-top: 18px !important;
  color: var(--text-primary) !important;
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px !important;
  font-weight: 400;
}

.signature-love {
  margin-top: 8px !important;
  color: var(--khaki) !important;
  font-size: 19px !important;
}

.cta-section {
  padding: 96px 0;
  text-align: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
}

.cta-section h2 {
  margin: 0 0 16px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 300;
  line-height: 1.15;
}

.cta-section p {
  margin: 0 0 36px;
  color: var(--text-secondary);
  font-size: 17px;
}

.btn-secondary {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  color: var(--khaki);
  background: transparent;
  border: 1px solid var(--khaki);
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.btn-secondary:hover {
  color: var(--bg-dark);
  background: var(--khaki);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  section { padding: 80px 0; }
  .effects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .process-grid { grid-template-columns: 1fr; max-width: 720px; }
  .suitable-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
  .container { padding: 0 20px; }
  section { padding: 64px 0; }
  .section-title { margin-bottom: 32px; font-size: clamp(32px, 9vw, 40px); line-height: 1.08; }

  .hero {
    min-height: 78vh;
    min-height: 78dvh;
    padding: max(72px, env(safe-area-inset-top) + 48px) 0 max(72px, env(safe-area-inset-bottom) + 48px);
    background-position: 58% center;
  }

  .hero-overlay {
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.88) 0%, rgba(92, 74, 50, 0.72) 50%, rgba(26, 26, 26, 0.92) 100%);
  }

  .hero-subtitle { max-width: 300px; margin: 0 auto 22px; font-size: 11px; line-height: 1.6; letter-spacing: 0.15em; }
  .hero-title { margin-bottom: 22px; font-size: clamp(42px, 13vw, 60px); line-height: 0.98; }
  .hero-description { max-width: 350px; font-size: 15px; line-height: 1.7; }

  .intro-icon { width: 76px; height: 76px; margin-bottom: 24px; }
  .intro-text { font-size: 16px; line-height: 1.75; }

  .effects-grid { grid-template-columns: 1fr; gap: 14px; }
  .effect-card { padding: 30px 22px; }
  .effect-icon { width: 62px; height: 62px; margin-bottom: 20px; }
  .effect-card h3 { font-size: 23px; }
  .effect-card p { font-size: 15px; }

  .process-grid { gap: 14px; }
  .process-step { padding: 28px 22px; }
  .step-number { margin-bottom: 18px; font-size: 42px; }
  .process-step .step-title { font-size: 16px; }
  .process-step .step-description { font-size: 15px; line-height: 1.65; }

  .suitable-grid { grid-template-columns: 1fr; gap: 14px; }
  .suitable-item { padding: 28px 22px; display: flex; align-items: center; gap: 18px; text-align: left; }
  .suitable-icon { width: 58px; height: 58px; flex: 0 0 58px; margin: 0; }
  .suitable-icon svg { width: 32px; height: 32px; }
  .suitable-item p { font-size: 15px; line-height: 1.5; }

  .results-timeline { height: 150px; }
  .results-line { top: 30px; left: 16%; right: 16%; }
  .result-node { padding: 0 4px; }

  .result-node-title {
    font-size: 17px;
    line-height: 1.2;
    max-width: 100%;
    hyphens: auto;
    overflow-wrap: break-word;
  }

  .result-node-circle {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
  }

  .result-node-circle svg {
    width: 30px;
    height: 30px;
  }

  .timing-grid { grid-template-columns: 1fr; gap: 14px; }
  .timing-card { padding: 30px 22px; }
  .timing-icon { width: 62px; height: 62px; margin-bottom: 20px; }
  .timing-card h3 { font-size: 23px; }
  .timing-card p { font-size: 15px; }

  .author-content { padding: 36px 22px; border-radius: 20px; }
  .author-header { margin-bottom: 30px; }
  .author-icon { width: 125px; height: 125px; margin-bottom: 24px; border-width: 3px; }
  .author-name-intro { margin-bottom: 30px; font-size: 29px; line-height: 1.15; }
  .author-story { margin-bottom: 30px; font-size: 15px; line-height: 1.75; }
  .author-story p { margin-bottom: 22px; text-align: left; }
  .final-paragraph { margin-top: 28px !important; padding-top: 22px; }
  .author-signature { margin-top: 34px; padding-top: 26px; }
  .author-signature p { font-size: 15px; }
  .signature-main { font-size: 24px !important; }
  .signature-love { font-size: 17px !important; }

  .cta-section { padding: 64px 0; }
  .cta-section h2 { font-size: 36px; }
  .cta-section p { max-width: 320px; margin: 0 auto; font-size: 15px; line-height: 1.6; }
  .btn-secondary { width: 100%; max-width: 300px; min-height: 54px; padding: 14px 24px; }
}

@media (max-width: 380px) {
  .container { padding: 0 16px; }
  section { padding: 52px 0; }
  .section-title { font-size: 31px; }
  .hero { min-height: 75vh; min-height: 75dvh; }
  .hero-title { font-size: 40px; }
  .hero-description { font-size: 14px; }
  .effect-card, .process-step, .result-detail-card, .timing-card { padding: 28px 18px; }
  .warnings-wrapper { padding: 32px 16px; }
  .author-content { padding: 30px 18px; }
  .author-name-intro { font-size: 27px; }
  .suitable-item { padding: 24px 18px; }

  .result-node-title { font-size: 15px; }
}

@media (hover: none) {
  .effect-card:hover, .process-step:hover, .suitable-item:hover, .result-detail-card:hover, .timing-card:hover {
    transform: none;
    box-shadow: none;
  }
  .btn-secondary:hover {
    transform: none;
    background: transparent;
    color: var(--khaki);
  }
}

@media (prefers-reduced-motion: reduce) {
  .effect-card, .process-step, .suitable-item, .result-detail-card, .timing-card, .btn-secondary {
    transition: none;
  }
}
</style>