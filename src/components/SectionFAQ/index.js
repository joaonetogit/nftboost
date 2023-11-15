// Constants
import { questions } from "@/constants/FAQ";

// Components
import Container from "../Container";
import TitleSection from "../TitleSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SectionFAQ() {
  return (
    <section className="pt-10 @desktop:pt-28">
      <Container>
        <TitleSection
          subtitle='Desvendando os Mistérios dos NFTs'
          title='Perguntas frequentes'
        />
        <div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </Container>
    </section>
  )
}
