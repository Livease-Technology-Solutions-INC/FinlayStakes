import React, { useState, useEffect } from 'react';
import { Grid, Box, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import { addDays,addMonths, format, isSameDay, format as formatDate } from 'date-fns';
import downChevron from "../../../assets/u_angle-down.svg";
import rightChevron from "../../../assets/RightArrow.svg";
import leftChevron from "../../../assets/LeftArrow.svg";

const CalendarCarousel = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [month, setMonth] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedMorningSlot, setSelectedMorningSlot] = useState(null);
    const [selectedAfternoonSlot, setSelectedAfternoonSlot] = useState(null);
    const [selectedEveningSlot, setSelectedEveningSlot] = useState(null);
    const [monthMenuAnchorEl, setMonthMenuAnchorEl] = useState(null);


    useEffect(() => {
        const slots = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
        setAvailableSlots(slots);

    }, [startDate]);

    const morningSlots = ['8:00 AM - 9:00 AM', '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM']
    const afternoonSlots = ['11:00 PM - 12:00 PM', '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM']
    const eveningSlots = ['4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM'];

    const distributeSlots = (totalSlots) => {
        const totalMorningSlots = morningSlots.length;
        const totalAfternoonSlots = afternoonSlots.length;
        const totalEveningSlots = eveningSlots.length;

        const morningCount = Math.min(Math.floor(totalSlots / 3), totalMorningSlots);
        const afternoonCount = Math.min(Math.floor(totalSlots / 3), totalAfternoonSlots);
        const eveningCount = Math.min(Math.floor(totalSlots / 3), totalEveningSlots);

        const remainingSlots = totalSlots - morningCount - afternoonCount - eveningCount;

        const distributedSlots = {
            morning: morningSlots.slice(0, morningCount),
            afternoon: afternoonSlots.slice(0, afternoonCount),
            evening: eveningSlots.slice(0, eveningCount)
        };

        if (remainingSlots > 0) {
            const remainingMorningSlots = Math.min(remainingSlots, totalMorningSlots - morningCount);
            const remainingAfternoonSlots = Math.min(remainingSlots - remainingMorningSlots, totalAfternoonSlots - afternoonCount);
            const remainingEveningSlots = Math.min(remainingSlots - remainingMorningSlots - remainingAfternoonSlots, totalEveningSlots - eveningCount);

            for (let i = 0; i < remainingMorningSlots; i++) {
                distributedSlots.morning.push(morningSlots[morningCount + i]);
            }

            for (let i = 0; i < remainingAfternoonSlots; i++) {
                distributedSlots.afternoon.push(afternoonSlots[afternoonCount + i]);
            }

            for (let i = 0; i < remainingEveningSlots; i++) {
                distributedSlots.evening.push(eveningSlots[eveningCount + i]);
            }
        }

        return distributedSlots;
    };
    
    const handleMonthMenuOpen = (event) => {
        setMonthMenuAnchorEl(event.currentTarget);
    };

    const handleMonthMenuClose = () => {
        setMonthMenuAnchorEl(null);
    };
    const handleMonthSelect = (monthIndex) => {
        const nextMonth = (new Date().getMonth() + monthIndex) % 12;
        const nextYear = startDate.getFullYear() + Math.floor((new Date().getMonth() + monthIndex) / 12);
        const newStartDate = new Date(nextYear, nextMonth, 1);
        setStartDate(newStartDate);
        handleMonthMenuClose();
    };
    const renderMonthMenu = () => {
        const currentMonth = new Date().getMonth();
        return (
            <Menu
                anchorEl={monthMenuAnchorEl}
                open={Boolean(monthMenuAnchorEl)}
                onClose={handleMonthMenuClose}
            >
                {[...Array(5)].map((_, index) => {
                    const nextMonth = (currentMonth + index) % 12;
                    const nextYear = startDate.getFullYear() + Math.floor((currentMonth + index) / 12);
                    return (
                        <MenuItem key={index} onClick={() => handleMonthSelect(index)}>
                            {format(new Date(nextYear, nextMonth, 1), 'MMMM yyyy')}
                        </MenuItem>
                    );
                })}
            </Menu>
        );
    };
    
    const renderSlots = (slots, handleTimeClick, selectedSlot) => {
        return slots.map((slot, index) => (
            <Box
                key={index}
                display={"flex"}
                alignItems={'center'}
                justifyContent={"center"}
                padding='8px 24px'
                border={"solid 1px #DEDFEE"}
                onClick={() => handleTimeClick(index)}
                sx={{
                    cursor: "pointer",
                    borderColor: index === selectedSlot ? "#250C77" : "#DEDFEE",
                    borderRadius: "8px"
                }}
            >
                <Typography
                    variant='body1'
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        fontWeight:index === selectedSlot ?  "600":"500",
                        lineHeight: "24px",
                        fontFamily: 'Inter, sans-serif',
                        color: index === selectedSlot ? "#250C77" : "#212844"
                    }}
                >
                    {slot}
                </Typography>
            </Box>
        ));
    };
    

    let distributedSlots = distributeSlots(availableSlots.reduce((acc, cur) => acc + cur, 0));


    distributedSlots = distributeSlots(availableSlots[selectedDate]);

    const handleNext = () => {
        setStartDate((prevStartDate) => addDays(prevStartDate, 5));
    };

    const handlePrev = () => {
        setStartDate((prevStartDate) => addDays(prevStartDate, -5));
    };
    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedMorningSlot(null);
        setSelectedAfternoonSlot(null);
        setSelectedEveningSlot(null);
    };
   
    const handleMorningSlotClick = (index) => {
        setSelectedMorningSlot(index);
        setSelectedAfternoonSlot(null);
        setSelectedEveningSlot(null);
    };

    const handleAfternoonSlotClick = (index) => {
        setSelectedAfternoonSlot(index);
        setSelectedEveningSlot(null);
        setSelectedMorningSlot(null);};

    const handleEveningSlotClick = (index) => {
        setSelectedEveningSlot(index);
        setSelectedMorningSlot(null);
        setSelectedAfternoonSlot(null);
    };

    const renderDates = () => {
        const calendarDates = [];
        for (let i = 0; i < 5; i++) {
            const nextDate = addDays(startDate, i);
            calendarDates.push(nextDate);
        }

        return calendarDates.map((date, index) => {
            const slot = availableSlots[index];

            return (
                <Grid item key={index} display="flex" height="auto" flexDirection="column" gap="16px" alignItems={'center'} justifyContent={"center"} padding='16px' border={"solid 1px #DEDFEE"} onClick={() => handleDateClick(index)}  sx={{ cursor: "pointer", borderColor: index === selectedDate ? '#250C77' : '#DEDFEE', borderRadius:"8px" }}>
                    <Typography variant='body1' sx={{ fontWeight: "600", fontFamily: 'Inter, sans-serif', color: index === selectedDate ? '#250C77' : '#9397BB', backgroundColor: "transparent" }}>{formatDate(date, 'EEE')}</Typography>
                    <Box elevation={3} sx={{
                        display: "flex",
                        borderRadius: '50%',
                        boxShadow: "none",
                        backgroundColor: isSameDay(date, new Date()) ? "#8784c5" : "transparent",
                        width: '40px',
                        height: '40px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "29.05px", fontFamily: 'Inter, sans-serif', color:isSameDay(date, new Date())? "#fff" :(index === selectedDate ? '#250C77' : "#9397BB") }}>
                            {format(date, 'dd')}
                        </Typography>
                    </Box>
                    <div style={{ width: "100%", display: 'flex', alignItems: 'center', flexDirection: "row", gap: "6px" }}>
                        {slot === 0 && <span style={{ color: 'red', fontSize: "24px" }}>&#8226;</span>}
                        {slot === 1 && <span style={{ color: 'yellow', fontSize: "24px" }}>&#8226;</span>}
                        {slot > 1 && <span style={{ color: 'green', fontSize: '24px' }}>&#8226;</span>}
                        <Typography variant='body1' sx={{ width: "100%", display: "flex", flexDirection: "row", fontWeight: "500", lineHeight: "19.36px", fontFamily: 'Inter, sans-serif', color:index === selectedDate ? '#250C77' : "#212844" }}>
                            {slot} slots </Typography>
                    </div>
                </Grid>
            );
        });
    };


    return (
        <Grid display="flex" gap="32px" flexDirection={"column"} alignItems="flex-start" justifyContent={"center"} padding="0px">
            <Grid width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" justifyContent="space-between" border="solid 1px #9397BB" padding="8px 16px"  onClick={handleMonthMenuOpen} cursor= "pointer">
                <Typography variant="body1" align="center" sx={{ fontFamily: "Inter", fontWeight: "bold", color: "#212844", display: "flex", gap: "8px" }}>
                        {format(startDate, 'MMMM yyyy')}
                        <img src={downChevron} alt="chevron-down" />
                    </Typography>

                </Box>
                <Grid display="flex">
                    <Grid item>
                        <IconButton onClick={handlePrev}>
                            <div style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "solid 1px #9397BB", borderRadius: "50%" }}>
                                <img src={leftChevron} alt="chevron-left" />
                            </div>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleNext}>
                            <div style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "solid 1px #9397BB", borderRadius: "50%" }}>
                                <img src={rightChevron} alt="chevron-right" />
                            </div>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            {renderMonthMenu()}

            <Box display={"flex"} flexWrap={"wrap"} gap="26px" row="16px" alignItems="center">
                {renderDates()}
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap="16px">
            <Typography sx={{ fontFamily: "Inter", fontSize: "20px", color: "#212844", fontWeight: "700" }} variant="h5">Available Time slots</Typography>
            <Box display={'flex'} flexDirection={'column'} gap="24px" alignItems={'flex-start'} justifyContent={'center'}>
                <Box Box display={'flex'} flexDirection={'column'} gap="16px" alignItems={'flex-start'} justifyContent={'center'}>
                    <Typography variant="body1" align="center" sx={{ fontFamily: "Inter", fontWeight: "bold", color: "#212844", display: "flex", gap: "8px" }}>
                        Morning
                    </Typography>
                    <Box display={"flex"} flexWrap={"wrap"} gap="26px" row="16px" alignItems="center">
                    {renderSlots(distributedSlots.morning, handleMorningSlotClick, selectedMorningSlot)}
                    </Box>
                </Box>
                <Box Box display={'flex'} flexDirection={'column'} gap="16px" alignItems={'flex-start'} justifyContent={'center'}>
                    <Typography variant="body1" align="center" sx={{ fontFamily: "Inter", fontWeight: "bold", color: "#212844", display: "flex", gap: "8px" }}>
                        Afternoon
                    </Typography>
                    <Box display={"flex"} flexWrap={"wrap"} gap="26px" row="16px" alignItems="center">
                    {renderSlots(distributedSlots.afternoon, handleAfternoonSlotClick, selectedAfternoonSlot)}
                    </Box>
                </Box>
                <Box Box display={'flex'} flexDirection={'column'} gap="16px" alignItems={'flex-start'} justifyContent={'center'}>
                    <Typography variant="body1" align="center" sx={{ fontFamily: "Inter", fontWeight: "bold", color: "#212844", display: "flex", gap: "8px" }}>
                        Evening
                    </Typography>
                    <Box display={"flex"} flexWrap={"wrap"} gap="26px" alignItems="center">
                    {renderSlots(distributedSlots.evening, handleEveningSlotClick, selectedEveningSlot)}
                    </Box>
                </Box>
            </Box>
            </Box>
        </Grid>
    );
};

export default CalendarCarousel;
