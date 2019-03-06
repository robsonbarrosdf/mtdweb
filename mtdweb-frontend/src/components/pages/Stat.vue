<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class='icon' :style='style'></i>
            <span class="pl-3 stat-title">{{ title }}</span>
        </div>
        <hr/>
        <div class="stat-info">
            <span class="stat-value">{{ value }}</span>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return 'color: ' + (this.color || '#000')
        }
    }
}
</script>

<style>

    .stat {
        /* width: 190px;
        height: 280px; */
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
    }    

    .stat-icon {
        display: flex;
        align-items: flex-start;
        padding-right: 10px;
    }

    .stat-icon i {
       font-size: 3rem;        
    }

    .stat-info {
        background-color: rgb(233, 233, 233);
        text-align: center;
        margin: 0;
        padding: 0;
    } 

    .stat-title {
        font-size: 0.9rem;
        min-height: 85px;
    }

    .stat-value {
        font-size: 5rem;
        font-weight: bolder;
    }
</style>
