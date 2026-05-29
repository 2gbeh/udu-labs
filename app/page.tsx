import Image from "next/image";
import { Ribbon } from "@/components/organisms/ribbon";
import { Header } from "@/components/organisms/header";
import { Drawer } from "@/components/organisms/drawer";
import { APP } from "@/constants/APP";

export default function HomePage() {
  return (
    <>
      <Ribbon />
      <Header />
      <Drawer />
      <main className="flex-cx relative container flex-1 px-4">
        <div className="flex-col-xc z-2 flex-1 pr-4 pl-4 md:pr-0 md:pl-10">
          <h1 className="font-nunito max-w-[600px] text-[60px] leading-[60px] font-extrabold text-black md:text-[140px] md:leading-[120px] md:tracking-wider">
            We <span className="text-brand-blue">Cook</span> Different!
          </h1>
          <p className="text-muted-text mt-4 text-xl sm:text-2xl">
            We develop <b>bold</b> ideas and turn them into work that lands.
          </p>
          <div className="mt-6 flex">
            <a
              className="pressable flex-cc bg-brand-blue text-background hover:bg-brand-blue/90 h-12 gap-2 rounded-full px-8 font-medium transition-colors"
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
          className="object-contain object-right z-1"
        />
      </main>
    </>
  );
}
