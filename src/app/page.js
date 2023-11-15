// Constants
import { cardsCollections } from '@/constants/SliderCollections';
import { cardsHighlights } from '@/constants/SliderHighlights';
import { cardsTendencies } from '@/constants/SliderTendencies';

// Components
import SectionHero from "@/components/SectionHero";
import SectionCarrousel from "@/components/SectionCarrousel";
import SectionCollectors from "@/components/SectionCollectors";
import SectionBanner from "@/components/SectionBanner";
import SectionFAQ from "@/components/SectionFAQ";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCarrousel
        subtitle='Destaque em Coleções'
        title='Coleções notáveis'
        data={cardsCollections}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle='Seleção Mensal'
        title='Destaque do Mês'
        data={cardsHighlights}
      />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCollectors />
      <hr className="border-t border-white border-opacity-5 max-w-grid mx-auto" />
      <SectionCarrousel
        subtitle='Em Tendência'
        title='Tendências'
        data={cardsTendencies}
      />
      <SectionBanner />
      <SectionFAQ />
    </>
  )
}
