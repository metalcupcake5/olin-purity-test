<script lang="ts">
	import questions from '$lib/data.json';
	let done = [];
</script>

<form>
	{#each questions as question}
		<label>
			<input type="checkbox" name="flavours" value={question} bind:group={done} />

			{question}
			<br />
		</label>
	{/each}
</form>

{done.length}
