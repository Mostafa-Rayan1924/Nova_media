import { Square } from "lucide-react";

const SquareIcon = ({ y, x, color }) => {
  return (
    <Square
      className={`size-10 absolute ${y} ${x} -z-20 text-${color} opacity-85 rotate-6 `}
    />
  );
};

export default SquareIcon;
