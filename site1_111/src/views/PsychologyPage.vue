<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import {
  Heart, Brain, MessageCircle, Users, BookOpen, Sparkles,
  User, Shield, Clock, Flower2, Cloud, Coffee, Smile,
  FileText, ArrowRight, Target, Book
} from 'lucide-vue-next';

const isGestaltOpen = ref(false);
const isBenefitsOpen = ref(false);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-subtitle', { y: 20, duration: 0.8 })
    .from('.hero-title', { y: 30, duration: 1 }, '-=0.6')
    .from('.hero-description', { y: 20, duration: 0.8 }, '-=0.6')
    .from('.intro-section', { y: 40, duration: 0.8 }, '-=0.5')
    .from('.topic-card', { y: 40, duration: 0.8, stagger: 0.15 }, '-=0.5')
    .from('.gestalt-info-section', { y: 40, duration: 0.8 }, '-=0.3')
    .from('.process-step', { y: 30, duration: 0.6, stagger: 0.2 }, '-=0.4')
    .from('.principles-summary', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
    .from('.status-section', { y: 40, duration: 0.8 }, '-=0.4')
    .from('.status-card', { y: 30, duration: 0.6, stagger: 0.2 }, '-=0.6')
    .from('.contact-section', { y: 40, duration: 0.8 }, '-=0.4')
    .from('.benefits-section', { y: 40, duration: 0.8 }, '-=0.4')
    .from('.dialog-section', { y: 40, duration: 0.8 }, '-=0.4')
    .from('.author-section', { y: 40, duration: 0.8 }, '-=0.4')
    .from('.cta-section', { y: 30, duration: 0.8 }, '-=0.4');
});
</script>

