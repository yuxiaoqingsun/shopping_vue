<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>欢迎光临！</p>
          <p v-if="!userName">
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
            <!-- <a href="###" class="register">免费注册</a>  -->
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          
          <!-- <a href="###">我的订单</a> -->
          <router-link to="/trade">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="searchContent"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ShopHeader",
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    // 搜索按钮回调函数，向search路由跳转
    goSearch() {
      // this.$router.push('/search/'+this.searchContent+'?k='+this.searchContent.toUpperCase())
      // this.$router.push(`/search/${this.searchContent}?k=${this.searchContent.toUpperCase()}`)

      let location = {
        name: "search",
        // path:'/search',
        params: { keyword: this.searchContent || undefined },
        // query:{k:this.searchContent.toUpperCase()}
      };
      // console.log(this.$route.query) // 空对象
      // console.log(this.$route.query == true) //false
      // console.log(Boolean(this.$route.query)) // 空对象
      //不管是不是空对象，都会进入判断，可以不写
      if (this.$route.query) {
        location.query = this.$route.query;
      }
      this.$router.push(
        location,
        (success) => {},
        (error) => {}
      );
    },
    async logout(){
      //退出登录需要做的事情
      //1:需要发请求，通知服务器退出登录【清除一些数据：token】
      //2:清除项目当中的数据【userInfo、token】
        try {
          //如果退出成功
          await this.$store.dispatch('user/userLogout');
          //回到首页
          this.$router.push('/home');
        } catch (error) {
          
        }
    }
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.searchContent = "";
    });
  },
  computed: {
    //用户名信息
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
  /* watch:{
      $route(){
        this.searchContent = ''
      }
    } */
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>