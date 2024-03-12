import React from 'react'
import CalendarCarousel from "../ProfilePage/SheduleCall/CalenderCrousel"
import PageTitle from '../../components/Pagetitle'
import { Box, Typography, Divider, Button } from '@mui/material'

function ScheduleCall({ onNext, onPrev }) {
  return (
    <Box display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"} >

      <PageTitle header={"Date & Time Selection"} title={"Profile page"} />
      <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} padding={"32px"} backgroundColor="#fff" >
        <Typography sx={{ fontFamily: "Inter", fontSize: "20px", color: "#212844", fontWeight: "700" }} variant="h5">Choose the time slot to make a request</Typography>
        <Typography sx={{ fontFamily: "Inter", color: "#9397BB", fontWeight: "700" }} variant="body1">Let’s schedule a quick call to make a request for Free Analysis and Consultation </Typography>
        <Divider />
        <div><CalendarCarousel /></div>
        <Box display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
          <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} >
            <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Cancel</Typography>
          </Button>
          <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext}>
            <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ScheduleCall 