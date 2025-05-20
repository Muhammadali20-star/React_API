import React, { useEffect, useLayoutEffect, useState } from "react";
import photo from '../../assets/Vector (18).svg'
import photo2 from '../../assets/SVG (4).svg'
import photo3 from '../../assets/div.middle-header-main-logo.svg'
import photo4 from '../../assets/div.catalog-icon (1).svg'
import photo5 from '../../assets/Vector (19).svg'
import photo6 from '../../assets/Frame (12).svg'
import photo7 from '../../assets/SVG (5).svg'
import photo8 from '../../assets/SVG (6).svg'
import photo9 from '../../assets/SVG (7).svg'
import photo10 from '../../assets/Item_margin.svg'


const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-6 mt-2">
        <div className="flex gap-2">
          <img src={photo} alt="" />
          <p className="text-[#1F2026]">Shahar: <span className="font-bold underline">Toshkent</span></p>
          <h3>Topshirish punktlari</h3>
        </div>
        <div className="flex items-center">
          <p className="text-[#8B8E99] text-[14px] leading-[14px]">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-[#8B8E99] text-[14px] leading-[14px]">Savol-javoblar</p>
          <p className="text-[#8B8E99] text-[14px] leading-[14px]">Buyurtmalarim</p>
          <div className="flex gap-2">
          <img src={photo2} alt="" />
          <h3>Оʻzbekcha</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-8">
        <img src={photo3} alt="" />
        <div className="text-[#7000FF] bg-[#F0F0FF] flex gap-2 w-[120px] h-[40px] justify-center items-center">
          <img src={photo4} alt="" />
          <h3>Katalog</h3>
        </div>
        <div className="flex items-center bg-[#F5F5F5] rounded-[15px]">
          <input type="text" placeholder="Mahsulotlar va turkumlar izlash" className="outline-none w-[312px] h-[45px] text-sm py-1 px-2" />
          <button className='w-[80px] h-[45px] bg-[#E4E3E3] text-[#FFFFFF] rounded-[9px] px-6 ml-4'><img src={photo5} alt="" /></button>
        </div>
        <div className="flex gap-4 items-center">
          <img src={photo6} alt="" />
          <h3>Kirish</h3>
          <img src={photo7} alt="" />
          <h3>Saralangan</h3>
          <img src={photo8} alt="" />
          <h3>Savat</h3>
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex gap-4 items-center text-[#8B8E99] text-[14px] leading-[24px]">
          <img src={photo10} alt="" />
          <p>Elektronika</p>
          <p>Maishiy texnika</p>
          <p>Kiyim</p>
          <p>Poyabzallar</p>
          <p>Aksessuarlar</p>
          <p>Goʻzallik va parvarish</p>
          <p>Salomatlik</p>
          <p>Uy-roʻzgʻor buyumlari</p>
          <p>Qurilish va taʼmirlash</p>
        </div>
        <div className="flex gap-2 items-center text-[#8B8E99] text-[14px] leading-[24px]">
          <p>yana</p>
          <img src={photo9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
