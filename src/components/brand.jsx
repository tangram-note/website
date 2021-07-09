import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const BrandContainer = styled.div`
  line-height: 30px;
`;
export default function Brand(props) {
  return (
    <BrandContainer className="brand">
      <StaticImage src="../images/icon.png" width={30} height={30} style={{ marginRight: 5 }}/>
      Tangram Note
    </BrandContainer>
  )
}
