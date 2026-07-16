<template>
  <section class="program-hero">
    <div class="program-hero__bg" aria-hidden="true">
      <img :src="heroImgLeft" alt="" class="program-hero__img program-hero__img--left">
      <img :src="heroImgRight" alt="" class="program-hero__img program-hero__img--right">
      <div class="program-hero__overlay"></div>
    </div>

    <div class="container program-hero__container">
      <nav class="program-hero__breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span class="program-hero__breadcrumbs-sep">/</span>
        <NuxtLink to="/programs">Каталог курсов</NuxtLink>
        <span class="program-hero__breadcrumbs-sep">/</span>
        <span>БДД</span>
        <span class="program-hero__breadcrumbs-sep">/</span>
        <span>Безопасное вождение</span>
      </nav>

      <div class="program-hero__body">
        <div class="program-hero__content">
          <div class="program-hero__title-block">
            <h1 class="program-hero__title">Безопасное вождение</h1>
            <p class="program-hero__description">
              Программа направлена на повышение уровня безопасности при управлении транспортными средствами,
              снижение риска дорожно-транспортных происшествий и формирование навыков безопасного поведения
              в различных дорожных условиях.
            </p>
          </div>

          <div class="program-hero__meta">
            <div class="program-hero__meta-item">
              <div class="program-hero__meta-head">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 17.0625H6.75C2.6775 17.0625 0.9375 15.3225 0.9375 11.25V6.75C0.9375 2.6775 2.6775 0.9375 6.75 0.9375H10.5C10.8075 0.9375 11.0625 1.1925 11.0625 1.5C11.0625 1.8075 10.8075 2.0625 10.5 2.0625H6.75C3.2925 2.0625 2.0625 3.2925 2.0625 6.75V11.25C2.0625 14.7075 3.2925 15.9375 6.75 15.9375H11.25C14.7075 15.9375 15.9375 14.7075 15.9375 11.25V7.5C15.9375 7.1925 16.1925 6.9375 16.5 6.9375C16.8075 6.9375 17.0625 7.1925 17.0625 7.5V11.25C17.0625 15.3225 15.3225 17.0625 11.25 17.0625Z" fill="white"/>
                <path d="M16.5 8.06237H13.5C10.935 8.06237 9.9375 7.06487 9.9375 4.49987V1.49987C9.9375 1.27487 10.0725 1.06487 10.2825 0.982369C10.4925 0.892369 10.7325 0.94487 10.8975 1.10237L16.8975 7.10237C17.055 7.25987 17.1075 7.50737 17.0175 7.71737C16.9275 7.92737 16.725 8.06237 16.5 8.06237ZM11.0625 2.85737V4.49987C11.0625 6.43487 11.565 6.93737 13.5 6.93737H15.1425L11.0625 2.85737Z" fill="white"/>
                <path d="M9.75 10.3125H5.25C4.9425 10.3125 4.6875 10.0575 4.6875 9.75C4.6875 9.4425 4.9425 9.1875 5.25 9.1875H9.75C10.0575 9.1875 10.3125 9.4425 10.3125 9.75C10.3125 10.0575 10.0575 10.3125 9.75 10.3125Z" fill="white"/>
                <path d="M8.25 13.3125H5.25C4.9425 13.3125 4.6875 13.0575 4.6875 12.75C4.6875 12.4425 4.9425 12.1875 5.25 12.1875H8.25C8.5575 12.1875 8.8125 12.4425 8.8125 12.75C8.8125 13.0575 8.5575 13.3125 8.25 13.3125Z" fill="white"/>
                </svg>

                <span>Тип обучения</span>
              </div>
              <span class="program-hero__meta-value">Повышение квалификации</span>
            </div>

            <div class="program-hero__meta-divider" aria-hidden="true"></div>

            <div class="program-hero__meta-item">
              <div class="program-hero__meta-head">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="white"/>
                <path d="M11.7825 11.9478C11.685 11.9478 11.5875 11.9253 11.4975 11.8653L9.17248 10.4778C8.59498 10.1328 8.16748 9.37531 8.16748 8.70781V5.63281C8.16748 5.32531 8.42248 5.07031 8.72998 5.07031C9.03748 5.07031 9.29248 5.32531 9.29248 5.63281V8.70781C9.29248 8.97781 9.51748 9.37531 9.74998 9.51031L12.075 10.8978C12.345 11.0553 12.4275 11.4003 12.27 11.6703C12.1575 11.8503 11.97 11.9478 11.7825 11.9478Z" fill="white"/>
                </svg>

                <span>Срок обучения</span>
              </div>
              <span class="program-hero__meta-value">16 часов</span>
            </div>

            <div class="program-hero__meta-divider" aria-hidden="true"></div>

            <div class="program-hero__meta-item">
              <div class="program-hero__meta-head">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.5596C8.775 16.5596 8.55 16.5071 8.3625 16.4021C6.96 15.6371 4.4925 14.8271 2.9475 14.6246L2.73 14.5946C1.7475 14.4746 0.9375 13.5521 0.9375 12.5546V3.49464C0.9375 2.90214 1.17 2.36214 1.5975 1.97214C2.025 1.58214 2.58 1.39464 3.165 1.44714C4.815 1.57464 7.305 2.39964 8.715 3.28464L8.895 3.38964C8.9475 3.41964 9.06 3.41964 9.105 3.39714L9.225 3.32214C10.635 2.43714 13.125 1.59714 14.7825 1.45464C14.7975 1.45464 14.8575 1.45464 14.8725 1.45464C15.42 1.40214 15.9825 1.59714 16.4025 1.98714C16.83 2.37714 17.0625 2.91714 17.0625 3.50964V12.5621C17.0625 13.5671 16.2525 14.4821 15.2625 14.6021L15.015 14.6321C13.47 14.8346 10.995 15.6521 9.6225 16.4096C9.4425 16.5146 9.225 16.5596 9 16.5596ZM2.985 2.56464C2.745 2.56464 2.5275 2.64714 2.355 2.80464C2.1675 2.97714 2.0625 3.22464 2.0625 3.49464V12.5546C2.0625 12.9971 2.445 13.4246 2.8725 13.4846L3.0975 13.5146C4.785 13.7396 7.3725 14.5871 8.8725 15.4046C8.94 15.4346 9.0375 15.4421 9.075 15.4271C10.575 14.5946 13.1775 13.7396 14.8725 13.5146L15.1275 13.4846C15.555 13.4321 15.9375 12.9971 15.9375 12.5546V3.50214C15.9375 3.22464 15.8325 2.98464 15.645 2.80464C15.45 2.63214 15.2025 2.54964 14.925 2.56464C14.91 2.56464 14.85 2.56464 14.835 2.56464C13.4025 2.69214 11.0925 3.46464 9.8325 4.25214L9.7125 4.33464C9.3 4.58964 8.715 4.58964 8.3175 4.34214L8.1375 4.23714C6.855 3.44964 4.545 2.68464 3.075 2.56464C3.045 2.56464 3.015 2.56464 2.985 2.56464Z" fill="white"/>
                <path d="M9 15.9297C8.6925 15.9297 8.4375 15.6747 8.4375 15.3672V4.11719C8.4375 3.80969 8.6925 3.55469 9 3.55469C9.3075 3.55469 9.5625 3.80969 9.5625 4.11719V15.3672C9.5625 15.6822 9.3075 15.9297 9 15.9297Z" fill="white"/>
                <path d="M5.8125 6.92969H4.125C3.8175 6.92969 3.5625 6.67469 3.5625 6.36719C3.5625 6.05969 3.8175 5.80469 4.125 5.80469H5.8125C6.12 5.80469 6.375 6.05969 6.375 6.36719C6.375 6.67469 6.12 6.92969 5.8125 6.92969Z" fill="white"/>
                <path d="M6.375 9.17969H4.125C3.8175 9.17969 3.5625 8.92469 3.5625 8.61719C3.5625 8.30969 3.8175 8.05469 4.125 8.05469H6.375C6.6825 8.05469 6.9375 8.30969 6.9375 8.61719C6.9375 8.92469 6.6825 9.17969 6.375 9.17969Z" fill="white"/>
                </svg>

                <span>Формат обучения</span>
              </div>
              <span class="program-hero__meta-value">Дистанционно</span>
            </div>
          </div>

          <div class="program-hero__price-row">
            <p class="program-hero__price">Стоимость: <strong>3000 ₽</strong></p>
            <span class="program-hero__dolyame">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" rx="8" fill="white"/>
              <g clip-path="url(#clip0_60_2147)">
              <path d="M12.5 4.37793H11.2913V10.5071H12.5V4.37793Z" fill="#2A272B"/>
              <path d="M9.90289 4.7209H8.69421V10.85H9.90289V4.7209Z" fill="#2A272B"/>
              <path d="M7.30579 5.10379H6.09711V11.234H7.30579V5.10379Z" fill="#2A272B"/>
              <path d="M4.70868 5.49094H3.5L3.5 11.6219H4.70868L4.70868 5.49094Z" fill="#2A272B"/>
              </g>
              <defs>
              <clipPath id="clip0_60_2147">
              <rect width="9" height="9" fill="white" transform="translate(3.5 3.5)"/>
              </clipPath>
              </defs>
              </svg>

              Доступна оплата Долями
            </span>
          </div>
        </div>

        <form class="program-hero__form" action="#" @submit.prevent>
          <div class="program-hero__form-head">
            <h2 class="program-hero__form-title">Оставьте заявку на обучение</h2>
            <p class="program-hero__form-text">
              После подтверждения заявки вам будут направлены информация для оплаты и дальнейшие инструкции
              с доступом к обучению.
            </p>
          </div>

          <div class="program-hero__form-fields">
            <input type="text" class="program-hero__input" placeholder="Имя">
            <input type="tel" class="program-hero__input" placeholder="+7 (900) 900 00 00">
          </div>

          <label class="program-hero__agreement">
            <input type="checkbox" class="program-hero__checkbox">
            <span class="program-hero__agreement-text">
              Отправляя форму, я соглашаюсь с
              <a href="#">Пользовательским соглашением</a>
              и даю согласие на обработку персональных данных в соответствии с
              <a href="#">Политикой конфиденциальности</a>
            </span>
          </label>

          <button type="submit" class="program-hero__submit">Записаться на обучение</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImgLeft from '~/assets/images/program-hero-sec-img-1.png'
import heroImgRight from '~/assets/images/program-hero-sec-img-2.png'
</script>
