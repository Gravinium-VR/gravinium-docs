import { defineConfig } from 'vitepress'
import { jilwerSidebar } from './sidebars/jilwer'
import { guidesSidebar } from './sidebars/guides'
import { projectsSidebar } from './sidebars/projects'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gravinium Docs",
  description: "The official Gravinium documentation",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Guides', link: '/guides/getting-started'},
      { text: 'Contributors', link: '/contributors' }
    ],

    sidebar: {
      '/projects/': projectsSidebar,
      '/projects/jilwer/': jilwerSidebar,

      '/guides/': guidesSidebar
    },


    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gravinium-VR' },
    ],

    footer: {
      message: 'Docs: CC-BY-4.0 | Code Examples: MIT | <a href="https://github.com/Gravinium-VR/gravinium-docs/blob/main/LICENSE" target="_blank">License</a>',
      copyright: '© 2026 <a href="https://gravinium.org" target="_blank">Gravinium</a>'
    }
  }
})
