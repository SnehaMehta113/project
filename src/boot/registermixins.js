import { boot } from 'quasar/wrappers'
import validations from '../helpers/validations.js'
export default boot(({ app }) => {
  app.mixin({
    methods: validations
  })
})
