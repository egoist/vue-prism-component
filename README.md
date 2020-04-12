# vue-prism-component

[![NPM version](https://img.shields.io/npm/v/vue-prism-component.svg?style=flat)](https://npmjs.com/package/vue-prism-component) [![NPM downloads](https://img.shields.io/npm/dm/vue-prism-component.svg?style=flat)](https://npmjs.com/package/vue-prism-component) [![Release Package](https://github.com/egoist/vue-prism-component/workflows/Release%20Package/badge.svg)](https://github.com/egoist/vue-prism-component/actions?query=workflow%3A%22Release+Package%22)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/sponsors/egoist)

## Install

```bash
yarn add vue-prism-component
```

CDN: [UNPKG](https://unpkg.com/vue-prism-component/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-prism-component/dist/)

## Usage

First you need to load `Prism` somewhere in your app:

```js
// yarn add prismjs
import 'prismjs'
import 'prismjs/themes/prism.css'
```

OR:

```html
<link rel="stylesheet" href="https://unpkg.com/prismjs/themes/prism.css" />
<script src="https://unpkg.com/prismjs"></script>
```

Then In SFC:

```vue
<template>
  <prism language="javascript">{{ code }}</prism>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  data() {
    return {
      code: 'const a = b'
    }
  },
  components: {
    Prism
  }
}
</script>
```

Or In JSX:

```js
<Prism language="html">{`
  <div>
    <strong>foo</strong>
  </div>
`}</Prism>
```

For inline rendering, pass the `inline` prop:

```js
<Prism inline language="javascript" >alert("foo");</Prism>
```

You can also set the code using a prop:

```js
import 'prismjs/components/prism-rust'

<Prism language="rust" code={ myRustCode } />
```

## Related

- [vue-highlight-component](https://github.com/egoist/vue-highlight-component): highlight code using highlight.js and vue component.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-prism-component** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-prism-component/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
