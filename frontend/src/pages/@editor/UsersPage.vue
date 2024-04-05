<template>
  <section class="users-page">
    <tool-bar
        title="Пользователи"
        class="users-page__toolbar"
    >
      <v-btn
          class="bg-grey-darken-1 flex-grow-1"
          height="48"
          variant="flat"
          rounded="5"
      >
        ДОБАВИТЬ
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
  .users-page {
    &__toolbar {
      margin-bottom: 18px;
    }
  }
</style>
