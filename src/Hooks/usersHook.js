import { useEffect } from "react";

export const useSaveUser = user => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_key}`;
    useEffect(() => {
        if (user) {
            fetch(url,)
        }
    }, [])

}
// export const setAuthToken = user => {
//     const currentUser = {
//         email: user.email,
//     }
//     // save user in db and get token
//     fetch(`${process.env.REACT_APP_URL}/user/${currentUser?.email}`, {
//         method: 'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body: JSON.stringify(currentUser)
//     })
//     .then(res => res.json())
//     .then(data => {
//         localStorage.setItem('aircnc-token', data.token);
//     })
// }