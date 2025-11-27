import { IconType } from "react-icons";

export type ServiceCardProps = {
  title: string;
  description: string;
  icon?: IconType;
  highlightList?: string[];
};

const ServiceCard = ({ title, description, icon: Icon, highlightList }: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 via-blue-200/30 to-blue-500/30 text-primary">
          {Icon ? <Icon className="text-2xl" aria-hidden /> : <span className="text-lg font-semibold">AI</span>}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      {highlightList && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {highlightList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ServiceCard;
