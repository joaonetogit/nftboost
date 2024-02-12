import Container from "../Container";
import Divider from "../Divider";
import TitleSection from "../TitleSection";
import Carrousel from "./Carrousel";

export default function SectionCarrousel({
  subtitle,
  title,
  data,
  hasDivider,
}) {
  return (
    <>
      <section className="py-10 @desktop:py-28">
        <Container className="px-0 @desktop:px-3">
          <TitleSection subtitle={subtitle} title={title} />
          <Carrousel data={data} />
        </Container>
      </section>
      {hasDivider ? <Divider /> : null}
    </>
  );
}
