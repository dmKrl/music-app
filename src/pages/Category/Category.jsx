import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import * as S from '../../components/Main/SectionMusicList.styles';
import { CenterBlockHeading } from '../../components/Main/CenterBlockFilter.styles';
import ItemPlaylist from '../../components/UI/ItemPlaylist';
import categories from '../../data/categories';
import NotFound from '../NotFound/NotFound';
import IsLoadingPageContext from '../../context/IsLoadingPageContext';
import tracks from '../../data/tracks';
import { tracksAPI } from '../../services/tracksService';

function Category() {
  const params = useParams();
  const category = categories.find((cat) => cat.id === params.id);
  const { isLoadingError } = useContext(IsLoadingPageContext);
  const { data: collectionTracks } = tracksAPI.useFetchAllCollectionTracksQuery(
    category.id,
  );
  if (!category || Number(params.id) > 3) {
    return <NotFound />;
  }
  return (
    <S.CenterBlockContent>
      <CenterBlockHeading>{collectionTracks?.data?.name}</CenterBlockHeading>
      <S.ContentTitle>
        <S.Col01>Трек</S.Col01>
        <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.ContentTitle>
      <S.ContentPlaylist>
        {isLoadingError}
        {!collectionTracks
          ? tracks.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist {...track} key={track.id} />
            ))
          : collectionTracks?.items.map((track) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ItemPlaylist categoryId={category.id} {...track} key={track.id} />
            ))}
      </S.ContentPlaylist>
    </S.CenterBlockContent>
  );
}

export default Category;
