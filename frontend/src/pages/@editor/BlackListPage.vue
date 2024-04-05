<template>
  <section class="black-list-page">
    <tool-bar
        title="Заблокированные пользователи"
        class="black-list-page__toolbar"
    >
      <v-btn
          class="bg-grey-darken-1 flex-grow-1"
          height="48"
          variant="flat"
          rounded="5"
      >
        Выбрать
      </v-btn>
    </tool-bar>
    <users-list class="users-page__list"/>
  </section>
</template>

<script setup lang="ts">
import ToolBar from "@/components/ToolBar.vue";
import UsersList from "@/components/UsersList.vue";
</script>

<style lang="scss" scoped>
  .black-list-page {
    &__toolbar {
      margin-bottom: 18px;
    }
  }
</style>
