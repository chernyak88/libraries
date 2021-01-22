<template>
  <div>
    <section v-if="errored">
      <p>Сервис временно недоступен, повторите попытку позднее.</p>
    </section>
    <section v-else>
      <Preloader v-if="loading" />
      <div v-else>
        <vue-good-table
          title="Список библиотек"
          :columns="columns"
          :rows="rows"
          :lineNumbers="true"
          :search-options="{
            enabled: true
          }"
          :pagination-options="{
            enabled: true,
            mode: 'pages',
            perPage: 20,
            perPageDropdown: [10, 20, 50],
            dropdownAllowAll: false,
            ofLabel: 'из',
            pageLabel: 'Страница',
            nextLabel: 'Вперед',
            prevLabel: 'Назад',
            rowsPerPageLabel: 'Элементов на странице',
          }"
          compactMode>
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'name'">
              <router-link 
                :to="{name: 'Detail', params: {id: props.row.params.id, params: props.row.params}}"
                class="link"
              >
                {{props.row.name}}
              </router-link>
            </span>
          </template>
        </vue-good-table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import Preloader from '@/components/Preloader'

export default {
  name: 'Table',
  components: {
    VueGoodTable,
    Preloader
  },
  data() {
    return {
      loading: true,
      errored: false,
      rows: [],
      columns: [
        {
          label: 'Наименование',
          field: 'name',
        },
        {
          label: 'Адрес',
          field: 'address',
        }
      ]
    };
  },
  mounted() {
    axios
      .get('data.json')
      .then(response => {
          response.data.map(el => {
          let obj = {};
          obj.params = el.data.general;
          obj.name = el.data.general.name;
          obj.address = el.data.general.address.fullAddress;
          this.rows.push(obj)
          return this.rows
        });
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  display: inline-block;
  position: relative;
  color: inherit;
  text-decoration: none;
  line-height: 24px;
  padding: 10px;
  overflow: hidden;
}
.link::before, .link::after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
  left: 0;
  width: 100%;
  height: 2px;
  background:#dcdfe6;
}
.link::before {
  bottom: 0;
  transform:  translateX(-100%);
}
.link::after {
  top: 0;
  transform:  translateX(100%);
}
.link:hover::before, .link:hover::after {
  transform:  translateX(0);
}
</style>
