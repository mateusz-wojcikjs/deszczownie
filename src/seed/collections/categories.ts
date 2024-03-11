import type { Category } from '../../payload-types'

const category1: Category = {
  title: 'Deszczownie szpulowe',
  slug: 'deszczownie-szpulowe',
  // @ts-expect-error
  media: '{{IMAGE_CATEGORY}}',
  layout: [
    {
      id: '65b6a5c4af59c081f472fc2f',
      title: 'Nasza oferta deszczowni szpulowych RM',
      blockName: null,
      blockType: 'offerSection',
      categories: [
        {
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
      ],
    },
  ],
}

const category2: Category = {
  title: 'Deszczownie mostowe',
  slug: 'deszczownie-mostowe',
  // @ts-expect-error
  media: '{{IMAGE_CATEGORY_2}}',

  updatedAt: '2024-01-25T22:30:11.078Z',
  createdAt: '2024-01-25T19:47:32.249Z',
  layout: [],
}

const category3: Category = {
  title: 'Deszczownie RM serii GX',
  slug: 'deszczownie-rm-gx',

  // @ts-expect-error
  media: '{{IMAGE_CATEGORY_3}}',
  parentCategory: {
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
  categoryThumbnail: {
    id: 8,
    alt: 'Miniatura deszczowni RM GX',
    updatedAt: '2024-01-28T15:58:10.468Z',
    createdAt: '2024-01-28T15:58:10.468Z',
    url: 'http://localhost:3000/media/gx_thumbnail.png',
    filename: 'gx_thumbnail.png',
    mimeType: 'image/png',
    filesize: 10195,
    width: 220,
    height: 135,

    sizes: {
      thumbnail: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
      },
      card: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
      },

      tablet: {
        url: 'http://localhost:3000/media/gx_thumbnail-1024x628.png',
        width: 1024,
        height: 628,
        mimeType: 'image/png',
        filesize: 227207,
        filename: 'gx_thumbnail-1024x628.png',
      },
    },
  },
  updatedAt: '2024-01-28T15:58:23.999Z',
  createdAt: '2024-01-28T15:58:23.999Z',
  layout: [],
}

export { category1, category2, category3 }
