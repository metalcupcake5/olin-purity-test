<script lang="ts">
	import type { ActionData } from './$types';
	import questions from '$lib/data.json';

	export let form: ActionData;
</script>

{#if form?.success}
	<div style="outline: solid 2px;">
		<h1>your score is {form.score}/{questions.length}</h1>
		<span>
			your score has been logged
			<br />
			please do not submit multiple times it will mess up data collection 3:
		</span>
	</div>
{/if}

<svelte:head>
	<title>Olin Purity Test</title>
	<meta property="og:title" content="olin purity test" />
	<meta property="og:description" content="yeah" />
</svelte:head>

<div style="display: flex;flex-direction: column;gap: 1em;">
	<!-- yeah im too lazy to use style tags what about it -->
	<div>
		<h1>olin purity test</h1>
		<strong>
			Caution: This is not intended to be a bucket list. Completion of all items on this test will
			likely result in becoming Olin Man.
		</strong>
		<br />
		<span>submit score at the bottom</span>
	</div>
	<form method="POST">
		{#each questions as question, i}
			<label>
				<input type="checkbox" name={i.toString()} value={question} />
				<span>{question}</span>
				<br />
			</label>
		{/each}
		<br />

		<span>
			submitting this form will log your score, please make sure to complete accurately and to not
			submit multiple times it will mess up data collection 3:
		</span>
		<br />
		<sub style="font-size:xx-small">
			in all honesty it really does not matter (we are not doing anything with the data anyways) but
			it would be cool to look at
			<br />
			you guys should get datapilled imagine all the graphs we could make
		</sub>
		<br />
		<input type="text" name="name" placeholder="Name (optional)" />
		<br />
		<button>submit</button>
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
