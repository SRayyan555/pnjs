import { useState } from 'react';
import { professors } from '../data/professors';
import { RxCross2 } from 'react-icons/rx';

export default function DifferentPopup({ isOpen, onClose, professor }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white h-[550px] w-[800px] rounded-[30px] p-8 relative overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-300 shadow-md"
        >
          <RxCross2 size={20} />
        </button>
        <div className="h-full flex flex-col ">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {professors.map((prof, index) => (
              <div
                key={index}
                className="w-[230px] h-[230px] bg-[#eaf0f7] rounded-[20px] flex flex-col items-center justify-center p-4 border-2 border-white"
                style={{ boxShadow: '8px 8px 20px 4px #98989833' }}
              >
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-[100px] h-[100px] rounded-full object-cover mb-3"
                />

                <h3 className="text-[30px] font-medium leading-[110%] tracking-[-2px] text-black mb-2">{prof.name}</h3>
                <div className="flex items-center gap-2  w-[210px]">
                  <img src={prof.schoolLogo} alt={`${prof.school} logo`} className="w-6 h-6 object-contain" />
                  <p className="text-[14px] text-center text-[#333333] font-regular leading-[140%] font-inter w-auto ">{prof.school}</p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
