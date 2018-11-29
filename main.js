/**
 * Mapとかfliterためす
 */
alert("hello ");

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
//若者たち
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
      { text: 'Build something awesome' }
      
    ]
  }
})

/*
 *json 
*/

var baseURL = "https://online.synvizs2.jp/S2_Dev_Service01/api/";
var getURL = baseURL + "projects";

axios.get(getURL)
  .then(function (response) {
    initVue(response.data)
  }).catch(function (error) {
    alert(error)
  })

  function initVue(info){
    new Vue({
            el: '#resjson',
            data: {
              infos: info
            }
        })
  }