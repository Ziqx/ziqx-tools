import GuestLayout from "@/components/layouts/GuestLayout";
import SingleCounter from "./SingleCounter";
import './style.css';


const CounterIndex = () => {
    return (
        <GuestLayout>
            <main className="commonwidth py-10">
               <section className="fullcenter">
               <SingleCounter/>
             
               </section>
            </main>
        </GuestLayout>
    );
}

export default CounterIndex;

export const metadata = {
    title: 'Online Counter | Ziqx Tools',
    description: 'Free Online Counter',
}