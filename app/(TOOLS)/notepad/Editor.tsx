"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function TextEditor() {
  const [value, setValue] = useState('');

  useEffect(()=>{
    const content = localStorage.getItem('ztoolnotepad');
    if(content){
      setValue(content);
    }
  },[]);

  function save(content:string){
    setValue(content);
    localStorage.setItem('ztoolnotepad',content);
  }

  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  return <ReactQuill theme="snow" 
  style={{height: "80vh"}}
  value={value} onChange={save}
  
  />;
}