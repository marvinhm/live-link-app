import { HeaderWrap } from './headerStyles';
import Logo from './../../assets/logo.png';

function Header() {
  return (
    <HeaderWrap>
      <img src={Logo} alt="Site Logo"/>
    </HeaderWrap>
  )
}

export default Header;