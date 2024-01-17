import { PhoneIcon, TickIcon } from "@/components/ui/icons";

interface StockInfoParams {
  stock: number;
}

export const StockInfo: React.FC<StockInfoParams> = ({ stock }) =>
  stock > 0 ? (
    <div className="flex items-center gap-2  text-green">
      <TickIcon />
      <span>in stock</span>
    </div>
  ) : (
    <div className="flex items-center gap-2  text-red">
      <PhoneIcon />
      <span>check availability</span>
    </div>
  );
