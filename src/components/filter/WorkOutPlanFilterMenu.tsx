"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckBoxFilter from "./CheckBoxFilter";
import { WorkOutPlanFilterType } from "@/lib/types/workout-plan";
import { ReadExerciseTypeDto } from "@/lib/types/exercise-type";

type Props = {
  muscleGroupsOptions: string[];
  exerciseTypesOptions: ReadExerciseTypeDto[];
  initialFilterData: WorkOutPlanFilterType;
  handleClose: () => void;
};

export default function WorkOutPlanFilterMenu({
  muscleGroupsOptions,
  exerciseTypesOptions,
  initialFilterData,
  handleClose,
}: Props) {
  const router = useRouter();

  const [filterData, setFilterData] = useState(initialFilterData);

  const handleChange = (type: keyof WorkOutPlanFilterType, val: string) => {
    setFilterData((prev) => {
      const currentSelection = prev[type];
      const newSelection = currentSelection.includes(val)
        ? currentSelection.filter(item => item !== val) 
        : [...currentSelection, val]; 
      return { ...prev, [type]: newSelection };
    });
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    filterData.exerciseTypes.forEach((exType) => params.append("exerciseTypes", exType));
    filterData.muscleGroups.forEach((muscleGroup) => params.append("muscleGroups", muscleGroup));
    router.push(`/workout-plan?${params.toString()}`);
    handleClose();
  }

  return (
    <>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-xl font-semibold text-slate-200 uppercase tracking-[8px] text-center">
          Filter
        </h2>
        <div className="w-full h-2 bg-orange-500 rounded"></div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <CheckBoxFilter
              selected={filterData.muscleGroups}
              appendSelected={(val) => handleChange('muscleGroups', val)}
              title="Muscle Groups"
              options={muscleGroupsOptions}
            />
            <CheckBoxFilter
              selected={filterData.exerciseTypes}
              appendSelected={(val) => handleChange('exerciseTypes', val)}
              title="Exercise Types"
              options={exerciseTypesOptions?.map((exType) => exType.name) || []}
            />
          </div>
        </div>
      </div>
      <div className="w-full text-slate-200">
        <button
          onClick={handleApply}
          className="bg-orange-500 p-1 w-full rounded hover:bg-orange-600 hover:scale-105 duration-100"
        >
          Apply
        </button>
      </div>
    </>
  );
}
