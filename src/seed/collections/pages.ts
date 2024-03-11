import type { Page } from '../../payload-types'

const homePage: Partial<Page> = {
  title: 'Strona główna',
  hero: {
    type: 'highImpact',
    title: 'Deszczownie',
    richText: [
      {
        children: [
          {
            text: '\nAenean in massa accumsan, faucibus orci non, vehicula mauris. \nSuspendisse ullamcorper scelerisque sem, nec efficitur augue aliquam \nvel. Morbi placerat mauris quis semper pharetra. Donec eget blandit \nelit, ac dictum arcu. Fusce euismod risus sed ante facilisis suscipit. \nPraesent quis rutrum ipsum. Vivamus sit amet facilisis lorem, eget \nfermentum lectus. Aliquam vestibulum purus quis arcu tincidunt sodales. \nIn nec enim elit.\n\n\n',
          },
        ],
      },
    ],
    links: [
      {
        id: '65ad4e4eed896e8d8d9ebe64',
        link: {
          type: 'custom',
          icon: true,
          newTab: null,
          url: 'https://mug.pl',
          label: 'Test',
          appearance: 'primary',
        },
      },
      {
        id: '65ad4ec0ed896e8d8d9ebe65',
        link: {
          type: 'custom',
          icon: null,
          newTab: true,
          url: 'https://mateusz-wojcik.pl',
          label: 'Test link',
          appearance: 'secondary',
        },
      },
    ],
    // @ts-expect-error
    media: '{{HERO_BG}}',
  },
  layout: [
    {
      id: '65aed2cc67e7b399a5d68f9f',
      isHalfWidth: null,
      blockName: null,
      blockType: 'content',
      content: [
        {
          id: '65aed2db67e7b399a5d68fa0',
          enableAdditionalImages: false,
          blockName: null,
          additionalImages: [],
          blockType: 'mediaBlock',
          // @ts-expect-error
          media: '{{IMAGE_1}}',
        },
        {
          id: '65aed2de67e7b399a5d68fa1',

          richText: [
            {
              type: 'h2',

              children: [
                {
                  text: 'Explore the Wonders of Markdown',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: "Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.",
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Using Markdown is straightforward: text written in Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`. You can make words **bold** by wrapping them in two asterisks. Here are some reasons why Markdown has become so popular:',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: '- ',
                },
                {
                  bold: true,
                  text: 'Simplicity',
                },

                {
                  text: ": It's easy to learn and use.",
                },
              ],
            },
            {
              children: [
                {
                  text: '- **Flexibility**: Suitable for all types of web content, from blogs to technical documentation.',
                },
              ],
            },
            {
              children: [
                {
                  text: '- **Portability**: Works on any platform and is compatible with any device.',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: 'To learn more about Markdown, visit ',
                },
                {
                  url: 'https://www.markdownguide.org',
                  type: 'link',
                  newTab: true,

                  children: [
                    {
                      text: 'Markdown Guide',
                    },
                  ],
                  linkType: 'custom',
                },

                {
                  text: ' for comprehensive tutorials and tools.',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Remember, the key to mastering Markdown is practice. So, start experimenting with it today!',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ],
          blockName: null,
          blockType: 'textBlock',
        },
      ],
    },
    {
      id: '65b2c75dbd2afaa4d3407d35',
      title: 'Nasza Oferta',
      blockName: null,
      blockType: 'offerSection',

      categories: [],
    },
    {
      id: '65b017394792a54dfd28189f',

      richText: [
        {
          children: [
            {
              text: '\nMasz pytania? Zadwoń lub skontakuj się z nami przez formularz kontaktowy!',
            },
          ],
        },
      ],
      blockName: null,
      links: [
        {
          id: '65b0173c4792a54dfd2818a0',
          link: {
            type: 'custom',
            icon: true,
            newTab: null,
            url: '/kontakt',
            label: 'Kontakt',
            appearance: 'primary',
          },
        },
      ],
      blockType: 'cta',
      // @ts-expect-error
      media: '{{IMAGE_2}}',
    },
  ],
  slug: 'home',
  meta: {},
}

const offerPage: Partial<Page> = {
  title: 'Oferta',
  hero: {
    type: 'mediumImpact',
    title: 'Oferta',

    richText: [
      {
        children: [
          {
            text: 'Oferta naszych urządzeń nawadniających',
          },
        ],
      },
    ],
    links: [],
  },
  layout: [
    {
      id: '65b4171941993312b8dd7121',
      title: 'Nasza Oferta',
      blockName: null,
      blockType: 'offerSection',

      categories: [
        {
          id: 1,
          title: 'Deszczownie szpulowe',
          slug: 'deszczownie-szpulowe',
          media: 5,

          layout: [
            {
              id: '65b6a5c4af59c081f472fc2f',
              title: 'Nasza oferta deszczowni szpulowych RM',
              blockName: null,
              blockType: 'offerSection',

              categories: [3],
            },
          ],
          updatedAt: '2024-01-28T19:07:12.061Z',
          createdAt: '2024-01-25T19:47:01.791Z',
        },
        {
          id: 2,
          title: 'Deszczownie mostowe',
          slug: 'deszczownie-mostowe',
          media: 6,
          updatedAt: '2024-01-25T22:30:11.078Z',
          createdAt: '2024-01-25T19:47:32.249Z',
          layout: [],
        },
      ],
    },
  ],
  slug: 'oferta',

  meta: {
    title: 'Deszczownie — Oferta',
    description: null,
  },
}

const aboutPage: Partial<Page> = {
  title: 'O nas',
  hero: {
    type: 'mediumImpact',
    title: 'O nas',

    richText: [
      {
        children: [
          {
            text: '\nJesteśmy polską firmą z wieloletnim doświadczeniem oraz charyzmą, \nktóra pozwala nam na ciągły rozwój i poszerzanie naszej oferty.',
          },
        ],
      },
    ],
    links: [],
  },
  layout: [
    {
      id: '65b5464a31c8a948d0715ab9',
      isHalfWidth: true,
      blockName: null,
      blockType: 'content',

      content: [
        {
          id: '65b5464a31c8a948d0715abb',
          enableAdditionalImages: false,
          blockName: null,
          additionalImages: [],
          blockType: 'mediaBlock',
          // @ts-expect-error
          media: '{{IMAGE_ABOUT}}',
        },
        {
          id: '65b5464a31c8a948d0715abc',

          richText: [
            {
              children: [
                {
                  text: '\nNasza firma powstała w 2001 roku. Od tamtej pory konsekwentnie rozwijamy się, dostarczając innowacyjne rozwiązania z zakresu maszyn dla różnych branż. Od momentu założenia firmy, naszym priorytetem jest zaspokajanie potrzeb naszych klientów poprzez dostarczanie wysokiej jakości maszyn dostosowanych do różnorodnych działań. Dzięki temu podejściu, do 2023 roku udało nam się z sprzedać ponad 1000 deszczowni RM, zdobywając zaufanie wielu klientów.',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              type: 'table-row',

              children: [
                {
                  text: 'Tu powinna być tabelka',
                },
              ],
            },
          ],
          blockName: null,
          blockType: 'textBlock',
        },
      ],
    },
    {
      id: '65b5464a31c8a948d0715aba',
      isHalfWidth: true,
      blockName: null,
      blockType: 'content',

      content: [
        {
          id: '65b5464a31c8a948d0715abd',

          richText: [
            {
              children: [
                {
                  text: '\n',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Nasza oferta obejmuje różnorodne maszyny: ciągniki, ładowarki teleskopowe, deszczownie, siewniki punktowe do warzyw, maszyny do uprawy ziemniaków i warzyw, pługi, maszyny uprawowe, rozsiewacze nawozów, prasy, opryskiwacze, przyczepy oraz wiele innych maszyn przydatnych w rolnictwie i nie tylko.',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Zespół naszych specjalistów to ludzie z pasją do technologii, często sami prowadzący swoje gospodarstwa. Jesteśmy gotowi sprostać nawet najbardziej wymagającym wyzwaniom.',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Dołącz do grona zadowolonych klientów!',
                },
              ],
            },
          ],
          blockName: null,
          blockType: 'textBlock',
        },
        {
          id: '65b5464a31c8a948d0715abe',
          enableAdditionalImages: false,
          blockName: null,
          additionalImages: [],
          blockType: 'mediaBlock',
          // @ts-expect-error
          media: '{{IMAGE_ABOUT}}',
        },
      ],
    },
  ],
  slug: 'o-nas',
  meta: {
    title: 'Website.com — O nas',
    description: null,
  },
}

export { aboutPage, homePage, offerPage }
