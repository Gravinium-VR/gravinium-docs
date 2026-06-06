import type { DefaultTheme } from 'vitepress'

export const jilwerSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Jilwer',
    items: [
      { text: 'Overview', link: '/projects/jilwer/' },
      { text: 'Getting Started', link: '/projects/jilwer/getting-started'},

      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { text: 'Core', items: [
            { text: 'JilwerRuntime', link: '/projects/jilwer/api/core/jilwerruntime' },
            { text: 'JilwerType', link: '/projects/jilwer/api/core/jilwertype' },
            { text: 'TypeRegistry', link: '/projects/jilwer/api/core/typeregistry.md' },
            { text: 'Error', link: '/projects/jilwer/api/core/error' },
          ]},
          { text: 'Collections', items: [
            { text: 'ArrayList', link: '/projects/jilwer/api/collections/arraylist' },
          ]},
        ]
      },
    ]
  }
]
