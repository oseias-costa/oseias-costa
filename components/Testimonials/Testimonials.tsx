import { H2 } from "../ProjectsCovers/projectsCovers.styles";
import TestimonialItem from "./TestimonialItem";
import { TestimonialsData, testimonials } from "./_testimonialData";
import {
  TestimonialBlocks,
  TestimonialsContainer,
} from "./testimonials.styles";

export default function Testimonials() {
  const testimonialList = testimonials.map((item: TestimonialsData) => (
    <TestimonialItem
      name={item.name}
      position={item.position}
      key={item.id}
      content={item.content}
    />
  ));
  return (
    <TestimonialsContainer id='depoimentos'>
      <H2>Depoimentos</H2>
      <TestimonialBlocks>{testimonialList}</TestimonialBlocks>
    </TestimonialsContainer>
  );
}
