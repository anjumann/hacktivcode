
import logo from '@/assets/logo.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <header
            className='w-full flex justify-center items-center flex-col'>
            <nav
                className='flex justify-between items-center w-full mb-10 pt-3'>
                <Image
                    src={logo}
                    alt="logo"
                    className='w-28 object-contain' />

                <a href="" target='blank' >
                    <button
                        type='button'
                        className='black_btn'>
                        Linktree
                    </button>
                </a>

            </nav>

            <h1
                className='head_text'>
                Summarize Artciles with <br
                    className='max-md:hidden' />
                <span
                    className='orange_gradient'>
                    OpenAI GPT-4
                </span>
            </h1>
            <h2
                className='desc'>
                Simplify your reading with Summize, open-source article summarizer that transfroms lengthy articles into clear and concise summaries
            </h2>

        </header>
    )
}

export default Hero