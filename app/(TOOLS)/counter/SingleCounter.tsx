"use client";

import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const SingleCounter = () => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        const val = localStorage.getItem("ztoolcounter");
        if (val) {
            setVal(parseInt(val));
        }
    }, [])


    function add(count:number){

        setVal((prev)=>{
            return prev + count
        });
    }

  

    return (
        <div className="fullcenter">
            <h1 className="text-3xl font-bold">Single Counter</h1>
            <input type="number"
            value={val}
            className="text-7xl outline-none w-32 text-center my-10" />
            <div className="flex gap-10">
             <button
             className="counter-btn"
             onClick={() => add(-1)}
             ><FaMinus /></button> 
             
               <button className="counter-btn"
                            onClick={() => add(1)}

               ><FaPlus />             </button>
            </div>
        </div>
    );
}

export default SingleCounter;