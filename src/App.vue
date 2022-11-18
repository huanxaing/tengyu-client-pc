<template>
  <div id="nav">
     App {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  </div>

</template>

<style lang="less">

</style>
