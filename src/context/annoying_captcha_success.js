

import { createContext, useEffect, useState } from "react";

export const Access = createContext()

const AccessProvider =  ( { children }) =>{
    const [access, setAccess ] = useState(false)


useEffect(()=>{
    if(localStorage.getItem('perm')==='true'){
        setAccess(true)
    }
}, [])
    
    return(
        <Access.Provider value={{access, setAccess}}>
            {children}
        </Access.Provider>
        
    )
}


export default AccessProvider