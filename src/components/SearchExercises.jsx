import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setBodyPart, bodyPart, setExercises}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
   
  }, [])
  


  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowercase().includes(search) ||
          exercise.name.toLowercase().includes(search) ||
          exercise.equipment.toLowercase().includes(search) ||
          exercise.target.toLowercase().includes(search) ||
          exercise.bodyPart.toLowercase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises)
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadius: "4 px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
            width: { lg: "1000px", xs: "350px" },
          }}
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: "0",
            height: "56px",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p:'20px'}} >
            <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
