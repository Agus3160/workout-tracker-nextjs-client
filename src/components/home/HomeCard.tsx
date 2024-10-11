import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function HomeCard({
  imageUrl,
  title,
  description,
}: Props) {
  return (
    <div
      className={`group relative duration-300 overflow-hidden text-center h-[300px] text-white w-[300px] rounded hover:bg-orange-500 bg-orange-800`}
    >
      <div className="absolute group-hover:-translate-y-1/2 duration-300 top-1/2 h-auto w-full z-10 px-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text duration-300 opacity-0 group-hover:opacity-100">{description}</p>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="group-hover:opacity-50 group-hover:scale-110 duration-300 w-full h-full object-cover object-center opacity-75"
      />
    </div>
  );
}
