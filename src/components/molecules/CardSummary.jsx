import Card from "../atoms/Card";
import { formatRupiah } from "../../utils/currency";

export default function CardSummary({ calculationResult }) {
 

  return (
    <Card className="w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-neutral-900">
          Your Ideal Rate
        </h2>
        <div className="flex flex-col gap-2">
          <p>Recomendation Project Fee</p>
          <span>{formatRupiah(calculationResult?.recommendedPrice)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Total Hours</p>
          <span>{calculationResult?.totalHours} Hours</span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Hourly rate</p>
          <span>{formatRupiah(calculationResult?.finalHourlyRate)}/hour</span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Sub Total Price</p>
          <span>{formatRupiah(calculationResult?.subTotalPrice)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Buffer</p>
          <span>
            {calculationResult?.buffer}% -{" "}
            {formatRupiah(calculationResult?.bufferPrice)}
          </span>
        </div>
      </div>
    </Card>
  );
}
