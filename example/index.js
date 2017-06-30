import Vue from 'vue'
import 'prismjs'
import Prism from '../src'
import 'prismjs/themes/prism.css'

const code = `
<template>
  <div>
    <prism>{{ code }}</prism>
    <prism language="javascript"></prism>
  </div>
</template>

<script>
import Prism from 'vue-prismjs'
import 'prismjs'

export default {
  data() {
    return {
      code: '<strong>html code</strong>',
      otherCode: 'const foo = "javascript code"'
    }
  },
  components: { Prism }
}
</script>
`

new Vue({
  el: '#app',
  render() {
    return (
      <div>
        <Prism>{code}</Prism>
      </div>
    )
  }
})
