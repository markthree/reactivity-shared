# reactivity-shared


    通用的@vue/reactivity的use-api

<br />

## Motation 🐗

[vueuse](https://vueuse.org/) 是非常好用的 `use` 库，但却只能运行在 `web` 端，所以这个库是 `vueuse` 不依赖浏览器的 `api` 的迁移与补充。可以运行在任何满足 `ES` 规范的环境，例如 `node`，`web` 等。

<br />
## Usage

### Install package

```sh
# npm
npm install reactivity-shared

# yarn
yarn install reactivity-shared

# pnpm
pnpm install reactivity-shared
```

### Import

```js
// ESM
import { ref, and, watch } from 'reactivity-shared'

const foo = ref(false)
const bar = ref(false)

watch(and(foo, bar), () => {
    console.log("foo 和 bar 都为 true")
})

// CommonJS
const { ref, and, watch } = require('reactivity-shared')

const foo = ref(false)
const bar = ref(false)

watch(and(foo, bar), () => {
    console.log("foo 和 bar 都为 true")
})
```

<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).

