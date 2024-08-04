"use client";

import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

const JSONFormatter = () => {
    const [json, setJson] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);


    function format(data:string){
        try {
            const jsonParse = JSON.parse(data);
            setJson(jsonParse);
            setError(null);
        } catch (error) {
            setError("Invalid JSON")
        }
    }
    return (
        <div className="grid lg:grid-cols-2 gap-10">
            <section>
                <textarea className="zinput"
                onChange={(e)=>format(e.target.value)}
                rows={10}
                placeholder="Paste the token here"
                ></textarea>
                {
                    error && <div className="text-red-600 bg-red-50 p-3 border border-red-600 mt-3">{error}</div>
                }
            </section>

            <section className="border p-5">
                {
                    json && <JsonView src={json}
                    dark={true}
                    theme="atom"
                    editable={true}
                    />

                }
            </section>
        </div>
    );
}

export default JSONFormatter;