import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20"/>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Почему заказать такси лучше у нас!
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Честная стоимость и удобство во время поездки – это то, что делает нас лучшими.
          Тариф и стоимость обсуждается во время оформления заказа через сайт или по телефону.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Главным достоинством нашего таксопарка – прозрачные цены.
          Мы не увеличиваем стоимость при задержках рейса или пробках на дорогах, потому что трафик отдыхающих в нашем регионе большой круглый год.
          Мы озвучиваем точную цену, неизменную в ходе поездки.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          В нашей же организации такие варианты невозможны. Водители работают официально.
          Для своих клиентов мы гарантируем своевременную подачу авто и безопасную комфортную поездку.
          Мы – не обычный сервис такси, а официальное и проверенное временем предприятие.
          Более 99% клиентов обращаются к нам повторно после первого раза и становятся постоянными заказчиками.
        </span>

      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg}/>
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
