import { Location } from "history";

interface EmptyProps {}

interface PageProps {
  data: {
    slug: INode;
    site: ISite;
  };
  location: Location;
  pageContext: any;
  image?: GatsbyImage;
}

interface ISite {
  siteMetadata: {
    title: string;
    email: string;
    description: string;
    author: {
      name: string;
      summary: string;
    };
  };
}

interface IEdge {
  node: INode;
}

interface INode {
  id: string;
  excerpt: string;
  body: string;
  edges: IEdge[];
}
