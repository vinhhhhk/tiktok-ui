import { useState ,useEffect } from "react";

function useDebouce(value , delay) {
    const [debouncedValue,setDebouceValue] =useState(value)

    useEffect(() =>{
      const handler=  setTimeout(() => 
            setDebouceValue(value),delay
        )
        return () => clearTimeout(handler)
    },[value])

    return debouncedValue;
}

export default useDebouce