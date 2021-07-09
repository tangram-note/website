import styled from 'styled-components';

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
