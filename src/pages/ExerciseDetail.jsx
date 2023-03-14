import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/system"

import {exercisesOptions , fetchData,youtubeOptions} from '../utils/fetchData'
import SimilarExercises from "../components/SimilarExercises"
import ExerciseVideos from "../components/ExerciseVideos"
import Detail from "../components/Detail"

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({ })
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams()

  useEffect(()=> {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)
      setExerciseDetail(exerciseDetailData)
      

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
        setExerciseVideos(exerciseVideosData.contents)
       
    }
    fetchExercisesData()
  }, [id])

  return (
    <Box>
     <Detail  exerciseDetail={exerciseDetail} />
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail?.name}/>
    <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail