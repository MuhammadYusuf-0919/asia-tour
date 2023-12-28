import Image from 'next/image'
import logo from '@/assets/header/logo.png'
const Loading = () => {
  return (
    <div className='w-full h-[100vh] bg-[white] grid place-items-center'>
      <Image src={logo.src} alt='logo' width={250} height={250} className='animate__animated animate__heartBeat animate__infinite infinite' />
    </div>
  )
}

export default Loading