<script>
	export let title;
	export let participants = 0;
	export let totalParticipants = 0;
</script>

<article class:has-discussion={true}>
	<div>
		<h2>{title}</h2>
		<p>{participants}/{totalParticipants} Volunteers</p>
	</div>
	<div class="discussion">
		<h3>Description About Project</h3>
		<slot name="description"></slot>
	</div>
</article>

<style>
	article {
		border: 1px rgb(15, 165, 219) solid;
		border-radius: 4px;
		position: relative;
	}

	article > div {
		padding: 1.25rem;
	}


	h3 {
		margin: 0 0 0.5rem;
	}

	h3 {
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	p {
		color: rgb(255, 0, 0);
		margin: 0;
	}

	.discussion {
		border-top: 1px rgb(0, 187, 255) solid;
	}
</style>