// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GestãoPet',
  tagline: 'Documentação técnica e guia de uso da API de tutores e pets',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Endereço final no GitHub Pages
  url: 'https://yurygalvao.github.io',
  baseUrl: '/docs-gestaopet/',

  organizationName: 'yurygalvao', // dono do repositório
  projectName: 'docs-gestaopet', // nome do repositório
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/yurygalvao/docs-gestaopet/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Novidades',
          blogDescription: 'Registro de versões do GestãoPet',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/yurygalvao/docs-gestaopet/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GestãoPet',
        logo: {alt: 'Logo do GestãoPet', src: 'img/logo.svg'},
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {to: '/blog', label: 'Novidades', position: 'left'},
          {to: '/sobre', label: 'Sobre', position: 'left'},
          {
            href: 'https://github.com/yurygalvao/docs-gestaopet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {label: 'Visão geral', to: '/docs/intro'},
              {label: 'Guia do Usuário', to: '/docs/category/guia-do-usuario'},
              {label: 'Arquitetura', to: '/docs/category/arquitetura'},
            ],
          },
          {
            title: 'Projeto',
            items: [
              {label: 'Novidades', to: '/blog'},
              {label: 'Sobre', to: '/sobre'},
              {
                label: 'GitHub',
                href: 'https://github.com/yurygalvao/docs-gestaopet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yury Galvão – IFAL. Feito com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell'],
      },
    }),
};

export default config;
