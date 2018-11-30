/**
 * Mapとかfliterためす
 */

var user1 = {name:"saitou",age:35};
var user2 = {name:"kassai",age:23};
var users = [user1,user2];

/**
 * mapで敬称をつけて表でHTMLにレンダー
 */
//お客様
var customers = users.map((user) =>
  ({
    name: user.name + "様",
    age: user.age + "才"
  })
)

var userDisp = new Vue({
  el: '#userDisp',
  data: {
    customers
  }
})

/**
 * fileterで明るい職場だけ（ねんれい、。、、
 */
//若者たち・・・３５歳、、、
var youths = users.filter(user => user.age <= 30)

var userDisp2 = new Vue({
  el: '#userDisp2',
  data: {
    youths
  }
})

/**
 * 
 */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

/**
 * 
 */
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on '
     + new Date().toLocaleString()
  }
})

/**
 * 
 */
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: (2==1-1),
    out:true
  }
})

/**
 * 
 */
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
      { text: 'this is a pen' }
      
    ]
  }
})


/**
 * 
 */
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
    members: 'Hideaki,Yuuta,Takuya,Abe'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
      this.members = this.members.split(',').reverse().join()
    }
  }
})

/**
 * 
 */
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'red' },
      { id: 1, text: 'blue' },
      { id: 2, text: 'orange' }
    ]
  }
})