import React from 'react'
import { City, SelectionCities, SelectionTitle, SelectionWrapper } from './SelectionElements'
import { generateCities } from './SelectionHelper';

const Selection = ({ data, selectCity }) => {

    const cities = generateCities(data);

    return (
        <>
            <SelectionWrapper>
                <SelectionTitle data-testid="selection-title">Select a city:</SelectionTitle>
                <SelectionCities 
                    id="city"
                    data-testid="selection-city" 
                    onChange={selectCity}
                >
                    {cities.map((city, i) => <City key={i} value={i+1}>{city}</City>)}
                </SelectionCities>
            </SelectionWrapper>
        </>
    )
}

export default Selection
