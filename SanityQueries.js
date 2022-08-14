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
