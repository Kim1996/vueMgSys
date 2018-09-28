<template>
    <table class="table table-striped table-bordered table-hover dataTable no-footer">
        <thead >
            <tr>
                <th>全选</th>
                <th>物品</th>
                <th>数量</th>
                <th>单价</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>   
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    //import scartdata from '/static/date/shoppingcartDate.json'

    export default {
        data(){
    　　    return{
    　　　     userinform: ''
    　　　 }
        },
        mounted(){
            //this.userinform = scartdata
        }
    }
</script>

