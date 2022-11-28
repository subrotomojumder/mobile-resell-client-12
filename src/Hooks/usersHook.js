import { useState } from "react";
import { useEffect } from "react";

// save user and set jwt token
const useSaveUser = (user) => {
    const [results, setResults] = useState({});
    useEffect(() => {
        if (user?.email) {
            fetch(`${process.env.REACT_APP_SERVER_url}/users/${user?.email}`,{
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(data.results)
                localStorage.setItem('accessToken', data.token)
            })
        }
    }, [user])
    return [results];
}
export default useSaveUser;
