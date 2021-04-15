import { SERVICES_CARDS_NAVIGATION } from '~/constants'
import { ServiceCards } from '../../components/ServiceCard/index'
import * as S from '../../styles/pages/services'

const Services = () => {
  return (
    <>
      <S.ServicesSection>
        <S.Container>
          <S.ServicesHeader>
            <h3>Serviços</h3>
            <h1>Meus serviços</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi
              mollitia dolores culpa. Sapiente harum quia impedit sint. Quaerat
              placeat nisi ipsum at praesentium maxime rem iure similique
              expedita molestias!
            </p>
          </S.ServicesHeader>
          <S.ServiceContainerCards>
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
          </S.ServiceContainerCards>
        </S.Container>
      </S.ServicesSection>
    </>
  )
}
export default Services
