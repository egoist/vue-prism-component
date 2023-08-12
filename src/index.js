import { h, defineComponent, computed } from 'vue'
import Prism from 'prismjs'

export default defineComponent({
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
  setup(props, { slots, attrs }) {
    const defaultSlot = computed(() => (slots && slots.default && slots.default()) || []);
    const code = computed(() => props.code || (defaultSlot.value && defaultSlot.value.length)
      ? defaultSlot.value[0].children
      : '');
    const prismLanguage = computed(() => Prism.languages[props.language]);
    const className = computed(() => `language-${props.language}`);

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
      )
    }

    const highlightedCode = computed(() => Prism.highlight(code.value, prismLanguage.value));

    return () => {
      if (props.inline) {
        return h('code', {
          class: [className.value],
          innerHTML: highlightedCode.value
        })
      }

      return h(
        'pre',
        {
          ...attrs,
          class: [attrs.class, className.value]
        },
        [
          h('code', {
            ...attrs,
            class: [attrs.class, className.value],
            innerHTML: highlightedCode.value
          })
        ]
      )
    }
  }
})
