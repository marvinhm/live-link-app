import CardGrid from '../card-grid/cardGrid';
import { ContentWrap } from './contentStyles';

let Users = require('./../../assets/users.json');

function Content() {

  return (
    <ContentWrap>
      <div className='content-container'>
        <div className='content'>
          <CardGrid data={Users}/>
        </div>
      </div>
    </ContentWrap>
  )
}

export default Content;