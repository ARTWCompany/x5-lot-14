<script setup lang="ts">
import {ref} from "vue";

export interface Props {
  title?: string
  index?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Связь',
  index: 1,
})

const variants = [
  {
    label: 'Первый вариант',
    value: 1
  },
  {
    label: 'Второй вариант',
    value: 2
  },
  {
    label: 'Третий вариант',
    value: 3
  },
  {
    label: 'Четвертый вариант',
    value: 4
  }
]
const currentVariant = ref(variants[0])

</script>

<template>
  <section class="editor-logic">
    <h3 class="visually-hidden">Логика опроса</h3>
    <div class="editor-logic__block">
      <b>{{ index }}. {{ title }}</b>
      <ul class="editor-logic__list">
        <li>
          <div class="editor-logic__group">
            <span class="editor-logic__subtitle">Если</span>
            <v-select
                v-model="currentVariant"
                class="editor-logic__select editor-logic__select--main"
                :items="variants"
                item-title="label"
                item-value="value"
                density="compact"
                variant="solo"
                return-object
            ></v-select>
            <v-select
                v-model="currentVariant"
                :items="variants"
                item-title="label"
                item-value="value"
                density="compact"
                variant="solo"
                return-object
            ></v-select>
            <v-select
                v-model="currentVariant"
                :items="variants"
                item-title="label"
                item-value="value"
                density="compact"
                variant="solo"
                return-object
            ></v-select>
          </div>
        </li>
        <li>
          <div class="editor-logic__group">
            <span class="editor-logic__subtitle">Тогда</span>
            <v-select
                v-model="currentVariant"
                class="editor-logic__select editor-logic__select--main"
                :items="variants"
                item-title="label"
                item-value="value"
                density="compact"
                variant="solo"
                return-object
            ></v-select>
            <v-select
                v-model="currentVariant"
                class="editor-logic__select editor-logic__select--main"
                :items="variants"
                item-title="label"
                item-value="value"
                density="compact"
                variant="solo"
                return-object
            ></v-select>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .editor-logic {
    &__block {
      margin-bottom: 44px;
      padding: 32px 76px;
      background: white;
      border-radius: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 74px;
      list-style: none;
    }

    &__group {
      display: grid;
      grid-template-columns: 100px 1fr 1fr;
      gap: 16px;

      &:first-child {
        grid-column: 1 / -1;
      }
    }

    &__subtitle {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    &__select--main {
      grid-column: 2 / -1;
    }
  }
</style>
