import FilterItem from '../UI/FilterItem';
import * as S from './CenterBlockFilter.styles';

function CenterBlockFilter({ onClick, activeFilter }) {
  return (
    <>
      <S.CenterBlockHeading>Треки</S.CenterBlockHeading>
      <S.CenterBlockFilter className="centerblock__filter filter">
        <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>
        <FilterItem
          onClick={() => onClick('musician')}
          isOpen={activeFilter === 'musician'}
          id="1"
          tracks={[
            <S.PopupTextInfo key={1} style={{ marginTop: 0 }}>
              Alexander Nakarada
            </S.PopupTextInfo>,
            <S.PopupTextInfo key={2}>Frank Schroter</S.PopupTextInfo>,
            <S.PopupTextInfo key={3}>Kevin Macleod</S.PopupTextInfo>,
            <S.PopupTextInfo key={4}>Mixkit</S.PopupTextInfo>,
            <S.PopupTextInfo key={5}>-</S.PopupTextInfo>,
            <S.PopupTextInfo key={6}>Waltz Piano</S.PopupTextInfo>,
            <S.PopupTextInfo key={7}>Winniethemoog</S.PopupTextInfo>,
            <S.PopupTextInfo key={8}>AFM</S.PopupTextInfo>,
            <S.PopupTextInfo key={9}>Bobby Marleni</S.PopupTextInfo>,
            <S.PopupTextInfo key={10}>Brian Holtz</S.PopupTextInfo>,
            <S.PopupTextInfo key={11}>Fanz</S.PopupTextInfo>,
            <S.PopupTextInfo key={12}>Luke</S.PopupTextInfo>,
            <S.PopupTextInfo key={13}>Ryan Craig Martin</S.PopupTextInfo>,
            <S.PopupTextInfo key={14}>Sascha Ende</S.PopupTextInfo>,
            <S.PopupTextInfo key={15}>Starforsh</S.PopupTextInfo>,
            <S.PopupTextInfo key={16}>Voisin</S.PopupTextInfo>,
            <S.PopupTextInfo key={17}>Wova</S.PopupTextInfo>,
            <S.PopupTextInfo key={18}>Audionautix</S.PopupTextInfo>,
            <S.PopupTextInfo key={19}>MED</S.PopupTextInfo>,
            <S.PopupTextInfo key={20}>Tim Kulig</S.PopupTextInfo>,
          ]}
        >
          исполнителю
        </FilterItem>
        <FilterItem
          onClick={() => onClick('genre')}
          isOpen={activeFilter === 'genre'}
          id="3"
          tracks={[
            <S.PopupTextInfo key={1} style={{ marginTop: 0 }}>
              Классическая музыка
            </S.PopupTextInfo>,
            <S.PopupTextInfo key={2}>Рок музыка</S.PopupTextInfo>,
            <S.PopupTextInfo key={3}>Электронная музыка</S.PopupTextInfo>,
          ]}
        >
          жанру
        </FilterItem>
        <S.FilterTitle className="filter__title">Сортировка:</S.FilterTitle>
        <FilterItem
          style={{ position: 'absolute', right: 0 }}
          onClick={() => onClick('year')}
          isOpen={activeFilter === 'year'}
          id="2"
          tracks={[
            <S.PopupTextInfo style={{ marginTop: 0 }} key={1}>
              По умолчанию
            </S.PopupTextInfo>,
            <S.PopupTextInfo key={2}>Сначала старые</S.PopupTextInfo>,
            <S.PopupTextInfo key={3}>Сначала новые</S.PopupTextInfo>,
          ]}
        >
          году выпуска{' '}
        </FilterItem>
      </S.CenterBlockFilter>
    </>
  );
}
export default CenterBlockFilter;
