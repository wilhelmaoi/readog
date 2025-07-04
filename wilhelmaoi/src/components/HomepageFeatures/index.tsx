import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '游戏资讯与评测',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        获取最新游戏资讯、深度评测和游戏攻略。从AAA大作到独立游戏，
        我们提供全面的游戏内容，帮助你发现值得体验的精彩游戏。
      </>
    ),
  },
  {
    title: '音乐发现与分享',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        探索游戏原声带、发现新音乐人和分享你的播放列表。
        加入我们的音乐讨论，了解游戏音乐如何塑造游戏体验。
      </>
    ),
  },
  {
    title: '创作者社区',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        无论你是游戏开发者、音乐创作者还是内容制作人，这里都是展示作品、
        获取反馈和寻找合作伙伴的理想平台。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}