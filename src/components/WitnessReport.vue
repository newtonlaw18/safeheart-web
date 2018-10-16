<template>
	<div class="row">
		<div class="col-md-10 ml-auto mr-auto">
			<h1 class="text-center">Witness Reports</h1>
			<div class="card card-plain">
		        <div class="card-body">
		            <div class="table-responsive">
		                <table class="table">
		    				<thead class="">
		        				<tr>
									<th>Name</th>
									<th>Details</th>
									<th class="text-center">Datetime</th>
									<th class="text-right">Location</th>
									<th class="text-right">Image</th>
								</tr>
							</thead>
		    				<tbody v-for="singlewitnessreport of witnessreports">
								<SingleWitnessReport v-bind:singlewitnessreport=singlewitnessreport />			
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import SingleWitnessReport from './SingleWitnessReport.vue'
	import {db} from '../firebase';
	export default {
		name: 'WitnessReport',
		components: {
		  	SingleWitnessReport
		},
		data() {
		    return {
		      witnessreports: {}
		    }
		  },

		  firebase: {
		    witnessreports: {
		      source: db.ref("WitnessInfo"),
		      asObject: true,
		      // Optional, allows you to handle any errors.
		      cancelCallback(err) {
		        console.error(err);
		      }
		    }
		  }

	}
</script>