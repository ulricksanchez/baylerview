import { useTitle } from '../Hooks/useTitle';
import { useEffect } from 'react';
import { NavigationBar } from '../components/Navigation/NavigationBar';
import { Footer } from '../components/Footer/Footer';
import { RoomResults } from '../components/RoomSection/Search/RoomResults';

export const BookNow = () => {
  useTitle('Bay-Ler View Hotel | Weavering Premium Experiences.');
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="mt-20">&nbsp;</div>
      <RoomResults />
      <Footer />
    </>
  );
};
