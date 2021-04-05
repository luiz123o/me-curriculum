import * as S from './styles'
import MetaTags from '../MetaTags/index'
import { NavBar } from './NavBar'
const Header = ({
  title = 'Luiz Otávio',
  description = 'Website portifólio'
}) => {
  return (
    <>
      <MetaTags title={title} description={description}></MetaTags>
      <S.Container>
        <NavBar />
      </S.Container>
    </>
  )
}
export default Header
