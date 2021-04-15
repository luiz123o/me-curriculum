import { SOCIAL_NAVIGATION } from '~/constants'
import * as S from '../styles/pages/home'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h1>Luiz Otavio</h1>
          <h2>{'${DEV-FULLSTACK}'}</h2>
          <p>
            Sempre fui apaixonado por tecnologia e agora que mergulhei de cabeça
            no mundo do desenvolvimento, vejo as ideias se tornarem realidade.
          </p>
          <S.SocialLink>
            {Object.entries(SOCIAL_NAVIGATION).map(([key, value]) => (
              <li key={`social-${key}`}>{value.icon}</li>
            ))}
          </S.SocialLink>
          <S.Button>
            Portfolio
            <FaArrowRight />
          </S.Button>
        </S.Content>
        <S.ImageContainer>
          <img src="/img/notebook.svg" alt="" />
        </S.ImageContainer>
      </S.Wrapper>
    </S.Container>
  )
}
