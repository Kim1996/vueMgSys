<template>
    <div >   
        <head-nav></head-nav>
        <side-nav :curIdside="3"></side-nav>
        <div id="page-wrapper">   
            <content-cell :title="titleName"></content-cell>
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                A new message Item
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label>Please Input your item</label>
                                    <input class="form-control" placeholder="Finish then enter text">
                                </div>
                                <div class="form-group">
                                    <label>And with some tips?</label>
                                    <textarea class="form-control" rows="3" placeholder="Just here...Finish then enter text, too"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                MessageItem
                            </div>
                            
                            <div class="panel-body">
                                <message-list></message-list>
                            </div>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
    </div>
</template>

<script>
    import HeadNav from '@/components/public/headnav.vue'
    import SideNav from '@/components/public/sidenav.vue'
    import ContentCell from '@/components/item/content.vue'
    import MessageList from '@/components/item/message-list.vue'

    export default {
        components:{
            HeadNav,SideNav,ContentCell,MessageList
        },
        data(){
            return{
                titleName:'TodoList'
            }
        }
    }
</script>

