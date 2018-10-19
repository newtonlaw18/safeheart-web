<template>
	<div class="text-center">
		<form class="form-signin">
			<img class="mb-4" src="../assets/logo2.png" alt="" width="72" height="72">
			<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label for="inputEmail" class="sr-only">Email address</label>
			<input type="email" v-model="inputEmailVal" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
			<label for="inputPassword" class="sr-only">Password</label>
			<input type="password"  v-model="inputPasswordVal" id="inputPassword" class="form-control" placeholder="Password" required="">
			<button v-on:click="authenticate" class="btn btn-lg btn-danger btn-block" type="submit">Sign in</button>
			<p class="mt-5 mb-3 text-muted">© ResQ. All rights reserved.</p>
	    </form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data: function() {
			return {}
		},
		methods: {
			authenticate: function(){
				var inputEmail = this.inputEmailVal.trim();
				var inputPassword = this.inputPasswordVal.trim();
				if(inputEmail == "kahxien27@gmail.com" && inputPassword == "admin"){
					this.$router.replace('/')
					console.log('Email & Password matched');
					// window.location.href = '/';

				}else{
					alert('Incorrect Email / Password. Please try again or contact your admin. ');
				}
			}
		}
	}
</script>

<style scoped>
	.form-signin {
	    width: 100%;
	    max-width: 330px;
	    padding: 15px;
	    margin: 0 auto;
	}
	.mb-4, .my-4 {
	    margin-bottom: 1.5rem!important;
	}
	img {
	    vertical-align: middle;
	    border-style: none;
	}
	.sr-only {
	    position: absolute;
	    width: 1px;
	    height: 1px;
	    padding: 0;
	    overflow: hidden;
	    clip: rect(0,0,0,0);
	    white-space: nowrap;
	    -webkit-clip-path: inset(50%);
	    clip-path: inset(50%);
	    border: 0;
	}
	label {
	    display: inline-block;
	    margin-bottom: .5rem;
	}
	.form-signin input[type="email"] {
	    margin-bottom: -1px;
	    border-bottom-right-radius: 0;
	    border-bottom-left-radius: 0;
	}
	.form-signin .form-control {
	    position: relative;
	    box-sizing: border-box;
	    height: auto;
	    padding: 10px;
	    font-size: 16px;
	}
	.form-control {
	    display: block;
	    width: 100%;
	    padding: .375rem .75rem;
	    font-size: 1rem;
	    line-height: 1.5;
	    color: #495057;
	    background-color: #fff;
	    background-clip: padding-box;
	    border: 1px solid #ced4da;
	    border-radius: .25rem;
	    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
	button, input {
	    overflow: visible;
	}
	.form-signin input[type="password"] {
	    margin-bottom: 10px;
	    border-top-left-radius: 0;
	    border-top-right-radius: 0;
	}
	.form-signin .checkbox {
	    font-weight: 400;
	}
	.mb-3, .my-3 {
	    margin-bottom: 1rem!important;
	}









</style>
