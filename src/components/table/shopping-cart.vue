<template>

    <table class="table table-hover">
        <thead >
            <tr>
                <!-- :class="{'check-true':isSelectAll}"  -->
                <!-- 全选出错，不能初始化 -->
                <th style="width:60px;"><span class="check-span" >&emsp;&emsp;全选</span></th>
                <th>物品</th>
                <th>数量</th>
                <th>单价</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="items in scartdatas" :key="items"> 
                <td >
                    <span class="check-span" @click="items.select=!items.select" :class="{'check-true':items.select}"></span>
                </td>
                <td>{{items.name}}</td>
                <td>
                    <i @click="items.number--" class="fa fa-minus-square"></i> 
                    &emsp;{{items.number}}&emsp;
                    <i @click="items.number++" class="fa fa-plus-square"></i>                                  
                </td>
                <td>￥{{items.price | keepTwoNum}}</td>
                <td>￥{{items.price*items.number | keepTwoNum}}</td>
                <td>{{items.action}}</td>
            </tr>  
            <tr >
                <td colspan="6" class="table_sumtip">
                    0件商品总计(不含运费)&emsp;
                    <i class="fa fa-rmb"></i>&nbsp;20000.00 &emsp;
                    <button class="btn btn-success">&emsp;Pay&emsp;</button>



                </td> 
            </tr>       
        </tbody>
    </table>

</template>

<script>
    import scartdata from '@/assets/date/shoppingcartDate.json'

    export default {
        data(){
            return{
                scartdatas:'',
            }
        },
        mounted: function (){  
            console.log(scartdata);   
            this.scartdatas = scartdata;

            var _this=this;

            this.scartdatas.map(function(items){
                _this.$set(items,'select',false);
            })
 
            
        },
        filters:{
            keepTwoNum:function(value){
                value = Number(value);
                return value.toFixed(2);
            }
        },
        computed: {
            isSelectAll:function(){  
                //如果scartdatas中每一条数据的select都为true，返回true，否则返回false;             
                return this.scartdatas.every(function (val) { return val.select});
            }
        }
    }
</script>

<style>
    .table_sumtip{
        text-align: right!important;
        padding:20px!important;
    }
    .table th, .table td {
        text-align: center;
        vertical-align: middle!important;
    }
    .check-span{
        display: block;
        width: 60px;
        height: 32px;
        line-height: 32px;
        background: url('/static/img/0.png') no-repeat 0 0; 
    }
    .check-true{
        background: url('/static/img/1.png') no-repeat 0 0; 
    }
    .btn-success{
        background-image: none;
        border-color: #4cae4c;
    }
    
</style>
