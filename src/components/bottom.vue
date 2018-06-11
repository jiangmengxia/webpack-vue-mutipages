<template>
  <div v-show="isIndex" class="bottom-wrap">
    <div class="wrap">
      <a class="item" @click="tabChange('index.html')"><i class="icon icon-index" :class="{'active-index':isActive('index')}"></i><p class="text" :class="{'active':isActive('index')}">首页</p>
      </a><a class="item" @click="tabChange('discover.html')"><i class="icon icon-discover" :class="{'active-discover':isActive('discover')}"></i><p class="text" :class="{'active':isActive('discover')}">发现</p>
    </a><a class="item" @click="tabChange('bill.html')"><i class="icon icon-bill" :class="{'active-bill':isActive('bill')}"></i><p class="text" :class="{'active':isActive('bill')}">账单</p>
    </a><a class="item" @click="tabChange('center.html')"><i class="icon icon-center" :class="{'active-center':isActive('center')}"></i><p class="text" :class="{'active':isActive('center')}">我的</p></a>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      isActive(name) {
        let pageName = window.location.pathname;
        let result = pageName.indexOf(name) > -1 ? true : false;
        return result;
      },
      tabChange(url){
        window.location.replace(url)
      }
    },
    computed: {
      isIndex() {
        let hash = this.$route.path.split("/")[1];
        if (hash === "index") {
          return true;
        }
        return false;
      }
    }
  };
</script>
<style scoped>
  .bottom-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: rgb(249, 249, 249);
    z-index: 9;
  }
  .wrap {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .item {
    width: 25%;
    border-top: 1px solid #ccc;
    display: inline-block;
    height: 50px;
    margin: 0;
    padding: 0;
  }
  .icon {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 52px;
    display: block;
    margin: 7px auto;
    width: 52px;
    height: 52px;
  }
  .text {
    font-size: 20px;
    text-align: center;
    color: #b7b6b9;
  }
  .active {
    color: #2c3041;
  }
  .icon-index {
    background-image: url("https://assets.2dfire.com/frontend/c9f762122668d2bb817c168ac0f87a73.png");
  }
  .icon-discover {
    background-image: url("https://assets.2dfire.com/frontend/ee3f42900865ae1b641ce330aa23608d.png");
  }
  .icon-bill {
    background-image: url("https://assets.2dfire.com/frontend/dcb5ffbe30dcf916cd4dbedf6349cd4a.png");
  }
  .icon-center {
    background-image: url("https://assets.2dfire.com/frontend/f7faa89a5c852541e07d2cdff3b1cde6.png");
  }
  .active-index {
    background-image: url("https://assets.2dfire.com/frontend/aaa38b7598fc7f67509697471907f33f.png");
  }
  .active-discover {
    background-image: url("https://assets.2dfire.com/frontend/e999ceaf1f33bbbaaa2c3425945db6a2.png");
  }
  .active-bill {
    background-image: url("https://assets.2dfire.com/frontend/f491c4683af91a0f0c8450fdcf543b61.png");
  }
  .active-center {
    background-image: url("https://assets.2dfire.com/frontend/8ea034cb21bc76f59c00be75daa8dfc4.png");
  }
</style>
