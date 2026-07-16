<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <NuxtLink to="/" class="header__logo">
            <img :src="headerLogo" alt="Автотехнологии — центр дистанционного образования">
          </NuxtLink>

          <form class="header__search" action="#" @submit.prevent>
            <svg class="header__search-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="5" stroke="#7E7F81" stroke-width="2"/>
              <path d="M10 10L14 14" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input type="text" class="header__search-input" placeholder="Поиск по курсам и профессиям">
          </form>

          <div class="header__contacts">
            <a href="tel:+79917771954" class="header__contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.92 17.8 21.97 18.06 21.97 18.33Z" stroke="#354A7E" stroke-width="1.5" stroke-miterlimit="10"/>
              </svg>
              <span>+7 (991) 777-19-54</span>
            </a>
            <a href="mailto:manager@at-consulting.ru" class="header__contact-item header__contact-item--email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#354A7E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#354A7E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>manager@at-consulting.ru</span>
            </a>
          </div>

          <div class="header__socials">
            <a href="#" class="header__social-link" aria-label="ВКонтакте">
              <img :src="headerSocial1" alt="">
            </a>
            <a href="#" class="header__social-link" aria-label="WhatsApp">
              <img :src="headerSocial2" alt="">
            </a>
            <a href="#" class="header__social-link" aria-label="Telegram">
              <img :src="headerSocial3" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom-inner">
          <nav class="header__nav">
            <NuxtLink to="/" class="header__nav-link">Главная страница</NuxtLink>
            <NuxtLink to="/about" class="header__nav-link">Об учебном центре</NuxtLink>
            <NuxtLink to="/programs" class="header__nav-link">Программы обучения</NuxtLink>
            <NuxtLink to="/auto-accreditation" class="header__nav-link">Аккредитации</NuxtLink>
            <NuxtLink to="/documentation" class="header__nav-link">Документация</NuxtLink>
            <NuxtLink to="/contacts" class="header__nav-link">Контакты</NuxtLink>
            <NuxtLink to="/news" class="header__nav-link">Новости</NuxtLink>
          </nav>

          <a href="#" class="header__consult-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.92 17.8 21.97 18.06 21.97 18.33Z" stroke="#2A272B" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
            <span>Консультация</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import headerLogo from '~/assets/images/header-logo.png'
import headerSocial1 from '~/assets/images/header-social-1.png'
import headerSocial2 from '~/assets/images/header-social-2.png'
import headerSocial3 from '~/assets/images/header-social-3.png'
</script>
