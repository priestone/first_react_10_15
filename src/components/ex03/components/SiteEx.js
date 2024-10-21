const linkEx = [
  {
    id: 0,
    text: "유튜브 바로가기",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    url: "https://www.youtube.com/?app=desktop&hl=ko&gl=KR",
    alt: "유튜브 이미지",
  },
  {
    id: 1,
    text: "네이버 바로가기",
    imgURL:
      "https://velog.velcdn.com/images/meflow/post/07f619eb-7e4c-44d2-9fa7-3ef04333ef87/image.jpg",
    url: "https://www.naver.com/",
    alt: "네이버 이미지",
  },
  {
    id: 2,
    text: "카카오 바로가기",
    imgURL:
      "https://i.namu.wiki/i/GmQozcg0lMGkI_NXkm04l-14hJIGnxYdhfe98DUlKGHVunjQtRkn0ZaGgXI1DEdGzHCzUsJsLbEZlMveOEnoRQ.svg",
    url: "https://www.kakaocorp.com/page/",
    alt: "카카오 이미지",
  },
];

const SiteEx = () => {
  return (
    <>
      {linkEx.map((link) => (
        <div key={link.id}>
          <a href={link.url}>
            <img src={link.imgURL} alt={link.alt} />
            <h2>{link.text}</h2>
          </a>
        </div>
      ))}
    </>
  );
};

export default SiteEx;
