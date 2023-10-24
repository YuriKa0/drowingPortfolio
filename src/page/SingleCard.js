//SingleCard
import './Card.css';
import {useState} from 'react';

function SingleCard({card, handleChoice, flipped}){

  const onClick = () => {
    handleChoice(card)//CardGame 컴포넌트에서 선택한 카드 2장을 처리하는 handleChoice에 현재 선택된 카드 정보를 전달
  }
  return(
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="앞면" />
        <img className="back" onClick={onClick} src="/img/card-back.png" alt="뒷면"/>
      </div>
    </div>
  );
}

export default SingleCard;