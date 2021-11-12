import { defineComponent, effect } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  setup() {

    const { state } = useStore()

    effect(() => {
      if(!import.meta.env.SSR) {
        document.title = state.title
      }
    })

    return () => {
      return <div>this home page!</div>
    }
  }
})
