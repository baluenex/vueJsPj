window.onload = function(){

  var isLogin = new Vue({
    el: '#isLogin',
    data: {
      message: 'loginIdを入力してください'
    }
  })

  var loginId = new Vue({
    el: '#loginId',
    data: {
      login_id: ''
    }
  })

  var isPasswd = new Vue({
    el: '#isPasswd',
    data: {
      message: 'passwordを入力してください'
    }
  })

  var loginPasswd = new Vue({
    el: '#loginPasswd',
    data: {
      login_passwd: ''
    }
  })

  var loginSubmit = new Vue({
    el: '#loginSubmit',
    methods: {
      checkLogin: function(event){
        correctLoginId = "correctId"
        correctLoginPasswd = "correctPass"
        console.log(loginId.$data.login_id)
        console.log(loginPasswd.$data.login_passwd)
      }
    }
  })
}
