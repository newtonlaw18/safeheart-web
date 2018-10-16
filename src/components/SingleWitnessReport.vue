<template>
	<tr>
		<td>{{ singlewitnessreport.username || "No info available" }}</td>
		<td>{{ singlewitnessreport.witnessDetails || "No info available" }}</td>
		<td class="text-center">{{ singlewitnessreport.witnessDate + " " +  singlewitnessreport.witnessTime || "No info available"}}</td>
		<td class="text-right">{{ singlewitnessreport.witnessLocation || "No info available" }}</td>
		<td class="text-right">
			<!-- <button type="button" rel="tooltip" class="btn btn-danger btn-icon btn-sm ">
				<i class="fa fa-picture-o" aria-hidden="true"></i>
			</button> -->
			{{ singlewitnessreport.witnessPhoto || "No info available" }}
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'SingleWitnessReport',
		props: {
		    singlewitnessreport: Object
		}
	}
</script>