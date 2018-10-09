<template>
    <nav class="navbar-default navbar-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
            <router-link to="/" tag="li">
                <a href="javaScript;;" @click="curId=0" :class="{'active-menu': curId == 0}"><i class="fa fa-dashboard"></i> Dashboard</a>
            </router-link>
            <router-link to="/ui-elements" tag="li">
                <a href="javaScript;;" @click="curId=1" :class="{'active-menu': curId == 1}"><i class="fa fa-desktop"></i> UI Elements</a>
            </router-link>
             <router-link to="/charts" tag="li">
                <a href="javaScript;;" @click="curId=2" :class="{'active-menu': curId == 2}"><i class="fa fa-bar-chart-o"></i> Charts</a>
            </router-link>
            <router-link to="/todolist" tag="li">
                <a href="javaScript;;" @click="curId=3" :class="{'active-menu': curId == 3}"><i class="fa fa-list-ol"></i> TodoList</a>
            </router-link>
            <li>
                <a href="tab-panel.html"><i class="fa fa-qrcode"></i> Tabs &amp; Panels</a>
            </li>     
            <li>
                <a href="form.html"><i class="fa fa-edit"></i> Forms </a>
            </li>


            <li>
                <a href="#"><i class="fa fa-sitemap"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li>
                        <a href="#">Second Level Link</a>
                    </li>
                    <li>
                        <a href="#">Second Level Link</a>
                    </li>
                    <li>
                        <a href="#">Second Level Link<span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li>
                                <a href="#">Third Level Link</a>
                            </li>
                            <li>
                                <a href="#">Third Level Link</a>
                            </li>
                            <li>
                                <a href="#">Third Level Link</a>
                            </li>

                        </ul>

                    </li>
                </ul>
            </li>
            <li>
                <a href="empty.html"><i class="fa fa-fw fa-file"></i> Empty Page</a>
            </li>
        </ul>

        <!-- <ui>
            <li><router-link to='/'>首页</router-link></li>
            
        </ui> -->
    </div>
    </nav>
</template>

<script>
export default {
    props:['curIdside'],
    data(){
        return{
            curId:this.curIdside,
        }
    }
}
</script>

<style scoped>
</style>