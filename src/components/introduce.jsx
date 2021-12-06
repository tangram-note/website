import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import { StaticImage } from "gatsby-plugin-image"

import { Section, SectionTitle, SectionDescription, SectionItemDescription, SectionItemImage, FlexContainer, FlexItem, SectionItemTitle, ImageShadow } from './common';

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  .title {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .subtitle {
    color: #555;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 50px;
  }
`;

const SectionImageHolder = ({ children, style }) => {
  return (
    <SectionItemImage style={style}>
      <span class="helper" />
      {children}
    </SectionItemImage>
  );
}


export const Introduce = (props) => {

  return  (
    <Container>
      <Section>
        <div className="title">不仅仅是一款笔记本软件</div>
        <div className="subtitle">Tangram Note是一款知识管理软件，提供一整套信息工具箱，帮助你打通信息孤岛，管理碎片化信息，以及最重要的构建你的知识体系。</div>
        <SectionImageHolder>
          <ImageShadow style={{ width: 900, margin: '0 auto', position: 'relative' }}>
            <div style={{ borderRadius: 10, overflow: 'hidden' }}>
              <StaticImage src="../images/screenshot-daily.png" alt="Tangram Interface" style={{ width: 900 }}/>
            </div>
            <div style={{ position: 'absolute', right: -90, zIndex: -1, top: 200 }}>
              <StaticImage src="../images/fox-head.png" alt="Hello, I am Tangram Note" style={{ width: 150 }}/>
            </div>
          </ImageShadow>
        </SectionImageHolder>
      </Section>
      <Section grey>
        <SectionTitle>「聚合」与「连接」</SectionTitle>
        <SectionDescription>Tangram 的核心目标是降低信息流转过程的摩擦力，让原本彼此隔绝的信息能够自由的流通和建立关联。</SectionDescription>
        <FlexContainer>
          <FlexItem>
            <SectionImageHolder style={{ height: 300 }}>
              <StaticImage src="../images/aggregate-illustrate.png" alt="Aggregation" style={{ width: 300 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
              通过聚合，打破原来的隔绝信息的屏障，将对您重要的信息加入到 Tangram 的信息生态。目前支持网页，视频，电子书（Epub）和 RSS 。
            </SectionItemDescription>
          </FlexItem>
          <FlexItem>
            <SectionImageHolder style={{ height: 300 }}>
              <StaticImage src="../images/link.png" alt="Link" style={{ width: 300 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
            Tangram 提供「双向链接」，让你可以编织出专属于你的知识网络，并且可视化为易读的拓扑图。
            </SectionItemDescription>
          </FlexItem>
        </FlexContainer>
      </Section>
      <Section>
        <SectionTitle>信息重组</SectionTitle>
        <FlexContainer>
          <FlexItem style={{ marginRight: 20 }}>
            <SectionImageHolder style={{ height: 250 }}>
              <StaticImage src="../images/block-standardization.png" alt="标准化" style={{ width: 500 }}/>
            </SectionImageHolder>
          </FlexItem>
          <FlexItem>
            <SectionItemDescription>
            <p>所有聚合到 Tangram 的元素，比如图片，视频，代办事项，网页链接，甚至某些文本段落，都会标准化为 Block。</p>
            <p>因此，在Tangram中，你可以集中查看 Tangram 所有的图片，任务，视频，网页，可以过滤，多种条件排序，拷贝，复用等；</p>
            <p>而未来 Tangram 还会探索更多的信息视角，来重新组织和呈现您宝贵的知识。</p>
            </SectionItemDescription>
          </FlexItem>
        </FlexContainer>
      </Section>
      <Section grey>
        <SectionTitle>便捷搜索</SectionTitle>
        <FlexContainer>
          <FlexItem>
            <SectionItemTitle>快速搜索</SectionItemTitle>
            <SectionItemDescription>
            一键打开「搜索面板」，通过标题快速定位所需要的信息
            </SectionItemDescription>
            <SectionImageHolder style={{ height: 350 }}>
              <StaticImage src="../images/quick-search.png" alt="Quick Search" style={{ width: 350 }}/>
            </SectionImageHolder>
          </FlexItem>
          <FlexItem>
            <SectionItemTitle>全文搜索</SectionItemTitle>
            <SectionItemDescription>
            仔细搜索标题，正文，标签等，找出你需要的信息，支持中文分词
            </SectionItemDescription>
            <SectionImageHolder style={{ height: 350 }}>
              <StaticImage src="../images/fulltext-search.png" alt="Full Text Search" style={{ width: 500 }}/>
            </SectionImageHolder>
          </FlexItem>
        </FlexContainer>
      </Section>
      <Section>
        <SectionTitle>「专注」与「效率」</SectionTitle>
        <SectionDescription>Tangram 竭尽全力保护你的注意力</SectionDescription>
        <FlexContainer>
          <FlexItem>
            <SectionImageHolder style={{ height: 200 }}>
              <StaticImage src="../images/monk.png" alt="Aggregation" style={{ width: 180 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
            保护你的注意力，禅模式为您提供专注的，不受干扰的思考空间；
            </SectionItemDescription>
          </FlexItem>
          <FlexItem>
            <SectionImageHolder style={{ height: 200 }}>
              <StaticImage src="../images/splitview.png" alt="Link" style={{ width: 250 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
            提供分割屏幕，悬浮卡片等独特的交互方式来避免打断上下文，让用户可以高效和专注的工作与学习。
            </SectionItemDescription>
          </FlexItem>
        </FlexContainer>
      </Section>
      <Section grey>
        <SectionTitle>丰富灵活的信息组织方式</SectionTitle>
        <FlexContainer>
          <FlexItem style={{ marginRight: 20 }}>
            <SectionImageHolder style={{ height: 250 }}>
              <StaticImage src="../images/component.png" alt="灵活组合" style={{ width: 350 }}/>
            </SectionImageHolder>
          </FlexItem>
          <FlexItem>
            <SectionItemDescription>
              <p>Tangram 没有文件夹的概念，Block 之间可以像乐七巧板一般自由的进行组合</p>
              <p>- 比如一个项目（Project）可以将若干个页面，网页，视频组合而成</p>
              <p>- 也可以将若干张图片组合为一个合集（Collection）</p>
              <p>- 或者几本书籍组合为合集，就像书单</p>
              <p>总之，没有了文件夹的束缚之后，可以利用 Tangram 提供的信息工具箱来自由的组织信息</p>
            </SectionItemDescription>
          </FlexItem>
        </FlexContainer>
      </Section>
      <Section>
        <SectionTitle>拥有对内容的绝对控制权</SectionTitle>
        <FlexContainer>
          <FlexItem>
            <SectionImageHolder style={{ height: 150 }}>
              <StaticImage src="../images/disk.png" alt="Aggregation" style={{ width: 100 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
            数据由自己掌控，所有的内容均存储在本地文件夹中，无需担心内容可能因为服务的关闭而丢失或失去控制。
            </SectionItemDescription>
          </FlexItem>
          <FlexItem>
            <SectionImageHolder style={{ height: 150 }}>
              <StaticImage src="../images/folder.png" alt="Link" style={{ width: 130 }}/>
            </SectionImageHolder>
            <SectionItemDescription>
            由于是文件夹，您可以直接将文件夹放置于各类云同步服务里面，比如 dropbox，icloud 等，进一步保证数据的安全。
            </SectionItemDescription>
          </FlexItem>
        </FlexContainer>
      </Section>
    </Container>
  )
}
