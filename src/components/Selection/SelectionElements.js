import styled from 'styled-components'

export const SelectionWrapper = styled.div`
    margin-top: 20px;
    width: 80%;
    border-bottom: 1px solid rgba(168,181,198,0.2);
    padding-bottom: 5px;
`

export const SelectionTitle = styled.p`
    font-family: "font-regular";
    color: var(--clr-text-black);
    font-size: 12px;
`

export const SelectionCities = styled.select`
    width: 100%;
    border: none;
    margin-top: 8px;
    background-color: transparent;
    cursor: pointer;
    color: var(--clr-text-grey);
    :focus{
        outline: none;
    }
`

export const City = styled.option`
`