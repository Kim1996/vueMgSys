<template>
    <div class="pageFtm">
        <div class="box_fa">
            <div class="box_ch selected"><i class="fa fa-home"></i></div>
            <div class="box_ch"><i class="fa fa-birthday-cake"></i></div>
            <div class="box_ch"><i class="fa fa-calendar"></i></div>
            <div class="box_ch"><i class="fa fa-coffee"></i></div>
        </div>
    </div>
</template>

<style scoped>
    .pageFtm{
        position: absolute;
        bottom:15px;
        width:100%;
    }

    .box_fa{
        display: -webkit-box;
        display: -moz-box;
        display: box;
        -webkit-box-orient: horizontal;   /*属性值：[horizontal]横向/[vertical]纵向*/
        -moz-box-orient: horizontal;
        box-orient: horizontal;
        margin: 0 auto;
        height:4.5rem;
        width:32rem;
        line-height: 4.5rem;
        background-color: #6E33D5;
        border-radius: 6px;
    }
    .box_ch{
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        box-flex: 1;
        width:8rem;
        color:rgba(255,255,255,0.6);
        text-align: center;
        font-size: 20px;
    }

    .selected{
        color:#fff;
    }
</style>