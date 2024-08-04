import { FaRegSquarePlus } from "react-icons/fa6";
import { IoCodeWorking } from "react-icons/io5";
import { LuFileJson2 } from "react-icons/lu";
import { PiNotepad } from "react-icons/pi";
import { SiJsonwebtokens } from "react-icons/si";

const TOOLS = [
    {name:"JWT Decoded", description:"Decode JWT Tokens", icon:<SiJsonwebtokens />, to:"/jwt-decode"},
    {name: "Counter", description:"", icon:<FaRegSquarePlus />, to: "/counter"},
    {name: "Notepad", description:"", icon: <PiNotepad />, to:'/notepad'    },
    {name: "JSON Formatter", description:"", icon: <LuFileJson2 />, to:'/json-formatter'    },
        {name: "AI Code Editor", description:"", icon: <IoCodeWorking />, to:'/ai-code-editor'    },

];


export default TOOLS;