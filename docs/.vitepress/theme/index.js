import theme from 'vitepress/theme'
import registerComponents from '../components'

theme.enhanceApp = (({ app }) => {
  registerComponents(app)
})

export default theme
