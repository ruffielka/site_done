<script setup>
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

import { usePageTitle } from './composables/usePageTitle'

usePageTitle()

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div
    v-if="isMenuOpen"
    class="menu-overlay"
    @click="closeMenu"
  ></div>

  <RouterView />

  <div class="menu-wrapper" :class="{ 'is-open': isMenuOpen }">
    <button class="menu-btn" @click="toggleMenu" aria-label="Открыть меню">
      <span class="line"></span>
    </button>

    <nav class="dropdown-menu">
      <RouterLink to="/" @click="closeMenu">Главная</RouterLink>
      <RouterLink to="/psychology" @click="closeMenu">Психология</RouterLink>
      <RouterLink to="/massage" @click="closeMenu">Массаж чашами</RouterLink>
      <RouterLink to="/price" @click="closeMenu">Прайс-лист</RouterLink>
      <RouterLink to="/contacts" @click="closeMenu">Контакты</RouterLink>
    </nav>
  </div>

  <a
    href="https://dikidi.net/2102764"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed-signup-btn"
  >
    Записаться сейчас
  </a>
</template>

<style>
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  min-height: 100%;
  background: #171717;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #5c4a32 #171717;
}

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #171717; }
::-webkit-scrollbar-thumb { background: #5c4a32; border-radius: 8px; border: 2px solid #171717; }
::-webkit-scrollbar-thumb:hover { background: #8b6f47; }

body {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: #171717;
  color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

#app {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding-bottom: 100px;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 99998;
  will-change: opacity;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.menu-wrapper {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 99999;
}

.menu-btn {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 130, 0.45);
  background: linear-gradient(135deg, rgba(117, 104, 87, 0.96), rgba(82, 75, 66, 0.96));
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-btn:hover {
  background: linear-gradient(135deg, rgba(137, 122, 101, 0.98), rgba(100, 90, 78, 0.98));
  border-color: rgba(201, 168, 130, 0.75);
  transform: scale(1.05);
}

.menu-btn .line {
  position: relative;
  width: 20px;
  height: 2px;
  background-color: #f4eee7;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-btn .line::before,
.menu-btn .line::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #f4eee7;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-btn .line::before {
  transform: translateY(-6px);
}

.menu-btn .line::after {
  transform: translateY(6px);
}

.menu-wrapper.is-open .menu-btn {
  background: rgba(201, 168, 130, 0.2);
  border-color: rgba(201, 168, 130, 0.8);
}

.menu-wrapper.is-open .menu-btn .line {
  background-color: transparent;
}

.menu-wrapper.is-open .menu-btn .line::before {
  transform: translateY(0) rotate(45deg);
}

.menu-wrapper.is-open .menu-btn .line::after {
  transform: translateY(0) rotate(-45deg);
}

.dropdown-menu {
  position: absolute;
  top: 70px;
  right: 0;
  width: 240px;
  padding: 8px;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(201, 168, 130, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px) scale(0.95);
  transform-origin: top right;
  will-change: transform, opacity;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-wrapper.is-open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.dropdown-menu a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #e0d5c4;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.dropdown-menu a:hover,
.dropdown-menu a.router-link-active {
  background: rgba(201, 168, 130, 0.15);
  color: #ffffff;
  padding-left: 20px;
}

.fixed-signup-btn {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 99990;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-width: 210px;
  height: 56px;
  padding: 0 28px;
  white-space: nowrap;
  text-align: center;
  color: #f4eee7;
  background: linear-gradient(135deg, rgba(117, 104, 87, 0.96), rgba(82, 75, 66, 0.96));
  border: 1px solid rgba(201, 168, 130, 0.45);
  border-radius: 999px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.fixed-signup-btn:hover {
  color: #ffffff;
  background: linear-gradient(135deg, rgba(137, 122, 101, 0.98), rgba(100, 90, 78, 0.98));
  border-color: rgba(201, 168, 130, 0.75);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(201, 168, 130, 0.12);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .menu-wrapper {
    top: 16px;
    right: 16px;
  }

  .menu-btn {
    width: 50px;
    height: 50px;
  }

  .menu-btn .line {
    width: 18px;
  }

  .menu-btn .line::before {
    transform: translateY(-5px);
  }
  .menu-btn .line::after {
    transform: translateY(5px);
  }

  .menu-wrapper.is-open .menu-btn .line::before {
    transform: translateY(0) rotate(45deg);
  }
  .menu-wrapper.is-open .menu-btn .line::after {
    transform: translateY(0) rotate(-45deg);
  }

  .dropdown-menu {
    width: 200px;
    top: 64px;
  }

  .fixed-signup-btn {
    left: 50%;
    right: auto;
    bottom: calc(14px + env(safe-area-inset-bottom));
    min-width: 0;
    width: max-content;
    height: 50px;
    padding: 0 25px;
    font-size: 14px;
    transform: translateX(-50%);
  }

  .fixed-signup-btn:hover {
    transform: translateX(-50%) translateY(-2px);
  }

  .fixed-signup-btn:active {
    transform: translateX(-50%) scale(0.97);
  }
}

@media (max-width: 360px) {
  .fixed-signup-btn {
    height: 48px;
    padding: 0 22px;
    font-size: 13px;
  }
}
</style>