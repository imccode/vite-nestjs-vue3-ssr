import { def } from '@vue/shared'

const state: State = {
  title: 'app',
}

export default state

export interface State {
  title?: string
}
