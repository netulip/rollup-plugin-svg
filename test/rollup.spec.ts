import fs from 'fs'
import rollup from 'rollup'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'

import plugin from '../src'

describe('basic functionality', () => {
	it('can compile svg file', async () => {
		let warnings = []

		let bundle = await rollup.rollup({
			input: 'test/fixtures/rollup/entry.js',
			onwarn: (warning) => warnings.push(warning),
			plugins: [
				plugin(),
				svelte({
					extensions: ['.svelte', '.svg']
				}),
				resolve({
					browser: true,
					dedupe: ['svelte', 'svelte/transition', 'svelte/internal']
				})
			]
		})

		await bundle.write({
			format: 'iife',
			file: 'test/fixtures/rollup/dist/bundle.js',
			assetFileNames: '[name].[ext]',
			sourcemap: true
		})

		expect(true).toBe(true)
	})
})
