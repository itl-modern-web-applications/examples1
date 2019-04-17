import PageHome from '/src/pages/PageHome.js'
import PageHeroes from '/src/pages/PageHeroes.js'
import PagePlanets from '/src/pages/PagePlanets.js'

export default [
  { path: '/', component: PageHome },
  { path: '/heroes', component: PageHeroes },
  { path: '/planets', component: PagePlanets }
]
