import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Stack from '../components/ui-lib/Stack/Stack'
import {methods, flavorProfiles, vegetables, proteins, carbs} from '../data/menu-data'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const randomFromPile = pile => {
  const idx = getRandomIntInclusive(0, pile.length - 1);
  return pile[idx];
}

const empty = {name: ''};

export default function Home() {

  const [flavorProfile, setFlavorProfile] = useState(empty);
  const [method, setMethod] = useState(empty);
  const [protein, setProtein] = useState(empty);
  const [carb, setCarb] = useState(empty);
  const [vegetable, setVegetable] = useState(empty);

  const randomize = () => {
    setFlavorProfile(randomFromPile(flavorProfiles));
    setMethod(randomFromPile(methods));
    setProtein(randomFromPile(proteins));
    setCarb(randomFromPile(carbs));
    setVegetable(randomFromPile(vegetables));
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div class={styles.container}>
      <Head>
        <title>Menu Magic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack justify="between" fullHeight style={{padding: '1rem'}}>
        <h1 className={styles.title}>Menu Magic</h1>
        <div className="menu">
          <Stack>
            <div className={styles.element}>{flavorProfile.name}</div>
            <div className={styles.element}>{protein.name}</div>
            <div className={styles.element}>{method.name}</div>
            <div className={styles.conjunction}>with</div>
            <div className={styles.element}>{carb.name}</div>
            <div className={styles.conjunction}>and</div>
            <div className={styles.element}>{vegetable.name}</div>
          </Stack>
        </div>
        <button className={styles.button} onClick={randomize}>Next</button>
      </Stack>
    </div>
  )
}