<template>
  <div class="psychology-page">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <p class="hero-subtitle">Гештальт-терапия · Поддержка · Осознанность</p>
        <h1 class="hero-title">
          Психологическая<br />
          <span class="accent">помощь</span>
        </h1>
        <p class="hero-description">
          Бережное пространство, где вы можете быть собой. Помогу разобраться
          в себе, справиться с тревогой и найти внутренний баланс
        </p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-icon">
            <Heart :size="50" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Что такое психологическая помощь?</h2>
          <p class="intro-text">
            Психологическая консультация — это безопасное пространство, где вы можете
            говорить о том, что важно для вас, без осуждения и критики. Вместе мы
            исследуем ваши чувства, мысли и переживания, чтобы найти внутренние опоры и ресурс.
          </p>
        </div>
      </div>
    </section>

    <section class="topics-section">
      <div class="container">
        <h2 class="section-title">С чем я работаю</h2>
        <div class="topics-grid">
          <div class="topic-card">
            <div class="topic-icon"><Cloud :size="36" :stroke-width="1.2" /></div>
            <h3>Тревога и стресс</h3>
            <p>Постоянное беспокойство, навязчивые мысли, ощущение напряжения</p>
          </div>
          <div class="topic-card">
            <div class="topic-icon"><Smile :size="36" :stroke-width="1.2" /></div>
            <h3>Самооценка</h3>
            <p>Неуверенность в себе, самокритика, сложности с принятием себя</p>
          </div>
          <div class="topic-card">
            <div class="topic-icon"><Users :size="36" :stroke-width="1.2" /></div>
            <h3>Отношения</h3>
            <p>Сложности в общении, конфликты, созависимость, одиночество</p>
          </div>
          <div class="topic-card">
            <div class="topic-icon"><Flower2 :size="36" :stroke-width="1.2" /></div>
            <h3>Жизненные кризисы</h3>
            <p>Потеря, развод, смена работы, поиск своего пути</p>
          </div>
          <div class="topic-card">
            <div class="topic-icon"><Coffee :size="36" :stroke-width="1.2" /></div>
            <h3>Эмоциональное выгорание</h3>
            <p>Усталость, апатия, потеря интереса к жизни</p>
          </div>
          <div class="topic-card">
            <div class="topic-icon"><Sparkles :size="36" :stroke-width="1.2" /></div>
            <h3>Самопознание</h3>
            <p>Желание лучше понять себя, свои желания и ценности</p>
          </div>
        </div>
      </div>
    </section>

    <section class="gestalt-info-section">
      <div class="container">
        <div class="section-content">
          <div class="section-icon">
            <Brain :size="40" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Как работает гештальт-подход</h2>

          <div class="expandable-content" :class="{ 'is-open': isGestaltOpen }">
            <div class="gestalt-text">
              <p>
                Термин «гештальт» (от немецкого <em>Gestalt</em>) означает целостный образ или форму.
                В психологии гештальтом называют любую потребность (например, голод, желание высказаться, потребность в любви).
              </p>
              <ul class="gestalt-list">
                <li>Когда потребность возникает — гештальт <strong>открывается</strong>.</li>
                <li>Когда мы совершаем действие и удовлетворяем ее — гештальт <strong>«закрывается»</strong>, ситуация завершается, и мы можем двигаться дальше.</li>
                <li>Если потребность осталась неудовлетворенной или подавленной (например, вы хотели выразить обиду, но промолчали), гештальт остается <strong>«незакрытым»</strong>. Наше подсознание постоянно возвращается к этой незавершенной ситуации, забирая энергию и вызывая тревогу.</li>
              </ul>
              <p class="gestalt-highlight">
                Работа в гештальт-подходе заключается не в том, чтобы бесконечно копаться в детстве,
                а в том, чтобы обнаружить свои «застрявшие» эмоции и прожить их в безопасной обстановке,
                тем самым закрыв болезненные ситуации.
              </p>
            </div>
          </div>

          <button
            @click="isGestaltOpen = !isGestaltOpen"
            class="expand-btn"
            :aria-expanded="isGestaltOpen"
          >
            <span>{{ isGestaltOpen ? 'Свернуть' : 'Читать подробнее' }}</span>
            <ArrowRight
              :size="18"
              :stroke-width="2"
              class="btn-icon"
              :style="{ transform: isGestaltOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
            />
          </button>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="section-title">На чем строится работа в гештальт-подходе</h2>
        <div class="process-grid">
          <div class="process-step">
            <div class="step-icon"><Heart :size="36" :stroke-width="1.2" /></div>
            <h3>Присутствие</h3>
            <ul class="process-list">
              <li>Способность терапевта находиться «здесь и сейчас», всей своей душой и телом.</li>
              <li>Терапевт не отвлекается на мысли или телефон, а полностью разделяет момент с клиентом.</li>
              <li>Важно не прятать свои личные особенности, а осознавать их и быть настоящим.</li>
            </ul>
          </div>
          <div class="process-step">
            <div class="step-icon"><Shield :size="36" :stroke-width="1.2" /></div>
            <h3>Принятие</h3>
            <ul class="process-list">
              <li>Отказ от оценки, критики или попыток изменить клиента быстрее, чем он готов.</li>
              <li>Терапевт дает право клиенту быть любым — злым, грустным, слабым или растерянным.</li>
              <li>Без этого шага человек не сможет расслабиться и начать честно исследовать свой внутренний мир.</li>
            </ul>
          </div>
          <div class="process-step">
            <div class="step-icon"><Users :size="36" :stroke-width="1.2" /></div>
            <h3>Включенность</h3>
            <ul class="process-list">
              <li>Глубокий интерес к миру другого человека без потери связи с собой.</li>
              <li>Терапевт словно «входит» в переживания клиента, но четко чувствует свои собственные границы.</li>
              <li>Помогает уловить малейшие изменения в голосе, позе или настроении собеседника.</li>
            </ul>
          </div>
          <div class="process-step">
            <div class="step-icon"><MessageCircle :size="36" :stroke-width="1.2" /></div>
            <h3>Открытость</h3>
            <ul class="process-list">
              <li>Готовность терапевта делиться своими живыми откликами, чувствами и мыслями в ответ.</li>
              <li>Искренность без фальшивых масок профессионала.</li>
              <li>Помощь клиенту увидеть, как его поведение отражается на других людях в безопасной обстановке.</li>
            </ul>
          </div>
        </div>
        <div class="principles-summary">
          <p>
            Эти четыре принципа создают безопасное пространство, где терапевт и клиент
            встречаются как равные живые люди, что помогает клиенту лучше понять себя и исцелиться
            через настоящий контакт.
          </p>
        </div>
      </div>
    </section>

    <section class="status-section">
      <div class="container">
        <div class="status-content">
          <h2 class="section-title">Мой текущий статус и условия работы</h2>
          <div class="status-grid">
            <div class="status-card">
              <h3>Обучение и практика</h3>
              <ul class="status-list">
                <li>С 2022 года учусь в МИГИП на 2-й ступени.</li>
                <li>Сертификация в июне 2028 года.</li>
                <li>С 2026 начала личную практику и консультирование в гештальт-подходе.</li>
                <li>Посещаю регулярную личную терапию и супервизию.</li>
              </ul>
            </div>

            <div class="status-card highlight-card">
              <h3>Ищу 6 клиентов под кейс*</h3>
              <p class="highlight-text">
                Для сессий под кейс действует <strong>специальная стоимость с 50% скидкой</strong> на первые 20 сессий.
              </p>
              <p class="footnote">
                * <strong>Под кейс</strong> — значит, что моя работа с клиентом будет записываться (с вашего письменного согласия).
                В дальнейшем это станет основой моего рабочего кейса для учебы: по этим сессиям я буду делать протоколы
                и анализ долгосрочной работы (минимум 10 сессий).
              </p>
              <div class="confidentiality-note">
                <Shield :size="18" :stroke-width="1.2" />
                <span>Гарантирую полную конфиденциальность. Все записи используются исключительно в учебных целях под строгим руководством супервизора.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="section-content">
          <div class="section-icon">
            <Target :size="40" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Восстановление контакта с окружающей средой</h2>
          <p class="section-text">
            Гештальт-терапия помогает человеку восстановить его контакт с окружающей средой.
            Иными словами, основное внимание уделяется здесь осознаванию собственных потребностей
            и защитам, которые блокируют процесс их удовлетворения.
          </p>
        </div>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <div class="section-content">
          <div class="section-icon">
            <ArrowRight :size="40" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Гештальт-подход для вас, если вы хотите:</h2>

          <div class="expandable-content" :class="{ 'is-open': isBenefitsOpen }">
            <div class="benefits-list">
              <div class="benefit-item">
                <div class="benefit-icon"><Sparkles :size="24" :stroke-width="1.2" /></div>
                <p>Продвинуться к расширению осознавания себя и своего окружения</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Book :size="24" :stroke-width="1.2" /></div>
                <p>Научиться овладевать своим опытом, присваивать себе собственные переживания, нежели проецировать их на других</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Heart :size="24" :stroke-width="1.2" /></div>
                <p>Научиться осознавать свои потребности и развивать способы их удовлетворения своими силами, не ущемляя права других</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Cloud :size="24" :stroke-width="1.2" /></div>
                <p>Продвинуться к более полному контакту со своими ощущениями; научиться видеть, слышать, нюхать, пробовать на вкус, осязать.. то есть наслаждаться всеми аспектами своего бытия</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Users :size="24" :stroke-width="1.2" /></div>
                <p>Присваивать опыт собственной силы, могущества и способности к само-поддержке, уходя от «плача в жилетку» или обвинений в адрес других</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Shield :size="24" :stroke-width="1.2" /></div>
                <p>Стать чувствительным к своему окружению, хотя в то же время «носить покров доспехов» в деструктивных ситуациях</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Clock :size="24" :stroke-width="1.2" /></div>
                <p>Научиться принимать на себя ответственность за свои действия и их последствия</p>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><Smile :size="24" :stroke-width="1.2" /></div>
                <p>Чувствовать себя комфортно при осознавании собственных фантазий и их выражении</p>
              </div>
            </div>
            <p class="benefits-summary">
              В результате меньше рассеивать свою энергию, креативно интегрируя конфликтующие чувства внутри себя,
              не используя их против собственного организма и не поляризуя (расщепляя) свое поведение.
            </p>
          </div>

          <button
            @click="isBenefitsOpen = !isBenefitsOpen"
            class="expand-btn"
            :aria-expanded="isBenefitsOpen"
          >
            <span>{{ isBenefitsOpen ? 'Свернуть' : 'Читать подробнее' }}</span>
            <ArrowRight
              :size="18"
              :stroke-width="2"
              class="btn-icon"
              :style="{ transform: isBenefitsOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
            />
          </button>
        </div>
      </div>
    </section>

    <section class="dialog-section">
      <div class="container">
        <div class="section-content">
          <div class="section-icon">
            <MessageCircle :size="40" :stroke-width="1.2" />
          </div>
          <h2 class="section-title">Диалогические отношения</h2>
          <p class="section-text">
            Гештальт-терапия предлагает особую форму терапевтических отношений, называемую диалогическими.
          </p>
          <div class="dialog-content">
            <p>Это понятие может быть описано как:</p>
            <blockquote class="dialog-quote">
              «Отношение искреннего ощущения/чувствования/переживания другого человека как личности (а не как объекта),
              и желание по-настоящему «слышать» его, а не предугадывать. Более того, это желание «слышать» непроизнесенное
              и «видеть» невидимое».
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <section class="info-section">
      <div class="container">
        <h2 class="section-title">Важно знать</h2>
        <div class="info-content">
          <div class="info-icon">
            <Shield :size="40" :stroke-width="1.2" />
          </div>
          <ul class="info-list">
            <li>Полная конфиденциальность всего, что обсуждается на сессии</li>
            <li>Вы сами определяете темп и глубину работы</li>
            <li>Длительность одной сессии — 50 минут</li>
          </ul>

          <div class="pdf-download">
            <div class="pdf-icon">
              <FileText :size="32" :stroke-width="1.2" />
            </div>
            <h3>Клиентский контракт</h3>
            <p>
              Перед началом работы рекомендую ознакомиться с клиентским контрактом.
              В нём описаны важные аспекты нашей совместной работы, условия конфиденциальности и организации встреч.
            </p>
            <a href="/client-contract.pdf" class="pdf-link" target="_blank" rel="noopener noreferrer">
              <FileText :size="18" :stroke-width="1.5" />
              <span>Открыть для просмотра</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="author-section">
      <div class="container">
        <div class="author-content">
          <div class="author-header">
            <div class="author-icon author-photo">
              <img src="/images/me2.webp" alt="Анна Пуговкина" />
            </div>
            <h2 class="section-title">Обо мне</h2>
          </div>

          <div class="author-text">
            <p class="author-name">Меня зовут Анюта Пуговкина</p>

            <p>
              Гештальт-терапия — это направление, в котором я работаю. Оно помогает
              осознать свои чувства и потребности, понять, как вы взаимодействуете
              с миром, и найти более гармоничные способы быть собой.
            </p>

            <p>
              Помимо обучения, я постоянно работаю над своим профессиональным
              развитием: прохожу личную терапию, участвую в групповой терапии
              и супервизиях. Это важно для того, чтобы быть для вас надёжным
              и осознанным специалистом.
            </p>

            <p class="author-signature">
              Буду рада встретиться с вами и поддержать на вашем пути.<br />
              <span>С теплом и заботой 💜</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>Хотите узнать больше?</h2>
        <p>Вернитесь на главную страницу, чтобы увидеть все услуги</p>
        <RouterLink to="/" class="btn-secondary">← На главную</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.psychology-page {
  --bg-dark: #1a1a1a;
  --bg-card: #242424;
  --bg-section: #1f1f1f;
  --text-primary: #f5f5f5;
  --text-secondary: #b8b8b8;
  --accent: #c9a882;
  --accent-soft: #e8d5c4;
  --pastel-pink: #E8B4B8;
  --pastel-pink-soft: #F5D5D8;
  --pastel-purple: #C9B8D4;
  --pastel-purple-soft: #E0D5E8;
  --pastel-blue: #B8C9D4;
  --pastel-blue-soft: #D5E0E8;
  --pastel-lavender: #D4B8E0;

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
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #2a1f2e 0%, #1f2a2e 50%, #2e1f2a 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.7) 0%,
    rgba(201, 184, 212, 0.15) 50%,
    rgba(26, 26, 26, 0.7) 100%
  );
}

