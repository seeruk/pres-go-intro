// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import { colors } from '@unocss/preset-mini'
import transformerDirectives from '@unocss/transformer-directives'
import { version } from './package.json'

// Tailwind CSS color palette
const colornames = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'navy',
]

// Color values to include
const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const prefixes = ['fill-', 'fg-', 'bg-', 'text-', 'color-', 'border-']

// Function to generate classes
const generateColors = (prefixes, colors, values) => {
  const classes = []
  colors.forEach((color) => {
    values.forEach((value) => {
      prefixes.forEach((prefix) => {
        classes.push(`${prefix}${color}-${value}`)
      })
    })
  })
  return classes
}

const generate_color_schemes = (colors) => {
  const schemes = []
  const classes = []

  const addScheme = (longName, shortName, styles) => {
    schemes.push([longName, styles])
    schemes.push([shortName, styles])
    classes.push(longName, shortName)
  }

  addScheme('neversink-go-scheme', 'ns-c-go-scheme', {
    '--neversink-bg-color': colors['cyan'][600],
    '--neversink-bg-code-color': colors['cyan'][600],
    '--neversink-fg-code-color': colors['cyan'][100],
    '--neversink-fg-color': colors['white'],
    '--neversink-text-color': colors['white'],
    '--neversink-border-color': colors['cyan'][100],
    '--neversink-highlight-color': '#fddd00',
    '--neversink-admon-bg-color': colors['cyan'][900],
    '--neversink-admon-border-color': colors['cyan'][300],
    '--neversink-admon-text-color': colors['cyan'][100],
  })

  addScheme('neversink-black-scheme', 'ns-c-bk-scheme', {
    '--neversink-bg-color': colors['black'],
    '--neversink-bg-code-color': colors['gray'][600],
    '--neversink-fg-code-color': colors['white'],
    '--neversink-fg-color': colors['white'],
    '--neversink-text-color': colors['white'],
    '--neversink-border-color': colors['white'],
    '--neversink-highlight-color': '#FFA500',
    '--neversink-admon-bg-color': colors['black'],
    '--neversink-admon-border-color': colors['white'],
    '--neversink-admon-text-color': colors['white'],
  })

  addScheme('neversink-white-scheme', 'ns-c-wh-scheme', {
    '--neversink-bg-color': colors['white'],
    '--neversink-bg-code-color': colors['gray'][100],
    '--neversink-fg-code-color': colors['black'],
    '--neversink-fg-color': colors['black'],
    '--neversink-text-color': colors['black'],
    '--neversink-border-color': colors['gray'][950],
    '--neversink-highlight-color': '#FFA500',
    '--neversink-admon-bg-color': colors['white'],
    '--neversink-admon-border-color': colors['gray'][950],
    '--neversink-admon-text-color': colors['black'],
  })

  addScheme('neversink-dark-scheme', 'ns-c-dk-scheme', {
    '--neversink-bg-color': colors['gray'][800],
    '--neversink-bg-code-color': colors['gray'][600],
    '--neversink-fg-code-color': colors['white'],
    '--neversink-fg-color': colors['gray'][100],
    '--neversink-text-color': colors['gray'][100],
    '--neversink-border-color': colors['gray'][100],
    '--neversink-highlight-color': '#FFA500',
    '--neversink-admon-bg-color': colors['gray'][800],
    '--neversink-admon-border-color': colors['gray'][100],
    '--neversink-admon-text-color': colors['gray'][100],
  })

  addScheme('neversink-light-scheme', 'ns-c-lt-scheme', {
    '--neversink-bg-color': colors['gray'][100],
    '--neversink-bg-code-color': colors['gray'][200],
    '--neversink-fg-color': colors['gray'][800],
    '--neversink-text-color': colors['gray'][800],
    '--neversink-border-color': colors['gray'][800],
    '--neversink-highlight-color': '#FFA500',
    '--neversink-admon-bg-color': colors['gray'][100],
    '--neversink-admon-border-color': colors['gray'][800],
    '--neversink-admon-text-color': colors['gray'][800],
  })

  for (const color of colornames) {
    if (color == 'navy') {
      addScheme('neversink-navy-scheme', 'ns-c-nv-scheme', {
        '--neversink-bg-color': '#2a373a',
        '--neversink-bg-code-color': colors['gray'][200],
        '--neversink-fg-color': colors['gray'][300],
        '--neversink-text-color': colors['gray'][300],
        '--neversink-border-color': colors['gray'][300],
        '--neversink-highlight-color': '#FFA500',
        '--neversink-admon-bg-color': '#2a373a',
        '--neversink-admon-border-color': colors['gray'][300],
        '--neversink-admon-text-color': colors['gray'][300],
      })

      addScheme('neversink-navy-light-scheme', 'ns-c-nv-lt-scheme', {
        '--neversink-bg-color': colors['gray'][50],
        '--neversink-bg-code-color': colors['gray'][400],
        '--neversink-fg-color': '#2a373a',
        '--neversink-text-color': '#2a373a',
        '--neversink-border-color': '#2a373a',
        '--neversink-highlight-color': '#FFA500',
        '--neversink-admon-bg-color': colors['gray'][50],
        '--neversink-admon-border-color': '#2a373a',
        '--neversink-admon-text-color': '#2a373a',
      })
    } else {
      const shortColor = color.slice(0, 2)

      addScheme(`neversink-${color}-scheme`, `ns-c-${shortColor}-scheme`, {
        '--neversink-bg-color': colors[color][500],
        '--neversink-bg-code-color': colors[color][600],
        '--neversink-fg-code-color': colors[color][100],
        '--neversink-fg-color': colors[color][100],
        '--neversink-text-color': colors[color][100],
        '--neversink-border-color': colors[color][100],
        '--neversink-highlight-color': colors[color][100],
        '--neversink-admon-bg-color': colors[color][500],
        '--neversink-admon-border-color': colors[color][300],
        '--neversink-admon-text-color': colors[color][100],
      })

      addScheme(`neversink-${color}-light-scheme`, `ns-c-${shortColor}-lt-scheme`, {
        '--neversink-bg-color': colors[color][100],
        '--neversink-bg-code-color': colors[color][200],
        '--neversink-fg-code-color': colors[color][600],
        '--neversink-fg-color': colors[color][700],
        '--neversink-text-color': colors[color][600],
        '--neversink-border-color': colors[color][600],
        '--neversink-highlight-color': colors[color][600],
        '--neversink-admon-bg-color': colors[color][100],
        '--neversink-admon-border-color': colors[color][500],
        '--neversink-admon-text-color': colors[color][700],
      })
    }
  }
  return { classes: classes, schemes: schemes }
}

