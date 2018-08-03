import { assign } from './utils'

export default {
  functional: true,
  props: {
    code: {
      type: String
    },
    inline: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: 'markup'
    }
  },
  render(h, ctx) {
    const code = ctx.props.code || ctx.children[0].text
    const inline = ctx.props.inline;
    const language = ctx.props.language
    const prismLanguage = Prism.languages[language]
    const className = `language-${language}`

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
      )
    }

    const codeElClasses = inline ? [ctx.data.class, className] : className;
    const codeEl = h('code', {
      class: codeElClasses,
      domProps: {
        innerHTML: Prism.highlight(code, prismLanguage)
      }
    })

    if (inline) {
      return codeEl;
    }

    return h(
      'pre',
      assign({}, ctx.data, {
        class: [ctx.data.class, className]
      }),
      [
        codeEl
      ]
    )
  }
}
