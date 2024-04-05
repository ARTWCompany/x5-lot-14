<script setup lang="ts">
import EditorRespondentsCard from "@/components/@editor/EditorRespondentsCard.vue";
const respondents = [
  {
    id: 1,
    name: 'Мухин Иван Георгиевич',
    mail: 'mukhin.ig@mail.ru',
    date: 1711204012763,
  },
  {
    id: 2,
    name: 'Борисова Вероника Егоровна',
    mail: 'borisova.veronika@yandex.ru',
    date: 1711229912763,
  },
  {
    id: 3,
    name: 'Лебедева Карина Матвеевна',
    mail: 'karina05@mail.ru',
    date: 1713454012763,
  },
  {
    id: 4,
    name: 'Смирнова Виктория Александровна',
    mail: 'vik.smirnova@gmail.com',
    date: 1711299912763,
  }
]
</script>

<template>
  <section class="editor-respondents">
    <h3 class="visually-hidden">Условия</h3>
    <ul class="editor-respondents__list">
      <li
          v-for="respondent in respondents"
          :key="respondent.id"
          class="editor-respondents__block"
      >
        <editor-respondents-card
            :date="respondent.date"
            :mail="respondent.mail"
            :name="respondent.name"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  .editor-respondents {
    &__list {
      list-style: none;
    }

    &__block {
      margin-bottom: 16px;
      padding: 32px 24px 32px 76px;
      background: white;
      border-radius: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
