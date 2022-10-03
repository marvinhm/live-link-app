import { useState } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';
import { CardGridWrap } from './cardGridStyles';


function CardGrid(props: {data: Array<{ name: string, short_intro: string, long_intro: string, image: string }>}) {
  const [user, setUser] = useState({ name: "", short_intro: "", long_intro: "", image: "" });
  const [showModal, setShowModal] = useState(false);
  

  const cardOnClick = (userObj: { name: string, short_intro: string, long_intro: string, image: string }) => {
    setUser(userObj);
    setShowModal(true);
  }

  const renderDefaultCard = ( cardData: {name: string, short_intro: string, long_intro: string, image: string}, index: number) => (
    <Card 
      key={index}
      name={cardData.name}
      short_intro={cardData.short_intro}
      long_intro={""}
      image={cardData.image}
    />
  )

  const renderCard = (items: Array<{ name: string, short_intro: string, long_intro: string, image: string }>) =>
    items.map((item, index) => 
      <div className="card" onClick={() => cardOnClick(item)}>
        {renderDefaultCard(item, index)}
      </div>
    )
      
  const handleModalClose = () => {
    setShowModal(false);
  }

  return (
    <CardGridWrap>
      <>
        <div className="showCards">
          {renderCard(props.data)}
        </div>
        <div className={showModal ? "showModal" : "hideModal"}>
          <div className='modal-container'>
            <Modal 
              name={user.name}
              short_intro={user.short_intro}
              long_intro={user.long_intro}
              image={user.image}
              open={showModal}
            />
            <button
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      </>
    </CardGridWrap>
  )
}

export default CardGrid;