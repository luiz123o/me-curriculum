import * as S from './styles'
import { FaMobile } from 'react-icons/fa'
export const ServiceCards = () => {
  return (
    <>
      <S.Container>
        <S.Card>
          <S.ImageBox>
            <FaMobile />
          </S.ImageBox>
        </S.Card>
      </S.Container>
    </>
  )
}
