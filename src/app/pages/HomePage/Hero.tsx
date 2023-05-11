import * as React from 'react';
import styled from 'styled-components/macro';

export function Hero() {
  const HeroBlock = styled.span`
    font-family: "Comic Sans MS", serif;
    margin: auto;
    height: 25rem;
    display: block;
    text-align: center;
    background-color: #fff8f9;
  `;

  return (
    <HeroBlock>
      <h1>Bonjour!</h1>
      <h3>D.W.D. Beauvoir</h3>
    </HeroBlock>
  );
}
