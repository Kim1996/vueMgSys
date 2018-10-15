<template>
<div class="page">
    <div class="pageCon">   
        <img src="@/assets/img/t1.png" style="width:100%;height:100%;">
    </div>
    <div class="pageBtn">
        <div class="btnCon">
            <router-link to="/">
                <button class="btn btn-filled">Skip</button>
            </router-link >
        </div>
    </div>
</div>
</template>

<script>
    
</script>

<style scoped>

    @import '../../assets/mbi/css/style.css';
    
    span{
        color:#6E33D5;
        font-weight: 600;
    }

    .pageCon{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:60%;
        
    }
    .pageBtn{
        position: absolute;
        left:0;
        bottom: 0;
        width:100%;
        height:40%;
        padding:4rem 1rem;
    }
</style>

