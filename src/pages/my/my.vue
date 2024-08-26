<script setup lang="ts">
import { useMemberStore } from '@/stores'
import  '@/utils/http'

const memberStore = useMemberStore()

//测试请求
const getDate = ()=>{
  uni.request({
    method:'GET',
    url:'home/banner',
    success:(res)=>{
      console.log(res);
    }
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="
      memberStore.setProfile({
        nickname: '黑马先锋',
      })
      " size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getDate" size="mini" plain type="primary">测试数据</button>
  </view>

</template>

<style lang="scss"></style>