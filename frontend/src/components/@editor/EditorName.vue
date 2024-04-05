<script setup lang="ts">
  import { ref } from 'vue';
  const name = ref('Название нового опроса')
</script>

<template>
  <div class="editor-name">
    <v-text-field
        v-model="name"
        class="editor-name__input"
        placeholder="Введите название опроса"
        type="text"
        variant="plain"
    >
    </v-text-field>
    <v-btn
        class="bg-white flex-grow-1"
        height="56"
        width="140"
        variant="outlined"
        rounded="5"
    >
      Отменить
    </v-btn>
    <v-btn
        class="bg-grey-darken-1 flex-grow-1"
        height="56"
        width="188"
        variant="flat"
        rounded="5"
    >
      Сохранить
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
  .editor-name {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;

    &__input {
      :deep(input) {
        font-size: 34px;
        line-height: 1;
        font-weight: 600;
      }
    }
  }
</style>
