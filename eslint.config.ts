import antfu from '@antfu/eslint-config'

export default antfu({
  markdown: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  stylistic: true,
})