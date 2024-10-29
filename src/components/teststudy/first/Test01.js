import styled from "styled-components";
import Review from "./components/Review";

const ReviewWrap = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid #1d1d1d;
  border-radius: 10px;
`;

const Test01 = () => {
  return (
    <div>
      <h2>Title</h2>
      <input className="inputEl" type="text" placeholder="입력해주세요" />
      <ReviewWrap>
        <Review></Review>
      </ReviewWrap>
    </div>
    // const inputValue = inputEl.value;
  );
};

export default Test01;
