import { useParams } from "react-router-dom";
import InfoDisplay from "../UI/InfoDisplay";
import { useEffect, useState } from "react";

const Verifyaccountpage = () => {
    const [description, setDescription] = useState({ 
        title: null, 
        info: null 
    });
    const { token } = useParams();
    useEffect(() => {
        const verifyToken = async () => {
            const result = await fetch(`http://localhost:3000/auth/verify/${token}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const res = await result.json();
            setDescription({ 
                title: res.title,
                info: res.info
            });
        }
        verifyToken();
    }, [token]);
    return (
        <InfoDisplay title = {description.title} info = {description.info}/>
    )
}

export default Verifyaccountpage;