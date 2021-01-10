<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message ='默认文字',duration = 1000) {
      this.isShow = true;
      this.message = message;

      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 10px;
  color: #fff;
  letter-spacing: 2px;
  background-color: rgba(0,0,0,0.5);
}
</style>