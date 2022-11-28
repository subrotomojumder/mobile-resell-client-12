import { useEffect } from "react";
import { useState } from "react"

const useUserRole = email => {
    const [userRole, setUserRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
            fetch(`http://localhost:5000/users/role/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserRole(data?.role)
                    setIsLoading(false)
                })
    }, [email])
    return [userRole, isLoading];
}

export default useUserRole;