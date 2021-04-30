import styled from 'styled-components'

export const ContentWrapper = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.1);
    width: 80%;
    height: 320px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px 20px;
`

export const ContentCity = styled.h4`
    font-size: 16px;
    font-family: "font-medium";
    color: var(--clr-text-black);
`

export const ContentCountry = styled.p`
    margin-top: 5px;
    font-size: 14px;
    color: var(--clr-text-grey);
`

export const ContentAqi = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 100px;
    border: 1px solid rgba(168,181,198,0.2);
    border-radius: 10px;
`

export const QualityIndex = styled.h1`
    font-size: 32px;
    margin-top: 20px;
    text-align: center;
    font-family: "font-medium";
    color: var(--clr-text-black);
`

export const SubIndex = styled.p`
    margin-top: 5px;
    font-size: 10px;
    text-align: center;
    color: var(--clr-text-grey);
`

export const ContentCigar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid rgba(168,181,198,0.2);
    border-radius: 10px;
    padding: 10px 0px;
`

export const Cigar = styled.img`
    width: 8px;
`

export const ContentInfo = styled.p`
    font-size: 9px;
    text-align: justify;
    line-height: 12px;
    color: var(--clr-text-grey);
    margin-top: 15px;
    padding: 0 7px;
`