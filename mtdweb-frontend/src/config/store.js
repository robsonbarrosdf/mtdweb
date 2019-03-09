import Vue from 'vue'
import Vuex from 'vuex'

import {userFake} from '../global/fakeData'
import { perfis } from "@/global/global";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        perfilSelecionado: null,
        user: userFake,
        //currentComponentPage: null
        // searchComponent: null,
        // displayResultComponent: null,
        // encontroSelecionado: null,

        infoPagina: null,

        _eventHandler: new Map()
    },
    getters: {
        // eventBusPage: (state, eventName) => state._eventBusPage.get(eventName)
        eventHandler: state => eventName => state._eventHandler.get(eventName)
    },
    mutations: {
        toggleMenu(state, isVisible) {      
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },

        setPerfilSelecionado(state, perfil) {
            let objPerfil = null
            if (perfil==null) {
                objPerfil = {titulo: 'Visão Geral'}
            } else if (typeof perfil == 'string') {
                objPerfil = perfis.getPerfilByNomeOuUrl(perfil)
            } else {
                objPerfil = perfil
            }
            state.perfilSelecionado = objPerfil
        },

        setEncontroSelecionado(state, encontro) {
            state.encontroSelecionado = encontro
        },

        setEventHandler(state, {eventName, handler}) {
            state._eventHandler.set(eventName, handler)
        }

    }

})