import { SOCIAL_NAVIGATION } from '~/constants'
import * as S from '../styles/pages/home'

export default function Home() {
  return (
    <S.Container>
      <S.Content>
        <h1>
          Olá meu nome é <br />
          <strong>Luiz Otávio</strong>
        </h1>
        <p>
          Sou desenvolvedor web, e tenho desenvolvido minhas habilidades com as
          mais atuais stacks do mercado.
        </p>
        <S.SocialLink>
          {Object.entries(SOCIAL_NAVIGATION).map(([key, value]) => (
            <li key={`social-${key}`}>
              <div>{value.icon}</div>
            </li>
          ))}
        </S.SocialLink>
      </S.Content>
      <S.ImageContainer>
        <img src="/img/notebook.svg" alt="" />
      </S.ImageContainer>
    </S.Container>
  )
}
