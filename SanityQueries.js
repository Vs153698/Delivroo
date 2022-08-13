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
