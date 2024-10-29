import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  width: 300px;
  height: 50px;
  border: 1px solid #1d1d1d;
  background-color: cornflowerblue;
  border-radius: 4px;
  margin-right: 10px;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Link to="/login">
        <Button>로그인 바로가기</Button>
      </Link>

      <Link to="/signup">
        <Button>회원가입 바로가기</Button>
      </Link>
      <h2>홈페이지 입니다.</h2>
    </>
  );
};

export default Home;
