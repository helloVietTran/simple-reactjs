import React, { useEffect, useState } from 'react'

const useDelay = (value, time) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() =>{
        const handleDelay = setTimeout(()=> setDebouncedValue(value), time);
        return () => clearTimeout(handleDelay)
    }
    , [value])
    return debouncedValue;
}

export default useDelay