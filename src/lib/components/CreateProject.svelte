<script>
	import Hidden from './Hidden.svelte';
	let visible = false;
	let shown;
	let show;


	function handleClick() {
		if (visible) {
			visible = false;
		} else {
			visible = true;
		}
	}
</script>

<button on:click={handleClick}>
	Create Project
</button> 

{#if visible}
	<div>
		<br> <br>
		<label for="title" required>Title:</label>
		<input type="text" id="title"> <br> <br>
		<label for="requirements">Requirements:</label>
		<input type="text" id="requirements"> <br> <br>
		<label for="goal">Goal:</label>
		<input type="text" id="goal"> <br> <br>
		<label for="meeting-time">Time:</label>
		<input type="datetime-local" id="meeting-time"> <br> <br>
		<button on:click={show}>Set Location</button> <br> <br>
		<Hidden bind:shown bind:show> 
			<form action="https://www.google.com/maps/search/" method="GET" target="_blank">
				<div>
					<input type="hidden" name="api" value="1"/> <br> <br>
					<label for="location">Location:</label> 	
					<input type="text" name="query" /> 
					<input type="submit" name="loadURL" id="loadURL" value="Submit" /> <br> <br>				
				</div>				  
			</form>
		</Hidden>
		<label for="ProjectForm" required>Project Description: </label> <br>
		<textarea id="ProjectForm" name="ProjectDescription" rows="4" cols="50">Enter project description here...</textarea>
	</div>

	<div>
		<button>Submit</button>
	</div>
{/if}

<style>
	input {
		background-color: #CBD5E1;
		color:#475569;
		padding: 1em;
		border-radius: 5px;
		border: 1px solid transparent;
		font-family: 'Heebo', sans-serif;
		font-size: 16px;
	}
	label {
		position: relative;
	}	
	textarea{
		background-color: #CBD5E1;
		color:#475569;
		padding: 1em;
		border-radius: 10px;
		border: 2px solid transparent;
		outline: none;
		font-family: 'Heebo', sans-serif;
		font-size: 16px;
		transition: all 0.2s;
	}
	textarea:hover {
		background: #E2E8F0;
		color: #64748B;
		padding: 1em;
		border-radius: 10px;
		border: 2px solid transparent;
		border: unset;
		border-radius: 6px;
		padding: .75rem 1.5rem;
		cursor: pointer;
	}
	button {
		background: #E2E8F0;
		color: #64748B;
		border: unset;
		border-radius: 6px;
		padding: .75rem 1.5rem;
		cursor: pointer;
	}
	button:hover {
		background: #CBD5E1;
		color: #475569;
	}
	button:focus {
		background: #94A3B8;
		color: #F1F5F9;
	}
</style>