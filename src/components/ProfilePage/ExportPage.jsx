import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import PhoneInput from 'react-phone-input-2';
import { Radio, RadioGroup, FormGroup, FormControl, FormControlLabel, FormLabel, InputLabel, Select, MenuItem } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import pptxgen from "pptxgenjs";
import { useSelector, useDispatch } from 'react-redux';
import { updateAssetsDetail } from '../../state-management/reducer/assetsDetailSlice';
import { updateChildrenEducation, updateLifeInsurance, updateRetirement } from '../../state-management/reducer/existingPoliciesSlice';
import { updateExistingProvisions } from '../../state-management/reducer/existingProvisionsSlice';
import { updateExpensesDetail } from '../../state-management/reducer/expensesDetailSlice';
import { updateFinancialPlanningShortfall } from '../../state-management/reducer/financialPlanningSlice';
import { updateGoals } from '../../state-management/reducer/goalsSlice';
import { updateIncomeDetail } from '../../state-management/reducer/incomeDetailSlice';
import { updateLiabilityDetail } from '../../state-management/reducer/liabilityDetailSlice';
import { updatePersonalDetail } from '../../state-management/reducer/personalDetailSlice';


function ExportPage() {
  const dispatch = useDispatch();
  const personalDetail = useSelector((state) => state.personalDetail);
  const existingPolicies = useSelector((state) => state.existingPolicies);
  const assetsDetail = useSelector((state) => state.assetsDetail);
  const existingProvisions = useSelector((state) => state.existingProvisions);
  const expensesDetail = useSelector((state) => state.expensesDetail);
  const goals = useSelector((state) => state.goals);
  const incomeDetail = useSelector((state) => state.incomeDetail);
  const liabilityDetail = useSelector((state) => state.liabilityDetail);

  const handleDownloadAsPdf = () => {
    const input = document.getElementById("downloadContent");

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("FinancialDetails.pdf");
      })
      .catch((error) => {
        console.error("Error capturing content:", error);
      });
  };
  
 const handleDownloadAsPpt=() => {
  const pptx = new pptxgen();
    
  const personalDetailSlide = pptx.addSlide();
  personalDetailSlide.addText("Personal Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });

  const personalDetailText = JSON.stringify(personalDetail, null, 2);
  personalDetailSlide.addText(personalDetailText, { x: 1, y: 0, w: 9, h: 9 }); 

  const assetsDetailSlide = pptx.addSlide();
  assetsDetailSlide.addText("Assets Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const assetsDetailText = JSON.stringify(assetsDetail, null, 2);
  assetsDetailSlide.addText(assetsDetailText, { x: 1, y: 0, w: 9, h: 9 }); 

  const existingProvisionsSlide = pptx.addSlide();
  existingProvisionsSlide.addText("Existing provisions Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const existingProvisionsText = JSON.stringify(existingProvisions, null, 2);
  existingProvisionsSlide.addText(existingProvisionsText, { x: 1, y: 0, w: 9, h: 9 }); 

  const expensesDetailSlide = pptx.addSlide();
  expensesDetailSlide.addText("Expenses Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const expensesDetailText = JSON.stringify(expensesDetail, null, 2);
  expensesDetailSlide.addText(expensesDetailText, { x: 1, y: 0, w: 9, h: 9 }); 

  const goalsSlide = pptx.addSlide();
  goalsSlide.addText("Goals Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const goalsText = JSON.stringify(goals, null, 2);
  goalsSlide.addText(goalsText, { x: 1, y: 0, w: 9, h: 9 }); 

  const incomeDetailSlide = pptx.addSlide();
  incomeDetailSlide.addText("Income Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const incomeDetailText = JSON.stringify(incomeDetail, null, 2);
  incomeDetailSlide.addText(incomeDetailText, { x: 1, y: 0, w: 9, h: 9 }); 

  const liabilityDetailSlide = pptx.addSlide();
  liabilityDetailSlide.addText("Liability Details", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const liabilityDetailText = JSON.stringify(liabilityDetail, null, 2);
  liabilityDetailSlide.addText(liabilityDetailText, { x: 1, y: 0, w: 9, h: 9 }); 

  const existingPoliciesSlide = pptx.addSlide();
  existingPoliciesSlide.addText("Existing Policies", { x: 1, y: 1, fontSize: 20, bold: true, color: "#212844" });
  const existingPoliciesText = JSON.stringify(existingPolicies, null, 2);
  existingPoliciesSlide.addText(existingPoliciesText, { x: 1, y: 0, w: 9, h: 9 }); 
  pptx.writeFile('FinancialDetailsPresentation');
 }
  const handleChange = (slice, field, value) => {
    switch (slice) {
      case 'personalDetail':
        dispatch(updatePersonalDetail({ [field]: value }));
        break;
      case 'incomeDetail':
        dispatch(updateIncomeDetail({ [field]: value }));
        break;
      case 'expensesDetail':
        dispatch(updateExpensesDetail({ [field]: value }));
        break;
      case 'assetsDetail':
        dispatch(updateAssetsDetail({ [field]: value }));
        break;
      case 'liabilityDetail':
        dispatch(updateLiabilityDetail({ [field]: value }));
        break;
      case 'goals':
        dispatch(updateGoals({ [field]: value }));
        break;
      case 'existingProvisions':
        dispatch(updateExistingProvisions({ [field]: value }));
        break;
      case 'financialPlanningShortfall':
        dispatch(updateFinancialPlanningShortfall({ [field]: value }));
        break;
      case 'existingPolicies':
        const [policyType, policyField] = field.split('.');
        switch (policyType) {
          case 'childrenEducation':
            dispatch(updateChildrenEducation({ [policyField]: value }));
            break;
          case 'lifeInsurance':
            dispatch(updateLifeInsurance({ [policyField]: value }));
            break;
          case 'retirement':
            dispatch(updateRetirement({ [policyField]: value }));
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };


  return (
    <Box  width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Box id="downloadContent" width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      {/* personal details */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Personal Details</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Name"}
            placeholder={"Name"}
            value={personalDetail.name}
            onChange={(name) => handleChange('personalDetail', 'name', name)}
          />
          <InputField
            margin="dense"
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label={"Date of Birth"}
            placeholder={"Date of Birth"}
            value={personalDetail.DOB}
            onChange={(DOB) => handleChange('personalDetail', 'DOB', DOB)}
          />

          <InputField
            label={"Age"}
            placeholder={"Age"}
            value={personalDetail.age}
            onChange={(age) => handleChange('personalDetail', 'age', age)}
          />
          <InputField
            dropdown={true}
            options={[
              { value: 'single', label: 'Single' },
              { value: 'married', label: 'Married' },
              { value: 'divorced', label: 'Divorced' },
              { value: 'widowed', label: 'Widowed' },
            ]}
            label={"Marital Status"}
            placeholder={"Marital Status"}
            value={personalDetail.maritalStatus}
            onChange={(maritalStatus) => handleChange('personalDetail', 'maritalStatus', maritalStatus)}
          />
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} >
            <Box maxWidth="435px" width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >
              <Typography sx={{ color: "#212844", fontFamily: "Inter", fontWeight: "600", lineHeight: "19.36px", fontSize: "16px" }}>
                Phone Number
              </Typography>
              <PhoneInput
                country="us"
                label="Contact Number"
                placeholder='Contact Number'
                value={personalDetail.phoneNumber}
                onChange={(phone) => handleChange('personalDetail', 'phoneNumber', phone)}
                inputClass="phone-input"
                dropdownStyle={{ width: '200px' }}
                buttonStyle={{ backgroundColor: 'transparent', border: 'none', marginRight: "200px" }}
                inputProps={{
                  style: {
                    width: '100%',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    color: '#212844',
                    fontSize: '16px',
                    padding: "20px 30px",
                    paddingLeft: "48px",
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: "19.36px",
                  },
                  sx: {
                    '& input::placeholder': {
                      color: '#9397BB',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#DEDFEE',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#B2B5D0',
                    },
                    '&:focus .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#6560F0',
                    },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#6560F0',
                    },
                  },
                }}
              />
            </Box>
            <InputField
              label={"Email ID"}
              placeholder={"Email ID"}
              value={personalDetail.email}
              onChange={(email) => handleChange('personalDetail', 'email', email)}
            />
            <InputField
              label={"Country of Residence"}
              placeholder={"Country of Residence"}
              value={personalDetail.residentCountry}
              onChange={(residentCountry) => handleChange('personalDetail', "residentCountry", residentCountry)}
            />
            <InputField
              label={"Nationality & Country of Birth"}
              placeholder={"Nationality & Country of Birth"}
              value={personalDetail.nationality}
              onChange={(nationality) => handleChange('personalDetail', 'nationality', nationality)}
            />
            <InputField
              label={"Physical Residential Address"}
              placeholder={"Physical Residential Address"}
              value={personalDetail.residentialAddress}
              onChange={(residentialAddress) => handleChange('personalDetail', "residentialAddress", residentialAddress)}
            />
            <Box maxWidth="435px" width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >
              <FormControl component="fieldset" style={{ width: "100%", display: 'flex' }}>
                <FormLabel component="legend">
                  <Typography sx={{ color: "#212844", fontFamily: "Inter", fontWeight: "600", lineHeight: "19.36px", fontSize: "16px" }}>
                    Smoker
                  </Typography>
                </FormLabel>
                <RadioGroup value={personalDetail.smoker} onChange={(event) => handleChange('personalDetail', "smoker", event.target.value)}>
                  <FormGroup row>
                    <FormControlLabel value="yes" sx={{ color: "#9397BB" }} control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1.25rem', color: "#250C77" } }} />} label="Yes" />
                    <FormControlLabel value="no" sx={{ color: "#9397BB" }} control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1.25rem', color: "#250C77" } }} />} label="No" />
                  </FormGroup>
                </RadioGroup>
              </FormControl>
            </Box>
            <InputField
              label={"Medical History"}
              placeholder={"Type here"}
              multiline={true}
              rows={"4.5"}
              value={personalDetail.medicalHistory}
              onChange={(medicalHistory) => handleChange('personalDetail', "medicalHistory", medicalHistory)}
            />
          </Box>
        </Box>
        {/* income detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Income Details</Typography>
        <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Saving Details</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
            <InputField
              label={"Interest"}
              placeholder={"Interest"}
              value={incomeDetail.Interest}
              onChange={(Interest) => handleChange("incomeDetail", "Interest", Interest)}
            />
            <InputField
              label={"Income from Property"}
              placeholder={"Income from Property"}
              value={incomeDetail.propertyIncome}
              onChange={(propertyIncome) => handleChange("incomeDetail", "propertyIncome", propertyIncome)}
            />
            <InputField
              label={"Bank Returns"}
              placeholder={"Bank Returns"}
              value={incomeDetail.bankReturns}
              onChange={(bankReturns) => handleChange("incomeDetail", "bankReturns", bankReturns)}
            />
          </Box>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif' }}>Non Saving Details</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
            <InputField
              label={"Salary"}
              placeholder={"Salary"}
              value={incomeDetail.salary}
              onChange={(salary) => handleChange("incomeDetail", "salary", salary)}
            />
            <InputField
              label={"Total Income"}
              placeholder={"Total Income"}
              value={incomeDetail.totalIncome}
              onChange={(totalIncome) => handleChange("incomeDetail", "totalIncome", totalIncome)}
            />
            <InputField
              label={"Bonus"}
              placeholder={"Bonus"}
              value={incomeDetail.bonus}
              onChange={(bonus) => handleChange("incomeDetail", "bonus", bonus)}
            />
          </Box>
        </Box>
        {/* expenses detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Expense Details</Typography>
        <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Fixed Expenses</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Utility Bill"}
              placeholder={"Utility Bill"}
              value={expensesDetail.utilityBill}
              onChange={(utilityBill) => handleChange("expensesDetail", 'utilityBill', utilityBill)}
            />
            <InputField
              label={"Rent"}
              placeholder={"Rent"}
              value={expensesDetail.rent}
              onChange={(rent) => handleChange("expensesDetail", 'rent', rent)}
            />
            <InputField
              label={"Loan"}
              placeholder={"Loan"}
              value={expensesDetail.loan}
              onChange={(loan) => handleChange("expensesDetail", 'loan', loan)}
            />
          </Box>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif' }}>Other Expenses</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Shopping Expense"}
              placeholder={"Shopping Expense"}
              value={expensesDetail.shoppingExpense}
              onChange={(shoppingExpense) => handleChange("expensesDetail", 'shoppingExpense', shoppingExpense)}
            />
            <InputField
              label={"Leisure Expense"}
              placeholder={"Leisure Expense"}
              value={expensesDetail.leisureExpense}
              onChange={(leisureExpense) => handleChange("expensesDetail", 'leisureExpense', leisureExpense)}
            />
            <InputField
              label={"Total Expenses"}
              placeholder={"Total Expenses"}
              value={expensesDetail.totalExpenses}
              onChange={(totalExpenses) => handleChange("expensesDetail", "expensesDetail", 'totalExpenses', totalExpenses)}
            />
            <InputField
              label={"Medical Expense"}
              placeholder={"Medical Expense"}
              value={expensesDetail.medicalExpense}
              onChange={(medicalExpense) => handleChange("expensesDetail", 'medicalExpense', medicalExpense)}
            />
          </Box>
        </Box>
        {/* asset detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Asset Details</Typography>
        <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Cash in Hand & Bank"}
              placeholder={"Cash in Hand & Bank"}
              value={assetsDetail.cash}
              onChange={(cash) => handleChange("assetsDetail", 'cash', cash)}
            />
            <InputField
              label={"Property Value"}
              placeholder={"Property Value"}
              value={assetsDetail.propertyValue}
              onChange={(propertyValue) => handleChange("assetsDetail", 'propertyValue', propertyValue)}
            />
            <InputField
              label={"Shares / Equities"}
              placeholder={"Shares / Equities"}
              value={assetsDetail.shares}
              onChange={(shares) => handleChange("assetsDetail", 'shares', shares)}
            />
            <InputField
              label={"Business Assets"}
              placeholder={"Business Assets"}
              value={assetsDetail.businessAssets}
              onChange={(businessAssets) => handleChange("assetsDetail", 'businessAssets', businessAssets)}
            />
            <InputField
              label={"Others"}
              placeholder={"Others"}
              value={assetsDetail.others}
              onChange={(others) => handleChange("assetsDetail", 'others', others)}
            />
            <InputField
              label={"Total Assets"}
              placeholder={"Total Assets"}
              value={assetsDetail.totalAssets}
              onChange={(totalAssets) => handleChange("assetsDetail", 'totalAssets', totalAssets)}
            />
          </Box>
        </Box>
        {/* liabilty detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Liability Details</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Bank Loans"}
            placeholder={"Bank Loans"}
            value={liabilityDetail.bankLoans}
            onChange={(bankLoans) => handleChange("liabilityDetail", 'bankLoans', bankLoans)}
          />
          <InputField
            label={"Credit Card Outstanding"}
            placeholder={"Credit Card Outstanding"}
            value={liabilityDetail.creditCard}
            onChange={(creditCard) => handleChange("liabilityDetail", 'creditCard', creditCard)}
          />
          <InputField
            label={"Mortgages"}
            placeholder={"Mortgages"}
            value={liabilityDetail.mortgages}
            onChange={(mortgages) => handleChange("liabilityDetail", 'mortgages', mortgages)}
          />
          <InputField
            label={"Auto Loans"}
            placeholder={"Auto Loans"}
            value={liabilityDetail.autoLoans}
            onChange={(autoLoans) => handleChange("liabilityDetail", 'autoLoans', autoLoans)}
          />
          <InputField
            label={"Hand Loans"}
            placeholder={"Hand Loans"}
            value={liabilityDetail.handLoans}
            onChange={(handLoans) => handleChange("liabilityDetail", 'handLoans', handLoans)}
          />
          <InputField
            label={"Total Liabilities"}
            placeholder={"Total Liabilities"}
            value={liabilityDetail.totalLiabilities}
            onChange={(totalLiabilities) => handleChange("liabilityDetail", 'totalLiabilities', totalLiabilities)}
          />
        </Box>
        {/* goal detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Goals</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Children's Education"}
            placeholder={"Children's Education"}
            value={goals.childrenEducation}
            onChange={(childrenEducation) => handleChange("goals", 'childrenEducation', childrenEducation)}
          />
          <InputField
            label={"Capital Required for University"}
            placeholder={"Capital Required for University"}
            value={goals.universityCapital}
            onChange={(universityCapital) => handleChange("goals", 'universityCapital', universityCapital)}
          />
          <InputField
            label={"Years Left for University"}
            placeholder={"Years Left for University"}
            value={goals.universityYearsLeft}
            onChange={(universityYearsLeft) => handleChange("goals", 'universityYearsLeft', universityYearsLeft)}
          />
          <InputField
            label={"Where would you like to Retire?"}
            placeholder={"Where would you like to Retire?"}
            value={goals.retire}
            onChange={(retire) => handleChange("goals", 'retire', retire)}
          />
          <InputField
            label={"Income Required after Retirement?"}
            placeholder={"Income Required after Retirement?"}
            value={goals.retirementIncome}
            onChange={(retirementIncome) => handleChange("goals", 'retirementIncome', retirementIncome)}
          />
          <InputField
            label={"Annual Income for Family Incase of Death"}
            placeholder={"Annual Income for Family Incase of Death"}
            value={goals.incomeIncaseOfDeath}
            onChange={(incomeIncaseOfDeath) => handleChange("goals", 'incomeIncaseOfDeath', incomeIncaseOfDeath)}
          />
          <InputField
            label={"Annual Income for Family Incase of Critical Illness"}
            placeholder={"Annual Income for Family Incase of Critical Illness"}
            value={goals.incomeIncaseOfCriticalIllness}
            onChange={(incomeIncaseOfCriticalIllness) => handleChange("goals", 'incomeIncaseOfCriticalIllness', incomeIncaseOfCriticalIllness)}
          />
          <InputField
            label={"Annual Income for Family Incase of Disability"}
            placeholder={"Annual Income for Family Incase of Disability"}
            value={goals.incomeIncaseOfDisability}
            onChange={(incomeIncaseOfDisability) => handleChange("goals", 'incomeIncaseOfDisability', incomeIncaseOfDisability)}
          />
        </Box>
        {/* existing provision details */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Existing Provisions</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Children’s Education"}
            placeholder={"Children’s Education"}
            value={existingProvisions.childrenEducation}
            onChange={(childrenEducation) => handleChange("existingProvisions", 'childrenEducation', childrenEducation)}
          />
          <InputField
            label={"Life Insurance"}
            placeholder={"Life Insurance"}
            value={existingProvisions.lifeInsurance}
            onChange={(lifeInsurance) => handleChange("existingProvisions", 'lifeInsurance', lifeInsurance)}
          />
          <InputField
            label={"Disability"}
            placeholder={"Disability"}
            value={existingProvisions.disability}
            onChange={(disability) => handleChange("existingProvisions", 'disability', disability)}
          />
          <InputField
            label={"Retirement"}
            placeholder={"Retirement"}
            value={existingProvisions.retirement}
            onChange={(retirement) => handleChange("existingProvisions", 'retirement', retirement)}
          />
          <InputField
            label={"Critical Illness"}
            placeholder={"Critical Illness"}
            value={existingProvisions.criticalIllness}
            onChange={(criticalIllness) => handleChange("existingProvisions", 'criticalIllness', criticalIllness)}
          />
        </Box>
        {/* existing policy detail */}
        <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Existing Policies</Typography>
        <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Children’s Education</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={existingPolicies.childrenEducation.policyNo}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.policyNo', value)}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={existingPolicies.childrenEducation.annualPremium}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.annualPremium', value)}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={existingPolicies.childrenEducation.dateofMaturity}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.dateofMaturity', value)}
            />
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={existingPolicies.childrenEducation.commencementDate}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.commencementDate', value)}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={existingPolicies.childrenEducation.term}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.term', value)}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={existingPolicies.childrenEducation.benefits}
              onChange={(value) => handleChange('existingPolicies', 'childrenEducation.benefits', value)}
            />
          </Box>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Life Insurance</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={existingPolicies.lifeInsurance.policyNo}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.policyNo', value)}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={existingPolicies.lifeInsurance.annualPremium}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.annualPremium', value)}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={existingPolicies.lifeInsurance.dateofMaturity}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.dateofMaturity', value)}
            />
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={existingPolicies.lifeInsurance.commencementDate}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.commencementDate', value)}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={existingPolicies.lifeInsurance.term}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.term', value)}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={existingPolicies.lifeInsurance.benefits}
              onChange={(value) => handleChange('existingPolicies', 'lifeInsurance.benefits', value)}
            />
          </Box>
          <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Retirement</Typography>
          <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
            <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={existingPolicies.retirement.policyNo}
              onChange={(value) => handleChange('existingPolicies', 'retirement.policyNo', value)}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={existingPolicies.retirement.annualPremium}
              onChange={(value) => handleChange('existingPolicies', 'retirement.annualPremium', value)}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={existingPolicies.retirement.dateofMaturity}
              onChange={(value) => handleChange('existingPolicies', 'retirement.dateofMaturity', value)}
            />
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={existingPolicies.retirement.commencementDate}
              onChange={(value) => handleChange('existingPolicies', 'retirement.commencementDate', value)}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={existingPolicies.retirement.term}
              onChange={(value) => handleChange('existingPolicies', 'retirement.term', value)}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={existingPolicies.retirement.benefits}
              onChange={(value) => handleChange('existingPolicies', 'retirement.benefits', value)}
            />
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-start'}>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={handleDownloadAsPdf} >
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Download as pdf</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={handleDownloadAsPpt}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Download as ppt</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default ExportPage