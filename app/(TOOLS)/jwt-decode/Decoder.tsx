"use client";

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

const Decoder = () => {
    const [decoded, setDecoded] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);


    function decode(token:string){
        try {
            const val = jwtDecode(token);
            setDecoded(val);
            setError(null);
        } catch (error) {
            setError("Invalid Token")
        }
    }
    return (
        <div className="grid lg:grid-cols-2 gap-10">
            <section>
                <textarea className="zinput"
                onChange={(e)=>decode(e.target.value)}
                rows={10}
                placeholder="Paste the token here"
                ></textarea>
                {
                    error && <div className="text-red-600 bg-red-50 p-3 border border-red-600 mt-3">{error}</div>
                }
            </section>

            <section className="border p-5">
                {
                    decoded && <JsonView src={decoded}
                    dark
                    />

                }
            </section>
        </div>
    );
}

export default Decoder;