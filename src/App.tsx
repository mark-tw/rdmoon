import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {addSquare, removeSquare} from "./square/reducer";
import {useTransition} from "@react-spring/web";
import {squaresSelector} from "./square/selector";
import {SquareComp} from "./square/components/square";
import {Square} from "./square/entity";




const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const squares = useSelector(squaresSelector);
  const transitions = useTransition(squares , {
    keys: (square: Square) => square.id,
    from: { transform: 'translate3d(-100%,0px,0px)'},
    enter: { transform: 'translate3d(0px,0px,15px)'},
    leave: { transform: `translate3d(${screenWidth}px,0px,0px)`}
  })


  const handleAddSquare = () => {
    const colors = ['#E91E63', '#2196f3', '#4caf50', '#ffeb3b', '#9c27b0'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const colorRandom = colors[randomIndex];
    dispatch(addSquare(colorRandom));
  };

  const handleRemoveSquare = () => {
    dispatch(removeSquare());
  };

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });


  return (
      <>
      <button onClick={handleAddSquare}>Добавить</button>
      <button onClick={handleRemoveSquare}>Удалить</button>
      <div style={{ height: '100vh', display: "flex", overflow: "hidden" }}>
        {transitions((style, item, t) => (
            <SquareComp color={item.color} key={t.key} style={style}></SquareComp>
        ))}
      </div>
      </>
  );
};

export default App;
