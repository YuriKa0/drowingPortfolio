import { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import './Card.css';
const cardImages = [
    {'src':'/img/card1.png', 'matched':false},
    {'src':'/img/card2.png', 'matched':false},
    {'src':'/img/card3.png', 'matched':false},
    {'src':'/img/card4.png', 'matched':false},
    {'src':'/img/card5.png', 'matched':false},
    {'src':'/img/card6.png', 'matched':false},
    {'src':'/img/card7.png', 'matched':false},
    {'src':'/img/card8.png', 'matched':false}
  ]
function CardGame(){
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(10);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  
  //카드 섞기
  const shuffleCard = () => {
    const shuffled = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)//sort는 기본적으로 오름차순이지만 괄호 안 콜백함수를 적으면 이를 기준으로 정렬함.
    .map((card)=>({...card, id:Math.random()}));
    setCards(shuffled);
    setTurns(10);
  }
  // console.log(cards,turns);

  //뒷면 클릭 시 선택한 카드 정보 업데이트
  const handleChoice = (card) => {
    // setChoiceOne()
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);  
    console.log(choiceOne, choiceTwo);
    // console.log();
  }

  // 선택된 카드 2장의 src를 비교하여 matched 속성 변경
  useEffect(()=>{
    if(choiceOne && choiceTwo){//=이미지 정보가 둘 다 들어있으면
      //turn값 증가

      if(choiceOne.src === choiceTwo.src){
        // console.log('match');
        setCards(prevCards => {
          return prevCards.map((card)=>{
            if(card.src === choiceOne.src){
              return {...card, matched:true}
            }else{
              return card
            }
          });
        });
        resetTurn();
      }else{
        // console.log('unmatch');
        setTimeout(resetTurn,500);
      }
      
      
    }
  },[choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns-1);
  }



  useEffect(()=>{
    // shuffleCard();
  });


  return(
    
    <div className="board">
      <header>
        <h1>카드 짝맞추기 게임</h1>
        <div>
          <button onClick={shuffleCard}>new game</button>
          <p>남은 기회 : {turns}</p>
          <p>남은 시간 : </p>
        </div>
      </header>
      <div className="card_wrap">
        {cards.map((card)=>(
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
        ))}
      </div>
    </div>
    
  );
}

export default CardGame;