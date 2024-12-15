"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

export interface FlightCardProps {
  className?: string;
  data: {
    id: string;
    name: string;
    from: string;
    airlines: {
      logo: string;
      name: string;
    };
    price: {
      economy: number;
      standard: number;
      comfort: number;
      business: number;
      minivan: number;
    };
  };
}

const FlightCard: FC<FlightCardProps> = ({ className = "", data }) => {
  const [isOpen, setIsOpen] = useState(false);


  const renderDetail = () => {
    if (!isOpen) return null;
    return (
        <div>
          <div className="p-4 md:p-8 border border-neutral-200 dark:border-neutral-700 rounded-2xl ">
            <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
              {/* LOGO IMG */}


              {/* FOR MOBILE RESPONSIVE */}
              <div className="block lg:hidden space-y-1">
                <div className="flex font-semibold">
                  <div>
                    <span>Эконом</span>
                    <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                      Автомобили эконом класса
                    </span>
                  </div>
                </div>
              </div>

              {/* TIME - NAME */}
              <div className="hidden lg:block  min-w-[150px] flex-[4] ">
                <div className="font-medium text-lg">Эконом</div>
              </div>

              {/* TIMME */}
              <div className="hidden lg:block flex-[4] whitespace-nowrap">
                <div className="font-medium text-lg">Автомобили</div>
                <div className="text-sm text-neutral-500 font-normal mt-0.5">
                  Автомобили эконом класса
                </div>
              </div>

              {/* TYPE */}


              {/* PRICE */}
              <div className="flex-[4] whitespace-nowrap sm:text-right">
                <div>
                  <span className="text-xl font-semibold text-secondary-6000">
                    от {data.price.economy}₽
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 border border-neutral-200 dark:border-neutral-700 rounded-2xl ">
            <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
              {/* LOGO IMG */}


              {/* FOR MOBILE RESPONSIVE */}
              <div className="block lg:hidden space-y-1">
                <div className="flex font-semibold">
                  <div>
                    <span>11:00</span>
                    <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                      HND
                    </span>
                  </div>
                  <span className="w-12 flex justify-center">
                    <i className=" text-2xl las la-long-arrow-alt-right"></i>
                  </span>
                  <div>
                    <span>20:00</span>
                    <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                      SIN
                    </span>
                  </div>
                </div>

                <div className="text-sm text-neutral-500 font-normal mt-0.5">
                  <span className="VG3hNb">Nonstop</span>
                  <span className="mx-2">·</span>
                  <span>7h 45m</span>
                  <span className="mx-2">·</span>
                  <span>HAN</span>
                </div>
              </div>

              {/* TIME - NAME */}
              <div className="hidden lg:block  min-w-[150px] flex-[4] ">
                <div className="font-medium text-lg">Стандарт</div>
              </div>

              {/* TIMME */}
              <div className="hidden lg:block flex-[4] whitespace-nowrap">
                <div className="font-medium text-lg">Автомобили</div>
                <div className="text-sm text-neutral-500 font-normal mt-0.5">
                  Лада Веста (LADA Vesta), Hyundai Solaris, Kia Rio.
                </div>
              </div>

              {/* TYPE */}


              {/* PRICE */}
              <div className="flex-[4] whitespace-nowrap sm:text-right">
                <div>
              <span className="text-xl font-semibold text-secondary-6000">
                от {data.price.standard}₽
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };

  return (
      <div
          className={`nc-FlightCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`}
      >
        <div className={` sm:pr-20 relative  ${className}`}>
          {/*  eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="##" className="absolute inset-0"/>

          <span
              className={`absolute right-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer ${
                  isOpen ? "transform -rotate-180" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
          >
          <i className="text-xl las la-angle-down"></i>
        </span>

          <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
            {/* LOGO IMG */}
            <div className="w-24 lg:w-32 flex-shrink-0">
              <Image
                  src={data.airlines.logo}
                  width={60}
                  height={60}
                  className="w-22"
                  alt="air-logo"
                  sizes="50px"
                  style={{ }}
              />
            </div>
            {/* FOR MOBILE RESPONSIVE */}
            <div className="block lg:hidden space-y-1">
              <div className="flex font-semibold">
                <div>
                  <span>{data.from}</span>
                </div>
                <span className="w-12 flex justify-center">
                  <i className=" text-2xl las la-long-arrow-alt-right"></i>
                </span>
                <div>
                  <span>{data.name}</span>
                </div>
              </div>
          </div>

          {/* TIME - NAME */}
          <div className="hidden lg:block  min-w-[150px] flex-[4] ">
            <div className="font-medium text-lg">{data.name}</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              из города {data.from}
            </div>
          </div>

          {/* TIMME */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg">Классы авто</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              Эконом, Стандарт, Комфорт, D - класс, Минивэн
            </div>
          </div>

          {/* TYPE */}

          {/* PRICE */}
          <div className="flex-[4] whitespace-nowrap sm:text-right">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                от {data.price.economy}₽
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* DETAIL */}
      {renderDetail()}
    </div>
  );
};

export default FlightCard;
