<template>
  <div class="params-info">
    <div class="rule-key">{{paramsInfo.ruleKey}}</div>
    <table class="sizes-info" v-for="(table,index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr,index1) in table" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">
          {{td}}
        </td>
      </tr>
    </table>
    <div class="rule-disclaimer">{{paramsInfo.disclaimer}}</div>
    <div class="info-key">{{paramsInfo.infoKey}}</div>
    <table class="set-info">
      <tr v-for="(item,index) in paramsInfo.set" :key="index">
        <td class="set-info-key">{{item.key+':'}}</td>
        <td class="set-info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="params-image" v-if="paramsInfo.image">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.rule-key,
.info-key {
  margin: 5px 145px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 10px;
}
.params-info table {
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
}
.params-info table tr td {
  text-align: center;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.rule-disclaimer {
  padding: 10px 10px;
  line-height: 20px;
  font-size: 12px;
}
.set-info-key {
  width: 95px;
}
.set-info-value {
  color: var(--color-tint);
}
.params-image img {
  width: 100%;
}
</style>