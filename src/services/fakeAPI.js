const LIMIT = 21

export const getSample = () => fetch(
    'sample.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  ).then(res => res.json())
  .then(res => res.entries
    .filter(entrie => entrie.releaseYear >= 2010)
    .sort((a,b) => a.title > b.title)
  )

export const getByProgramType = type => () => getSample()
    .then(res => res.filter(entrie => entrie.programType === type).slice(0, LIMIT))


export const getSeries = getByProgramType('series')
export const getMovies = getByProgramType('movie')