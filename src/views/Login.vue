<template>
  <div class="login">
    <div class="table">
    <div class="input"> 邮箱:<el-input placeholder="请输入邮箱" v-model="email"></el-input></div>
    <div class="input">密码:<el-input placeholder="请输入密码" v-model="pass"></el-input></div>
    <div><el-row>
       <el-button type="success" plain @click="doLogin()">登录</el-button>
       <el-button type="success" plain>注册</el-button>
    </el-row></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    doLogin () {
      var emailTest = /^([0-9]{6,12}@qq.com)$/
      var passTest = /^([0-9a-zA-Z]{6,10})$/
      if (!emailTest.test(this.email)) {
        this.$message.error('邮箱格式错误')
      } else if (!passTest.test(this.pass)) {
        this.$message.error('密码格式错误')
      } else {
        this.$message.success('登陆成功')
        this.$router.push(`/regist/`)
      }
    }
  }
}
</script>
<style>
.input{
  width: 300px;
  height: 100px;
  border: 1px solid red;
}
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid red;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-image: url(../image/e.jpg);
  background-repeat:repeat-x;
  background-size: 100% 100%;
  background-attachment:fixed;
}
.table{
  display: inline-block;
  border: 1px solid yellow;
  margin-top: 10%;
}
</style>
