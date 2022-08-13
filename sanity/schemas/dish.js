export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
   {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
   },
   {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
   },
   {
      name: 'image',
      title: 'Image of Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ]
}
  
