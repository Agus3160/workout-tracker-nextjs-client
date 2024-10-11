import HomeCard from "@/components/home/HomeCard";
import HomeSection from "@/components/home/HomeSection";
import { homeCardData } from "@/components/home/data";

export default function Home() {
  return (
    <div className="px-8 pb-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-6">
        <HomeSection />
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-slate-200 tracking-[6px] uppercase sm:tracking-[16px] text-center">
            Key Benefits
          </h2>
          <div className="w-full h-2 bg-orange-500 rounded mb-5"></div>
          <div className="flex flex-col sm:flex-row items-center justify-around items-center gap-6">
            {homeCardData.map((data) => (
              <HomeCard
                key={data.title}
                imageUrl={data.imageUrl}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
