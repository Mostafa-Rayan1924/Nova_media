import { Circle } from "lucide-react";
const CircleIcon = ({ y, x, color }) => {
  return (
    <Circle
      className={`absolute size-10  flex text-${color} ${y} ${x} -z-10  opacity-85 rotate-6`}
    />
  );
};

export default CircleIcon;
