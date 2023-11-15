// Constants
import { cardsCollectors } from "@/constants/CardsCollectors";

// Components
import Container from "../Container";
import TitleSection from "../TitleSection";
import CardCollector from "../CardCollector";

export default function SectionCollectors() {
  // Divida o array de cards em duas partes
  const halfIndex = Math.ceil(cardsCollectors.length / 2);
  const leftColumn = cardsCollectors.slice(0, halfIndex);
  const rightColumn = cardsCollectors.slice(halfIndex);

  return (
    <section className="py-10 @desktop:py-28">
      <Container>
        <TitleSection
          subtitle='Colecionadores em Foco'
          title='Principais colecionadores'
        />
        <div className="flex flex-col @tablet:flex-row gap-4 ">
          <div className="w-full space-y-4">
            {leftColumn.map((card, index) => (
              <CardCollector key={index} index={index + 1} {...card} />
            ))}
          </div>
          <div className="w-full space-y-4">
            {rightColumn.map((card, index) => (
              <CardCollector key={index + halfIndex} index={index + halfIndex + 1} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
