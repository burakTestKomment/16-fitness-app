import React from 'react'
import { Typography,Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


/**
* @description This function named `Detail` is a component that takes an object
* called `exerciseDetail` as a prop.
* 
* @returns { object } The output returned by the `Detail` function is a rendered
* stack component with an image tag containing an GIF image from the `gifUrl` prop;
* h3 and h6 variants of typography tag with title name (e.g.,"Arm Raises"), description
* "Exercises keep you strong"; map extra details as array elements of stack components
*   Each component having the 'body part' element
* button tag using borderRadius (50%), background('#fff2db') properties with the
* target(e.g. arm), extra detail icon; and  variant h5 text property(e.g. Biceps);
* The stack children are direction="row" arranged with horizontal space ("margin").
*/
const Detail = ({exerciseDetail}) => {
    const {  gifUrl, name, target, equipment,bodyPart}= exerciseDetail 

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        }
    ]
  return (
    <Stack gap='60px' sx={{ flexDirection:{lg:'row'}, p: '20px', alignItems:'center'}} >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{gap:{lg: '35px', xs: '20px'}}}>
        <Typography variant = "h3" textTransform="capitalize">{name}</Typography>
        <Typography variant="h6"  >Exercises keep you strong; {name} {` `} 
        is one of the best exercises to target your {target}. It will help you improve your mood</Typography>
        {extraDetail?.map((item,index) => (
            <Stack key={item?.name} direction='row' gap = '24px' textTransform='capitalize'  alignItems='center'> 
                <Button  sx={{ background:'#fff2db', borderRadius: '50%', width:'100px' }}>
                    <img   src={item.icon} alt={bodyPart} style={{width: '50px', height:'50px'}} />
                </Button>
                <Typography key={item.icon} variant='h5' >
                    {item.name}
                </Typography>
            </Stack>
        ))}
      </Stack>
    </Stack>
  )
} 

export default Detail