.hero .container {
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--pastel-purple);
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
  color: var(--pastel-pink);
  font-style: italic;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto;
}

section {
  padding: 6rem 0;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.02em;
  color: var(--text-primary);
}

.intro-section {
  background: var(--bg-dark);
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.intro-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-pink);
  background: rgba(232, 180, 184, 0.1);
  border: 1px solid rgba(232, 180, 184, 0.3);
  border-radius: 50%;
}

.intro-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.topics-section {
  background: var(--bg-section);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.topic-card {
  background: var(--bg-card);
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.topic-card:hover {
  border-color: var(--pastel-purple);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(201, 184, 212, 0.15);
}

.topic-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.08);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50%;
}

.topic-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: var(--pastel-pink);
}

.topic-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.expandable-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, margin 0.4s ease;
}

.expandable-content.is-open {
  max-height: 4000px;
  opacity: 1;
  margin-top: 1.5rem;
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding: 0.9rem 2rem;
  background: rgba(201, 184, 212, 0.08);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50px;
  color: var(--pastel-purple);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
}

.expand-btn:hover {
  background: rgba(201, 184, 212, 0.2);
  border-color: var(--pastel-purple);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(201, 184, 212, 0.15);
}

.expand-btn .btn-icon {
  transition: transform 0.3s ease;
}

