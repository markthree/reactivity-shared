import { describe, expect, it } from 'vitest'
import { foo } from '../src/index'

describe('global', () => {
	it('init', () => {
		expect(foo).toBe(1)
	})
})
