import Contents from "./components/Contents";
import Ex from "./components/Ex";
import Ex2 from "./components/Ex2";

const menus = [
  {
    id: 0,
    title: "아침",
    mainmenu: "시리얼",
    submenu: "커피",
  },
  {
    id: 1,
    title: "점심",
    mainmenu: "돈까스",
    submenu: "요거트",
  },
  {
    id: 2,
    title: "저녁",
    mainmenu: "마라탕",
    submenu: "두바이 초콜릿",
  },
];

const tomorrow = [
  {
    id: 0,
    title: "아침",
    mainmenu: "소세지야채볶음",
    submenu: "요쿠르트",
  },
  {
    id: 1,
    title: "점심",
    mainmenu: "제육볶음",
    submenu: "부산우유",
  },
  {
    id: 2,
    title: "저녁",
    mainmenu: "치킨",
    submenu: "맥주",
  },
];

const PropsEx = () => {
  return (
    <div className="wrap">
      {/* <Contents text="컨텐츠 1" bgColor="salmon"/>
      <Contents text="컨텐츠 2" bgColor="lightblue"/> */}
      <Ex foodMenus={menus}></Ex>
      <Ex2 tomorrowMenu={tomorrow}></Ex2>
      <Ex2 tomorrowMenu={tomorrow}></Ex2>
    </div>
  );
};

export default PropsEx;
