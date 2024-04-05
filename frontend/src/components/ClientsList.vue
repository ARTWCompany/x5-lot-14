<script setup lang="ts">
import {
  computed,
  reactive
} from "vue";
import { plural } from "@/shared/lib/utils/text-utils";

const clients = reactive({
    count: 100,

    results: [
      {
        id: 1,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)-00-000',
        email: 'a@b.ru'
      },
      {
        id: 2,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)-00-000',
        email: 'a@b.ru'
      },
      {
        id: 3,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)-00-000',
        email: 'a@b.ru'
      },
      {
        id: 4,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)-00-000',
        email: 'a@b.ru'
      },
      {
        id: 5,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)-00-000',
        email: 'a@b.ru'
      }
    ]
  })

  const clientCountText = computed(() => `${ clients.count } ${plural(clients.count, ['клиент', 'клиента', 'клиентов'])}`)
</script>

<template>
  <table class="client-list">
    <caption class="client-list__caption">
      <b>{{ clientCountText }}</b>
    </caption>
    <tbody>
      <tr>
        <th>
          <v-checkbox
              label="Клиент"
              density="comfortable"
              hide-details
          ></v-checkbox>
        </th>
        <th>ID</th>
        <th>Номер телефона</th>
        <th>Email</th>
      </tr>
      <tr
          v-for="client in clients.results"
          :key="client.id"
      >
        <td>
          <v-checkbox
              :label="client.name"
              density="comfortable"
              hide-details
          ></v-checkbox>
        </td>
        <td>
          <span>
            {{ client.id }}
          </span>
        </td>
        <td>
          <span v-if="client.phone">
            {{ client.phone }}
          </span>
        </td>
        <td>
          <span v-if="client.email">
            {{ client.email }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
  .client-list {
    width: 100%;
    text-align: left;

    &__caption {
      text-align: left;
    }
  }
</style>
