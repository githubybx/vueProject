<template>
    <div class="home">
      <div class="regist">
        <div class="input">邮箱:<el-input placeholder="请输入邮箱" v-model="email" class="email"></el-input></div><br>
        <div class="input">密码:<el-input placeholder="请输入密码" v-model="pass"></el-input></div><br>
        <div class="input">
        验证码:<el-input placeholder="请输入验证码" v-model="vcode"></el-input></div><br>
        <el-button v-show="show" @click="getCode">获取验证码</el-button>
        <el-button v-show="!show" class="count">{{count}} s</el-button>
       <el-button type="success" plain @click="handleClick()">注册</el-button>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      pass: '',
      show: true,
      count: '',
      timer: null,
      vcode: ''
    }
  },
  methods: {
    handleClick () {
      var emailTest = /^([0-9]{6,12}@qq.com)$/
      var passTest = /^([0-9a-zA-Z]{6,10})$/
      if (!emailTest.test(this.email)) {
        this.$message.error('邮箱格式错误')
      } else if (!passTest.test(this.pass)) {
        this.$message.error('密码格式错误')
      } else {
        this.$message.success('注册成功')
        console.log(this.email + '  ' + this.pass)
      }
    },
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }

  }
}
</script>
<style scoped>
div{
  border: 0px solid red;
}
.input{
  width: 300px;
  height: 100px;
}
.home{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  position: absolute;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-image:url(../image/f.jpg);
}
.regist{
  display: inline-block;
  margin-top: 10%;

}
</style>
