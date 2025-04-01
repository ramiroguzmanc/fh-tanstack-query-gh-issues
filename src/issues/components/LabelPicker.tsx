import { Loader } from "../../shared/components/Loader";
import { useLabels } from "../hooks";

export const LabelPicker = () => {

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
        className="px-2 py-1 text-xs font-semibold rounded-full cursor-pointer animate-fadeIn hover:bg-slate-800"
        style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
      >
        {label.name}
      </span>
      ))}
    </section>
  );
};
