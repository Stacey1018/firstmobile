<template>
  <div class="laugh">
    <van-swipe class="my-swipe" :show-indicators="false">
      <van-swipe-item v-for="item in laughList">
        <div class="my-swipe-div">{{item}}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Swipe, SwipeItem } from "vant";
import { getLaugh} from '@/api/laugh'

@Options({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Laugh extends Vue {
  laughList:any = []
  mounted(){
    console.log('aaa')
    getLaugh().then(res =>{
      this.laughList = res.data.res
      console.log(res)
    })

  }
}
</script>
<style lang="scss">
.laugh {
  height: 100%;
}
.my-swipe {
  height: 100%;
  .van-swipe-item {
    color: #fff;
    height: 100%;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    .my-swipe-div{
      color:black;
      height: 100%;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
