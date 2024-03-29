"use client";

import { questions } from "@/constants/FAQ";

import Container from "../Container";
import TitleSection from "../TitleSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import useFaq from "@/hooks/useFaq";

export default function SectionFAQ() {
  const { faqRef } = useFaq();
  return (
    <section className="pt-10 @desktop:pt-28">
      <Container>
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />
        <div>
          <Accordion type="single" collapsible className="w-full" ref={faqRef}>
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>{question.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
