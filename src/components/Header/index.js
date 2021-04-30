import React from 'react'
import { HeaderTitle, HeaderWrapper, HeaderCategory, CategoryMark } from './HeaderElements'

const Header = ({ background, title, category, categoryUrl }) => {
    return (
        <>
          <HeaderWrapper background={background}>
            <HeaderTitle data-testid="header-title">{title}</HeaderTitle>
            <CategoryMark />
            <HeaderCategory 
              href={categoryUrl}
              target="_blank"
              rel="norefferer"
              data-testid="header-category" 
            >
              {category}
            </HeaderCategory>
          </HeaderWrapper>
        </>
    )
}

export default Header
