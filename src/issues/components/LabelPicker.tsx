import { FC } from "react";
import { Loader } from "../../shared/components/Loader";
import { useLabels } from "../hooks";

interface Props {
  selectedLabels: string[]
  onLabelSelected: (label: string) => void
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onLabelSelected }) => {

  const { labelsQuery } = useLabels()

  if(labelsQuery.isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <section className="flex flex-wrap gap-1">
    {labelsQuery.data?.map((label) => (
      <span
        key={label.id}
        className={`px-2 py-1 text-xs font-semibold rounded-full cursor-pointer animate-fadeIn hover:bg-slate-800 ${selectedLabels.includes(label.name) && 'selected-label'}`}
        style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
        onClick={() => onLabelSelected(label.name)}
      >
        {label.name}
      </span>
      ))}
    </section>
  );
};
