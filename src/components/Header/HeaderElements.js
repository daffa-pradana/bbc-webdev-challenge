import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 150px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px 20px;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 30%;
    position: relative;

    :hover {
        transition: 0.3s;
        background-size: 110% auto;
    }

    @media screen and (max-width: 768px) {
        border-radius: 0;
        height: 200px;
    }
`

export const HeaderTitle = styled.h3`
    font-family: "font-regular";
    font-size: 18px;
    letter-spacing: 1px;
    color: var(--clr-base-white);
    position: absolute;
    bottom: 40px;
    width: 400px;

    @media screen and (max-width: 480px) {
       width: 80%;
    }
`

export const HeaderCategory = styled.a`
    font-family: "font-regular";
    font-size: 14px;
    letter-spacing: 1px;
    color: var(--clr-base-white);
    position: absolute;
    bottom: 10px;
    left: 30px;
    width: 400px;
    text-decoration: none;

    :hover {
        text-decoration: underline;
        opacity: 0.8;
    }

    @media screen and (max-width: 480px) {
       width: 80%;
    }
`

export const CategoryMark = styled.div`
    width: 2px;
    height: 14px;
    background-color: #F24423;
    position: absolute;
    bottom: 10px;
`