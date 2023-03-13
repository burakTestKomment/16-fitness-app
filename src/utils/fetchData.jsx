import axios from 'axios'

export const exercisesOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_EXECISE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  


export const fetchData = async (url, options) => {
const {data} = await axios ( url, options)
return data;
}