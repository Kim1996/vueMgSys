<template>
    <nav class="navbar navbar-default top-navbar" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" href="index.html">
            <strong>Marvel</strong>
        </a>

        <!-- <ui>
            <li><router-link to='/'>首页</router-link></li>
            
        </ui> -->
    </div>
    </nav>
</template>

<style scoped>
    .top-navbar .navbar-brand{
        background: -webkit-linear-gradient(left, #5178E1 , #663DDB); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #5178E1, #663DDB); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #5178E1, #663DDB); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #5178E1 , #663DDB); /* 标准的语法 */
    }
    .top-navbar .navbar-brand:hover{
        background: #5178E1;
    }
    
</style>