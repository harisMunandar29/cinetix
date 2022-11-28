import React from "react"
import BuahBibir from '../../assets/img/Group 1.png'
import BuahLogo from '../../assets/img/Group 6.png'
import Cinetix from '../../assets/img/Group 5.png'
import FirePost from '../../assets/img/Group 2.png'

export default function Banner() {
  return (
    <>
    <div className='bg-[#316BFF] w-screen h-screen flex flex-col items-center justify-around'>
        <div className='text-white text-center'>
          <h1>Hi/Hello!</h1>
          <p className="text-2xl font-bold">WELCOME TO CINETIX WORLD</p>
        </div>
        <div className="image-logo flex w-full items-center justify-around">
          <img src={BuahBibir} alt="" className="w-[300px]"/>
          <img src={BuahLogo} alt="" className="w-[300px]"/>
          <img src={Cinetix} alt="" className="w-[300px]"/>
          <img src={FirePost} alt="" className="w-[300px]"/>
        </div>
        <div className="text-center text-white">
          <h1 className="font-bold text-xl">PT. BUAH BIBIR INDONESIA</h1>
          <p className="max-w-[450px]">Gedung Graha Krama Yudha Lt.4 Jl. Warung Buncit No. 43 
          Duren Tiga Pancoran, Jakarta Selatan 
          Email: hello@cinetixworld.com
          </p>
        </div>
    </div>
    </>
  )
}
