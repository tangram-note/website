import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  height: 300px;
  width: 100%;
  text-align: center;
  padding-top: 100px;
  .title {
    width: 100%;
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .subtitle {
    color: #555;
    margin: 0 auto;
    width: 70%;
    font-size: 1.4rem;
    margin-bottom: 50px;
  }
`;

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 800px;
  background-position: center center;
  background-repeat: none;
  background-size: cover;
`

export const Introduce = (props) => {

  return  (
    <Container>
      <div className="title">To Be Your Second Brain</div>
      <div className="subtitle">Tangram Notes is a safe place for your notes, thoughts, and life's work.</div>
      <StaticImage src="../images/tangram.png" alt="Tangram Interface" style={{ width: 900 }}/>
    </Container>
  )
}
