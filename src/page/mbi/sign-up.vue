<template>
    <div class="pageCon">  
        <div class="signTit">
            <span>Sign Up</span>
        </div> 
        <form>
            <fieldset>
                <div class="inputCon">
                    <input type="text" class="input-sign" placeholder="Name">
                </div>
                <div class="inputCon">
                    <input type="text" class="input-sign" placeholder="Email">
                </div>
                <div class="inputCon">
                    <input type="text"  class="input-sign" placeholder="Password">
                </div>
                <div class="btnCon bC-pa">
                    <router-link to="/">
                        <button class="btn btn-stroke">Sign up</button>
                    </router-link>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    
</script>



<style scoped>
    @import '../../assets/mbi/css/style.css';
    
    .pageCon{
        position: absolute;
        width:100%;
        height:100%;
        background: -webkit-linear-gradient(130deg, #5C7EE0 , #663DDB); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(130deg, #5C7EE0, #663DDB); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(130deg, #5C7EE0, #663DDB); /* Firefox 3.6 - 15 */
        background: linear-gradient(130deg, #5C7EE0 , #663DDB); /* 标准的语法 */
    }

    i{
        color:#fff;
        font-size:12px;
    }

    .iC-tx-al-rt{
        text-align: right;
    }

    .bC-pa{
        padding:4rem 2.5rem;
    }
    
   
</style>

