"use client";

import { CodeiumEditor } from "@codeium/react-code-editor";
import { useEffect, useState } from "react";

const CodeEditor = () => {
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const refer = document.getElementsByTagName('svg');
            for(let i=0;i<refer.length;i++){
                refer[i].style.display = 'none';
            }
           
        }
    },[])

    const [lang, setLang] = useState("python");

    const LANGUAGES = [
        {name: "Python",value: "python",},
        {name: "JavaScript",value: "javascript",},
        {name: "C++",value: "cpp",},
        {name: "C#",value: "csharp",},
        {name: "Java",value: "java",},

    ];
    return (
        <div>
            <section className="p-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">AI Code Editor</h2>
                <select className="border px-4 py-2" value={lang} onChange={(e)=>setLang(e.target.value)}>
                    <option disabled>Select Language</option>
                    {
                        LANGUAGES.map((lang,index)=>{
                            return <option key={index} value={lang.value}>{lang.name}</option>
                        })
                    }
                </select>
            </section>
                 <section className="py-6 rounded-xl bg-[#1E1E1E] h-screen mx-5 mb-8">
                 <CodeiumEditor language={lang} theme="vs-dark"
                  className="h-[88vh] "
                  defaultValue="print('Welcome to Ziqx Tools AI Code Editor!')"
                  />
                 </section>

        </div>
    );
}

export default CodeEditor;