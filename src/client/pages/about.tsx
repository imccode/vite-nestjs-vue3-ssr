import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return <div>this about page!{import.meta.env.SSR}</div>
    }
  }
})
