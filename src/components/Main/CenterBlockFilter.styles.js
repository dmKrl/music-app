import styled from 'styled-components';

export const CenterBlockHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flexbox;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  position: relative;
`;
export const StyleFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const CounterFilters = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: #ad61ff;
  color: white;
  border-radius: 12px;
  position: absolute;
  bottom: 24px;
  right: 0;
`;
export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  color: white;
  background: none;
  border-radius: 60px;
  padding: 6px 20px;
  :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  :active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;
export const FilterButtonActive = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  background: none;
  border-radius: 60px;
  padding: 6px 20px;
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
  :hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  :active {
    border-color: #ad61ff;
    color: white;
    cursor: pointer;
  }
`;
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const Popup = styled.div`
  display: inline-flex;
  padding: 34px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #313131;
  overflow-y: auto;
  scroll-snap-type: x proximity;
  max-height: 305px;
  position: absolute;
  top: 41px;
  ::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    background: #4b4949; /* цвет дорожки */
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: blue; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid rgb(255, 255, 255); /* padding вокруг плашки */
  }
`;
export const PopupText = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;
export const PopupTextActive = styled.div`
  color: #b672ff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;
export const PopupTextInfo = styled.p`
  margin-bottom: 28px;
  color: ${(props) => (props.$isActive ? '#b672ff' : '#fff')};

  :hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
