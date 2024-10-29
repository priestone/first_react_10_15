import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  height: 600px;
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  padding: 80px 20px;
  background-color: mediumseagreen;

  h2 {
    text-align: center;
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #1d1d1d;
  }

  h4 {
    font-size: 60px;
    text-align: center;
    color: #1d1d1d;
    margin-bottom: 30px;
  }

  input {
    all: unset;
    max-width: 450px;
    width: 100%;
    /* height: 40px; */
    border: 1px solid #dbdbdb;
    border-radius: 16px;
    margin: 10px 0;
    background-color: ghostwhite;
    padding: 5px;
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
  background-color: greenyellow;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  color: #1d1d1d;
  cursor: ${(props) => (props.$isPointer ? "pointer" : "default")};
  opacity: ${(props) => props.$isActive};
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const nav = useNavigate();

  const loginSubmit = (data) => {
    nav("/");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인 페이지</h2>
        <h4>
          <FontAwesomeIcon icon={faKiwiBird} />
        </h4>
        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 4,
              message: "아이디는 다섯자리 이상으로 하세요.",
            },
          })}
          type="text"
          placeholder="아이디를 입력해주세요"
        />
        <p>{errors?.username?.message}</p>
        <input
          {...register("password", {
            required: "비밀번호는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 9자리 이상으로 하세요",
            },
          })}
          type="password"
          placeholder="패스워드를 입력해주세요"
        />
        <p>{errors?.password?.message}</p>

        <Button $isActive={isValid ? "1" : "0.5"} $isPointer={isValid}>
          입력
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
