import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <h2 className="font-semibold text-4xl mt-5">Междугороднее такси Крыма и Юга России </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
               Компания "Междугороднее такси Крыма и Юга России" рада предложить вам круглосуточные услуги по перевозке пассажиров между всеми крупными городами Крыма и Юга России. Наши офисы расположены в таких городах, как Симферополь, Ялта, Севастополь, Алушта, Евпатория, Феодосия, Анапа, Краснодар, Адлер, Сочи, Ростов-на-Дону, Ставрополь и Минеральные Воды.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Наши автомобили осуществляют перевозки между всеми городами Крыма и Юга России, включая популярные маршруты, такие как Симферополь-Ялта, Симферополь-Севастополь, Симферополь-Алушта и многие другие.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                Мы гордимся тем, что являемся лидерами в сфере междугородних перевозок в Крыму и предлагаем удобные услуги по встрече гостей на железнодорожном вокзале и доставке их в любой город Крыма. Наши автомобили доступны для заказа круглосуточно, и мы гарантируем комфортное и безопасное путешествие.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
