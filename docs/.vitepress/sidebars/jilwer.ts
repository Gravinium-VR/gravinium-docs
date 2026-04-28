import type { DefaultTheme } from 'vitepress'

export const jilwerSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Jilwer',
    items: [
      { text: 'Overview', link: '/projects/jilwer/' },

      {
        text: 'API',
        collapsed: true,
        items: [
          { text: 'Auth', link: '/projects/jilwer/api/auth' },
          { text: 'Types', link: '/projects/jilwer/api/types' }
        ]
      },

      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Basic Usage', link: '/projects/jilwer/examples/basic-usage' }
        ]
      },

      {
        text: 'Templates',
        collapsed: true,
        items: [
          { text: 'World Template', link: '/projects/jilwer/templates/world-template' }
        ]
      }
    ]
  }
]
