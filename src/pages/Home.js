import Banner from "@/components/bg/Banner";
import Exclusive from "@/components/exclusive/Exclusive";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import Items from "@/components/items/Items";
import MensCollection from "@/components/menscollection/MensCollection";
import Mobile from "@/components/mobile/Mobile";
import Process from "@/components/process/Process";
import Toys from "@/components/toys/Toys";
import WomensCollection from "@/components/womenscollection/WomensCollection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero
        title="
    In this season, find the best"
        heading="Exclusive collection
    for everyone"
        para="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled"
      />
      <div className="bg-[#F1FBFC]">
      <Items/>
      <Feature/>
      <Banner/>
      <MensCollection/>

      </div>
      <WomensCollection/>
      <div className="bg-[#F1FBFC]">
      <Exclusive/>
      <Toys/>
      </div>
      <Mobile/>
      <Process/>
    </main>
  );
}
