<template>
	<div v-if="report.type_of_help === 'Ambulance'">
		<div class="card" data-background-color="red" v-on:click="getLocation(report.latitude, report.longitude, report.username, report.type_of_help)">
		    <div class="card-body">
		        <h6 class="category-social">
		            <i class="fa fa-medkit" aria-hidden="true"></i> in need of {{ report.type_of_help }}
		        </h6>
		        <p>
		            {{ report.help_description }}
		        </p>
		        <div class="card-footer">
		            <div class="author">
		                <img src="img/ryan.jpg" alt="..." class="avatar img-raised">
		                <span>{{ report.username }}</span>
		            </div>
		            <div class="stats stats-right">
		                <i class="fa fa-clock-o" aria-hidden="true"></i> {{ report.created_at }}
		            </div>
		        </div>
		    </div>
		</div>
	</div>
	<div v-else-if="report.type_of_help === 'FireFighters'">
		<div class="card" data-background-color="orange" v-on:click="getLocation(report.latitude, report.longitude, report.username, report.type_of_help)">
		    <div class="card-body">
		        <h6 class="category-social">
		            <i class="fa fa-fire-extinguisher" aria-hidden="true"></i> in need of {{ report.type_of_help }}
		        </h6>
		        <p>
		            {{ report.help_description }}
		        </p>
		        <div class="card-footer">
		            <div class="author">
		                <img src="img/ryan.jpg" alt="..." class="avatar img-raised">
		                <span>{{ report.username }}</span>
		            </div>
		            <div class="stats stats-right">
		                <i class="fa fa-clock-o" aria-hidden="true"></i> {{ report.created_at }}
		            </div>
		        </div>
		    </div>
		</div>
	</div>
	<div v-else>
		<div class="card" data-background-color="blue" v-on:click="getLocation(report.latitude, report.longitude, report.username, report.type_of_help)">
		    <div class="card-body">
		        <h6 class="category-social">
		            <i class="fa fa-shield" aria-hidden="true"></i> in need of {{ report.type_of_help }}
		        </h6>
		        <p>
		            {{ report.help_description }}
		        </p>
		        <div class="card-footer">
		            <div class="author">
		                <img src="img/ryan.jpg" alt="..." class="avatar img-raised">
		                <span>{{ report.username }}</span>
		            </div>
		            <div class="stats stats-right">
		                <i class="fa fa-clock-o" aria-hidden="true"></i> {{ report.created_at }}
		            </div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Report',
		props: {
		    // user_name: String,
		    created_at: String,
		    report: Object
		},
		methods: {
			getLocation: function(latitude, longitude, username, type_of_help) {				
				// var map = new mapboxgl.Map({
			 //      container: 'map', // container id
			 //      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
			 //      center: [longitude, latitude], // starting position [lng, lat]
			 //      zoom: 17 // starting zoom
			 //    });

			    // var popup = new mapboxgl.Popup({closeOnClick: false})
			    // 	.setLngLat([longitude, latitude])
			    // 	.setHTML('<p><b>' + username + '</b> in need of ' + type_of_help + '</p><button class="btn btn-lg btn-danger btn-block" data-toggle="modal" data-target="#myModal">Dispatch Help</button>')
			    // 	.addTo(map);

			    map.setCenter({lat:latitude, lng:longitude});
  				map.setZoom(18);

  				var group = new H.map.Group();
  				map.addObject(group);

			  	// add 'tap' event listener, that opens info bubble, to the group
			  	group.addEventListener('tap', function (evt) {
			    // event target is the marker itself, group is a parent event target
			    // for all objects that it contains
				    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
					    // read custom data
					    content: evt.target.getData()
				    });
				    // show info bubble
				    ui.addBubble(bubble);
				    bubble.open();
			  	}, false);
  				// addMarkerToGroup(group, {lat:latitude, lng:longitude},
				  //   '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
				  //   '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

  				var marker = new H.map.Marker({lat:latitude, lng:longitude});
		      	// add custom data to the marker
		      	marker.setData('<div><p><b>' + username + '</b> is in need of ' + type_of_help + '</p><button class="btn btn-danger" data-toggle="modal" data-target="#myModal">Dispatch Help</button></div>');
		      	group.addObject(marker);
			    
			}
		}
	}
</script>

<style scoped>
	.card:hover{
		background-color: #ffc854;
		cursor: pointer; 
		/*width: 5px;*/
	}
	.card:active{
		background-color: #0f4c9b;
	}
</style>
