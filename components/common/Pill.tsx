import { PillProp } from "@/interfaces";

const Pill: React.FC<PillProp> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#F9F9F9] px-2 w-auto h-[27px] rounded-full">
      <p className="text-[12px] lg:text-[7px] xl:text-[10px] font-semibold">{title}</p>
    </div>
  );
};

export default Pill;
