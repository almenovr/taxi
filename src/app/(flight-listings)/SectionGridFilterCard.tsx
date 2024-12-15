import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionGridFilterCardProps {
  className?: string;
}

const DEMO_DATA: FlightCardProps["data"][] = [
  {
    id: "1",
    price: {
      economy: 1690,
      standard: 1990,
      comfort: 2200,
      business: 3500,
      minivan: 3000,
    },
    name: "Ай-Даниль",
    from: "Симферополь",
    airlines: {
      logo: "https://cdn-icons-png.flaticon.com/512/1048/1048339.png",
      name: "Korean Air",
    },
  },
  {
    id: "2",
    price: {
      economy: 1690,
      standard: 1990,
      comfort: 2200,
      business: 3500,
      minivan: 3000,
    },
    name: "Алупка",
    from: "Симферополь",
    airlines: {
      logo: "https://cdn-icons-png.flaticon.com/512/1048/1048339.png",
      name: "Singapore Airlines",
    },
  },
  {
    id: "3",
    price: {
      economy: 1690,
      standard: 1990,
      comfort: 2200,
      business: 3500,
      minivan: 3000,
    },
    from: "Симферополь",
    name: "Алушта",
    airlines: {
      logo: "https://cdn-icons-png.flaticon.com/512/1048/1048339.png",
      name: "Philippine Airlines",
    },
  },
];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6  rounded-3xl">
        {DEMO_DATA.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
