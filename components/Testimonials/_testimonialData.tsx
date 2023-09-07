export type TestimonialsData = {
  id: number;
  name: string;
  position: string;
  content: string;
};

export const testimonials: TestimonialsData[] = [
  {
    id: 1,
    name: "Ana Paula Schwengber",
    position: "Owner Leap Engenharia Química",
    content:
      '"Trabalhar com o Oseias foi uma grata surpresa. É um profissional extremamente competente e interessado genuinamente em atender seus clientes da melhor forma, entregando soluções de muito bom gosto. Estou tendo ótimos resultados com o site criado por ele, por isso recomendo de olhos fechados seu trabalho!"',
  },
  {
    id: 2,
    name: "Leonardo Borilli",
    position: "Diretor Inovate Soluções Ambientais",
    content:
      '"Estou extremamente satisfeito com o site e o sistema de gerenciamento de atividades desenvolvidos pelo Oséias. Ele é um profissional incrivelmente prestativo, sempre disponível e dedicado a encontrar soluções. Simplificou nosso trabalho de forma excepcional, hoje temos um sistema interno personalizado."',
  },
];
