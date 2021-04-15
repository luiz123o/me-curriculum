import * as S from './styles'
import { SVGAttributes } from 'react'

type ServiceProps = {
  title: string
  description: string
  image: SVGAttributes<SVGElement>
}

export const ServiceCards = ({ title, description, image }: ServiceProps) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ImageBox>{image}</S.ImageBox>
          <S.CardText>
            <h2>{title}</h2>
            <p>{description}</p>
          </S.CardText>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
