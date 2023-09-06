import QuotationIcon from "./QuotationIcon";
import * as S from "./testimonials.styles";

interface TestimonialItemProps {
  name: string;
  position: string;
  content: string;
}

export default function TestimonialItem({
  name,
  position,
  content,
}: TestimonialItemProps) {
  return (
    <S.TestimonialItemContainer>
      <QuotationIcon />
      <S.TestimonialText>{content}</S.TestimonialText>
      <S.TestimonialName>{name}</S.TestimonialName>
      <S.TestimonialPersonFunction>{position}</S.TestimonialPersonFunction>
    </S.TestimonialItemContainer>
  );
}
