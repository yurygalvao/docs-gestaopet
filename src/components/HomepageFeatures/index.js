import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cadastro de tutores',
    emoji: '🧑',
    description: (
      <>
        Cadastre, consulte e altere os donos dos animais. O e-mail de cada tutor
        é único, e a API recusa duplicados com o código 409.
      </>
    ),
  },
  {
    title: 'Cadastro de pets',
    emoji: '🐾',
    description: (
      <>
        Registre cães, gatos e outros animais ligados ao tutor, com raça e data de
        nascimento. Filtre a lista por espécie com <code>?especie=gato</code>.
      </>
    ),
  },
  {
    title: 'Documentação automática',
    emoji: '📘',
    description: (
      <>
        Além deste site, a API gera sua própria documentação interativa em{' '}
        <code>/docs</code>, onde cada rota pode ser testada no navegador.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-hidden="true">
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
