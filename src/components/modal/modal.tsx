import Card from '../card/card';
import { ModalWrap } from './modalStyles';

function Modal(props: {name: string, short_intro: string, long_intro: string, image: string, open: boolean}) {

  return (
    <ModalWrap>
      <div id="modal" className='modal'>
          <Card 
            name={props.name}
            short_intro={props.short_intro}
            long_intro={props.long_intro}
            image={props.image}
            />
      </div>
    </ModalWrap>
  )
}

export default Modal;