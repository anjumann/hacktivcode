
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

         
        </header>
    )
}

export default Hero