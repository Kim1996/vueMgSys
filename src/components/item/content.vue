<template>
    <div id="page-wrapper">   
        <div class="header"> 
            <h1 class="page-header">
                {{title}} 
                <small>Welcome John Doe</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li class="active">Data</li>
            </ol>							
		</div>
        
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

