import  SanityClient from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
export const Sanityclient = new SanityClient({
    projectId: "kn6dtlw6",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});
const builder = new ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


