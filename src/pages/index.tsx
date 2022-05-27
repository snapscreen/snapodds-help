import * as React from "react";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
} from "@/components";

const Home: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location} title="Help">
      <Container>
        <article className="prose">
          <h1>Hello Help</h1>
        </article>
      </Container>
    </Layout>
  );
};

export default Home;
