import React, {useEffect, useRef} from 'react';

function FocusInput(){
    
    const inputref = useRef(null);

    useEffect(()=>{
        inputref.current.focus();
    },[])

    return(
        <div>
            <input ref={inputref}></input>
        </div>
    )
}

export default FocusInput;