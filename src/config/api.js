const headUrl = 'https://api.themoviedb.org/3/movie'
const API_KEY = '1e736f7376d8b7f90a66c1431257159b'

export const fetchPopularMovies = async () => {
  try {
    const apiUrl = `${headUrl}/popular?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchNowPlayingMovies = async (page) => {
  try {
    const apiUrl = `${headUrl}/now_playing?api_key=${API_KEY}&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchTopRatedMovies = async () => {
  try {
    const apiUrl = `${headUrl}/top_rated?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchUpcomingMovies = async () => {
  try {
    const apiUrl = `${headUrl}/upcoming?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchMovieDetails = async (movieId) => {
  try {
    const apiUrl = `${headUrl}/${movieId}?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const fetchMovieCredits = async (movieId) => {
  try {
    const apiUrl = `${headUrl}/${movieId}/credits?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const fetchMovieVideo = async (movieId) => {
  try {
    const apiUrl = `${headUrl}/${movieId}/videos?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const fetchMovieSimilar = async (movieId) => {
  try {
    const apiUrl = `${headUrl}/${movieId}/similar?api_key=${API_KEY}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const searchMovie = async (query, page) => {
  try {
    const encodedQuery = encodeURIComponent(query)
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodedQuery}&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const nextListMovie = async (page) => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
    return []
  }
}
