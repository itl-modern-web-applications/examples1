const router = new VueRouter({
  routes: [
    { path: '/', component: pageHome },
    { path: '/heroes', component: pageHeroes },
    { path: '/planets', component: pagePlanets }
  ]
})
