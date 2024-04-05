<script setup lang="ts">
import {
  computed,
  ref
} from 'vue';
import {plural} from "@/shared/lib/utils/text-utils";

const variants = [
  {
    label: 'Разрешить многоразовое отправление?',
    value: 1
  },
  {
    label: 'Распределение по городам',
    value: 2
  }
];

const respondentsCount = ref(0);
const respondentsYearsOld = ref(0);
const selectedVariants = ref([]);

const fieldRules = [
  (value: number) => {
    if (value) return true

    return 'Поле обязательно для заполнения'
  },
];

const respondentsSuffix = computed(() => plural(respondentsCount.value, ['человек', 'человека', 'человек']))
const respondentsYearsOldSuffix = computed(() => plural(respondentsYearsOld.value, ['год', 'года', 'лет']))

</script>

<template>
  <section class="editor-conditions">
    <h3 class="visually-hidden">Условия</h3>
    <div class="editor-conditions__block">
      <label class="editor-conditions__label editor-conditions__label--split">
        Максимальное количество респондентов
        <v-text-field
            type="number"
            v-model="respondentsCount"
            :rules="fieldRules"
            :suffix="respondentsSuffix"
            density="compact"
            variant="solo"
            hide-details
        ></v-text-field>
      </label>
      <label class="editor-conditions__label editor-conditions__label--split">
        Возрастное ограничение
        <v-text-field
            type="number"
            v-model="respondentsYearsOld"
            :rules="fieldRules"
            :suffix="respondentsYearsOldSuffix"
            density="compact"
            variant="solo"
            hide-details
        ></v-text-field>
      </label>
      <label
          v-for="variant in variants"
          :key="variant.value"
          class="editor-conditions__label editor-conditions__label--checkbox"
      >
        {{ variant.label }}
        <v-checkbox
            v-model="selectedVariants"
            :value="variant.value"
            density="comfortable"
            hide-details
        ></v-checkbox>
      </label>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .editor-conditions {
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
      min-height: 48px;
      margin-bottom: 10px;

      &--split {
        display: grid;
        grid-template-columns: 1fr 240px;
        gap: 20px;
      }

      &--checkbox {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
      }
    }
  }
</style>
