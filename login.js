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
      login_id: 'id'
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
      login_passwd: 'passwd'
    }
  })

  var loginSubmit = new Vue({
    el: '#loginSubmit',
    methods: {
      checkLogin: function(event){
        correctLoginId = "id"
        correctLoginPasswd = "passwd"
        login_id = loginId.$data.login_id
        login_passwd = loginPasswd.$data.login_passwd
        console.log(login_id)
        console.log(login_passwd)
        if((login_id == correctLoginId)&&
        (login_passwd == correctLoginPasswd)){
          console.log("success!")
        }
        else{
          console.log("failed...")
        }
      }
    }
  })
}
