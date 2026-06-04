import type { DefaultTheme } from 'vitepress'

export const jilwerSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Jilwer',
    items: [
      { text: 'Overview', link: '/projects/jilwer/' },
      { text: 'Getting Started', link: '/projects/jilwer/getting-started'},
      { text: 'Installing', link: '/projects/jilwer/installing' },

      { text: 'API Reference', link: '/projects/jilwer/api/' },

      // {
      //   text: 'Examples',
      //   collapsed: true,
      //   items: [
      //     { text: 'Overview', link: '/projects/jilwer/examples/'},
      //   ]
      // },
    ]
  }
]
