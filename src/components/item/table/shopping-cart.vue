<template>

    <table class="table table-hover">
        <thead >
            <tr>
                <!-- :class="{'check-true':isSelectAll}" -->
                <!-- @click="selectProduct(isSelectAll)" -->
                <!-- 全选出错，不能初始化 -->
                <th style="width:60px;"><span class="check-span"  >&emsp;&emsp;全选</span></th>
                <th>物品</th>
                <th>数量</th>
                <th>单价</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(items,index) in scartdatas" :key="items"> 
                <td >
                    <span class="check-span" @click="items.select=!items.select" :class="{'check-true':items.select}"></span>
                </td>
                <td>{{items.name}}</td>
                <td>
                    <div class="box_fa">
                        <div class="box_ch box_br" @click="items.number--"><i  class="fa fa-caret-left"></i> </div>
                        <div class="box_ch box_br">{{items.number}}</div>
                        <div class="box_ch" @click="items.number++"><i class="fa fa-caret-right"></i></div>

                    </div>              
                </td>
                <td><i class="fa fa-rmb"></i>&nbsp;{{items.price | keepTwoNum}}</td>
                <td><i class="fa fa-rmb"></i>&nbsp;{{items.price*items.number | keepTwoNum}}</td>
                <td><i class="fa fa-remove" @click="deleteOneProduct(index)"></i></td>
            </tr>  
            <tr>
                <td colspan="2" class="table_actall">
                    <i class="fa fa-trash-o" @click="deleteProduct"></i>&nbsp;删除所选商品
                </td>
                <td colspan="4" class="table_sumtip">
                    {{getTotal.totalNum}}件商品总计(不含运费)&emsp;
                    <i class="fa fa-rmb"></i>&nbsp;{{getTotal.totalPrice | keepTwoNum}} &emsp;
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
            });
        },
        filters:{
            keepTwoNum:function(value){
                value = Number(value);
                return value.toFixed(2);
            },
        },
        computed: {
            isSelectAll:function(){  
                //如果scartdatas中每一条数据的select都为true，返回true，否则返回false;             
                return this.scartdatas.every(function (val) { return val.select});

            },
            getTotal:function(){
                //获取scartdatas中select为true的数据。
                var _scartdata=this.scartdatas.filter(function (val,index) { return val.select}),totalPrice=0;
                for(var i=0,len=_scartdata.length;i<len;i++){
                    //总价累加
                    totalPrice+=_scartdata[i].number*_scartdata[i].price;
                };
                //选择产品的件数就是_proList.length，总价就是totalPrice
                return {totalNum:_scartdata.length,totalPrice:totalPrice};
            },

        },
        methods: {
            //全选与取消全选
            selectProduct:function(_isSelect){
                //遍历scartdatas，全部取反
                for (var i = 0, len = this.scartdatas.length; i < len; i++) {
                    this.scartdatas[i].select = !_isSelect;
                }
            },
            //删除已经选中(select=true)的产品
            deleteProduct:function () {
                this.scartdatas=this.scartdatas.filter(function (item) {return !item.select})
            },
            //删除单条产品
            deleteOneProduct:function (index) {
                //根据索引删除productList的记录
                this.scartdatas.splice(index,1);
            },
        },
    }
</script>

<style>
    .table_actall{
        text-align: left!important;
        padding:20px!important;
        font-size: 11px;
    }
    .table_actall i{
        font-size: 14px;
    }
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
    .box_fa{
        display: -webkit-box;
        display: -moz-box;
        display: box;
        -webkit-box-orient: horizontal;   /*属性值：[horizontal]横向/[vertical]纵向*/
        -moz-box-orient: horizontal;
        box-orient: horizontal;
        margin: 0 auto;
        height:30px;
        width:90px;
        line-height: 28px;
        border:1px solid #ccc;
    }
    .box_ch{
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        box-flex: 1;
        width:30px;
    }
    .box_br{
        border-right:1px solid #e8e8e8;
    }
    .box_cr{
        background: #c1c1c1;
    }
    
</style>
