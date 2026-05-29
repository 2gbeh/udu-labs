import { APP } from "@/constants/APP";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="text-center py-4 bg-brand-red/5 border-b border-gray-200 text-black text-sm font-medium  px-4 ">
        Currently Synthesizing... <strong>Website Under Maintenance</strong>.
        Find Out What's New Soon
      </section>
      <header className="flex items-center justify-between border_ mx-auto sm:w-7xl h-[100px]  px-4 ">
        <Image
          className=""
          src="/logo.png"
          alt=""
          width={100}
          height={20}
          priority
        />
        <nav className="flex items-center justify-between gap-6">
          {["The Lab", "Our Experiments", "Solutions", "Contact"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="font-semibold text-sm text-black hover:text-brand-blue pressable"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>
      <main className="flex items-center border_ mx-auto sm:w-7xl flex-1  px-4 ">
        <div className="flex-1 flex flex-col _border justify-center z-1 pl-10">
          <h1 className="text-[140px] font-extrabold leading-[120px] tracking-wider font-nunito text-black max-w-[600px]">
            We <span className="text-brand-blue">Cook</span> Different!
          </h1>
          <p className="text-2xl mt-4 text-muted-text">
            We develop <b>bold</b> ideas and turn them into work that lands.
          </p>
          <div className="flex mt-6">
            <a
              className="pressable flex h-12  items-center justify-center gap-2 rounded-full bg-brand-blue px-8 text-background transition-colors hover:bg-brand-blue/90 font-medium"
              href={APP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
        <Image
          src="/flask.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </main>
    </>
  );
}
