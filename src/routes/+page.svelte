<script lang="ts">
	import type { ActionData } from './$types';
	import questions from '$lib/data.json';

	export let form: ActionData;
</script>

{#if form?.success}
	<div style="outline: solid 2px;">
		<h1>your score is {form.score}</h1>
		<span>
			your score has been logged<br />please do not submit multiple times it will mess up data
			collection 3:
		</span><br />
		<sub style="font-size:xx-small">
			in all honesty it really does not matter (i am not doing anything with the data anyways) but
			it would be cool to look at you guys should get datapilled imagine all the graphs i could make
		</sub>
	</div>
{/if}

<svelte:head>
	<title>Olin Purity Test</title>
	<meta property="og:title" content="olin purity test" />
	<meta property="og:description" content="yeah" />
</svelte:head>

<div style="display: flex;flex-direction: column;gap: 2em;">
	<!-- yeah im too lazy to use style tags what about it -->
	<div>
		<h1>olin purity test</h1>
		<span>score is automatically calculated at the bottom</span>
	</div>
	<form method="POST">
		{#each questions as question, i}
			<label>
				<input type="checkbox" name={i.toString()} value={question} />
				<span>{question}</span>
				<br />
			</label>
		{/each}

		<!-- <input type="text" name="name" placeholder="Name(optional)" /> -->

		<button>submit</button><br />
		<sub style="font-size:xx-small">
			by submitting this form you agree to give me (the creator) (someone with occasionally (rarely)
			has at least 1 braincell) 4 gazillion dollar
		</sub>
	</form>

	<footer>
		questions taken from <a href="https://franklyspeakingnews.com/2022/03/the-olin-purity-test/">
			https://franklyspeakingnews.com/2022/03/the-olin-purity-test/
		</a>
		<br />
		site source:
		<a href="https://github.com/metalcupcake5/olin-purity-test">
			<i class="fa-brands fa-github"></i> metalcupcake5/olin-purity-test
		</a>
	</footer>
</div>
