import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';



const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ececec;
  .logo {
    width: 100px;
    line-height: 30px;
  }
`;

const Navigatioin = styled.nav`
  flex: 1;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    li {
      list-style: none;
      margin: 0;
      padding: 5px 10px;
    }
  }
`;
export const Header = (props) => {
  return (
    <HeaderContainer id='header'>
      <div className="logo">
        <StaticImage src="../images/logo-icon.png" width={30} height={30} style={{ marginRight: 5 }}/>
        Tangram
      </div>
      <Navigatioin className="navigation">
        <ul className='navbar-nav'>
          <li>
            <a href='#features' className='page-scroll'>
              Features
            </a>
          </li>
          <li>
            <a href='#about' className='page-scroll'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='page-scroll'>
              Services
            </a>
          </li>
          <li>
            <a href='#portfolio' className='page-scroll'>
              Gallery
            </a>
          </li>
          <li>
            <a href='#testimonials' className='page-scroll'>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#team' className='page-scroll'>
              Team
            </a>
          </li>
          <li>
            <a href='#contact' className='page-scroll'>
              Contact
            </a>
          </li>
        </ul>
      </Navigatioin>
    </HeaderContainer>
  )
}