.gestalt-info-section {
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.05) 0%, var(--bg-dark) 100%);
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background: var(--bg-card);
  padding: 3.5rem 3rem;
  border-radius: 20px;
  border: 1px solid rgba(201, 184, 212, 0.2);
}

.section-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.1);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50%;
}

.gestalt-text {
  text-align: left;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

.gestalt-text p {
  margin-bottom: 1.5rem;
}

.gestalt-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.gestalt-list li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
}

.gestalt-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--pastel-purple);
}

.gestalt-highlight {
  font-style: italic;
  color: var(--pastel-pink);
  background: rgba(232, 180, 184, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 3px solid var(--pastel-pink);
}

.process-section {
  background: var(--bg-dark);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.process-step {
  background: var(--bg-card);
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  border-top: 3px solid var(--pastel-purple);
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(201, 184, 212, 0.15);
}

.step-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.08);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50%;
}

.process-step h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: var(--pastel-pink);
  text-align: center;
}

.process-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.process-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.process-list li:last-child {
  margin-bottom: 0;
}

.process-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--pastel-purple);
  font-size: 1.4rem;
  line-height: 1.2;
}

.principles-summary {
  max-width: 850px;
  margin: 4rem auto 0;
  text-align: center;
  padding: 2.5rem 3rem;
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.08) 0%, rgba(232, 180, 184, 0.05) 100%);
  border-radius: 15px;
  border: 1px solid rgba(201, 184, 212, 0.25);
}

