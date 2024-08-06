import GuestLayout from "@/components/layouts/GuestLayout";
import TOOLS from "./Tools";
import Link from "next/link";

const IndexPage = () => {
  
  return (
    <GuestLayout>
      <main className="py-10 commonwidth">
        <section className="fullcenter mb-6">
          <h1 className="text-5xl font-bold">Welcome to Your Ultimate Toolbox!</h1>
          <p className="text-center text-sm text-gray-400 lg:w-6/12 my-2">
          Discover a variety of essential tools designed to make your life easier. From decoding JWT tokens to managing your tasks and jotting down quick notes, our platform offers a growing collection of utilities to meet your everyday needs.
          </p>
          
        </section>
        <section className="bg-gray-100  border p-5 grid lg:grid-cols-4 gap-10">
          {
            TOOLS.map((tool, index) => {
              return (
                <Link 
                href={tool.to}
                className="fullcenter ring-2 ring-black p-6 bg-white hover:bg-gray-200 cursor-pointer  duration-300" 
                key={index}>
                  <div className="text-3xl">{tool.icon}</div>
                  <div>
                    <h2 className="font-bold my-2">{tool.name}</h2>
                  </div>
                </Link>
              )
            })
          }

        </section>
      </main>
    </GuestLayout>
  );
}

export default IndexPage;