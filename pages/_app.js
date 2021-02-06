import '../styles/variables.css'
import '../styles/resets.css'
import '../styles/globals.css'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const {height} = useWindowDimensions();
  useEffect(() => {
    document.documentElement.style.setProperty('--viewportHeight', `${height}px`);
  }, [height]);

  return <Component {...pageProps} />
}

export default MyApp
