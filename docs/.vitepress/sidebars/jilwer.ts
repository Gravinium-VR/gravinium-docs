import type { DefaultTheme } from 'vitepress'

export const jilwerSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Jilwer',
    items: [
      { text: 'Overview', link: '/projects/jilwer/' },
      { text: 'Getting Started', link: '/projects/jilwer/getting-started'},

      {
        text: 'Systems',
        collapsed: true,
        items: [
          { text: 'PreProcess', link: '/projects/jilwer/systems/preprocess' },
        ]
      },

      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { text: 'Core', items: [
            { text: 'JilwerRuntime', link: '/projects/jilwer/api/core/jilwerruntime' },
            { text: 'JilwerType', link: '/projects/jilwer/api/core/jilwertype' },
            { text: 'TypeRegistry', link: '/projects/jilwer/api/core/typeregistry' },
            { text: 'Error', link: '/projects/jilwer/api/core/error' },
          ]},
          { text: 'Collections', items: [
            { text: 'ArrayList', link: '/projects/jilwer/api/collections/arraylist' },
          ]},
          { text: 'Math', items: [
            { text: 'VectorMath', link: '/projects/jilwer/api/math/vectormath' },
            { text: 'SDFMath', link: '/projects/jilwer/api/math/sdfmath' },
            { text: 'ArrayMath', link: '/projects/jilwer/api/math/arraymath' },
          ]},
          { text: 'VRC', items: [
            { text: 'NetworkUtilities', link: '/projects/jilwer/api/vrc/networkutilities' },
            { text: 'ObjectPoolSpawner', link: '/projects/jilwer/api/vrc/objectpoolspawner' },
          ]},
        ]
      },
    ]
  }
]
