<script lang="ts">
	import questions from '$lib/data.json';
	let done = [];
</script>

<svelte:head>
	<title>Olin Purity Test</title>
	<meta property="og:title" content="olin purity test" />
	<meta property="og:description" content="yeah" />
</svelte:head>

<h1>olin purity test</h1>
<span>score is automatically calculated at the bottom</span>
<br /><br />
{#each questions as question}
	<label>
		<input type="checkbox" name="flavours" value={question} bind:group={done} />
		<span>{question}</span>
		<br />
	</label>
{/each}

<h1>your score: {done.length}</h1>

<footer>
	questions taken from <a href="https://franklyspeakingnews.com/2022/03/the-olin-purity-test/"
		>https://franklyspeakingnews.com/2022/03/the-olin-purity-test/</a
	><br />
	site source:
	<a href="https://github.com/metalcupcake5/olin-purity-test"
		><i class="fa-brands fa-github"></i> metalcupcake5/olin-purity-test</a
	>
</footer>
