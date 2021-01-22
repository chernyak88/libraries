<template>
  <div>
    <h1>{{ this.params.name }}</h1>
    <div v-html="this.params.description" class="description"></div>
    <div v-if="this.params.image.url" class="img"><img :src="this.params.image.url" :alt="this.params.image.title"></div>
    <div>
      <h2>Контакты:</h2>
      <ul class="contacts">
        <li v-if="this.params.contacts.website">
          Сайт: <a :href="this.params.contacts.website" target="_blank">{{ this.params.contacts.website }}</a>
        </li>
        <li v-if="this.params.contacts.email">
          Email: <a :href="'mailto:' + this.params.contacts.email">{{ this.params.contacts.email }}</a>
        </li>
        <li v-if="this.params.contacts.phones.length">
          Телефон: <a v-for="(phone, idx) in this.params.contacts.phones" :key="idx" :href="'tel:' + phone.value">{{ phone.value }}; </a>
        </li>
        <li v-if="this.params.address.fullAddress">
          {{ this.params.address.fullAddress }}
        </li>
      </ul>
      <div v-if="this.params.address.mapPosition.coordinates.length">
        <p><i>Если карта не отображается, необходимо ввести apiKey в this.data.settings</i></p>
        <yandex-map 
          :settings="settings"
          :coords="coords"
          :zoom="10"
        >
          <ymap-marker 
            :coords="coords"
            :marker-id="this.params.locale.id"
            :hint-content="this.params.address.street"
          />
        </yandex-map>
      </div>
    </div>
    <router-link :to="{name: 'Table'}" class="btn">Назад к списку</router-link>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'Detail',
  components: { 
    yandexMap, 
    ymapMarker 
  },
  props: {
    params: Object
  },
  data() {
    return {
      settings: {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'longlat'
      },
      coords: this.params.address.mapPosition.coordinates,
    };
  },
  mounted() {
    window.scrollTo(0,0);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  text-align: left;
  margin-bottom: 20px;
}
.img {
  max-width: 500px;
  margin: auto;
}
.img img{
  display: block;
  max-width: 100%;
}
.contacts {
  list-style-type: none;
  padding: 0;
}
.contacts li {
  margin-bottom: 10px;
}
.contacts li a {
  color: #1e6cc7;
  text-decoration: none;
}
.contacts li a:visited {
  color: #1e6cc7;
}
.contacts li a:hover {
  text-decoration: underline;
}
.ymap-container {
  width: 500px;
  height: 400px;
  margin: auto;
}
.btn {
  display: block;
  max-width: 300px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  margin: auto;
  margin-top: 30px;
  border-radius: 3px;
  background: #1e6cc7;
  box-shadow: 0 -3px #65a7e5 inset;
  transition: 0.2s;
} 
.btn:hover { 
  background: #65a7e5; 
}
.btn:active {
  background: #65a7e5;
  box-shadow: 0 3px #65a7e5 inset;
}
@media screen and (max-width: 500px) {
  .ymap-container {
    width: 100%;
  }
}
</style>
