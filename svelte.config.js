import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({
		scss: {
			prependData: `@import 'src/lib/global.scss';`
		}
	}),
	importAssets()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
