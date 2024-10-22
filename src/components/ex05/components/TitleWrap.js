import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const STitileWrap = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
`;

const More = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: crimson;
`;

const TitleWrap = () => {
  return (
    <STitileWrap>
      <h3>Betthoven: Piano Conerto No.1</h3>
      <More>
        <FontAwesomeIcon icon={faEllipsis} />
      </More>
    </STitileWrap>
  );
};

export default TitleWrap;
