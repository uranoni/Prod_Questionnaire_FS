import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Loading from "./components/Loading";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },

    {
      path: "/question",
      name: "question",
      component: () => import("./views/Question.vue")
    },
    {
      path: "/alllist",
      name: "answer",
      component: () => import("./views/AllList.vue")
    },
    {
      path: "/answer/:id?",
      name: "answer",
      component: () => import("./components/Answer.vue")
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("./views/Manage.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/design",
      name: "design",
      component: () => import("./views/Design.vue"),
      children: [
        {
          path: "list",
          component: () => import("./components/DesignList.vue")
        },
        {
          path: "option",
          component: () => import("./components/DesignOption.vue")
        },
        {
          path: "question",
          component: () => import("./components/DesignQuestion.vue")
        }
      ]
    }
  ]
});
