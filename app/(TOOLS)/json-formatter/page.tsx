import GuestLayout from "@/components/layouts/GuestLayout";
import JSONFormatter from "./Formatter";

const JWTDecoder = () => {
    return (
        <GuestLayout>
            <main className="commonwidth py-10 ">
                <JSONFormatter/>
            </main>
        </GuestLayout>
    );
}

export default JWTDecoder;

export const metadata = {
    title: 'JSON Formatter | Ziqx Tools',
    description: 'Free Online JSON Formatter',
}