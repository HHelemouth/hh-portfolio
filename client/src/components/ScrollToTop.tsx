/*
  ScrollToTop — Remet la page en haut à chaque changement de route.
  Sans ça, une navigation en SPA (wouter) conserve la position de scroll
  de la page précédente, ce qui donne l'impression que la nouvelle page
  s'ouvre "au milieu" plutôt qu'en haut.
*/

import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
