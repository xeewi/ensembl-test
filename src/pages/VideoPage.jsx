import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getMovies, getSeries } from '../services/fakeAPI';

import { BodyLayout } from '../components/Flex';
import { Title } from '../components/Title';
import { Video } from '../components/Video';

export const VideoPage = () => {
  let { programType } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setLoading(true)
    
    const getApi = programType === 'series' ? getSeries : getMovies;
    
    getApi()
      .then(setVideos)
      .then(() => setLoading(false))
      .catch(() => setError(true))
  }, [programType])

  return (
    <>
      <Title title={`Popular ${programType === 'series' ? 'Series' : 'Movies'}`} />
      <BodyLayout>
        {loading & !error ? (
          <p>Loading ...</p>
        ) : videos.map(({title, images}, index) => (
          <Video key={index} title={title} img={images['Poster Art'].url} />
        ))}

        {error && (
          <p>Oops, something went wrong</p>
        )}
      </BodyLayout>
    </>

  );
}
