import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/pages/HomePage'
import ImportacaoPage from '@/components/pages/ImportacaoPage'
import DistribuicaoPage from '@/components/pages/DistribuicaoPage'
import DiscursoPage from '@/components/pages/DiscursoPage'
import SumarioPage from '@/components/pages/SumarioPage'
import RevisaoPage from '@/components/pages/RevisaoPage'

Vue.use(VueRouter)

const routes = [{
   name: 'home',
   path: '/',
   component: Home
}, {
    name: 'distribuicaopage',
    path: '/distribuicao',
    component: DistribuicaoPage
}, {
    name: 'importacaopage',
    path: '/importacao',
    component: ImportacaoPage
}, {
    name: 'discursopage',
    path: '/discurso',
    component: DiscursoPage
}, {
    name: 'sumariopage',
    path: '/sumario',
    component: SumarioPage
}, {
    name: 'revisaopage',
    path: '/revisao',
    component: RevisaoPage
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router