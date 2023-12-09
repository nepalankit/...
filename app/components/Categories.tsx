"use client";
import React from "react";
import Wrapper from "./Wrapper";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCampingTent,
  GiCastle,
  GiCaveEntrance,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmilld",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This property is countryside!",
  },
  {
    label: "pools",
    icon: TbPool,
    description: "This property is pool",
  },
  {
    label: "Islands",
    icon: TbPool,
    description: "This property is an Island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is an lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is an skiing",
  },
  {
    label: "castle",
    icon: GiCastle,
    description: "This property is an castle",
  },
  {
    label: "Camping",
    icon: GiCampingTent,
    description: "This property is an camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is an camping",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is an cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is Desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is Barns",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is Lux",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainpage = pathname === "/";
  if (!isMainpage) {
    return null;
  }
  return (
    <Wrapper>
      <div
        className="
    pt-4
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto
    "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Categories;
