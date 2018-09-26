<template>
    <div >   
        <head-nav></head-nav>
        <side-nav :curIdside="3"></side-nav>
        <div id="page-wrapper">   
            <content-cell :title="titleName"></content-cell>
        </div>
       <!--  <img src="@/assets/logo.png"> -->

    </div>
</template>

<script>
    import HeadNav from '@/components/public/headnav.vue'
    import SideNav from '@/components/public/sidenav.vue'
    import ContentCell from '@/components/item/content.vue'

    export default {
        components:{
            HeadNav,SideNav,ContentCell
        },
        data(){
            return{
                titleName:'TodoList'
            }
        }
    }
</script>

