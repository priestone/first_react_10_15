const Ex2 = ({ tomorrowMenu, bgColor, borderRadi }) => {
  return (
    <div
      className="con"
      style={{ backgroundColor: bgColor, borderRadius: borderRadi }}
    >
      <h2>{tomorrowMenu[0].title}메뉴</h2>
      <p>
        메인 : {tomorrowMenu[0].mainmenu}
        <br />
        서브 메뉴 : {tomorrowMenu[0].submenu}
      </p>

      <h2>{tomorrowMenu[1].title}메뉴</h2>
      <p>
        메인 : {tomorrowMenu[1].mainmenu}
        <br />
        서브 메뉴 : {tomorrowMenu[1].submenu}
      </p>

      <h2>{tomorrowMenu[2].title}메뉴</h2>
      <p>
        메인 : {tomorrowMenu[2].mainmenu}
        <br />
        서브 메뉴 : {tomorrowMenu[2].submenu}
      </p>
    </div>
  );
};

export default Ex2;
