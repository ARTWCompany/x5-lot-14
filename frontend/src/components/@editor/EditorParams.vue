<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const finalDescription = ref('')

const langs = [
  {label: 'Русский', value: 'ru'},
  {label: 'Английский', value: 'en'},
  {label: 'Немецкий', value: 'de'},
];

const variants = [
  {
    label: 'Разрешить многоразовое отправление?',
    value: 1
  },
  {
    label: 'Автоматическая прокрутка вопросов',
    value: 2
  },
  {
    label: 'Шкала заполнения по разделам',
    value: 3
  },
  {
    label: 'Разрешить промежуточное сохранение',
    value: 4
  }
]

const currentLang = ref(langs[0])
const selectedVariants = ref([]);
</script>

<template>
  <section class="editor-params">
    <h3 class="visually-hidden">Параметры опроса</h3>
    <div class="editor-params__block">
      <label class="editor-params__label">
        Название опроса
        <v-text-field
            v-model="title"
            class="editor-params__input"
            placeholder="Введите название опроса"
            type="text"
            variant="solo"
            density="compact"
        >
        </v-text-field>
      </label>
      <label class="editor-params__label">
        Описание
        <v-textarea
            v-model="description"
            class="editor-params__input"
            placeholder="Это лишь небольшой перечень вопросов для того, чтобы понять чего не хватает нашим покупателям и как улучшить наш сервис"
            type="text"
            :rows="2"
            variant="solo"
            density="compact"
        >
        </v-textarea>
      </label>
      <label class="editor-params__label">
        Финальный текст
        <v-textarea
            v-model="finalDescription"
            class="editor-params__input"
            placeholder="Спасибо, за потраченное время. Благодаря вашим ответам мы становимся лучше!"
            type="text"
            :rows="2"
            variant="solo"
            density="compact"
        >
        </v-textarea>
      </label>
    </div>
    <div class="editor-params__block">
      <label class="editor-params__label editor-params__label--split">
        Язык анкеты
        <v-select
            v-model="currentLang"
            :items="langs"
            item-title="label"
            item-value="value"
            density="compact"
            variant="solo"
            return-object
        ></v-select>
      </label>
      <v-checkbox
          v-for="variant in variants"
          :key="variant.value"
          v-model="selectedVariants"
          :label="variant.label"
          :value="variant.value"
          density="comfortable"
          hide-details
      ></v-checkbox>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .editor-params {
    &__block {
      margin-bottom: 44px;
      padding: 32px 76px;
      background: white;
      border-radius: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__label {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &--split {
        display: grid;
        grid-template-columns: 1fr 240px;
        gap: 20px;
      }
    }
  }
</style>
