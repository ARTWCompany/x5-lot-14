<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

const props = defineProps<{
  name: string
  mail: string
  date: number
}>()

const formattedDate = computed(() => {
  return `Дата прохождения: ${dayjs(props.date).format('DD.MM.YYYY hh:mm')}`
})
</script>

<template>
  <div class="editor-respondents-card">
    <div class="editor-respondents-card__container">
      <div class="editor-respondents-card__name">{{ name }}</div>
      <div class="editor-respondents-card__mail">{{ mail }}</div>
    </div>
    <div class="editor-respondents-card__date">
      {{ formattedDate }}
    </div>
    <div>
      <v-btn
          class="bg-white"
          size="small"
          variant="text"
          icon=""
      >
        <i class="material-icons">more_vert</i>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .editor-respondents-card {
    display: grid;
    grid-template-columns: 400px 1fr 40px;
    gap: 30px;
    align-items: center;
    font-size: 22px;
    line-height: 1;
    font-weight: 400;

    &__name {
      margin-bottom: 10px;
      font-weight: 500;
    }

    &__date {
      text-align: center;
    }
  }
</style>
