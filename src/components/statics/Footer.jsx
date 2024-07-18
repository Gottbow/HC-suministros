import React from 'react'
import Logohc from '../../assets/images/logohc'
import Instagram from '../../assets/iconsjsx/Instagram'
import Facebook from '../../assets/iconsjsx/Facebook'
import Tiktok from '../../assets/iconsjsx/Tiktok'
import Youtube from '../../assets/iconsjsx/Youtube'
import Linkedin from '../../assets/iconsjsx/Linkedin'
import {Divider} from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full py-2 mx-auto sm:p-6 bg-[#562727]">
        <div className="flex justify-between flex-col md:flex-row items-center md:items-start  md:gap-auto text-left ">
            <div className="flex flex-col w-60 md:w-1/2 md:p-0 py-4 gap-8 order-last md:order-first max-sm:mt-8">
            <Logohc className="w-14 h-14 fill-[#ffffff]"/>
              <div className="text-white flex content-between m-auto md:m-0">
                <Facebook className="cursor-pointer mx-2 hover:text-[#ff0366]"/>
                <Tiktok className="cursor-pointer mx-2 hover:text-[#ff0366]"/>
                <Instagram className="cursor-pointer mx-2 hover:text-[#ff0366]"/>
                <Linkedin className="cursor-pointer mx-2 hover:text-[#ff0366]"/>
                <Youtube className="cursor-pointer mx-2 hover:text-[#ff0366]"/>
              </div>
              <p className="text-[16px] font-medium text-[#ffffff] max-sm:text-center">
                HC Suministros | © {new Date().getFullYear()} <br />
              </p>
            </div>
            <div className="flex flex-col gap-8 max-sm:gap-6 relative sm:mb-4 sm:mt-0 mt-[5%] mb-[11%] w-60 md:w-80">
              <p className="text-[23px] mb-[-2rem] max-sm:mb-[-1.5rem] font-bold footer-main text-[#ffffff] max-sm:text-center" >Enlaces</p>
              <Divider className="h-1 w-1/2 mx-auto bg-[#ff0366] sm:mx-0" />
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium">
                Nosotros
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff]  font-medium">
                Servicios
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff]  font-medium">
                Productos
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff]  font-medium">
                Blog
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff]  font-medium">
                Trabaja con Nosotros
              </p>
            </div>
            <div className="flex flex-col gap-8 max-sm:gap-6 relative w-60 md:w-80">
              <p className="text-[23px] mb-[-2rem] max-sm:mb-[-1.5rem] font-bold footer-main text-[#ffffff] max-sm:text-center">Contacto</p>
              <Divider className="h-1 w-1/2 mx-auto bg-[#ff0366] sm:mx-0" />

              <p className="text-[16px]  text-[#ffffff]  font-medium">
              Av. Prol. Naranjal Cal. 
              3 Mz 1 Sec.
              San Martín de Porres
              </p>
              <p className="text-[16px] text-[#ffffff]  font-medium">
              (01) 664-0600
              </p> 
              <p className="text-[16px] text-[#ffffff]  font-medium">
              967-740-453 / 983-038-282
              </p>
            </div>
        </div>
      </footer>
  )
}

export default Footer