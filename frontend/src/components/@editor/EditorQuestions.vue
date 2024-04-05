<script setup lang="ts">
import {
  ref,
  type Ref
} from "vue";

import EditorQuestionsCreate from "@/components/@editor/EditorQuestionsCreate.vue";
import EditorCompleteQuestion from "@/components/@editor/EditorCompleteQuestion.vue";

import type { QuestionType } from "@/shared/types/@editor";

const completeQuestions: Ref<QuestionType[]> = ref(
    [
      {
        id: 1,
        title: 'Оцените ассортимент товаров',
        description: 'Устраивает ли вас разнообразие товаров на прилавке?',
        type: 'one-of-list',
        options: {
          variants: [
            {
              label: 'Устраивает',
              value: 1
            },
            {
              label: 'Не устраивает',
              value: 2
            }
          ]
        },
      },
      {
        id: 2,
        title: 'Оцените ассортимент товаров',
        description: 'Устраивает ли вас разнообразие товаров на прилавке?',
        type: 'some-of-list',
        options: {
          variants: [
            {
              label: 'Устраивает',
              value: 1
            },
            {
              label: 'Не устраивает',
              value: 2
            }
          ]
        },
      },
      {
        id: 3,
        title: 'Каких товаров вы хотели бы видеть больше',
        description: 'Здесь вы можете предложить марки или категории товаров, которых по вашему мнению не хватает в нашем магазине',
        type: 'text',
        options: {},
      },
      {
        id: 4,
        title: 'Как вы оцениваете компетентность консультантов',
        description: 'Оцените по 5-ти бальной шкале компетентность работников магазина, где 1 - не удовлетворительно, 5 - идеально',
        type: 'grade',
        options: {},
      },
      {
        id: 5,
        title: 'Как вы оцениваете компетентность консультантов',
        description: 'Оцените по 5-ти бальной шкале компетентность работников магазина, где 1 - не удовлетворительно, 5 - идеально',
        type: 'scale',
        options: {},
      }
    ]
)
</script>

<template>
  <section class="editor-questions">
    <div class="editor-questions__block">
      <editor-questions-create></editor-questions-create>
    </div>
    <ul
        v-if="completeQuestions?.length"
        class="editor-questions__list"
    >
      <li
          v-for="(question, index) in completeQuestions"
          :key="question.id"
          class="editor-questions__block"
      >
        <editor-complete-question
            :index="index"
            :description="question.description"
            :id="question.id"
            :title="question.title"
            :type="question.type"
            :options="question.options"
        >
        </editor-complete-question>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
  .editor-questions {
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
      margin-top: 44px;
      list-style: none;
    }
  }
</style>
