<template>
    <div class="header"> 
        <h1 class="page-header">
            {{title}} 
            <small>Welcome John Doe</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#"></a>{{title}}</li>
            <li class="active">Data</li>
        </ol>							
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

