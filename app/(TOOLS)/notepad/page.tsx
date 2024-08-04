import GuestLayout from "@/components/layouts/GuestLayout";
import TextEditor from "./Editor";

const NotePadIndex = () => {
    return (
        <GuestLayout>
            <TextEditor/>
        </GuestLayout>
    );
}

export default NotePadIndex;

export const metadata = {
    title: 'NotePad | Ziqx Tools',
    description: 'Free Online Notepad with Rich Text Editor',
}