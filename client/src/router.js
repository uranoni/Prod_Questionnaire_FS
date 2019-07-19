import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      path: "/answer",
      name: "answer",
      component: () => import("./views/Answer.vue")
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
    }
  ]
});
