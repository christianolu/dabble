<template>
  <div id="app">
    <Header @loginClicked="loginpopup()" @signupClicked="signupPopup()"/>
    <PlusButton @plusClicked="createPostPopUp()"/>
    <Login @close-login="closeLoginpopup()" v-if="isLoginclicked"/>
    <Signup @close-signup="closesignuppopup()" v-if="isSignupClicked"/>
    <Createpost @close-post="closePostPopup()" @post-clicked="post($event)" v-if="isPlusClicked"/>
    <PostsView :articles="articles" :screenWidth="Width"/>
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Createpost from "./components/Createpost.vue";
import PostsView from "./components/Posts/PostsView.vue"
import PlusButton from "./components/PlusButton.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Header,
    Login,
    Signup,
    Createpost,
    PostsView,
    PlusButton
  },

  data() {
    return {
      isLoginclicked: false,
      isSignupClicked: false,
      isPlusClicked: false,
      articles: [
        {
          author: "christian",
          time: "3-24-2019. 10:06pm",
          postId: 100,
          content:
            "The number of lines in a paragraph depends on the size of the browser window. If you resize the browser window, the number of lines in this paragraph will change."
        },
        {
          author: "Olu",
          time: "10-15-2019. 11:06pm",
          postId: 101,
          content:
            "This paragraph contains a lot of spaces in the source code, but the browser ignores it."
        },
        {
          author: "christian",
          time: "10-15-2019. 12:06pm",
          postId: 102,
          content:
            "You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code. The browser will remove any extra spaces and extra lines when the page is displayed"
        },
        {
          author: "Olu",
          time: "10-15-2019. 13:06pm",
          postId: 103,
          content:
            "You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code. The browser will remove any extra spaces and extra lines when the page is displayed"
        },
        {
          author: "christian",
          time: "10-15-2019. 14:06pm",
          postId: 104,
          content:
            "stupid lorem text here again dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds"
        },
        {
          author: "Olu",
          time: "3-24-2019. 15:06pm",
          postId: 105,
          content:
            "dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds"
        },
        {
          author: "christian",
          time: "3-24-2019. 16:06pm",
          postId: 106,
          content:
            "This paragraph contains a lot of spaces in the source code, but the browser ignores it."
        },
        {
          author: "Olu",
          time: "10-15-2019. 17:06pm",
          postId: 107,
          content: "stupid lorem text here again"
        },
        {
          author: "christian",
          time: "10-15-2019. 18:06pm",
          postId: 108,
          content:
            "You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code. The browser will remove any extra spaces and extra lines when the page is displayed"
        },
        {
          author: "Olu",
          time: "10-15-2019. 19:06pm",
          postId: 109,
          content:
            "dsskhhhh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds"
        },
        {
          author: "christian",
          time: "10-15-2019. 20:06pm",
          postId: 110,
          content: "stupid lorem text here again"
        },
        {
          author: "olu",
          time: "3-24-2019. 21:06pm",
          postId: 111,
          content:
            "dsskhhhh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds dsskh gikfl srutruthu sdjrkt hkjsjd hjhtj ehrds"
        }
      ],
      currentTime: new Date(),
      author: "Christian",
      postId: 110,
    };
  },

  methods: {
    loginpopup() {
      this.isLoginclicked = true;
    },
    closeLoginpopup() {
      this.isLoginclicked = false;
    },
    signupPopup() {
      this.isSignupClicked = true;
    },
    closesignuppopup() {
      this.isSignupClicked = false;
    },
    createPostPopUp() {
      this.isPlusClicked = true;
    },
    closePostPopup() {
      this.isPlusClicked = false;
    },
    post(event) {
      if (this.postContent !== '') {
        this.articles.unshift({
            author: this.author,
            time: this.time,
            postId: this.postId,
            content: event
        })
        console.log(event)
        this.isPlusClicked = false
      }
    }
  },

  computed: {
    Width() {
      return window.innerWidth;
    },
    time() {
      let time = new Date();
      return time.getHours() + ":" + time.getMinutes()
    }
  }
}
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  margin: 0px;
  
}

body {
  margin: 0;
  background-color: rgb(250, 250, 250);
}

</style>
