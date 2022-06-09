import * as React from "react";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Seo
} from "@/components";

const Home: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location} title="Help">
      <Seo title="Help" description="User guidance and tutorials how to use SnapOdds." />
      <Container>
        <article>
          <h1>SnapOdds Instructions</h1>
          <ol>
            <li>Tap the SnapOdds button.</li>
            <li>Take a photo of the full TV picture.</li>
          </ol>
          <figure>
            <figcaption className="sr-only">Aim and focus on TV screen and take a picture.</figcaption>
            <img src="SnapOdds-illustration.svg" alt="" />
          </figure>
          <section>
            <h2>Not Seeing Odds?</h2>
            <ol>
              <li>
                <p>
                Your <strong>TV is too close.</strong><br />
                Only part of the TV was snapped.
                </p>
                <figure className="scroll">
                  <figcaption className="sr-only">Aim and focus on TV screen and take a picture.</figcaption>
                  <img src="SnapOdds-snap-help-01.jpg" alt="" />
                </figure>
              </li>
              <li>
                <p>Your <strong>TV is too far away.</strong></p>
                <figure className="scroll">
                  <figcaption className="sr-only">Aim and focus on TV screen and take a picture.</figcaption>
                  <img src="SnapOdds-snap-help-02.jpg" alt="" />
                </figure>
              </li>
            </ol>
          </section>
          <h2>Why use SnapOdds?</h2>
          <ul>
            <li>You are watching a sporting event live on TV.</li>
            <li>You want to see sportsbook odds to place a bet.</li>
          </ul>
        </article>
      </Container>
    </Layout>
  );
};

export default Home;
