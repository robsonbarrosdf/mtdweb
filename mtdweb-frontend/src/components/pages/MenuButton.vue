<template>
    <div class='btn-menu' :class="{'btn-menu-2': !isMenuVisible}">
        <a class="toggle" @click='toggleMenu' >
            <i class="fa fa-lg" :class='icon'></i>
        </a>                
    </div>    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'MenuButton',
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        ...mapState(['isMenuVisible']),
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-right"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
            this.$emit('click')
        }
    }
}
</script>

<style>
    .btn-menu {
        position: absolute;
        left: 301px;
        top: 61px;

        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
    }

    .btn-menu-2 {
        left: 0px;
    }

    div > a.toggle {
        width: 20px;
        height: 20px;
        padding-left: 5px;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        /* justify-content: center; */
        align-items: center;
        
    }

    div > a.toggle:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
