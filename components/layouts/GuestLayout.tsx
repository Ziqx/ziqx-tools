import Link from "next/link";

const GuestLayout = (props:any) => {
    return (
        <div>
            <section className="bg-gradient text-center py-6 font-bold text-2xl">
                <Link href="/">Ziqx Tools</Link>
            </section>
            {props.children}
        </div>
    );
}

export default GuestLayout;