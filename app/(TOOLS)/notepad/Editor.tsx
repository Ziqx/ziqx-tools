"use client";

import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
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

  return <ReactQuill theme="snow" 
  style={{height: "80vh"}}
  value={value} onChange={save}
  
  />;
}