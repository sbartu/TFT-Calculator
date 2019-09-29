import champions from './json/champions.json'
import classes from './json/classes.json'
import items from './json/items.json'
import origins from './json/origins.json'


var CalcView = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    champions: [],
    price_min: 0,
    price_max: 0,
  },
  methods: {
    search(e) {
      if(e.keyCode === 13) {

      }
    },
  }
})