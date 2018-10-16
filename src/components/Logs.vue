<template>
	<div class="row">
		<div class="col-md-10 ml-auto mr-auto">
			<h1 class="text-center">Logs</h1>
			<div class="card card-plain">
		        <div class="card-body">
		            <div class="table-responsive">
		                <table class="table">
		    				<thead class="">
		        				<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Type of Help</th>
									<th>Datetime</th>
									<th class="text-center">Longitude</th>
									<th class="text-right">Latitude</th>
								</tr>
							</thead>
		    				<tbody v-for="log of logs">
								<Log v-bind:log=log />			
								<!-- {{ log }} -->
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import Log from './Log.vue'
	import {db} from '../firebase';
	export default {
		name: 'Logs',
		components: {
		  	Log
		},
		data() {
		    return {
		      logs: {}
		    }
		  },

		  firebase: {
		    logs: {
		      source: db.ref("HelpReport"),
		      asObject: true,
		      // Optional, allows you to handle any errors.
		      cancelCallback(err) {
		        console.error(err);
		      }
		    }
		  }

	}
</script>