import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Łatwy w użyciu',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus został zaprojektowany od podstaw tak, aby można go było
        łatwo zainstalować i używać w celu szybkiego uruchomienia witryny.
      </>
    ),
  },
  {
    title: 'Skup się na tym, co ważne',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dzięki programowi Docusaurus możesz skupić się na swoich dokumentach,
        a my zajmiemy się innymi zadaniami. Śmiało przenieś swoje dokumenty
        do katalogu <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Oparty na React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Rozszerzaj lub personalizuj wygląd swojej strony internetowej za pomocą
        frameworku React. Docusaurus pozwala na rozbudowywanie strony przy
        użyciu tych samych komponentów takich jak nagłówki czy stopki.
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
