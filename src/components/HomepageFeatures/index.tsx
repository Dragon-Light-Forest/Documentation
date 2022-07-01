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
    title: 'Smoki Nightwood',
    Svg: require('@site/static/img/green_dragon_logo.svg').default,
    description: (
      <>
        Witaj w projekcie open-source! Chcemy wspólnymi siłami stworzyć grę
        przeglądarkową w stylu Smoków Nightwood! Dołącz do nas, aby razem
        odtworzyć nową odsłonę hodowli!
      </>
    ),
  },
  {
    title: 'Bądź na bieżąco!',
    Svg: require('@site/static/img/Blog-DLF-Green.svg').default,
    description: (
      <>
        Zaglądaj na naszego bloga/mini newsletter i przeglądaj najnowsze
        informacje o postępach w tworzeniu naszego projektu!
      </>
    ),
  },
  {
    title: 'Jesteśmy na Discord!',
    Svg: require('@site/static/img/Discord-Logo-Green.svg').default,
    description: (
      <>
        Zajrzyj do naszej społeczności! Dziel się opiniami, proponuj zmiany i
        współtwórz nasz projekt razem z nami! Serdecznie zapraszamy szczególnie
        osoby ze starej społeczności Smoków Nightwood!
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
