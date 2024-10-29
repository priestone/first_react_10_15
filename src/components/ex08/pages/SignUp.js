import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    /* &::placeholder {
      color: red;
    } */
  }

  p {
    font-size: 14px;
    color: crimson;
    margin-top: 3px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 10px;
  margin-top: 18px;
  color: white;
  font-weight: 500;
  cursor: ${(props) => (props.$isPointer ? "pointer" : "default")};
  opacity: ${(props) => props.$isActive};
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const nav = useNavigate();

  const signupSubmit = (data) => {
    alert(`${data.username}님 회원가입 성공!`);
    nav("/login");
    // =>페이지 이동할때 사용함
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(signupSubmit)}>
        <h2>회원가입</h2>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 4,
              message: "아이디는 다섯자리 이상으로 하세요.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>
        {/* *옵셔녈 체이닝(?.)
            객체 속성의 유무에 따라 undefinded로 반환이 아닌 값이 있으면 값을 반환하고
            없으면 빈값으로 반환함 */}
        <input
          {...register("password", {
            required: "비밀번호는 필수 입니다.",
            // minLength: {
            //   value: 8,
            //   message: "패스워드는 8자 이상 작성해 주세요",
            // },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
              message: "영문 숫자 조합 8자리 이상",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        <input
          {...register("email", {
            required: false,
            // minLength: {
            //   value: 8,
            //   message: "패스워드는 8자 이상 작성해 주세요",
            // },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "입력형식: 1234@naver.com",
            },
          })}
          type="text"
          placeholder="이메일"
        />
        <p>{errors?.email?.message}</p>

        <input
          {...register("name", {
            required: "이름은 필수입니다.",
            minLength: {
              value: 2,
              message: "이름은 두글자 이상으로 입력해주세요.",
            },
            // pattern: {
            //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //   message: "입력형식: 1234@naver.com",
            // },
          })}
          type="text"
          placeholder="이름을 입력해주세요"
        />
        <p>{errors?.name?.message}</p>

        {/* <p>{errors.username.message}</p> */}
        {/* <p>{errors && errors.username && errors.username.message}</p>
            -위에는 삼항 연산자 사용버전 */}

        <Button $isActive={isValid ? "1" : "0.5"} $isPointer={isValid}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
