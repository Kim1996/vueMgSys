<template>
    <div >   
        <head-nav></head-nav>
        <side-nav></side-nav>
        <content-cell :title="titleName"></content-cell>
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
                titleName:'Dashboard'
            }
        }
    }
</script>

