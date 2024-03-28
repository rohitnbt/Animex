import React from 'react'
import "./style.scss"
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper'
import { useParams } from 'react-router-dom'
import { PosterSection } from './posterSection/PosterSection'
import { CharactersSection } from './charactersSection/CharactersSection'
import { ReviewsSection } from './reviewsSeciton/ReviewsSection'
import { SimilerSlider } from '../../components/similerSlider/SimilerSlider'

export const Details = () => {
    const { mediaType, id } = useParams();

  return (
    <div className='Details-page'>
        <ContentWrapper>
            <PosterSection mediaType={mediaType} id={id} />
            {
              mediaType === 'characters' ?
              (<>
              <SimilerSlider title="Anime"  mediaType={mediaType} url={`/characters/${id}/anime`} />
              <SimilerSlider title="Manga"  mediaType={mediaType} url={`/characters/${id}/manga`} />
              </>) :(
                <>
                <CharactersSection mediaType={mediaType} id={id} />
                <ReviewsSection mediaType={mediaType} id={id} />
                </>
              )
            }
            
        </ContentWrapper>
    </div>
  )
}
