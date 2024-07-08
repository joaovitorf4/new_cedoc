// Title.styles.js

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 8vh;
    max-width: 100vw;
    font-family: "Euclid";

    @media (max-aspect-ratio: 1.25/1){
        text-align: center;
        font-size: 7vh;
        max-width: 100vw;
        font-family: "Euclid";
    }
`;

export default Title;
