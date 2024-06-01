import {defineField, defineType} from 'sanity'

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'array',
      of: [{type: 'number'}],
      initialValue: [randomNumber(1, 5)],
    }),
    defineField({
      name: 'images',
      title: 'Product images',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Men', value: 'men'},
          {title: 'Women', value: 'women'},
          {title: 'Kids', value: 'kids'},
          {title: 'Unisex', value: 'unisex'},
          {title: 'Running', value: 'running'},
          {title: 'Basket', value: 'basket'},
          {title: 'Soccer', value: 'soccer'},
          {title: 'Skate', value: 'skate'},
          {title: 'Boots', value: 'boots'},
          {title: 'Workout', value: 'workout'},
          {title: 'Golf', value: 'golf'},
          {title: 'Sandals', value: 'sandals'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'number',
              options: {
                list: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
              },
            },
            {
              name: 'stock',
              title: 'Stock',
              type: 'number',
            },
          ],
        },
      ],
    }),
  ],
})
