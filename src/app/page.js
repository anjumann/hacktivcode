import Hero from "@/component/Hero";
import InputArea from "@/component/InputArea";
import OpenaiResponse from "@/component/OpenaiResponse";


export default function Home() {
  return (
    <main>
      <div className=''>
        <div className='gradient' />
      </div>
      <div className=''>
        <Hero />
        <InputArea/>
        <OpenaiResponse prompt='Hello how are you?' />
      </div>
    </main>
  )
}
