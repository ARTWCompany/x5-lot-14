<script setup lang="ts">
import {
  ref,
  toRefs,
  type Ref
} from "vue";
import type {
  QuestionType
} from "@/shared/types/@editor";

interface Props extends QuestionType {
  index: number
}

const MAX_GRADE = 5;
const MIN_GRADE = 1;

const props = defineProps<Props>();
const { variants } = toRefs(props.options);

const selectedAnswers = ref([]);
const answerText = ref('');
const grade = ref(MAX_GRADE);
const range: Ref<(string | number)[]> = ref([MIN_GRADE, MAX_GRADE]);
</script>

<template>
  <div class="editor-complete-question">
    <b class="editor-complete-question__question">
      {{ index + 1}}. {{ title }}
    </b>
    <p class="editor-complete-question__description">
      {{ description }}
    </p>
    <div
        v-if="type === 'one-of-list' && variants?.length"
        class="editor-complete-question__answers"
    >
      <v-radio-group>
        <v-radio
            v-for="variant in variants"
            :key="variant.value"
            :label="variant.label"
            :value="variant.value"
        >
        </v-radio>
      </v-radio-group>
    </div>
    <div
        v-else-if="type === 'some-of-list'  && variants?.length"
        class="editor-complete-question__answers"
    >
      <v-checkbox
          v-for="variant in variants"
          :key="variant.value"
          v-model="selectedAnswers"
          :label="variant.label"
          :value="variant.value"
          density="comfortable"
          hide-details
      ></v-checkbox>
    </div>
    <div
        v-else-if="type === 'text'"
        class="editor-complete-question__answers"
    >
      <v-textarea
          v-model="answerText"
          label="Ваш вариант..."
          variant="solo"
      >
      </v-textarea>
    </div>
    <div
        v-else-if="type === 'grade'"
        class="editor-complete-question__answers"
    >
      <v-tabs
          v-model="grade"
          align-tabs="start"
          color="black"
      >
        <v-tab
            v-for="grade in MAX_GRADE"
            :value="grade"
            :key="grade"
            border
            size="small"
        >
          {{ grade }}
        </v-tab>
      </v-tabs>
    </div>
    <div
        v-else-if="type === 'scale'"
        class="editor-complete-question__answers"
    >
      <v-range-slider
          v-model="range"
          class="editor-complete-question__slider"
          :max="MAX_GRADE"
          :min="MIN_GRADE"
          :step="1"
      >
        <template v-slot:prepend>
          <v-text-field
              v-model="range[0]"
              density="compact"
              style="width: 70px;"
              type="number"
              variant="outlined"
              hide-details
              single-line
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
              v-model="range[1]"
              density="compact"
              style="width: 70px;"
              type="number"
              variant="outlined"
              hide-details
              single-line
          ></v-text-field>
        </template>
      </v-range-slider>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .editor-complete-question {
    &__question {
      display: block;
      font-size: 20px;
      line-height: 1.2rem;
      font-weight: 600;
      margin-bottom: 16px;
    }

    &__description {
      margin-bottom: 22px;
    }

    &__slider {
      width: 450px;
    }
  }
</style>