.principles-summary p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--pastel-purple);
  font-style: italic;
  margin: 0;
}

.status-section {
  background: var(--bg-section);
}

.status-content {
  max-width: 1000px;
  margin: 0 auto;
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.status-card {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid rgba(201, 184, 212, 0.2);
  text-align: left;
}

.status-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: var(--pastel-pink);
  margin-bottom: 1.5rem;
  text-align: center;
}

.status-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.status-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.status-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--pastel-purple);
  font-weight: bold;
}

.highlight-card {
  background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(201, 184, 212, 0.1) 100%);
  border: 1px solid rgba(232, 180, 184, 0.4);
}

.highlight-text {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.footnote {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.confidentiality-note {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(26, 26, 26, 0.5);
  padding: 1rem;
  border-radius: 10px;
  color: var(--pastel-purple);
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-section {
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.08) 0%, rgba(26, 26, 26, 1) 100%);
}

.section-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.benefits-section {
  background: var(--bg-section);
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(201, 184, 212, 0.15);
}

.benefit-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.1);
  border-radius: 50%;
}

.benefits-summary {
  margin-top: 2.5rem;
  font-style: italic;
  color: var(--pastel-purple);
  line-height: 1.7;
  padding: 2rem;
  background: rgba(201, 184, 212, 0.05);
  border-radius: 12px;
  border-top: 1px solid rgba(201, 184, 212, 0.15);
}

.dialog-section {
  background: linear-gradient(135deg, rgba(232, 180, 184, 0.05) 0%, var(--bg-dark) 100%);
}

.dialog-content {
  margin-top: 2rem;
}

.dialog-quote {
  font-style: italic;
  color: var(--pastel-purple);
  font-size: 1.1rem;
  line-height: 1.7;
  padding: 1.5rem;
  border-left: 4px solid var(--pastel-purple);
  background: rgba(201, 184, 212, 0.05);
  border-radius: 0 10px 10px 0;
  margin: 1.5rem 0;
}

.info-section {
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.08) 0%, rgba(26, 26, 26, 1) 100%);
}

.info-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  background: var(--bg-card);
  padding: 3rem 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(201, 184, 212, 0.3);
}

.info-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.1);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50%;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  padding: 1rem 0;
  color: var(--text-secondary);
  font-size: 1.05rem;
  border-bottom: 1px solid rgba(232, 180, 184, 0.1);
  position: relative;
  padding-left: 2rem;
  text-align: left;
}

