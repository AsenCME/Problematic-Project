import Home from './components/HomePage.vue'
import Clothes from './components/ClothesPage.vue'
import About from './components/AboutPage.vue'
import Contact from './components/ContactPage.vue'
import Login from './components/LoginPage.vue'

export default [
  {path: '/', component: Home},
  {path: '/clothes', component: Clothes},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
  {path: '/login', component: Login}
]
