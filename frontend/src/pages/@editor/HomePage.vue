<template>
  <section class="home-page">
    <tool-bar
        title="Мои опросы"
        class="home-page__toolbar"
    >
      <v-btn
          class="bg-grey-darken-1 flex-grow-1"
          to="/create-survey"
          height="48"
          variant="flat"
          rounded="5"
      >
        Создать
      </v-btn>
    </tool-bar>
    <survey-list class="home-page__list"></survey-list>
  </section>
</template>

<script setup lang="ts">
import ToolBar from "@/components/ToolBar.vue";
import SurveyList from "@/components/SurveyList.vue";
</script>

<style lang="scss" scoped>
  .home-page {
    &__toolbar {
      margin-bottom: 18px;
    }
  }
</style>
