import GuestLayout from "@/components/layouts/GuestLayout";
import CodeEditor from "./CodeEditor";

const AiCodeEditor = () => {
    return (
        <GuestLayout>
            <CodeEditor/>
        </GuestLayout>
    );
}

export default AiCodeEditor;

export const metadata = {
    title: 'AI Code Editor | Ziqx Tools',
    description: 'Free AI powered code editor',
}