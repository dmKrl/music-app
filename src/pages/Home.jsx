import { useEffect, useState } from 'react';
import CenterBlockFilter from '../components/Main/CenterBlockFilter';
import SectionMusicList from '../components/Main/SectionMusicList';

function Home() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  const handlerSelectCategory = (string) =>
    activeFilter === string ? setActiveFilter(null) : setActiveFilter(string);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(!loadingPage);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CenterBlockFilter
        onClick={handlerSelectCategory}
        activeFilter={activeFilter}
      />
      <SectionMusicList loadingPage={loadingPage} />
    </>
  );
}

export default Home;
