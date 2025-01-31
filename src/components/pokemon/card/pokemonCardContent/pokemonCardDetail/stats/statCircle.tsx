//returns the percentage of base_stat out of 150 in degrees
import { StatsEnum } from "@/lib/types/types";

interface StatCircleProps {
  name: keyof typeof StatsEnum;
  base_stat: number;
}

const getDegs = (base_stat: number) => {
  return (base_stat / 1.5) * 3.6;
};

const StatCircle = ({ name, base_stat }: StatCircleProps) => {
  return (
    <div
      style={{
        background: `conic-gradient(var(--primary) 0deg ${getDegs(base_stat)}deg, var(--accent) ${getDegs(base_stat)}deg)`,
      }}
      className="relative aspect-square w-full flex justify-center items-center rounded-full"
    >
      <div
        className={
          "absolute transition-all bg-secondary w-[80%] rounded-full aspect-square top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"
        }
      ></div>
      <h4 className={"leading-none w-min uppercase text-xs z-10"}>
        {StatsEnum[name]}
      </h4>
    </div>
  );
};

export default StatCircle;
