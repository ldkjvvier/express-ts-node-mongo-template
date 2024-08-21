module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@/modules': './src/modules',
          '@/controllers': './src/modules/controllers',
          '@/models': './src/modules/models',
          '@/middlewares': './src/modules/middlewares',
          '@/services': './src/modules/services',
          '@/utils': './src/modules/utils',
          '@/schemas': './src/modules/schemas',
          '@/config': './src/config'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
