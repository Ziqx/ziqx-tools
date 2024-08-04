import Link from "next/link";

const GuestLayout = (props:any) => {
    return (
        <div>
            <section className="bg-gradient flex justify-center py-2 font-bold text-2xl">
                <Link href="/">
                <img src="/images/logo.svg" className="h-14" alt="" />
                </Link>
            </section>
            {props.children}

            <footer className="bg-black py-10 fullcenter text-white">
                <div className="my-2">© {new Date().getFullYear()} Ziqx Tools</div>
                <a href="https://ziqx.cc" className="text-xs opacity-80">⚡ziqx.cc</a>
            </footer>
        </div>
    );
}

export default GuestLayout;