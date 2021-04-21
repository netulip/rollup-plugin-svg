import fs from 'fs'
import type { Options } from './types'

export default (userOptions: Options = {}) => {
	return {
		name: 'rollup-plugin-svg',
		enforce: userOptions.enforce,

		async load(id: string) {
			if (!id.endsWith('.svg')) return
			const source = await fs.promises.readFile(id, 'utf8')
			const SVGRegex = new RegExp('(<svg)(.*)', 'gs')
			const [, start, end] = SVGRegex.exec(source) || []
			return `${start} {...$$props}${end}`
		}
	}
}
