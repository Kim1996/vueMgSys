<template>
    <div >   
        <head-nav></head-nav>
        <side-nav :curIdside="2"></side-nav>
        <div id="page-wrapper">   
            <content-cell :title="titleName"></content-cell>
            <div id="page-inner"> 
                <div class="row">
                    <div class="col-md-12">
                        <!-- Advanced Tables -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Shopping Cart Table
                            </div>
                            <div class="panel-body">
                                <shopping-cart></shopping-cart>
                            </div>  
                        </div>
                        <!--End Advanced Tables -->
                    </div>
                </div>    
            </div>
        </div>
        <!--  <img src="@/assets/logo.png"> -->

    </div>
</template>

<script>
    import HeadNav from '@/components/public/pc/headnav.vue'
    import SideNav from '@/components/public/pc/sidenav.vue'
    import ContentCell from '@/components/item/content.vue'
    import ShoppingCart from '@/components/item/table/shopping-cart.vue'

    export default {
        components:{
            HeadNav,SideNav,ContentCell,ShoppingCart
        },
        data(){
            return{
                titleName:'Charts'
            }
        }
    }
</script>

