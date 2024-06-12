import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'favorites',
      title: 'Favorites',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
