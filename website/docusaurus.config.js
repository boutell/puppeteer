// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DOC_ROUTE_BASE_PATH = '/';
const DOC_PATH = '../docs';

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map(item => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Puppeteer',
  tagline: 'Headless Chrome Node.js API',
  url: 'https://puppeteer.github.io',
  baseUrl: '/puppeteer/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'puppeteer',
  projectName: 'puppeteer',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: false,
        blog: false,
        docs: {
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            const apiCategoryItem = sidebarItems.find(value => {
              return value.type === 'category';
            });
            if (apiCategoryItem && apiCategoryItem.type === 'category') {
              apiCategoryItem.label = 'API';

              /** @type {typeof sidebarItems} */
              const newItems = [];
              for (const item of apiCategoryItem.items.sort((a, b) => {
                if ('label' in a && 'label' in b) {
                  return (a.label ?? '') < (b.label ?? '') ? -1 : 1;
                }
                return -1;
              })) {
                if ('id' in item) {
                  const [, namespace, object] = item.id.split('.', 3);
                  const currentItem = newItems[newItems.length - 1];
                  if (
                    !currentItem ||
                    !('label' in currentItem) ||
                    currentItem.label !== namespace
                  ) {
                    if (object) {
                      item.label = object;
                      newItems.push({
                        type: 'category',
                        label: namespace,
                        items: [item],
                      });
                    } else {
                      newItems.push({
                        type: 'category',
                        label: namespace,
                        items: [],
                        link: {type: 'doc', id: item.id},
                      });
                    }
                  } else {
                    if (object) {
                      item.label = object;
                      // @ts-ignore
                      currentItem.items.push(item);
                    } else {
                      // @ts-ignore
                      currentItem.link = {type: 'doc', id: item.id};
                    }
                  }
                }
              }
              apiCategoryItem.items = reverseSidebarItems(newItems);
            }
            return sidebarItems;
          },
          path: DOC_PATH,
          routeBasePath: DOC_ROUTE_BASE_PATH,
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Puppeteer',
        logo: {
          alt: 'Puppeteer Logo',
          src: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/puppeteer',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chromedevtools',
              },
              {
                label: 'YouTube',
                href: 'https://goo.gle/devtools-youtube',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Google, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          docsDir: DOC_PATH,
          docsRouteBasePath: DOC_ROUTE_BASE_PATH,
          hashed: true,
        },
      ],
    ],
};

module.exports = config;
