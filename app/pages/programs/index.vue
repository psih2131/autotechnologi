<template>
  <main class="programs-page">
    <section class="programs-section">
      <div class="container">

        <nav class="programs-main__breadcrumbs">
              <NuxtLink to="/">Главная</NuxtLink>
              <span class="programs-main__breadcrumbs-sep">/</span>
              <span>{{ pageTitle || 'Все курсы' }}</span>
            </nav>

        <div class="programs-section__layout">
          <aside class="programs-sidebar">
            <div v-if="popularCategories.length" class="programs-sidebar__nav-claster">
              <h2 class="programs-sidebar__nav-claster-title">Популярные направления подготовки</h2>
              <nav class="programs-sidebar__nav-claster-list">
                <ul class="programs-sidebar__nav-claster-list-items">
                  <li
                    v-for="category in popularCategories"
                    :key="category.slug"
                    class="programs-sidebar__nav-claster-list-item"
                  >
                    <NuxtLink
                      :to="`/programs/categories/${category.slug}`"
                      class="programs-sidebar__nav-claster-list-link"
                    >
                      <span class="programs-sidebar__link-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V22C20 22.3905 19.7727 22.7453 19.4179 22.9085C19.0631 23.0717 18.6457 23.0134 18.3492 22.7593L12 17.3171L5.65079 22.7593C5.35428 23.0134 4.93694 23.0717 4.58214 22.9085C4.22734 22.7453 4 22.3905 4 22V4ZM7 3C6.44772 3 6 3.44772 6 4V19.8258L11.3492 15.2407C11.7237 14.9198 12.2763 14.9198 12.6508 15.2407L18 19.8258V4C18 3.44772 17.5523 3 17 3H7Z" fill="#7E7F81"/>
                        </svg>
                      </span>
                      {{ category.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div v-if="otherCategories.length" class="programs-sidebar__nav-claster">
              <h2 class="programs-sidebar__nav-claster-title">Другие направления подготовки</h2>
              <nav class="programs-sidebar__nav-claster-list">
                <ul class="programs-sidebar__nav-claster-list-items">
                  <li
                    v-for="category in otherCategories"
                    :key="category.slug"
                    class="programs-sidebar__nav-claster-list-item"
                  >
                    <NuxtLink
                      :to="`/programs/categories/${category.slug}`"
                      class="programs-sidebar__nav-claster-list-link"
                    >
                      {{ category.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>

       
          </aside>

          <div class="programs-main">
           

            <div class="programs-main__head">
              <h1 v-if="pageTitle" class="programs-main__title">{{ pageTitle }}</h1>
              <p v-if="pageSubtitle" class="programs-main__description">
                {{ pageSubtitle }}
              </p>
            </div>

            <form class="programs-main__search-row" @submit.prevent="applySearch">
              <label class="programs-main__search">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="6.5" r="5" stroke="#7E7F81" stroke-width="2"/>
                  <path d="M10 10L14 14" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  class="programs-main__search-input"
                  placeholder="Поиск по курсам"
                >
                <button
                  v-if="searchQuery"
                  type="button"
                  class="programs-main__search-clear"
                  aria-label="Очистить поиск"
                  @click="clearSearch"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 1L13 13M13 1L1 13" stroke="#7E7F81" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </label>
              <button type="submit" class="programs-main__search-btn">Найти</button>
            </form>

            <div class="programs-main__filters">
                <div class="programs-main__filters-wrapper">
                    <div class="programs-main__filters-row">
                    <button
                      type="button"
                      class="programs-main__filter"
                      :class="{ 'programs-main__filter--active': selectedTypeId == null && !activeSearch }"
                      @click="selectedTypeId = null"
                    >
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27907 7.06977H2.7907C0.989767 7.06977 0 6.08 0 4.27907V2.7907C0 0.989767 0.989767 0 2.7907 0H4.27907C6.08 0 7.06977 0.989767 7.06977 2.7907V4.27907C7.06977 6.08 6.08 7.06977 4.27907 7.06977ZM2.7907 1.11628C1.61488 1.11628 1.11628 1.61488 1.11628 2.7907V4.27907C1.11628 5.45488 1.61488 5.95349 2.7907 5.95349H4.27907C5.45488 5.95349 5.95349 5.45488 5.95349 4.27907V2.7907C5.95349 1.61488 5.45488 1.11628 4.27907 1.11628H2.7907Z" fill="white"/>
                            <path d="M13.2093 7.06977H11.7209C9.92 7.06977 8.93023 6.08 8.93023 4.27907V2.7907C8.93023 0.989767 9.92 0 11.7209 0H13.2093C15.0102 0 16 0.989767 16 2.7907V4.27907C16 6.08 15.0102 7.06977 13.2093 7.06977ZM11.7209 1.11628C10.5451 1.11628 10.0465 1.61488 10.0465 2.7907V4.27907C10.0465 5.45488 10.5451 5.95349 11.7209 5.95349H13.2093C14.3851 5.95349 14.8837 5.45488 14.8837 4.27907V2.7907C14.8837 1.61488 14.3851 1.11628 13.2093 1.11628H11.7209Z" fill="white"/>
                            <path d="M13.2093 16H11.7209C9.92 16 8.93023 15.0102 8.93023 13.2093V11.7209C8.93023 9.92 9.92 8.93023 11.7209 8.93023H13.2093C15.0102 8.93023 16 9.92 16 11.7209V13.2093C16 15.0102 15.0102 16 13.2093 16ZM11.7209 10.0465C10.5451 10.0465 10.0465 10.5451 10.0465 11.7209V13.2093C10.0465 14.3851 10.5451 14.8837 11.7209 14.8837H13.2093C14.3851 14.8837 14.8837 14.3851 14.8837 13.2093V11.7209C14.8837 10.5451 14.3851 10.0465 13.2093 10.0465H11.7209Z" fill="white"/>
                            <path d="M4.27907 16H2.7907C0.989767 16 0 15.0102 0 13.2093V11.7209C0 9.92 0.989767 8.93023 2.7907 8.93023H4.27907C6.08 8.93023 7.06977 9.92 7.06977 11.7209V13.2093C7.06977 15.0102 6.08 16 4.27907 16ZM2.7907 10.0465C1.61488 10.0465 1.11628 10.5451 1.11628 11.7209V13.2093C1.11628 14.3851 1.61488 14.8837 2.7907 14.8837H4.27907C5.45488 14.8837 5.95349 14.3851 5.95349 13.2093V11.7209C5.95349 10.5451 5.45488 10.0465 4.27907 10.0465H2.7907Z" fill="white"/>
                            </svg>
                        </span>
                        Все курсы
                    </button>
                    <button
                      v-for="type in programTypes"
                      :key="type.id"
                      type="button"
                      class="programs-main__filter"
                      :class="{ 'programs-main__filter--active': selectedTypeId === type.id && !activeSearch }"
                      @click="selectedTypeId = type.id"
                    >
                        <span>
                          <img
                            v-if="type.icon"
                            :src="type.icon"
                            :alt="type.title"
                            class="programs-main__filter-icon"
                          >
                          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2326 16H5.76744C1.72651 16 0 14.2735 0 10.2326V5.76744C0 1.72651 1.72651 0 5.76744 0H10.2326C14.2735 0 16 1.72651 16 5.76744V10.2326C16 14.2735 14.2735 16 10.2326 16ZM5.76744 1.11628C2.33674 1.11628 1.11628 2.33674 1.11628 5.76744V10.2326C1.11628 13.6633 2.33674 14.8837 5.76744 14.8837H10.2326C13.6633 14.8837 14.8837 13.6633 14.8837 10.2326V5.76744C14.8837 2.33674 13.6633 1.11628 10.2326 1.11628H5.76744Z" fill="white"/>
                          </svg>
                        </span>
                        {{ type.title }}
                    </button>
                    </div>
                </div>
            </div>
            <div class="programs-main__toolbar">
              <div class="programs-main__toolbar-filters">
                <span class="programs-main__toolbar-icon" aria-hidden="true">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 3.375C0.335786 3.375 0 3.71079 0 4.125C0 4.53921 0.335786 4.875 0.75 4.875V4.125V3.375ZM0.75 14.625C0.335786 14.625 0 14.9608 0 15.375C0 15.7892 0.335786 16.125 0.75 16.125V15.375V14.625ZM7.41667 16.125C7.83088 16.125 8.16667 15.7892 8.16667 15.375C8.16667 14.9608 7.83088 14.625 7.41667 14.625V15.375V16.125ZM20.75 16.125C21.1642 16.125 21.5 15.7892 21.5 15.375C21.5 14.9608 21.1642 14.625 20.75 14.625V15.375V16.125ZM14.0833 3.375C13.6691 3.375 13.3333 3.71079 13.3333 4.125C13.3333 4.53921 13.6691 4.875 14.0833 4.875V4.125V3.375ZM20.75 4.875C21.1642 4.875 21.5 4.53921 21.5 4.125C21.5 3.71079 21.1642 3.375 20.75 3.375L20.75 4.125V4.875ZM0.75 4.125V4.875H4.08333V4.125V3.375H0.75V4.125ZM0.75 15.375V16.125H7.41667V15.375V14.625H0.75V15.375ZM17.4167 15.375V16.125H20.75V15.375V14.625H17.4167V15.375ZM14.0833 4.125V4.875L20.75 4.875V4.125L20.75 3.375L14.0833 3.375V4.125ZM7.41667 7.5V6.75C6.88857 6.75 6.53052 6.74958 6.25245 6.73037C5.98131 6.71164 5.8419 6.67764 5.74521 6.63709L5.45515 7.32873L5.16508 8.02037C5.47678 8.15109 5.80041 8.20272 6.14908 8.22681C6.49082 8.25042 6.90934 8.25 7.41667 8.25V7.5ZM4.08333 4.125H3.33333C3.33333 4.63905 3.33294 5.06168 3.35618 5.40653C3.37986 5.75793 3.4305 6.08255 3.55833 6.39502L4.25249 6.11104L4.94665 5.82706C4.90532 5.72604 4.87139 5.58183 4.85278 5.30567C4.83373 5.02296 4.83333 4.65932 4.83333 4.125H4.08333ZM5.45515 7.32873L5.74521 6.63709C5.38594 6.48642 5.09763 6.1961 4.94665 5.82706L4.25249 6.11104L3.55833 6.39502C3.85844 7.1286 4.43534 7.71432 5.16508 8.02037L5.45515 7.32873ZM10.75 4.125H10C10 4.65932 9.9996 5.02296 9.98055 5.30567C9.96194 5.58183 9.92801 5.72604 9.88669 5.82706L10.5808 6.11104L11.275 6.39502C11.4028 6.08255 11.4535 5.75793 11.4772 5.40653C11.5004 5.06168 11.5 4.63905 11.5 4.125H10.75ZM7.41667 7.5V8.25C7.92399 8.25 8.34251 8.25042 8.68426 8.22681C9.03292 8.20272 9.35655 8.15109 9.66825 8.02037L9.37819 7.32873L9.08812 6.63709C8.99144 6.67764 8.85202 6.71164 8.58088 6.73037C8.30282 6.74958 7.94477 6.75 7.41667 6.75V7.5ZM10.5808 6.11104L9.88669 5.82706C9.73571 6.1961 9.44739 6.48642 9.08812 6.63709L9.37819 7.32873L9.66825 8.02037C10.398 7.71432 10.9749 7.1286 11.275 6.39502L10.5808 6.11104ZM7.41667 0.75V1.5C7.94477 1.5 8.30282 1.50042 8.58088 1.51963C8.85202 1.53836 8.99144 1.57236 9.08812 1.61291L9.37819 0.921271L9.66825 0.229634C9.35655 0.0989103 9.03292 0.0472786 8.68426 0.0231921C8.34251 -0.000416338 7.92399 0 7.41667 0V0.75ZM10.75 4.125H11.5C11.5 3.61095 11.5004 3.18832 11.4772 2.84347C11.4535 2.49207 11.4028 2.16745 11.275 1.85498L10.5808 2.13896L9.88669 2.42294C9.92801 2.52396 9.96194 2.66817 9.98055 2.94433C9.9996 3.22704 10 3.59068 10 4.125H10.75ZM9.37819 0.921271L9.08812 1.61291C9.44739 1.76358 9.73571 2.0539 9.88669 2.42294L10.5808 2.13896L11.275 1.85498C10.9749 1.1214 10.398 0.535682 9.66825 0.229634L9.37819 0.921271ZM7.41667 0.75V0C6.90934 0 6.49082 -0.000416338 6.14908 0.0231921C5.80041 0.0472786 5.47678 0.0989103 5.16508 0.229634L5.45515 0.921271L5.74521 1.61291C5.8419 1.57236 5.98131 1.53836 6.25245 1.51963C6.53052 1.50042 6.88857 1.5 7.41667 1.5V0.75ZM4.08333 4.125H4.83333C4.83333 3.59068 4.83373 3.22704 4.85278 2.94433C4.87139 2.66817 4.90532 2.52396 4.94665 2.42294L4.25249 2.13896L3.55833 1.85498C3.4305 2.16745 3.37986 2.49207 3.35618 2.84347C3.33294 3.18832 3.33333 3.61095 3.33333 4.125H4.08333ZM5.45515 0.921271L5.16508 0.229634C4.43534 0.535682 3.85844 1.1214 3.55833 1.85498L4.25249 2.13896L4.94665 2.42294C5.09763 2.0539 5.38594 1.76358 5.74521 1.61291L5.45515 0.921271ZM14.0833 18.75V18C13.5552 18 13.1972 17.9996 12.9191 17.9804C12.648 17.9616 12.5086 17.9276 12.4119 17.8871L12.1218 18.5787L11.8317 19.2704C12.1434 19.4011 12.4671 19.4527 12.8157 19.4768C13.1575 19.5004 13.576 19.5 14.0833 19.5V18.75ZM10.75 15.375H10C10 15.889 9.9996 16.3117 10.0228 16.6565C10.0465 17.0079 10.0972 17.3326 10.225 17.645L10.9192 17.361L11.6133 17.0771C11.572 16.976 11.5381 16.8318 11.5194 16.5557C11.5004 16.273 11.5 15.9093 11.5 15.375H10.75ZM12.1218 18.5787L12.4119 17.8871C12.0526 17.7364 11.7643 17.4461 11.6133 17.0771L10.9192 17.361L10.225 17.645C10.5251 18.3786 11.102 18.9643 11.8317 19.2704L12.1218 18.5787ZM17.4167 15.375H16.6667C16.6667 15.9093 16.6663 16.273 16.6472 16.5557C16.6286 16.8318 16.5947 16.976 16.5534 17.0771L17.2475 17.361L17.9417 17.645C18.0695 17.3326 18.1201 17.0079 18.1438 16.6565C18.1671 16.3117 18.1667 15.889 18.1667 15.375H17.4167ZM14.0833 18.75V19.5C14.5907 19.5 15.0092 19.5004 15.3509 19.4768C15.6996 19.4527 16.0232 19.4011 16.3349 19.2704L16.0449 18.5787L15.7548 17.8871C15.6581 17.9276 15.5187 17.9616 15.2475 17.9804C14.9695 17.9996 14.6114 18 14.0833 18V18.75ZM17.2475 17.361L16.5534 17.0771C16.4024 17.4461 16.1141 17.7364 15.7548 17.8871L16.0449 18.5787L16.3349 19.2704C17.0647 18.9643 17.6416 18.3786 17.9417 17.645L17.2475 17.361ZM14.0833 12V12.75C14.6114 12.75 14.9695 12.7504 15.2475 12.7696C15.5187 12.7884 15.6581 12.8224 15.7548 12.8629L16.0449 12.1713L16.3349 11.4796C16.0232 11.3489 15.6996 11.2973 15.3509 11.2732C15.0092 11.2496 14.5907 11.25 14.0833 11.25V12ZM17.4167 15.375H18.1667C18.1667 14.861 18.1671 14.4383 18.1438 14.0935C18.1201 13.7421 18.0695 13.4174 17.9417 13.105L17.2475 13.389L16.5534 13.6729C16.5947 13.774 16.6286 13.9182 16.6472 14.1943C16.6663 14.477 16.6667 14.8407 16.6667 15.375H17.4167ZM16.0449 12.1713L15.7548 12.8629C16.1141 13.0136 16.4024 13.3039 16.5534 13.6729L17.2475 13.389L17.9417 13.105C17.6416 12.3714 17.0647 11.7857 16.3349 11.4796L16.0449 12.1713ZM14.0833 12V11.25C13.576 11.25 13.1575 11.2496 12.8157 11.2732C12.4671 11.2973 12.1434 11.3489 11.8317 11.4796L12.1218 12.1713L12.4119 12.8629C12.5086 12.8224 12.648 12.7884 12.9191 12.7696C13.1972 12.7504 13.5552 12.75 14.0833 12.75V12ZM10.75 15.375H11.5C11.5 14.8407 11.5004 14.477 11.5194 14.1943C11.5381 13.9182 11.572 13.774 11.6133 13.6729L10.9192 13.389L10.225 13.105C10.0972 13.4174 10.0465 13.7421 10.0228 14.0935C9.9996 14.4383 10 14.861 10 15.375H10.75ZM12.1218 12.1713L11.8317 11.4796C11.102 11.7857 10.5251 12.3714 10.225 13.105L10.9192 13.389L11.6133 13.6729C11.7643 13.3039 12.0526 13.0136 12.4119 12.8629L12.1218 12.1713Z" fill="#141B34"/>
                  </svg>
                </span>

                <label class="programs-main__select-wrap">
                  <select v-model="selectedFormatId" class="programs-main__toolbar-select">
                    <option value="">Формат обучения</option>
                    <option
                      v-for="format in trainingFormats"
                      :key="format.id"
                      :value="format.id"
                    >
                      {{ format.title }}
                    </option>
                  </select>
                  <svg class="programs-main__select-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </label>

                <label class="programs-main__select-wrap">
                  <select v-model="selectedDuration" class="programs-main__toolbar-select">
                    <option value="">Срок обучения</option>
                    <option value="lt20">До 20 часов</option>
                    <option value="20-40">20–40 часов</option>
                    <option value="gt40">Более 40 часов</option>
                  </select>
                  <svg class="programs-main__select-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </label>
              </div>

              <div class="programs-main__toolbar-sort">
                <span class="programs-main__toolbar-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.750005 6.66667C0.335792 6.66666 2.92063e-06 7.00245 0 7.41666C-2.92063e-06 7.83088 0.335781 8.16666 0.749995 8.16667L0.75 7.41667L0.750005 6.66667ZM12.9722 8.16675C13.3864 8.16676 13.7222 7.83097 13.7222 7.41676C13.7222 7.00255 13.3864 6.66676 12.9722 6.66675L12.9722 7.41675L12.9722 8.16675ZM0.75 13.3333C0.335786 13.3333 0 13.6691 0 14.0833C0 14.4975 0.335786 14.8333 0.75 14.8333V14.0833V13.3333ZM8.52778 14.8333C8.94199 14.8333 9.27778 14.4975 9.27778 14.0833C9.27778 13.6691 8.94199 13.3333 8.52778 13.3333V14.0833V14.8333ZM0.75 0C0.335786 0 0 0.335786 0 0.75C0 1.16421 0.335786 1.5 0.75 1.5V0.75V0ZM18.5278 1.5C18.942 1.5 19.2778 1.16421 19.2778 0.75C19.2778 0.335786 18.942 0 18.5278 0V0.75V1.5ZM18.7222 7.41667C18.7222 7.00245 18.3864 6.66667 17.9722 6.66667C17.558 6.66667 17.2222 7.00245 17.2222 7.41667H17.9722H18.7222ZM15.7323 17.4495C15.4436 17.1525 14.9687 17.1457 14.6717 17.4344C14.3747 17.7231 14.3679 18.1979 14.6566 18.495L15.1944 17.9722L15.7323 17.4495ZM21.2878 18.495C21.5765 18.1979 21.5698 17.7231 21.2727 17.4344C20.9757 17.1457 20.5009 17.1525 20.2122 17.4495L20.75 17.9722L21.2878 18.495ZM0.75 7.41667L0.749995 8.16667L12.9722 8.16675L12.9722 7.41675L12.9722 6.66675L0.750005 6.66667L0.75 7.41667ZM0.75 14.0833V14.8333H8.52778V14.0833V13.3333H0.75V14.0833ZM0.75 0.75V1.5H18.5278V0.75V0H0.75V0.75ZM17.9722 20.75H18.7222V7.41667H17.9722H17.2222V20.75H17.9722ZM17.9722 20.75V20C18.0457 20 18.0633 20.0232 18.0058 19.9924C17.9541 19.9648 17.8765 19.9121 17.7731 19.824C17.5655 19.6472 17.3249 19.3894 17.0686 19.087C16.8151 18.7878 16.5674 18.4705 16.3393 18.18C16.1245 17.9066 15.903 17.6251 15.7323 17.4495L15.1944 17.9722L14.6566 18.495C14.759 18.6003 14.9239 18.8065 15.1597 19.1066C15.382 19.3896 15.6488 19.7316 15.9242 20.0567C16.1968 20.3784 16.4996 20.7097 16.8005 20.966C16.9512 21.0944 17.1191 21.2192 17.298 21.315C17.471 21.4075 17.7042 21.5 17.9722 21.5V20.75ZM20.75 17.9722L20.2122 17.4495C20.0415 17.6251 19.8199 17.9066 19.6052 18.18C19.377 18.4705 19.1294 18.7878 18.8759 19.087C18.6196 19.3894 18.3789 19.6472 18.1714 19.824C18.0679 19.9121 17.9903 19.9648 17.9387 19.9924C17.8811 20.0232 17.8987 20 17.9722 20V20.75V21.5C18.2402 21.5 18.4735 21.4075 18.6464 21.315C18.8254 21.2192 18.9932 21.0944 19.144 20.966C19.4449 20.7097 19.7476 20.3784 20.0203 20.0567C20.2957 19.7316 20.5625 19.3896 20.7848 19.1066C21.0205 18.8065 21.1855 18.6003 21.2878 18.495L20.75 17.9722Z" fill="#141B34"/>
                  </svg>
                </span>

                <label class="programs-main__select-wrap">
                  <select v-model="selectedSort" class="programs-main__toolbar-select">
                    <option value="default">По умолчанию</option>
                    <option value="title">По названию</option>
                    <option value="price-asc">По цене (возр.)</option>
                    <option value="price-desc">По цене (убыв.)</option>
                  </select>
                  <svg class="programs-main__select-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 9L12 15L18 9" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </label>

              </div>
            </div>

            <div v-if="programs.length" class="programs-main__grid">
              <ProgramCard
                v-for="program in programs"
                :key="program.id"
                :to="program.to"
                :category="program.category"
                :category-icon="program.categoryIcon"
                :title="program.title"
                :description="program.description"
                :duration="program.duration"
                :format="program.format"
                :price="program.price"
                :registration-open="program.registrationOpen"
                :hit="program.hit"
              />
            </div>

            <div v-else class="programs-main__empty">
              <div class="programs-main__empty-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="10" width="36" height="28" rx="4" stroke="#C4A24A" stroke-width="2"/>
                  <path d="M6 18H42" stroke="#C4A24A" stroke-width="2"/>
                  <path d="M16 28H32" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
                  <path d="M16 34H26" stroke="#7E7F81" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h2 class="programs-main__empty-title">Программы не найдены</h2>
              <p class="programs-main__empty-text">
                Пока нет доступных курсов. Загляните позже или выберите направление в меню слева.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AccreditationBanner
      v-if="banner"
      :title="banner.title || ''"
      :description="banner.text || ''"
      :image="mediaUrl(banner.image)"
    />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const mediaUrl = useStrapiMedia()

const pageQuery = new URLSearchParams({
  'populate[banner_section][populate]': 'image',
  'populate[Seo][populate][shareImage]': 'true',
  'populate[Seo][populate][twitterImage]': 'true',
}).toString()

const { data: pageData } = await useAsyncData('page-all-program', () =>
  $fetch(`/api/page-all-program?${pageQuery}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null),
)

const { data: categoriesData } = await useAsyncData('programs-categories', async () => {
  const params = new URLSearchParams({
    'pagination[pageSize]': '100',
    sort: 'title:asc',
  })

  const response = await $fetch(`/api/programs-categories?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || []
})

const page = computed(() => pageData.value?.data ?? {})
const pageTitle = computed(() => page.value.title || '')
const pageSubtitle = computed(() => page.value.subtitle || '')
const banner = computed(() => page.value.banner_section ?? null)

const categories = computed(() =>
  (categoriesData.value || [])
    .filter((item) => item?.slug && item?.title)
    .map((item) => ({
      title: item.title,
      slug: item.slug,
      popular: Boolean(item.popular),
    })),
)

const popularCategories = computed(() => categories.value.filter((item) => item.popular))
const otherCategories = computed(() => categories.value.filter((item) => !item.popular))


function formatDuration(hours) {
  if (hours == null || hours === '') return ''
  const value = Number(hours)
  if (Number.isNaN(value)) return ''
  const n = Math.floor(value)
  const mod10 = n % 10
  const mod100 = n % 100
  let word = 'часов'
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) word = 'час'
    else if (mod10 >= 2 && mod10 <= 4) word = 'часа'
  }
  return `${value} ${word}`
}

function formatPrice(price) {
  if (price == null || price === '') return ''
  return `${Number(price).toLocaleString('ru-RU')} ₽`
}

function mapProgram(item) {
  return {
    id: item.documentId || item.id,
    to: item.slug ? `/programs/${item.slug}` : '/programs',
    typeId: item.programs_type?.documentId || item.programs_type?.id || null,
    formatId: item.programs_training_format?.documentId || item.programs_training_format?.id || null,
    category: item.programs_type?.title || '',
    categoryIcon: mediaUrl(item.programs_type?.icon) || '',
    title: item.title || '',
    description: item.short_description || '',
    hours: item.duration_of_study_hours == null ? null : Number(item.duration_of_study_hours),
    duration: formatDuration(item.duration_of_study_hours),
    format: item.programs_training_format?.title || '',
    priceValue: item.price_rub == null ? null : Number(item.price_rub),
    price: formatPrice(item.price_rub),
    registrationOpen: item.registration_is_open !== false,
    hit: Boolean(item.best_seller),
    categorySlug: item.programs_category?.slug || '',
  }
}


const route = useRoute()
const router = useRouter()

const initialQuery = typeof route.query.q === 'string' ? route.query.q : ''
const searchQuery = ref(initialQuery)
const activeSearch = ref(initialQuery.trim())
const selectedTypeId = ref(null)
const selectedFormatId = ref('')
const selectedDuration = ref('')
const selectedSort = ref('default')

function resetFilters() {
  selectedTypeId.value = null
  selectedFormatId.value = ''
  selectedDuration.value = ''
  selectedSort.value = 'default'
}

function syncSearchQuery(query) {
  const nextQuery = query ? { q: query } : {}
  router.replace({ query: nextQuery })
}

function applySearch() {
  resetFilters()
  activeSearch.value = searchQuery.value.trim()
  syncSearchQuery(activeSearch.value)
}

function clearSearch() {
  searchQuery.value = ''
  activeSearch.value = ''
  resetFilters()
  syncSearchQuery('')
}

watch(
  () => route.query.q,
  (value) => {
    const query = typeof value === 'string' ? value : ''
    if (query === activeSearch.value) return
    searchQuery.value = query
    activeSearch.value = query.trim()
    if (activeSearch.value) resetFilters()
  },
)

const { data: formatsData } = await useAsyncData('programs-training-formats', async () => {
  const params = new URLSearchParams({
    'pagination[pageSize]': '100',
    sort: 'title:asc',
  })

  const response = await $fetch(`/api/programs-training-formats?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || []
})

const trainingFormats = computed(() =>
  (formatsData.value || [])
    .filter((item) => item?.title)
    .map((item) => ({
      id: item.documentId || item.id,
      title: item.title,
    })),
)


const { data: typesData } = await useAsyncData('programs-types', async () => {
  const params = new URLSearchParams({
    'pagination[pageSize]': '100',
    sort: 'title:asc',
    'populate[icon]': 'true',
  })

  const response = await $fetch(`/api/programs-types?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || []
})

const programTypes = computed(() =>
  (typesData.value || [])
    .filter((item) => item?.title)
    .map((item) => ({
      id: item.documentId || item.id,
      title: item.title,
      icon: mediaUrl(item.icon) || '',
    })),
)

const { data: programsData } = await useAsyncData('programs-list', async () => {
  const params = new URLSearchParams({
    'pagination[pageSize]': '200',
    sort: 'title:asc',
    'populate[programs_type][populate]': 'icon',
    'populate[programs_training_format]': 'true',
    'populate[programs_category]': 'true',
  })

  const response = await $fetch(`/api/programs?${params}`, {
    baseURL: config.public.apiUrl,
  }).catch(() => null)

  return response?.data || []
})

const allPrograms = computed(() =>
  (programsData.value || [])
    .filter((item) => item?.slug && item?.title)
    .map(mapProgram),
)

const programs = computed(() => {
  let list = [...allPrograms.value]

  if (activeSearch.value) {
    const query = activeSearch.value.toLowerCase()
    list = list.filter((item) =>
      item.title.toLowerCase().includes(query)
      || item.description.toLowerCase().includes(query),
    )
  } else {
    if (selectedTypeId.value != null) {
      list = list.filter((item) => item.typeId === selectedTypeId.value)
    }

    if (selectedFormatId.value) {
      list = list.filter((item) => String(item.formatId) === String(selectedFormatId.value))
    }

    if (selectedDuration.value === 'lt20') {
      list = list.filter((item) => item.hours != null && item.hours < 20)
    } else if (selectedDuration.value === '20-40') {
      list = list.filter((item) => item.hours != null && item.hours >= 20 && item.hours <= 40)
    } else if (selectedDuration.value === 'gt40') {
      list = list.filter((item) => item.hours != null && item.hours > 40)
    }

    if (selectedSort.value === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'ru'))
    } else if (selectedSort.value === 'price-asc') {
      list.sort((a, b) => (a.priceValue ?? Infinity) - (b.priceValue ?? Infinity))
    } else if (selectedSort.value === 'price-desc') {
      list.sort((a, b) => (b.priceValue ?? -Infinity) - (a.priceValue ?? -Infinity))
    }
  }

  return list
})

const seo = computed(() => page.value.Seo ?? null)
useSeoFromStrapi(seo, mediaUrl)

useHead({
  title: () => seo.value?.metaTitle || pageTitle.value || undefined,
})
</script>
