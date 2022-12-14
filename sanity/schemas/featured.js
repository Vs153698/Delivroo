export default {
  name: "featured",
  title: "Featured Menu Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
        name: "short_description",
        title: "Short description",
        type: "string",
        validation: (Rule) => Rule.max(200),
    },
    {
        name: "restaurants",
        title: "Restaurant",
        type: "array",
        of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
