import { render } from '@testing-library/react'
import Selection from '.'
import { generateCities } from "./SelectionHelper"

// test generate cities
test("generateCities", () => {
    const data = {
        'total_cities_1_value': 2,
        'compare-tabs_1_city_1_name': "Ghaziabad",
        'compare-tabs_1_city_2_name': "Noida",
    }
    expect(generateCities(data)).toEqual(["Ghaziabad", "Noida"])
})

// test selection render
it("checkSelectionRender", () => {
    const { queryByTestId } = render(<Selection />)
    const title = queryByTestId("selection-title")
    const city = queryByTestId("selection-city")
    expect(title).toBeTruthy()
    expect(city).toBeTruthy()
})