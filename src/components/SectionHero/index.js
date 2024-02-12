import Container from "../Container";
import AreaTextHero from "./AreaTextHero";
import Cards from "./Cards";

export default function SectionHero() {
  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat bg-top overflow-hidden">
      <Container className="flex flex-col items-center">
        <AreaTextHero />
        <Cards />

        <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36"></div>
      </Container>
    </section>
  );
}
