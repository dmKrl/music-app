import * as S from '../SideBar/SideBar.styles';
// import categories from '../../data/categories';

function SideBarItem(props) {
  const { image, loadingPage, to } = props;

  // const navigate = useNavigate();
  // const category = categories.find((category) => categories.id === params.);
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
