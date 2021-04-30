import React from 'react'
import { ContentCigar, ContentAqi, ContentCity, ContentCountry, ContentWrapper, QualityIndex, SubIndex, Cigar, ContentInfo } from './ContentElement'
import { generateCigars, splitIndex } from './ContentHelper'

const Content = ({ city, aqi, cigg, info }) => {

    const cigar_icon = process.env.PUBLIC_URL + "img/icon/cigar.png"
    const [ quality_index, sub_index ] = splitIndex(aqi)
    const cigars = generateCigars(cigg)

    return (
        <>
            <ContentWrapper>
                <ContentCity data-testid="content-city">{city}</ContentCity>
                <ContentCountry data-testid="content-country">India</ContentCountry>
                <ContentAqi data-testid="content-aqi">
                    <QualityIndex>{quality_index}</QualityIndex>
                    <SubIndex>{sub_index} | 21.6 μg/m3</SubIndex>
                </ContentAqi>
                <ContentCigar data-testid="content-cigar">
                    { cigars.map((i) => {
                        return <Cigar key={i} src={cigar_icon} draggable={false} />
                    }) }
                </ContentCigar>
                <ContentInfo data-testid="content-info">
                    {info}
                </ContentInfo>
            </ContentWrapper>
        </>
    )
}

export default Content
