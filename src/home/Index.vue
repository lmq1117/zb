<template>
  <div>
    <banner img-url="https://limq.flysay.com/static/miniprogram/img/main_banner.gif"></banner>
    <div id="flex-container">
      <insure-item v-for="insure in insures" :insure="insure"></insure-item>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
import MainBanner from '../common/MainBanner.vue'
import Banner from '../common/Banner.vue'
import Web from 'reduce-loader!../common/Web.vue'
import InsureItem from '../common/InsureItem.vue'
import 'reduce-loader!./web'



export default Vue.extend({
  name: 'Home',
  components: {
    InsureItem,
    Header,
    Footer,
    Web,
    MainBanner,
    Banner,

  },
  data() {
    return {
      isMiniprogram: process.env.isMiniprogram,
      insures: [
        { imgUrl: 'https://limq.flysay.com/static/miniprogram/img/list_p1.gif', title: '企业资产保障', content: '保障企业遭受自然灾害及意外事故时，发生的物质损失及毛利润损失' },
        { imgUrl: 'https://limq.flysay.com/static/miniprogram/img/list_p2.gif', title: '企业法律责任保障', content: '保障企业法律责任风险，包括营业处所第三者责任风险，雇主责任风险，董监高责任风险等' },
        { imgUrl: 'https://limq.flysay.com/static/miniprogram/img/list_p3.gif', title: '建筑/安装工程保障', content: '保障工程项目在施工及试车过程中，因自然灾害和意外事故造成的物质损失风险' },
      ]
    }
  },
  created() {
    window.addEventListener('wxload', query => console.log('page home wxload', query))
    window.addEventListener('wxshow', () => console.log('page home wxshow'))
    window.addEventListener('wxready', () => console.log('page home wxready'))
    window.addEventListener('wxhide', () => console.log('page home wxhide'))
    window.addEventListener('wxunload', () => console.log('page home wxunload'))

    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123'
    },

    onClickOpen() {
      window.open('/test/detail/123')
    },
    onCancel() {
      console.log('点了取消按钮 曲小平')
    },
    reqt() {
      wx.request({
        url: 'https://limq.flysay.com/api/mini/program/enterprise/consultation',
        data: {
          consultation_type: '1',
          company_name: '谷歌子公司',
          telephone_number: '075582345678',
          real_name: '曹操',
          email: 'limq@qq.com'
        },
        header: {
          'content-type': 'application/json', // 默认值
          accept: 'application/json' // 默认值
        },
        method: 'POST',
        success(res) {
          console.log(res.data)
        }
      })
    }
  },
})
</script>

<style lang="less">
  .cnt {
    /*margin-top: 20px;*/
  }

  a, button {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #ddd;
  }

  #flex-container {
    width:100%;
  }

  .miniprogram-root {
    .for-web {
      display: none;
    }
  }
</style>
