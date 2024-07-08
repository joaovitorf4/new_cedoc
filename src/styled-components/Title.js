// Title.styles.js

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 8vh;
    max-width: 100vw;
    font-family: "Chakra Petch", sans-serif;
    font-weight: 600;

    @media (max-aspect-ratio: 1.25/1){
        text-align: center;
        font-size: 7vh;
    }
`;

export default Title;
