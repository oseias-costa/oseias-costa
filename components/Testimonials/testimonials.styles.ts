import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialItemContainer = styled.div`
  background-color: var(--color-background-section);
  max-width: 400px;
  margin: 20px;
  padding: 20px;
`;

export const Svg = styled.svg`
  width: 66px;
  height: 66px;
  background-color: var(--color-background-section);
`;

export const TestimonialText = styled.p`
  font-style: italic;
  font-family: var(--font-manrope);
  color: var(--color-gray);
  background-color: var(--color-background-section);
  font-weight: 300;
`;

export const TestimonialName = styled.p`
  font-family: var(--font-manrope);
  color: #fff;
  background-color: var(--color-background-section);
  font-weight: 700;
  padding-top: 10px;
  font-size: 16px;
`;

export const TestimonialPersonFunction = styled.p`
  font-family: var(--font-manrope);
  color: var(--color-gray);
  background-color: var(--color-background-section);
  font-weight: 300;
  font-size: 12px;
`;

export const TestimonialBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
