<template>
	<nav class="navbar navbar-expand-lg bg-danger">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" href="/">Safe Heart - Smart Public SOS System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-primary" style="" data-nav-image="img/blurred-image-1.jpg">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="now-ui-icons objects_globe"></i>
                            <p>Happening Right Now</p>
                        </a>
                    </li>
                    <!-- <a><router-link to="/witnessreport">About</router-link></a> -->
                    <!-- <router-view></router-view> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>