import { defineConfig } from 'vitepress'
import { jilwerSidebar } from './sidebars/jilwer'
import { guidesSidebar } from './sidebars/guides'
import { projectsSidebar } from './sidebars/projects'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gravinium Docs",
  description: "The central hub for Gravinium projects, developer tools, guides, and more",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/getting-started'},
      { text: 'Projects', link: '/projects/' },
      { text: 'Contributors', link: '/contributors' }
    ],

    sidebar: {
      '/guides/': guidesSidebar,
      
      '/projects/': projectsSidebar,
      '/projects/jilwer/': jilwerSidebar,
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
      {
        icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.95 21q-2.05 0-3.5-1.45T3 16.05q0-1 .375-1.9t1.075-1.6L7.8 9.225l1.4 1.4l-3.35 3.35q-.425.425-.637.963T5 16.05q0 1.225.863 2.088T7.95 19q.575 0 1.125-.213t.975-.637l3.325-3.35l1.425 1.425l-3.35 3.325q-.7.7-1.6 1.075T7.95 21m1.975-5.5L8.5 14.075L14.075 8.5L15.5 9.925zm6.275-.7l-1.4-1.425l3.35-3.325q.425-.425.625-.95t.2-1.1q0-1.25-.85-2.125T16.025 5q-.575 0-1.112.213t-.963.637L10.625 9.2L9.2 7.8l3.35-3.35q.7-.7 1.6-1.075T16.05 3q2.05 0 3.487 1.45t1.438 3.525q0 .975-.363 1.875t-1.062 1.6z"/></svg>'},
        link: 'https://gravinium.org'
      },
      { icon: 'github', link: 'https://github.com/Gravinium-VR' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gravinium.org' }
    ],

    footer: {
      message: 'Docs: CC-BY-4.0 | Code Examples: MIT | <a href="https://github.com/Gravinium-VR/gravinium-docs/blob/main/LICENSE" target="_blank">License</a>',
      copyright: '© 2026 <a href="https://gravinium.org" target="_blank">Gravinium</a>'
    }
  }
})
