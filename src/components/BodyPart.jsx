import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";  
 
/**
* @description The `BodyPart` function creates a React component that displays a
* button representing a body part.
* 
* @returns { Component } The output returned by the function `BodyPart` is a React
* component that renders a card with an image and text representing a body part. The
* component accepts three props: `item`, `setBodyPart`, and `bodyPart`.
*/
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left:100, behavior:"smooth" })
      }}
    >
      <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform='capitalize' >{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
