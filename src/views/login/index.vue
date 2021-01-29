<template>
  <div id="login">
    <div class="loginWarp">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    // const checkPhone = (rule, value, callback) => {
    //   const reg = /^0?(13[0-9]|15[012356789]|18[0-9]|14[578]|16[6]|17[035768]|19[19])[0-9]{8}$/
    //   if (reg.test(value)) {
    //     return callback()
    //   }
    //   callback('请输入合法的手机号')
    // }
    return {
      form: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  .loginWarp {
    background-color: #fff;
    padding: 50px;
    min-width: 350px;
    .loginbtn {
      width: 100%;
    }
  }
}
</style>
