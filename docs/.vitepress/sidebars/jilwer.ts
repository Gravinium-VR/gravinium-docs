import type { DefaultTheme } from 'vitepress'

export const jilwerSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Jilwer',
    items: [
      { text: 'Overview', link: '/projects/jilwer/' },
      { text: 'Getting Started', link: '/projects/jilwer/getting-started'},
      { text: 'Installing', link: '/projects/jilwer/installing' },

      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { text: 'Core', collapsed: true, items: [
            { text: 'TypeRegistry', link: '/projects/jilwer/api/core/typeregistry.md' },
            { text: 'Error', link: '/projects/jilwer/api/core/error' },
          ]},
        ]
      },
    ]
  }
]
