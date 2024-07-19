// LabelTitle.styles.js

import styled from 'styled-components';

const LabelTitle = styled.h1`
    font-size: 6vh;
    max-width: 100vw;
    font-family: "Chakra Petch", sans-serif;
    font-weight: 600;

    @media (max-aspect-ratio: 1.25/1){
        text-align: center;
        font-size: 7vh;
    }
`;

export default LabelTitle;
