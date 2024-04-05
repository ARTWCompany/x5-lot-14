<script setup lang="ts">
import {ref, computed, defineAsyncComponent} from 'vue';
import EditorName from "@/components/@editor/EditorName.vue";
import EditorSections from "@/components/@editor/EditorSections.vue";

const NAV_ITEMS = [
  {
    name: 'Вопросы',
    component: defineAsyncComponent(() => import('@/components/@editor/EditorQuestions.vue'))
  },
  {
    name: 'Параметры',
    component: defineAsyncComponent(() => import('@/components/@editor/EditorParams.vue'))
  },
  {
    name: 'Логика',
    component: defineAsyncComponent(() => import('@/components/@editor/EditorLogic.vue'))
  },
  {
    name: 'Условия',
    component:  defineAsyncComponent(() => import('@/components/@editor/EditorConditions.vue'))
  },
  {
    name: 'Респонденты',
    component: defineAsyncComponent(() => import('@/components/@editor/EditorRespondents.vue'))
  }
]

const tab = ref(0);
const component = computed(() => NAV_ITEMS[tab.value].component)
</script>
<template>
  <section class="survey-page">
    <h1 class="visually-hidden">Добавить опрос</h1>
    <editor-name class="survey-page__name"/>
    <div class="survey-page__content">
      <nav class="survey-page__nav">
        <v-tabs
            v-model="tab"
            align-tabs="start"
            color="black"
        >
          <v-tab
              v-for="(navItem, index) in NAV_ITEMS" :value="index"
              class="survey-page__tab"
              :key="navItem.name"
          >
            {{ navItem.name }}
          </v-tab>
        </v-tabs>
      </nav>
      <div class="survey-page__editor">
        <keep-alive>
          <component :is="component"></component>
        </keep-alive>
      </div>
      <editor-sections class="survey-page__section"></editor-sections>
    </div>

  </section>
</template>


<style lang="scss" scoped>
  .survey-page {
    &__nav {
      display: flex;
      align-items: center;
      min-height: 126px;
      padding: 24px;
      background-color: #fff;
      border-radius: 10px;
    }

    &__name {
      margin-bottom: 28px;
    }

    &__tab {
      margin: 0 24px;
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr 482px;
      grid-template-rows: auto 1fr;
      gap: 50px;
    }

    &__editor {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    &__section {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
</style>
