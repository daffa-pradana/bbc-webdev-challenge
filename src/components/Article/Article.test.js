import { render } from "@testing-library/react"
import Article from "."
import { generateParagraph } from "./ArticleHelper"

// test generate graph
test("generateGraph", () => {
    const data = {
        "p_1_value": "paragraph 1",
        "p_2_value": "paragraph 2",
        "p_3_value": "paragraph 3", 
    }
    expect(generateParagraph(data)).toEqual(["paragraph 1", "paragraph 2", "paragraph 3"])
    expect(generateParagraph({ "no data": "no data" })).toEqual([])
})

// test article render
it("checkArticleRender", () => {
    const { queryByTestId } = render(<Article/>)
    const info = queryByTestId("article-info")
    const paragraph = queryByTestId("article-paragraph")
    expect(info).toBeTruthy()
    expect(paragraph).toBeTruthy()
})