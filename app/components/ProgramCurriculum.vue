<template>
  <section class="program-curriculum">
    <div class="container">
      <h2 class="program-curriculum__title">Программа обучения</h2>

      <div class="program-curriculum__grid">
        <article
          v-for="(block, idx) in curriculumBlocks"
          :key="idx"
          class="program-curriculum__block"
          :class="{ 'program-curriculum__block--white': block.white }"
        >
          <span class="program-curriculum__block-label">{{ block.label }}</span>
          <span class="program-curriculum__block-divider" aria-hidden="true"></span>
          <h3 class="program-curriculum__block-title">{{ block.title }}</h3>
          <p class="program-curriculum__block-text">{{ block.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const curriculumBlocks = [
  {
    label: 'Блок 1',
    title: 'Безопасное вождение',
    text: 'Основные принципы безопасного управления транспортным средством. Поведение водителя в различных дорожных ситуациях.',
    white: false,
  },
  {
    label: 'Блок 2',
    title: 'Понятие ДТП. Основные причины ДТП',
    text: 'Разбор наиболее распространённых причин дорожно-транспортных происшествий и факторов повышенного риска.',
    white: true,
  },
  {
    label: 'Блок 3',
    title: 'Статистика ДТП в России. Тенденции',
    text: 'Анализ аварийности, типовые ошибки водителей и современные тенденции в области безопасности дорожного движения.',
    white: false,
  },
  {
    label: 'Блок 4',
    title: 'Дорожно-транспортная аварийность',
    text: 'Причины возникновения аварийных ситуаций и методы их предупреждения.',
    white: false,
  },
  {
    label: 'Блок 5',
    title: 'Типичные дорожно-транспортные ситуации повышенной опасности',
    text: 'Разбор сложных дорожных сценариев, анализ ошибок и алгоритмы безопасного поведения.',
    white: false,
  },
  {
    label: 'Блок 6',
    title: 'Вождение в условиях недостаточной видимости',
    text: 'Особенности управления транспортом в тёмное время суток, при осадках и ограниченной видимости.',
    white: true,
  },
  {
    label: 'Блок 7',
    title: 'Вождение в зимних условиях',
    text: 'Безопасное управление автомобилем на скользком покрытии и в сложных погодных условиях.',
    white: false,
  },
  {
    label: 'Блок 8',
    title: 'Основы оказания первой медицинской помощи пострадавшим в ДТП',
    text: 'Порядок действий при возникновении ДТП и базовые навыки оказания первой помощи.',
    white: false,
  },
  {
    label: 'Блок 9',
    title: 'Итоговое тестирование',
    text: 'Проверка усвоения учебного материала.',
    white: true,
  },
]
</script>
