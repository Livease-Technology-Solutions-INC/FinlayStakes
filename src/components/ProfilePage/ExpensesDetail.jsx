// ExpensesDetail.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg";
import backChevron from "../../assets/carbon_back-outline.svg";
import { useSelector, useDispatch } from 'react-redux';
import { updateExpensesDetail } from '../../state-management/reducer/expensesDetailSlice';

const ExpensesDetail = ({ onNext, onPrev }) => {
  const expensesDetail = useSelector((state) => state.expensesDetail);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateExpensesDetail({ [field]: value }));
  };

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"}>
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Expense Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Fixed Expenses</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Utility Bill"}
            placeholder={"Utility Bill"}
            value={expensesDetail.utilityBill}
            onChange={(utilityBill) => handleChange('utilityBill', utilityBill)}
          />
          <InputField
            label={"Rent"}
            placeholder={"Rent"}
            value={expensesDetail.rent}
            onChange={(rent) => handleChange('rent', rent)}
          />
          <InputField
            label={"Loan"}
            placeholder={"Loan"}
            value={expensesDetail.loan}
            onChange={(loan) => handleChange('loan', loan)}
          />
        </Box>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif' }}>Other Expenses</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Shopping Expense"}
            placeholder={"Shopping Expense"}
            value={expensesDetail.shoppingExpense}
            onChange={(shoppingExpense) => handleChange('shoppingExpense', shoppingExpense)}
          />
          <InputField
            label={"Leisure Expense"}
            placeholder={"Leisure Expense"}
            value={expensesDetail.leisureExpense}
            onChange={(leisureExpense) => handleChange('leisureExpense', leisureExpense)}
          />
          <InputField
            label={"Total Expenses"}
            placeholder={"Total Expenses"}
            value={expensesDetail.totalExpenses}
            onChange={(totalExpenses) => handleChange('totalExpenses', totalExpenses)}
          />
          <InputField
            label={"Medical Expense"}
            placeholder={"Medical Expense"}
            value={expensesDetail.medicalExpense}
            onChange={(medicalExpense) => handleChange('medicalExpense', medicalExpense)}
          />
        </Box>
      </Box>
      <Box  position={"absolute"} bottom="-100px" right="135px" display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev}>
          <img src={backChevron}></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron}></img>
        </Button>
      </Box>
    </Box>
  )
}

export default ExpensesDetail;
