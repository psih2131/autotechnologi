<template>
  <main class="news-page">
    <section class="news-section">
      <div class="container">
        <nav class="news-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="news-section__breadcrumbs-sep">/</span>
          <span>Новости</span>
        </nav>

        <div class="news-section__head">
          <h1 class="news-section__title">Новости</h1>

          <div class="news-section__controls">
            <form class="news-section__search-row" action="#" @submit.prevent>
              <label class="news-section__search">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="6.5" r="5" stroke="#7E7F81" stroke-width="2"/>
                  <path d="M10 10L14 14" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <input type="text" class="news-section__search-input" placeholder="Поиск по новостям">
              </label>
              <button type="submit" class="news-section__search-btn">Поиск</button>
            </form>

            <div class="news-section__sort">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6 12H18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M10 17H14" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div class="news-section__sort-select">
                <span>По умолчанию</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="news-section__grid">
          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post1" alt="Когда требуется обучение по международным перевозкам и СПК" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Когда требуется обучение по международным перевозкам и СПК</h2>
                <p class="news-card__excerpt">Кому обязательно проходить обучение и какие документы проверяют.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post2" alt="Обязательное обучение по БДД: кого назначать и за что отвечают" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Обязательное обучение по БДД: кого назначать и за что отвечают</h2>
                <p class="news-card__excerpt">Разъяснение для организаций и специалистов.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post3" alt="Частые ошибки при подготовке к экзаменам и аттестации" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Частые ошибки при подготовке к экзаменам и аттестации</h2>
                <p class="news-card__excerpt">На что обращают внимание при проверках.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post1" alt="Что изменилось в требованиях по охране труда в 2026 году" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Что изменилось в требованиях по охране труда в 2026 году</h2>
                <p class="news-card__excerpt">Какие категории сотрудников должны проходить обязательное обучение.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post2" alt="Кому необходимо обучение по БДД" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Кому необходимо обучение по БДД</h2>
                <p class="news-card__excerpt">Какие специалисты обязаны проходить повышение квалификации в сфере безопасности дорожного движения.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post3" alt="Когда требуется профессиональная переподготовка" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Когда требуется профессиональная переподготовка</h2>
                <p class="news-card__excerpt">Когда недостаточно повышения квалификации и какой документ нужен специалисту.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post1" alt="Что проверяют при обучении по пожарной безопасности" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Что проверяют при обучении по пожарной безопасности</h2>
                <p class="news-card__excerpt">Основные требования, категории слушателей и порядок прохождения обучения.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post2" alt="Для кого обязательно обучение по электробезопасности" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Для кого обязательно обучение по электробезопасности</h2>
                <p class="news-card__excerpt">Какие сотрудники должны проходить подготовку и проверку знаний.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post3" alt="Как подготовить сотрудников к проверкам и аттестации" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Как подготовить сотрудников к проверкам и аттестации</h2>
                <p class="news-card__excerpt">Какие программы обучения чаще всего требуются организациям.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post1" alt="Когда требуется обучение по работе на высоте" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Когда требуется обучение по работе на высоте</h2>
                <p class="news-card__excerpt">Какие категории сотрудников обязаны проходить подготовку и проверку знаний.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post2" alt="Как выбрать программу повышения квалификации для сотрудников" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Как выбрать программу повышения квалификации для сотрудников</h2>
                <p class="news-card__excerpt">На что обратить внимание при подборе обучения для организации.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>

          <article class="news-card">
            <NuxtLink to="/news/1" class="news-card__link">
              <div class="news-card__image-wrap">
                <img :src="post3" alt="Какие штрафы возможны при отсутствии обязательного обучения" class="news-card__image">
              </div>
              <div class="news-card__body">
                <time class="news-card__date">30 января 2026</time>
                <h2 class="news-card__title">Какие штрафы возможны при отсутствии обязательного обучения</h2>
                <p class="news-card__excerpt">За какие нарушения организации чаще всего получают предписания и штрафы.</p>
              </div>
              <div class="news-card__footer">
                <span class="news-card__more">Подробнее</span>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7H20" stroke="#2A272B" stroke-width="1.5"/>
                  <path d="M14 1L20 7L14 13" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </article>
        </div>

        <nav class="news-section__pagination">
          <div class="news-section__pagination-numbers">
            <button type="button" class="news-section__pagination-num news-section__pagination-num--active">1</button>
            <button type="button" class="news-section__pagination-num">2</button>
            <button type="button" class="news-section__pagination-num">3</button>
            <button type="button" class="news-section__pagination-num">...</button>
            <button type="button" class="news-section__pagination-num">8</button>
          </div>
          <button type="button" class="news-section__pagination-next" aria-label="Следующая страница">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>
      </div>
    </section>
  </main>
</template>

<script setup>
import post1 from '~/assets/images/posts/post1.jpg'
import post2 from '~/assets/images/posts/post2.jpg'
import post3 from '~/assets/images/posts/post3.jpg'

useHead({
  title: 'Новости — Автотехнологии',
})
</script>
