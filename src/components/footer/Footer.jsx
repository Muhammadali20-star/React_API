import React from 'react'
import photo from '../../assets/SVG (8).svg'
import photo2 from '../../assets/Link → SVG (4).svg'
import photo3 from '../../assets/Link → SVG (5).svg'
import photo4 from '../../assets/Link → SVG (6).svg'
import photo5 from '../../assets/surface1.svg'


const Footer = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mb-8'>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>Biz haqimizda</h3>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Topshirish punktlari</p>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Vakansiyalar</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>Foydalanuvchilarga</h3>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Biz bilan bogʻlanish</p>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Savol-Javob</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>Tadbirkorlarga</h3>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Uzumda soting</p>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>Sotuvchi kabinetiga kirish</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>Ilovani yuklab olish</h3>
            <div className='flex gap-4'>
                <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>AppStore</h3>
                <img src={photo} alt="" />
                <h3 className='text-[14px] leading-[19px] text-[#1F2026]'>Google Play</h3>
            </div>
            <h3 className='mt-15'>Uzum ijtimoiy tarmoqlarda</h3>
            <div className='flex gap-4'>
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
                <img src={photo5} alt="" />
            </div>
        </div>
      </div>
      <hr className='mb-6' />
      <div className='flex justify-between mb-4'>
        <div className='flex gap-4'>
            <h3>Maxfiylik kelishuvi</h3>
            <h3>Foydalanuvchi kelishuvi</h3>
        </div>
        <div>
            <p className='text-[#8B8E99] text-[12px] leading-[16px]'>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
        </div>
      </div>
    </div>
  )
}

export default Footer