import GuestLayout from "@/components/layouts/GuestLayout";
import Decoder from "./Decoder";

const JWTDecoder = () => {
    return (
        <GuestLayout>
            <main className="commonwidth py-10 ">
                <Decoder/>
            </main>
        </GuestLayout>
    );
}

export default JWTDecoder;

export const metadata = {
    title: 'JWT Decoded | Ziqx Tools',
    description: 'Free Online JWT Decoder',
}