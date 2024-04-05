<script setup lang="ts">

</script>

<template>
  <section class="editor-sections">
    <h3 class="editor-sections__title">
      Раздел 1
    </h3>
    <v-divider  class="editor-sections__divider" />
    <v-btn
      height="46"
      variant="plain"
      size="large"
    >
      <template #prepend>
        <v-icon icon="mdi-plus"/>
      </template>
      Добавить раздел
    </v-btn>
  </section>
</template>

<style scoped lang="scss">
  .editor-sections {
    padding: 64px 40px;
    background-color: white;
    border-radius: 10px;

    &__divider {
      margin-bottom: 28px;
    }

    &__title {
      margin-bottom: 30px;
      padding-left: 25px;
      font-size: 24px;
      font-weight: 500;
      line-height: 1;
    }
  }
</style>
