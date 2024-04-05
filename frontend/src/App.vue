<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";

const NAVIGATION = [
  {
    link: '/',
    label: 'Мои опросы'
  },
  {
    link: '/users',
    label: 'Пользователи'
  },
  {
    link: '/black-list',
    label: 'Черный список'
  }
]
</script>

<template>
  <v-app class="app bg-grey-lighten-4">
    <the-header
        class="app__header"
        :nav="NAVIGATION"
    />
    <div class="app__main">
      <v-main>
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<style scoped lang="scss">
.app {
  &__main {
    padding: 0 70px 70px;
  }

  &__header {
    margin-bottom: 56px;
  }
}
</style>
