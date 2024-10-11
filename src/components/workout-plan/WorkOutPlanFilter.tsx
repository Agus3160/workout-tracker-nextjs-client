"use client";

import { useState } from "react";
import WorkOutPlanFilterMenu from "../filter/WorkOutPlanFilterMenu";
import { ReadExerciseTypeDto } from "@/lib/types/exercise-type";
import { useSearchParams } from "next/navigation";
import Modal from "../global/Modal";
import SearchInput from "../global/SearchInput";
import { Filter } from "lucide-react";

type Props = {
  exerciseTypes: ReadExerciseTypeDto[];
};

export default function WorkOutPlanFilter({ exerciseTypes }: Props) {
  const [display, setDisplay] = useState(false);

  const params = useSearchParams();

  const initialFilterData = {
    muscleGroups: params.getAll("muscleGroups") || [],
    exerciseTypes: params.getAll("exerciseTypes") || [],
  }

  return (
    <div className="flex gap-2">
      <Modal display={display} onClose={() => setDisplay(false)}>
        <WorkOutPlanFilterMenu
          initialFilterData={initialFilterData}
          handleClose={() => setDisplay(false)}
          exerciseTypesOptions={exerciseTypes}
          muscleGroupsOptions={[]}
        />
      </Modal>
      <SearchInput />

      <button onClick={() => setDisplay(true)}>
        <Filter />
      </button>
    </div>
  );
}
