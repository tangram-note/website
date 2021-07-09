import React from 'react';
import styled from 'styled-components';
import Brand from './brand';



const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ececec;
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
      <Brand />
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
            <a href='#contact' className='page-scroll'>
              Contact
            </a>
          </li>
        </ul>
      </Navigatioin>
    </HeaderContainer>
  )
}
