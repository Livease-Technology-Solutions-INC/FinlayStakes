import icon1 from "../assets/Icon.svg";
import icon2 from "../assets/Mask group.svg";
import icon3 from "../assets/Mask group3.svg";
import icon4 from "../assets/Mask group4.svg";
import icon5 from "../assets/ant-design_project-filled.svg";
import icon6 from "../assets/iconamoon_profile-fill.svg";

export const SidebarData =[
    { label: 'Profile Page', icon: <img src={icon6} alt="Profile" />, url:"/" },
    { label: 'Investment Amount', icon: <img src={icon2} alt="Investment" />, url:"/investment" },
    { label: 'Business categories', icon: <img src={icon1} alt="Buissness" /> , url:"/buissness"},
    { label: 'Purpose of Investments', icon: <img src={icon3} alt="Investment" />, url:"/investment"},
    { label: 'Sources of Funds', icon: <img src={icon4} alt="Fund" />, url:"/Fund" },
    { label: 'Available Projects', icon: <img src={icon5} alt="Project" />, url:"/project"},
  ];