const generate_text_sizes = () => {
  const classes = Array.from({ length: 10 }, (_, i) => `text-${i + 1}xl`)
  classes.push('text-xs')
  classes.push('text-sm')
  classes.push('text-base')
  classes.push('text-lg')
  classes.push('text-xl')
  return classes
}
const generateColumns = (max) => {
  return Array.from({ length: max }, (_, i) => `col-span-${i + 1}`)
}

const generateRows = (max) => {
  return Array.from({ length: max }, (_, i) => `row-span-${i + 1}`)
}

const schemes = generate_color_schemes(colors)

console.log(`Loading Neversink ${version} theme uno.config.ts...`)
export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno()],
  rules: [...schemes.schemes],
  safelist: [
    ...generateColors(prefixes, colornames, values),
    ...generateColumns(13),
    ...generateRows(13),
    ...generate_text_sizes(),
    ...schemes.classes,
    ...['text-center', 'text-right', 'text-left', ':root'],
    ...[
      'grid',
      'w-full',
      'grid-cols-2',
      'grid-item',
      'grid-cols-1',
      'grid-col-span-1',
      'mt-10',
      'mb-10',
      'm-10',
      'w-150px',
      'h-150px',
      'z-0',
      'z-100' /* for the docs */,
      'grid-cols-[1fr_max-content]' /* a fix for a uno bug */,
    ],
  ],
  transformers: [transformerDirectives()],
})
