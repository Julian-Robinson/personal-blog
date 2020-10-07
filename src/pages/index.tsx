import React from "react";
import { PageProps, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePanel from "../components/image-panel";

const IndexPage: React.FC<PageProps<{}>> = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      personal: file(relativePath: { eq: "fingerprint.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      expertise: file(relativePath: { eq: "expertise.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      technology: file(relativePath: { eq: "technology.png" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="prose">
        <h1>Hi, I'm Julian Robinson</h1>
        <p>
          I'm a senior software developer building cloud applications from
          Dunedin, New Zealand.
        </p>
        <p>
          I work fully remote and my passion is delivering high quality
          maintainable products using proven delivery techniques and design
          patterns. I'm always looking for opportunities for improvement and
          enjoy working in a close team, mentoring others and delivering
          products that people love to use.
        </p>
      </div>
      <ImagePanel
        header="Personal Skills"
        imageFluid={data.personal.childImageSharp.fluid}
      >
        <ul>
          <li>Good Communicator</li>
          <li>Focused and Motivated</li>
          <li>Mentor and Teacher</li>
          <li>Project and Team Leader</li>
          <li>Attention to Detail</li>
        </ul>
      </ImagePanel>

      <ImagePanel
        header="Expertise"
        imageFluid={data.expertise.childImageSharp.fluid}
      >
        <ul>
          <li>Solution Analysis and Design</li>
          <li>Architecture & Design Patterns</li>
          <li>Continuous Delivery & DevOps</li>
          <li>Automated Testing</li>
          <li>Documentation</li>
        </ul>
      </ImagePanel>

      <ImagePanel
        header="Tools & Technology"
        imageFluid={data.technology.childImageSharp.fluid}
      >
        <ul>
          <li>C# .NET, .NET Core</li>
          <li>ASP.NET</li>
          <li>JavaScript, TypeScript & React</li>
          <li>SQL Server</li>
          <li>Azure & AWS cloud services</li>
        </ul>
      </ImagePanel>
    </Layout>
  );
};

export default IndexPage;