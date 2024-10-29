import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100vh;
  h2 {
    font-size: 40px;
    text-align: center;
    font-weight: 500;
    margin: 50px 0;
  }
`;

const LinkWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  width: 300px;
  height: 50px;
  border: 1px solid #1d1d1d;
  text-align: center;
  border-radius: 10px;
  background-color: cornflowerblue;
  color: white;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -2px;
`;

const Home = () => {
  return (
    <Wrap>
      <h2>여기는 홈 화면 입니다.</h2>
      <LinkWrap>
        <Link to="/login">
          <Button>로그인 바로가기</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입 바로가기</Button>
        </Link>
      </LinkWrap>
    </Wrap>
  );
};

export default Home;
