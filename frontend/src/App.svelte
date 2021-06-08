<script>
	import { Cities } from '../pb/city_message_pb'
	import { EmptyMessage } from "../pb/generic_message_pb"
	import { CitiesServicePromiseClient } from '../pb/city_service_grpc_web_pb' 
	import City from './service/city' 
	export let name;
	let cities = [];

	async function myCall(){
		var deps = {
			proto: {
				EmptyMessage,
				Cities,
				CitiesClient: CitiesServicePromiseClient
			}
		}

		let city = new City(deps)
		return await city.index()
	}

	function getCities(){
		myCall().then(response=>{
			cities = response;
		}).catch(error=>{
			console.log('error', error);
		})
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={getCities}>Get Cities (RPC)</button>
	<ul>
		{#each cities as city}
			<li>
				{city.id} - {city.name}
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>