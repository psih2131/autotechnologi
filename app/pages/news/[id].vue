<template>
  <main class="news-post-page">
    <section class="news-post-section">
      <div class="container">
        <nav class="news-post-section__breadcrumbs">
          <NuxtLink to="/">Главная</NuxtLink>
          <span class="news-post-section__breadcrumbs-sep">/</span>
          <NuxtLink to="/news">Новости</NuxtLink>
          <span class="news-post-section__breadcrumbs-sep">/</span>
          <span>Когда требуется обучение по международным перевозкам и СПК</span>
        </nav>

        <div class="news-post-section__layout">
          <div class="news-post-section__main">
            <NuxtLink to="/news" class="news-post-section__back">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L1 5.5L5 10" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 5.5H14" stroke="#2A272B" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>Назад</span>
            </NuxtLink>

            <h1 class="news-post-section__title">Когда требуется обучение по международным перевозкам и СПК</h1>

            <div class="news-post-section__image-wrap">
              <img :src="postBig" alt="Когда требуется обучение по международным перевозкам и СПК" class="news-post-section__image">
            </div>

            <div class="news-post-section__content">
              <p>Международные перевозки связаны с повышенными требованиями к перевозчикам, водителям и организациям, работающим в транспортной сфере. Для допуска к отдельным видам деятельности требуется наличие профильного обучения, подтверждающих документов и соблюдение требований законодательства.</p>
              <p>Особенно актуальны эти требования для компаний, осуществляющих международные автомобильные перевозки грузов и пассажиров.</p>

              <h2>Что такое СПК</h2>
              <p>СПК — это свидетельство профессиональной компетентности, подтверждающее квалификацию специалиста в сфере международных автомобильных перевозок.</p>
              <p>Документ требуется для специалистов, деятельность которых связана с организацией и обеспечением международных перевозок.</p>

              <h2>Когда обучение является обязательным</h2>
              <p>Обучение по международным перевозкам и получение СПК требуется в случаях, если организация:</p>
              <p class="dash-list">— осуществляет международные грузовые перевозки<br>— выполняет международные пассажирские перевозки<br>— оформляет допуск к международным перевозкам<br>— работает с транспортом, пересекающим государственные границы<br>— планирует получение необходимых разрешений и удостоверений допуска</p>
              <p>Также обучение требуется специалистам, ответственным за организацию перевозочного процесса и соблюдение требований транспортного законодательства.</p>

              <h2>Кому необходимо обучение</h2>
              <p>Обучение чаще всего проходят:</p>
              <p class="dash-list">— специалисты по организации перевозок<br>— сотрудники транспортных и логистических компаний<br>— ответственные за международные перевозки<br>— руководители транспортных подразделений<br>— индивидуальные предприниматели в сфере перевозок<br>— специалисты, оформляющие документы для допуска к перевозкам</p>

              <h2>Какие документы проверяют</h2>
              <p>При осуществлении международных перевозок контролирующие органы могут проверять:</p>
              <p class="dash-list">— документы о прохождении обучения<br>— свидетельство профессиональной компетентности<br>— документы на транспортные средства<br>— разрешительную документацию<br>— документы, подтверждающие право осуществления перевозок</p>
              <p>Перечень требований может зависеть от направления перевозок и особенностей деятельности организации.</p>

              <h2>Как проходит обучение</h2>
              <p>Обучение включает изучение:</p>
              <p class="dash-list">— требований транспортного законодательства<br>— правил организации международных перевозок<br>— требований безопасности<br>— особенностей оформления документации<br>— обязанностей перевозчика<br>— нормативных требований в сфере транспорта</p>
              <p>После завершения программы проводится итоговая проверка знаний.</p>

              <h2>Какой документ выдается после обучения</h2>
              <p>После успешного завершения обучения слушателю выдаются документы в соответствии с программой подготовки и действующими требованиями.</p>

              <h2>Почему важно проходить обучение своевременно</h2>
              <p>Отсутствие необходимого обучения и подтверждающих документов может привести к ограничениям в работе, отказу в оформлении допуска и вопросам со стороны контролирующих органов. Своевременное обучение позволяет подтвердить квалификацию специалистов и обеспечить соответствие требованиям законодательства.</p>
            </div>
          </div>

          <aside class="news-post-section__sidebar">
            <h2 class="news-post-section__sidebar-title">Смотрите также</h2>
            <div class="news-post-section__sidebar-line"></div>

            <div class="news-post-section__related">
              <article class="news-card news-card--sidebar">
                <NuxtLink to="/news/1" class="news-card__link">
                  <div class="news-card__image-wrap">
                    <img :src="post2" alt="Обязательное обучение по БДД: кого назначать и за что отвечают" class="news-card__image">
                  </div>
                  <div class="news-card__body">
                    <time class="news-card__date">30 января 2026</time>
                    <h3 class="news-card__title">Обязательное обучение по БДД: кого назначать и за что отвечают</h3>
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

              <article class="news-card news-card--sidebar">
                <NuxtLink to="/news/1" class="news-card__link">
                  <div class="news-card__image-wrap">
                    <img :src="post3" alt="Частые ошибки при подготовке к экзаменам и аттестации" class="news-card__image">
                  </div>
                  <div class="news-card__body">
                    <time class="news-card__date">30 января 2026</time>
                    <h3 class="news-card__title">Частые ошибки при подготовке к экзаменам и аттестации</h3>
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

              <article class="news-card news-card--sidebar">
                <NuxtLink to="/news/1" class="news-card__link">
                  <div class="news-card__image-wrap">
                    <img :src="post1" alt="Что изменилось в требованиях по охране труда в 2026 году" class="news-card__image">
                  </div>
                  <div class="news-card__body">
                    <time class="news-card__date">30 января 2026</time>
                    <h3 class="news-card__title">Что изменилось в требованиях по охране труда в 2026 году</h3>
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import post1 from '~/assets/images/posts/post1.jpg'
import post2 from '~/assets/images/posts/post2.jpg'
import post3 from '~/assets/images/posts/post3.jpg'
import postBig from '~/assets/images/posts/post-big.jpg'

useHead({
  title: 'Когда требуется обучение по международным перевозкам и СПК — Автотехнологии',
})
</script>
