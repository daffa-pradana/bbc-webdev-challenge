import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './App.css';
import Header from './components/Header';
import Selection from './components/Selection';
import { Container, Loading, LoadingText, MainContainer, SideContainer, Wrapper, Main} from './components/Layout/LayoutElements';
import Content from './components/Content';
import { processData } from './helper';
import Article from './components/Article';

const App = () => {

  // fetch data
  const [data, setData] = useState(null)
  const fetchData = () => {
    fetch('/data/english.json')
      .then((res) => { return res.json() })
      .then((resJson) => { setData(resJson) })
  }
  useEffect(() => {
    fetchData()
  },[])

  // city state
  const [city, setCity] = useState(1)
  const selectCity = (e) => {
    setCity(e.target.value)
  }

  // page title
  const title = data ? data['hero_1_title'] : "Article" 

  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title}</title>
      </Helmet>
      <Wrapper>
        { data ? (
          <>
            <Header 
              background={data['hero_1_image']}
              title={data['hero_1_title']}
              category={data['article-info_1_category']}
              categoryUrl={data['article-info_1_category_url']}
            />
            <Container>
              <MainContainer>
                <Article
                  data={data}
                />
              </MainContainer>
              <SideContainer>
                <Selection 
                  data={data}
                  selectCity={selectCity}
                />
                <Content
                  city={data[processData(city).city]}
                  aqi={data[processData(city).aqi]}
                  cigg={data[processData(city).cigg]}
                  info={data[processData(city).info]}
                />
              </SideContainer>
            </Container>
          </>
        ) 
        : 
        (
          <Loading>
            <LoadingText>Loading page...</LoadingText>
          </Loading>
        )}
      </Wrapper>
    </Main>
  );
}

export default App;
