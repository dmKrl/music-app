import { tracksAPI } from '../../../services/GetAccessTokenService';
import * as S from '../../SideBar/SideBar.styles';

function SideBarItem(props) {
  const { image, to } = props;
  const { isLoading: loadingPage } = tracksAPI.useFetchAllTracksQuery();
  return (
    <S.StylesSideBarItem>
      {loadingPage ? (
        <S.StylesSideBarImgBones alt="day's playlist" />
      ) : (
        <S.StylesSideBarLink to={to}>
          <S.StylesSideBarImg src={image} alt="day's playlist" />
        </S.StylesSideBarLink>
      )}
    </S.StylesSideBarItem>
  );
}

export default SideBarItem;
