import { render } from '@testing-library/react'
import Content from '.'
import { splitIndex, generateCigars } from './ContentHelper'

// test split index
test("splitIndex", () => {
    expect(splitIndex("283 PM2.5")).toEqual(["283", "PM2.5"])
    expect(splitIndex("")).toEqual(["no data", "no data"])
    expect(splitIndex("283PM2.5")).toEqual(["no data", "no data"])
})

// test generate cigars
test("generateCigars", () => {
    expect(generateCigars(5)).toEqual([1,2,3,4,5])
})

// test content render
it("checkContentRender", () => {
    const { queryByTestId } = render(<Content />)
    const city = queryByTestId("content-city")
    const country = queryByTestId("content-country")
    const aqi = queryByTestId("content-aqi")
    const info = queryByTestId("content-info")
    expect(city).toBeTruthy()
    expect(country).toBeTruthy()
    expect(aqi).toBeTruthy()
    expect(info).toBeTruthy()
})