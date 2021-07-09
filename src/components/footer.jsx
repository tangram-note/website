import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { FlexContainer, Section, FlexItem } from './common';
import Brand from './brand';

const FooterContainer = styled.div`
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  .footer-title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const Footer = (props) => {
  return (
    <Section grey>
      <FooterContainer>
        <FlexContainer>
          <FlexItem style={{ width: 250 }}>
            <div className="footer-title">
              <Brand />
            </div>
            <ul>
              <li>关于</li>
              <li>媒体素材</li>
              <li>隐私声明</li>
              <li>使用条款</li>
            </ul>
          </FlexItem>
          <FlexItem style={{ width: 250 }}>
            <div className="footer-title">
              产品信息
            </div>
            <ul>
              <li>帮助</li>
              <li>常见问题</li>
              <li>发布日志</li>
              <li>产品路线图</li>
            </ul>
          </FlexItem>
          <FlexItem style={{ width: 250 }}>
            <div className="footer-title">
              联系方式
            </div>
            <ul>
              <li>Github</li>
              <li>Email</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </FlexItem>
        </FlexContainer>
        <div style={{ textAlign: 'center' }}>
          <StaticImage src="../images/grey-fox.png" alt="tangram" style={{ width: 46, height: 50 }}/>
          <p>@2021 Tangram Note</p>
        </div>
      </FooterContainer>
    </Section>
  )
}
