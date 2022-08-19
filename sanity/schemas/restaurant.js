export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant's name",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the restaurant",
    },
    {
      name: "license",
      type: "number",
      title: "License number of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of the restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      type: "string",
      title: "City of the restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "genre",
      type: "string",
      title: "Genre of the restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating of the restaurant",
      validation: (Rule) =>
        Rule.required().min(0).max(5).error("Rating must be between 0 and 5"),
    },
    {
      name: "category",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
