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
    <div>
      <Head>
        <title>Menu Magic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack justify="between" fullHeight style={{padding: '3rem'}}>
        <h1>Menu Magic</h1>
        <div className="menu">
          <Stack>
            <div>{flavorProfile.name}</div>
            <div>{method.name}</div>
            <div>{protein.name}</div>
            <div>with</div>
            <div>{carb.name}</div>
            <div>and</div>
            <div>{vegetable.name}</div>
          </Stack>
        </div>
        <button onClick={randomize}>Next</button>
      </Stack>
    </div>
  )
}