.info-list li:last-child {
  border-bottom: none;
}

.info-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--pastel-pink);
}

.pdf-download {
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(201, 184, 212, 0.2);
  text-align: center;
}

.pdf-icon {
  width: 65px;
  height: 65px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pastel-purple);
  background: rgba(201, 184, 212, 0.1);
  border: 1px solid rgba(201, 184, 212, 0.3);
  border-radius: 50%;
}

.pdf-download h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--pastel-pink);
  margin-bottom: 1rem;
}

.pdf-download p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.pdf-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.15) 0%, rgba(232, 180, 184, 0.15) 100%);
  border: 1px solid rgba(201, 184, 212, 0.4);
  border-radius: 50px;
  color: var(--pastel-purple);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.pdf-link:hover {
  background: linear-gradient(135deg, rgba(201, 184, 212, 0.25) 0%, rgba(232, 180, 184, 0.25) 100%);
  border-color: rgba(201, 184, 212, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(201, 184, 212, 0.2);
}

.pdf-link svg {
  flex-shrink: 0;
}

.author-section {
  background: linear-gradient(135deg, rgba(232, 180, 184, 0.05) 0%, var(--bg-dark) 100%);
}

.author-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: var(--bg-card);
  padding: 4rem 3rem;
  border-radius: 20px;
  border: 1px solid rgba(232, 180, 184, 0.2);
}

.author-header {
  margin-bottom: 2rem;
}

.author-icon {
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(232, 180, 184, 0.4);
}

.author-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-text {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
}

.author-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--pastel-pink);
  margin-bottom: 2rem;
}

.author-text p {
  margin-bottom: 1.2rem;
}

.author-signature {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(232, 180, 184, 0.15);
  font-style: italic;
  color: var(--text-primary);
}

.author-signature span {
  display: block;
  margin-top: 0.5rem;
  color: var(--pastel-purple);
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
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.btn-secondary {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  border: 1px solid var(--pastel-purple);
  color: var(--pastel-purple);
  background: transparent;
}

.btn-secondary:hover {
  background: var(--pastel-purple);
  color: var(--bg-dark);
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: 4rem 1.25rem;
  }

  section {
    padding: 3.5rem 0;
  }

  .container {
    padding: 0 1.25rem;
  }

  .section-title {
    font-size: 1.85rem;
    margin-bottom: 2rem;
  }

  .section-content,
  .info-content,
  .author-content {
    padding: 2rem 1.25rem;
    border-radius: 16px;
  }

  .section-icon,
  .intro-icon,
  .info-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1.2rem;
  }

  .section-icon svg,
  .intro-icon svg,
  .info-icon svg {
    width: 32px;
    height: 32px;
  }

  .topics-grid,
  .process-grid,
  .benefits-list,
  .status-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .topic-card,
  .process-step,
  .status-card,
  .benefit-item {
    padding: 1.5rem 1.25rem;
  }

  .topic-icon,
  .step-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }

  .topic-card h3,
  .process-step h3,
  .status-card h3 {
    font-size: 1.35rem;
    margin-bottom: 0.6rem;
  }

  .topic-card p,
  .process-list li,
  .status-list li,
  .benefit-item p {
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .benefit-icon {
    width: 28px;
    height: 28px;
    margin-top: 2px;
  }

  .expand-btn {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    font-size: 0.95rem;
    border-radius: 12px;
    margin-top: 1.2rem;
  }

  .gestalt-text {
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .gestalt-highlight {
    padding: 1.2rem;
    font-size: 0.95rem;
  }

  .principles-summary {
    padding: 1.8rem 1.25rem;
    margin-top: 2.5rem;
  }

  .principles-summary p {
    font-size: 1.2rem;
  }

  .benefits-summary {
    padding: 1.5rem 1.25rem;
    font-size: 0.95rem;
    margin-top: 1.5rem;
  }

  .dialog-quote {
    font-size: 0.98rem;
    padding: 1.2rem;
    line-height: 1.6;
  }

  .author-icon {
    width: 120px;
    height: 120px;
  }

  .author-name {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  .author-text {
    font-size: 0.95rem;
  }

  .pdf-download p {
    font-size: 0.9rem;
  }

  .pdf-link {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
}
</style>