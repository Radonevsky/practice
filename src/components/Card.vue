<template>
  <div class="card">
    <h2 class="card__title">
      {{ getCardName }}
    </h2>
    <img class="card__img" src="../assets/mech.jpg" alt="mech">
    <span class="card__description-title">About me</span>
    <span class="card__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Deleniti dicta dignissimos error fugit neque nesciunt optio reprehenderit! Accusamus
      amet beatae consequatur corporis dignissimos esse illum odit quas quia vitae, voluptates?
      eligendi error harum id iusto laboriosam laudantium libero molestiae molestias non nulla tatum
    </span>
    <div class="card__clients-count">
      <p>My clients: {{ clients.length }}</p>
      <ul>
        <li
          v-for="(client, index) in clients"
          :key="index"
        >
         {{ `${index + 1} ${getClients(client)}` }}
        </li>
      </ul>
      <div class="pagination">
        <button class="pagination__prev"
                @click="currentPage--">Previous</button>
        <button class="pagination__pages"
                v-for="page in pageCount"
                :key="page"
                @click="currentPage = page"
        >
          {{ page }}
        </button>
        <button class="pagination__prev" @click="currentPage++">Next</button>
        <p class="pages">{{ `Page ${currentPage} of ${pageCount}` }}</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      firsName: 'Ivan',
      secondName: 'Vasilich',
      lastName: 'Mechanikov',
      pageCount: 3,
      currentPage: 1,
      clients: [
        {
          name: 'Vasiliy',
          car: 'Lada',
          condition: 'total'
        },
        {
          name: 'Vano',
          car: 'MarkII',
          condition: 'lite'
        },
        {
          name: 'Kostya',
          car: 'BMW',
          condition: 'total'
        },
        {
          name: 'Jhon',
          car: 'Cadillac',
          condition: 'hard'
        }
      ]
    }
  },
  computed: {
    getCardName () {
      return `${this.firsName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },
  methods: {
    getClients (client) {
      return `${client.name} ${client.car} ${client.condition}`
    },
    loadUsers (page) {
      console.log(`Load users for page ${page}`)
    }
  },
  watch: {
    currentPage (page) {
      this.loadUsers(page)
    }
  }
}
</script>

<style>
.card {
  border-top: 3px solid aquamarine;
  display: flex;
  flex-direction: column;
}

.card__img {
  display: block;
  width: 300px;
}

.card__description-title {
  font-weight: bold;
}
</style>
