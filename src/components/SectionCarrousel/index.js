// Components
import Container from "../Container";
import TitleSection from "../TitleSection";
import Carrousel from "./Carrousel";

export default function SectionCarrousel() {
  return (
    <section>
      <Container>
        <TitleSection
          subtitle='Destaque em Coleções'
          title='Coleções notáveis'
        />
        <Carrousel />

      </Container>
    </section>
  )
}
