import * as S from '../SideBar/SideBar.styles';

function SideBarItem(props) {
  const { image, loadingPage } = props;
  return (
    <S.StylesSideBarItem>
      {loadingPage ? (
        <S.StylesSideBarImgBones alt="day's playlist" />
      ) : (
        <S.StylesSideBarLink href="./">
          <S.StylesSideBarImg src={image} alt="day's playlist" />
        </S.StylesSideBarLink>
      )}
    </S.StylesSideBarItem>
  );
}

export default SideBarItem;
