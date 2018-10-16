<template>
	<div class="container-fluid">
        <div class="row">
            <div class="col-md-4" style="background-color: white; height: 85VH; overflow: auto; ">
              <p v-for="report of reports">
                <Report v-bind:report=report />
              </p>
            </div>
            <div class="col-md-8" id="map" style="height: 85VH;">
            </div>
        </div>
    </div>
</template>

<script>
	let count = 0;
	if(count == 1 ){
		location.reload();
	}
	import Report from './Report.vue'
	import {db} from '../firebase';

	export default {
		name: 'Reports',
		components: {
		  	Report
		},
		data() {
		    return {
		      reports: {}
		    }
		  },

		  firebase: {
		    reports: {
		      source: db.ref("HelpReport").orderByChild('created_at'),
		      asObject: true,
		      // Optional, allows you to handle any errors.
		      cancelCallback(err) {
		        console.error(err);
		      }
		    }
		  }
	}

</script>