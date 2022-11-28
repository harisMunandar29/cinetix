import React from "react"
import BuahBibir from '../../assets/img/Group 1.png'
import BuahLogo from '../../assets/img/Group 6.png'
import Cinetix from '../../assets/img/Group 5.png'
import FirePost from '../../assets/img/Group 2.png'

export default function Banner() {
  return (
    <>
      <div className='bg-[#316BFF] w-screen min-h-screen flex flex-col items-center justify-around max-w-[1440px] mx-auto'>
        <div className='text-white text-center mt-20'>
          <h1>Hi/Hello!</h1>
          <p className="text-2xl font-bold">WELCOME TO CINETIX WORLD</p>
        </div>
        <div className="image-logo flex w-full items-center justify-around flex-wrap">
          <div className="w-[300px] h-[300px] flex justify-center items-center">
            <img src={BuahBibir} alt="" className="w-[70%] hover:w-[80%] duration-200" />
          </div>

          <div className="w-[300px] h-[300px] flex justify-center items-center">
            <img src={BuahLogo} alt="" className="w-[60%] hover:w-[65%] duration-200" />
          </div>

          <div className="w-[300px] h-[300px] flex justify-center items-center">
            <img src={Cinetix} alt="" className="w-[80%] hover:w-[90%] duration-200" />
          </div>

          <div className="w-[300px] h-[300px] flex justify-center items-center">
            <img src={FirePost} alt="" className="w-[70%] hover:w-[80%] duration-200" />
          </div>

        </div>
        <div className="text-center text-white mb-20">
          <h1 className="font-bold text-xl">PT. BUAH BIBIR INDONESIA</h1>
          <p className="sm:max-w-[450px]">Gedung Graha Krama Yudha Lt.4 Jl. Warung Buncit No. 43
            Duren Tiga Pancoran, Jakarta Selatan
            Email: hello@cinetixworld.com
          </p>
        </div>
      </div>
    </>
  )
}
