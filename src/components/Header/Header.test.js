import { render } from '@testing-library/react'
import Header from '.'

// test header render
it("checkHeaderRender", () => {
    const { queryByTestId } = render(<Header />)
    const title = queryByTestId("header-title")
    const category = queryByTestId("header-category")
    expect(title).toBeTruthy()
    expect(category).toBeTruthy()
})