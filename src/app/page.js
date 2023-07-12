import Chatty from "@/components/Chatty";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className=" relative bg-gray-200/10">

      <div className="main">
        <div className="gradient-1 -z-10 " />
        <div>
          <Hero />
        </div>
        <div className="w-full" >
          <Chatty/>
        </div>
      </div>
      </div>
    </>
  )
}
