import champions from './json/champions.json'
import classes from './json/classes.json'
import items from './json/items.json'
import originsJSON from './json/origins.json'


var CalcView = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    champions: [],
    price_min: 0,
    price_max: 0,
    origins: originsJSON,
  },
  methods: {
    search(e) {
      if(e.keyCode === 13) {

      }
    },
  }
})