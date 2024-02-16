import { useState, useEffect, useRef } from "react"

export default function useLocalStorage(key, value) {
    const [initailValue, setInitialValue] = useState(value)
    const valueRef = useRef(value)

    useEffect(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue === null) {
            localStorage.setItem(key, JSON.stringify(valueRef.current))
        } else {
            setInitialValue(JSON.parse(storedValue))
        }
    }, [key])

    const setValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setInitialValue(newValue)
    }

    return [initailValue, setValue]
}
