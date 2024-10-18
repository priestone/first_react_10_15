const arr = [1, 2, 3, 4, 5];

// arr.map((num) => console.log(num + "❤"));

export const MapEx = () => {
  return (
    <div>
      {arr.map((num) => (
        <frameElement key={num}>{num}</frameElement>
        // <h2 key={num}>{num}</h2>
      ))}
    </div>
  );
};

// *map()
// =>배열만 사용할 수 있음
// =>기존 배열을 복사하여 배열안의요소를 새로운 값으로 반환시킴
// =>map을 사용할땐 반드시 key를 사용해야 되며 값은 고유값으로 적용할 것
