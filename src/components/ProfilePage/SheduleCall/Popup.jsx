import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Dia, Box, Divider } from '@mui/material';
import { addDays, addMonths, format, isSameDay, format as formatDate } from 'date-fns';
import guestIcon from "../../../assets/lucide_users-round.svg"
import dateIcon from "../../../assets/mingcute_time-line.svg"
import detailIcon from "../../../assets/fluent_apps-list-detail-24-regular.svg"
import cancelIcon from "../../../assets/line-md_cancel.svg"
import { jwtDecode } from 'jwt-decode';


function Popup({ open, onClose, selectedDate, selectedTimeSlot, handlePopupClose, onNext }) {
    const token = localStorage.getItem('authTokens');
	if (token) {
		const decode = jwtDecode(token);
		var useremail = decode.email;
	}
    return (
        <Dialog open={open} onClose={onClose} sx={{ padding: "32px" }}>
            <DialogTitle sx={{ display: "flex", alignItems: "center", gap: "16px", flexDirection: "column" }}>
                <Typography align="center" sx={{ fontSize: "24px", fontFamily: "Inter", fontWeight: "600", color: "#212844" }}>
                    Thank you! Your call is confirmed.
                </Typography>
                <Typography sx={{ fontFamily: "Inter", color: "#9397BB", fontWeight: "400" }} variant="body1">Check your inbox for an email containing all details! </Typography>
            </DialogTitle>
            <Box sx={{ border: "1px solid #DEDFEE", borderRadius: "8px", padding: "16px 24px", margin: "16px 32px" }}>
                <Box display={'flex'} flexDirection={'row'} gap="60px">
                    <Box width="100%" maxWidth="120px" display={'flex'} flexDirection={'row'} gap="16px">
                        <div style={{ width: "32px", height: "32px", border: "1px solid #DEDFEE", position: "relative", display: "flex", alignItems: "center" }}>
                            <img src={dateIcon} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}></img>
                        </div>
                        <Typography align="center" sx={{ fontFamily: "Inter", fontWeight: "600", color: "#212844" }}>
                            Time
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: "Inter", color: "#9397BB", fontWeight: "400" }} variant="body1">
                        {selectedDate && format(selectedDate, "EEEE, MMM do")}
                        {selectedTimeSlot && selectedTimeSlot}                    </Typography>
                </Box>
                <Divider sx={{ width: "100%", margin: "16px 0" }} />
                <Box display={'flex'} flexDirection={'row'} gap="60px">
                    <Box width="100%" maxWidth="120px" display={'flex'} flexDirection={'row'} gap="16px">
                        <div style={{ width: "32px", height: "32px", border: "1px solid #DEDFEE", position: "relative", display: "flex", alignItems: "center" }}>
                            <img src={guestIcon} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}></img>
                        </div>
                        <Typography align="center" sx={{ fontFamily: "Inter", fontWeight: "600", color: "#212844" }}>
                            Guest
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: "Inter", color: "#9397BB", fontWeight: "400" }} variant="body1">
                        {useremail}
                    </Typography>
                </Box>
                <Divider sx={{ width: "100%", margin: "16px 0" }} />
                <Box display={'flex'} flexDirection={'row'} gap="60px">
                    <Box width="100%" maxWidth="120px" display={'flex'} flexDirection={'row'} gap="16px">
                        <div style={{ width: "32px", height: "32px", border: "1px solid #DEDFEE", position: "relative", display: "flex", alignItems: "center" }}>
                            <img src={detailIcon} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}></img>
                        </div>
                        <Typography align="center" sx={{ fontFamily: "Inter", fontWeight: "600", color: "#212844" }}>
                            Details
                        </Typography>
                    </Box>
                    <Typography sx={{ width: "100%", fontFamily: "Inter", color: "#9397BB", fontWeight: "400" }} variant="body1">
                        We’ve sent an email with your booking details                    </Typography>
                </Box>
            </Box>
            <DialogActions sx={{ display: "flex", justifyContent: "space-between" , margin:"0px 24px 24px 24px"}}>
                <Button sx={{ backgroundColor: "#F2F1F9", padding: "10px 24px", borderRadius: "8px", gap: "8px", boxShadow: "none" }}  onClick={handlePopupClose}>
                    <img src={cancelIcon} />
                    <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none', color: "#9397BB" }}>                    Cancel Request
                    </Typography>
                </Button>
                <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext}>
                    <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Submit</Typography>
                </Button>
            </DialogActions>
        </Dialog>)
}

export default Popup