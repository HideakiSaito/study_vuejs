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
    seen: false,
    out:true
  }
})