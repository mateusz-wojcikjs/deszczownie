import type { Product } from '../../payload-types'

const product: Product = {
  title: '560 GX',
  slug: '560-gx',
  productDetailsJSON: {
    data: [
      {
        flow: '10-21 m³/h',
        externalDiameter: '63 mm',
        maxAvailableLength: '340 m',
        recommendedHoseLength: '300 m',
        recommendedNozzleDiameter: '12-16 mm',
      },
      {
        flow: '12-26 m³/h',
        externalDiameter: '70 mm',
        maxAvailableLength: '330 m',
        recommendedHoseLength: '330 m',
        recommendedNozzleDiameter: '14-18 mm',
      },
      {
        flow: '14-34 m³/h',
        externalDiameter: '75 mm',
        maxAvailableLength: '250 m',
        recommendedHoseLength: '250 m',
        recommendedNozzleDiameter: '14-20 mm',
      },

      {
        flow: '16-37 m³/h',
        externalDiameter: '82 mm',
        maxAvailableLength: '160 m',
        recommendedHoseLength: '160 m',
        recommendedNozzleDiameter: '16-22 mm',
      },
    ],
  },
  // @ts-expect-error
  media: '{{IMAGE_PRODUCT}}',
  layout: [
    {
      id: '65becb69eaec445b980d5219',
      isHalfWidth: null,
      blockName: null,
      blockType: 'content',

      content: [
        {
          id: '65becb69eaec445b980d521a',

          richText: [
            {
              children: [
                {
                  text: '\n',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Turbina z podziałem przepływu i z wbudowanym układem obejściowym.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Przekładnia z czterostopniowa z wałami w kąpieli olejowej.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'WOM do szybkiego nawijania węża.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Automatyczny układ hamulcowy do rozwijania węża.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Automatyczny kompensator prędkości w zależności od średnicy nawijania węża.',
                },
              ],
            },
            {
              children: [
                {
                  text: '\n\n\n\n\n\n',
                },
              ],
            },
          ],
          blockName: null,
          blockType: 'textBlock',
        },
        {
          id: '65becb69eaec445b980d521b',

          richText: [
            {
              children: [
                {
                  text: '\n',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Turbina z podziałem przepływu i z wbudowanym układem obejściowym.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Przekładnia z czterostopniowa z wałami w kąpieli olejowej.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'WOM do szybkiego nawijania węża.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Automatyczny układ hamulcowy do rozwijania węża.',
                },
              ],
            },
            {
              type: 'li',

              children: [
                {
                  text: 'Automatyczny kompensator prędkości w zależności od średnicy nawijania węża.',
                },
              ],
            },
            {
              children: [
                {
                  text: '\n\n\n\n\n\n',
                },
              ],
            },
          ],
          blockName: null,
          blockType: 'textBlock',
        },
      ],
    },
  ],
  category: {
    id: 3,
    title: 'Deszczownie RM serii GX',
    slug: 'deszczownie-rm-gx',
    media: 7,
    parentCategory: 1,
    categoryThumbnail: 8,
    updatedAt: '2024-01-28T15:58:23.999Z',
    createdAt: '2024-01-28T15:58:23.999Z',
    layout: [],
  },
}

export { product }
