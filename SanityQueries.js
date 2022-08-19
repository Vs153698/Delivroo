export const FeaturedDataFetchQuery = `
*[_type == "featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
        type-> {
          name
        }
      },
    }
`;

export const CategoryFetchQuery = `
*[_type == "category"]{
  _id,
  name,
  image
  }
`;
export const CategoryDataFetch = (searchTerm) => 
  `
  *[_type =="restaurant" && category -> name match "${searchTerm}*" || name match "${searchTerm}*" || genre match "${searchTerm}*" || short_description match "${searchTerm}*" || dishes[]->name match "${searchTerm}*"]{
    ...,
    category->{
    ...,
    name,
  },
    dishes[]->,
      type -> {
    name
  }
  
    }
`;

