import fs from 'fs'
import vite from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

import plugin from '../src'

describe('basic functionality', () => {
	it('can compile svg file', async () => {
		let bundle = await vite.build({
			root: 'test/fixtures/vite',
			plugins: [plugin({ enforce: 'pre' }), svelte({ extensions: ['.svelte', '.svg'] })],
			build: {
				minify: false
			}
		})
		expect(true).toBe(true)
	})
})
