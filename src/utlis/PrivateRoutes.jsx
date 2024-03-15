import {Outlet, Navigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext";
import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const PrivateRoutes = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    const history = useNavigate(); 

    useEffect(() => {
        if (!user) {
            history('/login');
        }
    }, [user, history]);

    return user ? <Outlet /> : null;
}

export default PrivateRoutes