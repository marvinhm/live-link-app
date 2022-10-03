import { CardWrap } from './cardStyles';


function Card(props: {name: string, short_intro: string, long_intro: string, image: string}) {

  return (
    <CardWrap>
      <div className='left'>
        <svg width="100" height="81">
          <mask id="svgmask1">
            <circle fill="#ffffff" cx="39" cy="39" r="39"></circle>
          </mask>
          <image className='user-image-circle' xlinkHref={props.image} mask="url(#svgmask1)"></image>
        </svg>
      </div>
      <div className='right'>
        <h3>{props.name}</h3>
        { props.short_intro ? <p>{props.short_intro}</p> : "" }
        { props.long_intro ? <p>{props.long_intro}</p> : "" }
      </div>
    </CardWrap>
  )
}

export default Card;