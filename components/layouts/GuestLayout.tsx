const GuestLayout = (props:any) => {
    return (
        <div>
            <section className="bg-gradient text-center py-6 font-bold text-2xl">
                Ziqx Tools
            </section>
            {props.children}
        </div>
    );
}

export default GuestLayout;