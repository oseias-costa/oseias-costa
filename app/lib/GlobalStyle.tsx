"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --font-coolvetica: 'coolvetica';
  --color-gray: #D9D9D9;
  --color-background: #1B1B1B;
  --color-background-section: #1E1E1E;
  --color-hover: #F2CE1B;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background-color: var(--color-background);
}
`;
