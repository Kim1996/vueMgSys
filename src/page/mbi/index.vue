<template>
<div class="page">
    <div class="pageCon">   
        <img src="@/assets/img/t1.png" style="width:100%;height:100%;">
    </div>
    <div class="pageBtn">
        <div class="btnCon">
            <router-link to="/mbi/intro">
                <button class="btn btn-stroke">Sign in</button>
            </router-link>
        </div>
        <div class="btnCon">
            <router-link to="/mbi/signup">
                <button class="btn btn-filled">Sign up</button>
            </router-link >
        </div>
        <div class="btnCon">
            <span>Enjoy yourself</span>
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

