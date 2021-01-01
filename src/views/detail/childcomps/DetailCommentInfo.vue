<template>
<div class="comment-info" v-if="Object.keys(commentInfo).length !==0">
  <div class="header-info">
    <div class="info-title">{{'宝贝评价:'+'('+commentInfo.cRate+')'}}</div>
    <div class="info-more">更多</div>
  </div>
  <div class="info-user">
    <img :src="commentInfo.list[0].user.avatar" alt="">
    <span>{{commentInfo.list[0].user.uname}}</span>
  </div>
  <div class="info-detail">
    <p>{{commentInfo.list[0].content}}</p>
    <div class="info-other">
      <span class="date">{{commentInfo.list[0].created | showDate}}</span>
      <span>{{commentInfo.list[0].style}}</span>
    </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
  </div>
</div>
</template>

<script>
import {formatDate} from '@/common/untils.js'

export default {
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
		  showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
}
</script>

<style scoped>
.comment-info {
  padding: 20px 0;
  border-bottom: 5px solid rgba(100,100,100,0.1);
}
.header-info {
  display: flex;
  padding: 0 10px;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #f2f5f8;
}
.info-title{
  font-size: 16px;
}
.info-more{
  font-size: 12px;
}
.info-user img {
  width: 50px;
  border-radius: 50%;
}
.info-user {
  padding: 10px 15px;
  line-height: 20px;
}
.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
    padding: 0 10px 15px;
  }

.info-detail p {
    font-size: 14px;
    text-indent: 2em;
    color: #777;
    line-height: 1.5;
  }

.info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

.info-other .date {
    margin-right: 8px;
  }

.info-imgs {
    margin-top: 10px;
  }

.info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>