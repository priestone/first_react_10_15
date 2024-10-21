import styled from "styled-components";

const Wrap = styled.div`
  width: 260px;
  height: 500px;
  border: 5px solid black;
  margin: 0 auto;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BgImg = styled.div`
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 10px;
  img {
    width: 120%;
  }
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;

const StatusBar = styled.div`
  width: 250px;
  height: 5px;
  background-color: lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  div {
    width: 120px;
    height: 5px;
    border-radius: 10px;
    background-color: black;
    position: absolute;
  }
`;

const StatusText = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 12px;
  }
`;

const Play = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin: 30px 0;

  i {
    font-size: 30px;
  }
`;

const MusicWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 180px;
    height: 5px;
    background-color: lightgray;
    border-radius: 10px;
  }
`;

const Ex05 = () => {
  return (
    <div>
      <Wrap>
        <BgImg>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/L5UV5eFyTS1Ar4MTDDOd_Ynrzt4"
            alt="핑구이미지"
          />
        </BgImg>
        <Text>잔잔한 오후 듣기좋은 핑구소리</Text>
        <StatusBar>
          <div></div>
        </StatusBar>
        <StatusText>
          <p>0:0</p>
          <p>03:54</p>
        </StatusText>
        <Play>
          <i class="fa-solid fa-backward"></i>
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-forward"></i>
        </Play>
        <MusicWrap>
          <i class="fa-solid fa-volume-off"></i>
          <div></div>
          <i class="fa-solid fa-volume-high"></i>
        </MusicWrap>
      </Wrap>
    </div>
  );
};

export default Ex05;
