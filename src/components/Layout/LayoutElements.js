import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;

    @media screen and (max-width: 768px) {
        padding-top: 0;
    }
`

export const Wrapper = styled.div`
    max-width: 960px;
`

export const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const MainContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const SideContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Loading = styled.div`
    margin-top: 20px;
    width: 200px;
    height: 400px;
    padding: 20px 20px;
`

export const LoadingText = styled.p`
    text-align: center;
    font-size: 18px;
    color: var(--clr-text-black);
`