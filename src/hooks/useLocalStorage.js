import { useState, useEffect } from "react"

export default function useLocalStorage (key, value){
    const [initailValue, setInitialValue] = useState(value)

    useEffect(()=>{
        if (localStorage.getItem(key) === null){
            localStorage.setItem(key, value)
        } else {
            setInitialValue(localStorage.getItem(key))
        }
    },[key, value])
    

    function setValue(newValue){
        localStorage.setItem(key, newValue)
        setInitialValue(newValue)        
    }

    return [initailValue, setValue]
}