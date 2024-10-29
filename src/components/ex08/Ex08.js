import { useForm } from "react-hook-form";

const Ex08 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
  };

  console.log(errors?.username?.message);

  return (
    <div>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
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
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        {/* <p>{errors.username.message}</p> */}
        {/* <p>{errors && errors.username && errors.username.message}</p>
        -위에는 삼항 연산자 사용버전 */}

        <button>로그인</button>
      </form>
    </div>
  );
};

export default Ex08;
