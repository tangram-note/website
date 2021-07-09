import styled, { css } from 'styled-components';

export const Section = styled.div`
  padding: 80px 10px 50px;
  ${(p) => {
    if (p.grey) {
      return css`
        background-color: rgb(246,246,246);
      `;
    }
  }}
`;

export const SectionTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const SectionDescription = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 60px;
`;

export const SectionItemImage = styled.div`
  margin-bottom: 30px;
  text-align: center;
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .gatsby-image-wrapper {
    vertical-align: middle;
  }
`;

export const SectionItemTitle = styled.div`
font-size: 2rem;
color: #333;
text-align: center;
margin-bottom: 20px;
`;

export const SectionItemDescription = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  color: #777;
  line-height: 1.5;
`;


export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FlexItem = styled.div`
  width: 500px;
`;
