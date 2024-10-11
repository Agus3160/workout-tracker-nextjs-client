import WorkOutPlanFilter from "@/components/workout-plan/WorkOutPlanFilter";
import { getAllExerciseTypes } from "@/lib/api/exercise-type";

type Props = {};

export default async function page({}: Props) {
  
  const {data, message, success} = await getAllExerciseTypes({
    take: 100,
    skip: 0,
    orderBy: "createdAt",
    order: "ASC",
  });

  if (!success || !data) return <div>{message}</div>;

  return (
    <div className="px-8 pt-8 sm:pt-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-3 sm:gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 uppercase tracking-[6px] sm:tracking-[16px] text-center">
          Workout Plans
        </h2>
        <div className="w-full h-2 bg-orange-500 rounded mb-5"></div>
        <div className="flex flex-col sm:flex-row items-center justify-around items-center gap-6">
          <WorkOutPlanFilter exerciseTypes={data.values} />
        </div>
      </div>
    </div>
  );
}
