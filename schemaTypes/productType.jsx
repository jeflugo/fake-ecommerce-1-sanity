import {defineField, defineType} from 'sanity'
// import CustomInput from './CustomInput.jsx'

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
      options:{
        list: [
          {title: 'Men', value:'men'},
          {title: 'Women', value:'women'},
          {title: 'Kids', value:'kids'},
          {title: 'Running', value:'running'},
          {title: 'Basket', value:'basket'},
          {title: 'Soccer', value:'soccer'},
          {title: 'Skate', value:'skate'},
          {title: 'Boots', value:'boots'},
          {title: 'Workout', value:'workout'},
          {title: 'Golf', value:'golf'},
          {title: 'Sandals', value:'sandals'},
        ],
        layout:'grid'
      }
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
              options:{
                list:[34,35,36,37,38,39,40,41,42,43,44,45]
              }
            },
            {
              name: 'stock',
              title: 'Stock',
              type: 'number'
            },
          ]
        }
      ]
    }),     
    defineField({
      name: 'totalStock',
      title: 'Total Stock',
      type: 'number',
      readOnly:true,
      // components: {
      //   input:CustomInput
      // },
      hidden: ({parent}) => !parent?.sizes
    }),
  ],
})

// Sure! Here's the example using newer React syntax, with functional components and hooks:

// 1. Define a custom data structure for your schema in your schema definition file (schema.js):

// ```javascript
// export default {
//   name: 'myDocument',
//   title: 'My Document',
//   fields: [
//     {
//       name: 'numbers',
//       title: 'Numbers',
//       type: 'array',
//       of: [{type: 'number'}]
//     },
//     {
//       name: 'sum',
//       title: 'Sum',
//       type: 'number'
//     }
//   ]
// }
// ```

// 2. Create a custom input component to handle the logic for summing up the numbers. You can do this by creating a new file (e.g., NumberSumInput.js) and defining the component like this:

// ```javascript
// import { useEffect } from 'react'
// import { useDocumentOperation } from '@sanity/react-hooks'

// const NumberSumInput = ({ type, document }) => {
//   const { patch, publish } = useDocumentOperation()

//   useEffect(() => {
//     const numbers = document.numbers || []
//     const sum = numbers.reduce((acc, num) => acc + num, 0)
    
//     patch.execute([{ set: { sum } }])
//   }, [document.numbers])

//   return null
// }

// export default NumberSumInput
// ```

// 3. Update your schema definition to use the custom input component for the 'sum' field:

// ```javascript
// export default {
//   name: 'myDocument',
//   title: 'My Document',
//   fields: [
//     {
//       name: 'numbers',
//       title: 'Numbers',
//       type: 'array',
//       of: [{type: 'number'}]
//     },
//     {
//       name: 'sum',
//       title: 'Sum',
//       type: 'number',
//       inputComponent: NumberSumInput
//     }
//   ]
// }
// ```

// Now, when you enter multiple numbers into the 'numbers' field, the 'sum' field will automatically display the sum of those numbers. The custom input component uses the `useDocumentOperation` hook provided by Sanity to handle the sum calculation and update the 'sum' field with the correct value.
