import Header from "./components/ex01/Header";
import Section from "./components/ex01/Section";
import Footer from "./components/ex01/Footer";
import { Menus, Menus_1 } from "./components/ex01/Menus";
import PropsEx from "./components/ex02/PropsEx";
import Ex03 from "./components/ex03/Ex03";
import Ex04 from "./components/ex04/Ex04";
import Ex05 from "./components/ex05/Ex05";
import MusicApp from "./components/ex05/MusicApp";

const App = () => {
  return (
    <>
      {/* <Header></Header>
      <Section></Section>
      <Footer></Footer> */}

      {/* <Menus></Menus>
      <Menus_1></Menus_1> */}
      {/* =>엑스트라 태그 태그만 적어도 된다. 태그만 적었을 경우 검사창에 안뜸
      =>리턴 값에는 항상 1개의 태그만 사용가능 그래서 그 안에 필요한 태그 넣기
      <br />
      =>br태그와 같은 단독태그는 꼭 뒤에 태그를 닫아줘야함 */}
      {/* ----1일차---- */}

      {/* <PropsEx /> */}

      {/* <Ex03 /> */}

      {/* <Ex04></Ex04> */}

      {/* <Ex05></Ex05> */}

      <MusicApp></MusicApp>
    </>
  );
};

export default App;
