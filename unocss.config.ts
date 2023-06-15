import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  rules: [
    ['custom-rule', { color: 'red' }],
  ],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
    'section-container': 'bg-white dark:bg-dark-secondary transition-colors duration-400',
    'section-wrap': 'max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-8 md:py-20 px-4 sm:px-6 lg:px-8 gap-x-7',
  },
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: '#F9A30E',
        secondary: '#25305C',
        background: '#F7F8FA',
        accent: '#677788',
      },
      dark: {
        primary: '#0C0C0D',
        secondary: '#18181B',
        text: '#FAFAFA',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: {
          name: 'Nunito',
          weights: ['400', '500', '600', '700'],
        },
      },
    }),
  ],
})
