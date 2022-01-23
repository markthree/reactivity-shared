import type { ComputedRef, Ref } from 'vue-demi'
import { computed, unref, install } from 'vue-demi'

install()

type MaybeRef<T> = T | Ref<T>

export function and(
	...args: MaybeRef<any>[]
): ComputedRef<boolean> {
	return computed(() => args.every(i => unref(i)))
}
