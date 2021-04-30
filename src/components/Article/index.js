import React from 'react'
import { ArticleInfo, ArticleWrapper, Paragraph, ParagraphWrapper, Separator } from './ArticleElement'
import { generateParagraph } from './ArticleHelper'

const Article = ({ data }) => {
    
    const author = data ? data['article-info_1_byline'] : "unknown"
    const date = data ? data['article-info_1_date'] : "date undefined"
    const paragraphs = generateParagraph(data);

    return (
        <>
            <ArticleWrapper>
                <ArticleInfo data-testid='article-info'>{date} | {author}</ArticleInfo>
                <Separator />
                <ParagraphWrapper data-testid='article-paragraph'>
                    {paragraphs.map((paragraph, i) => {
                        return <Paragraph key={i}>{paragraph}</Paragraph>
                    })}
                </ParagraphWrapper>
            </ArticleWrapper>
        </>
    )
}

export default Article
