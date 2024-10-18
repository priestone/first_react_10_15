const Ex = ({ foodMenus, bgColor, borderRadi }) => {
  //   console.log(foodMenus);
  return (
    <div
      className="con"
      style={{ backgroundColor: bgColor, borderRadius: borderRadi }}
    >
      <h2>{foodMenus[0].title}메뉴</h2>
      <p>
        메인 : {foodMenus[0].mainmenu}
        <br />
        서브 메뉴 : {foodMenus[0].submenu}
      </p>

      <h2>{foodMenus[1].title}메뉴</h2>
      <p>
        메인 : {foodMenus[1].mainmenu}
        <br />
        서브 메뉴 : {foodMenus[1].submenu}
      </p>

      <h2>{foodMenus[2].title}메뉴</h2>
      <p>
        메인 : {foodMenus[2].mainmenu}
        <br />
        서브 메뉴 : {foodMenus[2].submenu}
      </p>
    </div>
  );
};

export default Ex;
