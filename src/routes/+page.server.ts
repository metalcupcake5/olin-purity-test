import { client } from '$lib/mongo';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const questions = [];
		for (const e of data.entries()) {
			if (isNaN(parseInt(e[0]))) continue;
			questions.push(parseInt(e[0]));
		}

		await client
			.db('olin-purity-test')
			.collection('scores')
			.insertOne({
				questions,
				name: data.get('name') || 'none'
			});

		return { success: true, score: questions.length };
	}
} satisfies Actions;
