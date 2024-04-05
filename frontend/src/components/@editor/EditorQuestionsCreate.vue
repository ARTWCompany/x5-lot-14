<script setup lang="ts">
import { ref, type Ref } from 'vue';
const title: Ref<null | string> = ref(null)
const items = [
  {label: 'Один из списка', value: 'one-of-list'},
  {label: 'Несколько из списка', value: 'some-of-list'},
  {label: 'Текст', value: 'text'},
  {label: 'Шкала', value: 'scale'},
  {label: 'Балы', value: 'grade'}
];
const currentItem = ref(items[0])
const description = ref('')
const selectedOptions = ref([])
</script>

<template>
  <section class="editor-questions-create">
    <v-text-field
        v-model="title"
        class="editor-name__input"
        density="compact"
        placeholder="Введите название"
        variant="solo"
    >
    </v-text-field>
    <v-select
        v-model="currentItem"
        :items="items"
        item-title="label"
        item-value="value"
        density="compact"
        variant="solo"
        return-object
    ></v-select>
    <v-textarea
        v-model="description"
        label="Введите описание"
        variant="solo"
    >
    </v-textarea>
    <div class="editor-questions-create__add-variant">
      <v-btn
          height="46"
          variant="plain"
          size="small"
      >
        <template #prepend>
          <v-icon icon="mdi-plus"/>
        </template>
        Добавить вариант
      </v-btn>
    </div>
    <div class="editor-questions-create__options">
      <v-checkbox
          v-model="selectedOptions"
          value="required"
          label="Обязательный вопрос"
      ></v-checkbox>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .editor-questions-create {
    display: grid;
    grid-template-columns: 1fr 352px;
    gap: 0 10px;

    &__add-variant {
      padding-top: 10px;
      grid-column: 1 / -1;
      margin-bottom: 124px;
    }

    &__options {
      display: flex;
      flex-direction: column;
      grid-column: 1 / -1;
      gap: 10px;
      align-items: flex-end;
    }
  }
</style>
