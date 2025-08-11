<!-- <template>
    <div>
        <h2>Відгуки</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reating</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(review, index) in reviews" :key="index">
                    <td>{{ review.Name }}</td>
                    <td>{{ review.Reating }}</td>
                    <td>{{ review.Comment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import Papa from 'papaparse';

export default {
    data() {
        return {
            reviews: [],
        }
    },
        created(){
            const csvContent = 
            `Name,Reating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.`
Papa.parse(csvContent.trim(), {
header: true,
complete: (result) => {
this.reviews = result.data;
},
});
},
        
    }

</script>

 <style scoped>
    h2 {
      text-align: center;
    }
    table {
      width: 90%;
      margin: 0 auto; /* Відцентрування таблиці */
    }
    th, td {
      background-color: #f8f9fa;
      padding: 4px; /* Внутрішні відступи */
    }
  </style> -->
<template>
  <div>
    <h2>Відгуки</h2>

    <div class="filters">
      <input
        v-model="filterText"
        type="text"
        placeholder="Пошук відгуків..."
        class="filter-input"
      />

      <select v-model="selectedRating" class="rating-select">
        <option value="">Всі рейтинги</option>
        <option v-for="rate in uniqueRatings" :key="rate" :value="rate">
          Рейтинг {{ rate }}
        </option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(review, index) in filteredReviews" :key="index">
          <td>{{ review.Name }}</td>
          <td>{{ review.Reating }}</td>
          <td>{{ review.Comment }}</td>
        </tr>
        <tr v-if="filteredReviews.length === 0">
          <td colspan="3" class="no-results">Відгуки не знайдені</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Papa from "papaparse";

export default {
  data() {
    return {
      reviews: [],
      filterText: "",
      selectedRating: "",
    };
  },
  created() {
    const csvContent = `Name,Reating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.
Оксана,3,Все добре, але доставка трохи затрималась.
Петро,2,Товар прийшов з дефектом, але повернули гроші.
Наталя,4,Загалом задоволена, але хотілося б більше асортименту.
Віктор,5,Відмінний сервіс і якість продукції.
Людмила,1,Не задоволена обслуговуванням, довго чекала на відповідь.
Ігор,3,Прийшло не зовсім те, що замовляв, але підтримка допомогла.`;

    Papa.parse(csvContent.trim(), {
      header: true,
      complete: (result) => {
        this.reviews = result.data;
      },
    });
  },
  computed: {
    uniqueRatings() {
      // Зібрати унікальні рейтинги і відсортувати
      const ratings = this.reviews
        .map((r) => r.Reating)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((a, b) => b - a);
      return ratings;
    },
    filteredReviews() {
      let filtered = this.reviews;

      if (this.filterText) {
        const filter = this.filterText.toLowerCase();
        filtered = filtered.filter((review) => {
          return (
            review.Name.toLowerCase().includes(filter) ||
            review.Comment.toLowerCase().includes(filter)
          );
        });
      }

      if (this.selectedRating) {
        filtered = filtered.filter(
          (review) => review.Reating === this.selectedRating
        );
      }

      return filtered;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 15px;
}
.filters {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.filter-input {
  width: 250px;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline-color: #2980b9;
  transition: border-color 0.3s ease;
}
.filter-input:focus {
  border-color: #2980b9;
}

.rating-select {
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  outline-color: #2980b9;
  transition: border-color 0.3s ease;
}
.rating-select:focus {
  border-color: #2980b9;
}

table {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  background-color: #f8f9fa;
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.no-results {
  text-align: center;
  font-style: italic;
  color: #999;
}
</style>
