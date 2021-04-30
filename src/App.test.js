import { processData } from "./helper"

// test process data
test("processData", () => {
    expect(processData(1)).toEqual({
        city: "compare-tabs_1_city_1_name",
        aqi: "compare-tabs_1_city_1_aqi",
        cigg: "compare-tabs_1_city_1_cigg",
        info: "compare-tabs_1_method"
    })
})