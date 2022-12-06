<script>
	import Project from '$lib/components/Project.svelte'
</script>

<h1>Projects</h1>

<ul>
	<li>
		<Project
			title="Dog Rescue"
			participants={83}
			totalParticipants={100}
	    >
		</Project>
	</li>
	<li>
		<Project
			title="Food Drive"
			participants={18}
			totalParticipants={40}
		/>
	</li>
</ul>
<ul>
    <li>
		<Project
			title="Rebuild Home"
			participants={12}
			totalParticipants={20}
		/>
	</li>
    <li>
		<Project
			title="Water Well"
			participants={27}
			totalParticipants={65}
		/>
	</li>
</ul>
<ul>
    <li>
		<Project
			title="Forest Fire"
			participants={99}
			totalParticipants={200}
		/>
	</li>
    <li>
		<Project
			title="Cross Guard"
			participants={1}
			totalParticipants={10}
		/>
	</li>
</ul>

<style>
	h1 {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

	ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem;
		display: flex;
	}

	@media (max-width: 600px) {
		ul {
			flex-direction: column;
		}
	}

	li {
		padding: 0.5rem;
		flex: 1 1 50%;
		min-width: 200px;
	}
</style>