import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"

const ExpensesDetail=({ onNext, onPrev })=> {
  const [utilityBill, setUtilityBill] = useState('');
  const [loan, setLoan] = useState('');
  const [rent, setRent] = useState('');
  const [shoppingExpense, setShoppingExpense] = useState('');
  const [leisureExpense, setLeisureExpense] = useState('');
  const [totalExpenses, setTotalExpenses] = useState('');
  const [medicalExpense, setMedicalExpense] = useState('');

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Expense Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
      <Typography sx={{ color:"#212844",fontWeight:"600px",fontSize:"20px",fontFamily: 'Inter, sans-serif' , lineHeight:"24.2px"}}>Fixed Expenses</Typography>
        <Box display={'flex'} flexDirection={'row'} gap="92px"  alignItems={'flex-start'} justifyContent={'center'} >
          <Box  width={"100%"}display={'flex'} flexDirection={'column'} gap="24px" >
            <InputField
            label={"Utility Bill"}
            placeholder={"Utility Bill"}
            value={utilityBill}
            onChange={(utilityBill) => setUtilityBill(utilityBill)}
          />
           <InputField
            label={"Rent"}
            placeholder={"rent"}
            value={rent}
            onChange={(rent) => setRent(rent)}
          /> 
          </Box>  
          <InputField
            label={"Loan"}
            placeholder={"Loan"}
            value={loan}
            onChange={(loan) => setLoan(loan)}
          />
        </Box>
        <Typography sx={{color:"#212844", fontWeight:"600px", fontSize:"20px",fontFamily: 'Inter, sans-serif' }}>Other Expenses</Typography>
        <Box display={'flex'} flexDirection={'row'} gap="92px" alignItems={'flex-start'} justifyContent={'center'} >
        <Box  width={"100%"}display={'flex'} flexDirection={'column'} gap="24px" >
          <InputField
            label={"Shopping Expense"}
            placeholder={"Shopping Expense"}
            value={shoppingExpense}
            onChange={(shoppingExpense) => setShoppingExpense(shoppingExpense)}
          />
          <InputField
          label={"Leisure Expense"}
          placeholder={"Leisure Expense"}
          value={leisureExpense}
          onChange={(leisureExpense) => setLeisureExpense(leisureExpense)}
        />
        <InputField
          label={"Total Expenses"}
          placeholder={"Total Expenses"}
          value={totalExpenses}
          onChange={(totalExpenses) => setTotalExpenses(totalExpenses)}
        />
        </Box>
          <InputField
            label={"Medical Expense"}
            placeholder={"Medical Expense"}
            value={medicalExpense}
            onChange={(medicalExpense) => setMedicalExpense(medicalExpense)}
          />
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} style={{ marginTop: '16px' }}>
          <img src={backChevron}></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron}></img>
        </Button>
      </Box>
    </Box>
  )
}

export default ExpensesDetail