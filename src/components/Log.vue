<template>
	<tr>
		<td>{{ log.username }}</td>
		<td>{{ log.help_description }}</td>
		<td>{{ log.type_of_help }}</td>
		<td>{{ log.created_at || "No info available" }}</td>
		<td class="text-center">{{ log.longitude || "No info available"}}</td>
		<td class="text-right">{{ log.latitude || "No info available" }}</td>
	</tr>
</template>

<script>
	export default {
		name: 'Log',
		props: {
		    log: Object
		}
	}
</script>