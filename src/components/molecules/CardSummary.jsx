import Card from "../atoms/Card";
import { formatRupiah } from "../../utils/currency";
import { RiFormula } from "@remixicon/react";

export default function CardSummary({ calculationResult }) {
  return (
    <Card className="w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-neutral-900 flex items-center">
          <RiFormula className="inline-block mr-2" />
          Your Ideal Rate
        </h2>
        <div className="flex flex-col gap-2">
          <p>Recomendation Project Fee</p>
          <span className="font-semibold">
            {formatRupiah(calculationResult?.recommendedPrice)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Total Hours</p>
          <span className="font-semibold">
            {calculationResult?.totalHours} Hours
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Hourly rate</p>
          <span className="font-semibold">
            {formatRupiah(calculationResult?.finalHourlyRate)}/hour
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Sub Total Price</p>
          <span className="font-semibold">
            {formatRupiah(calculationResult?.subTotalPrice)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p>Buffer</p>
          <span className="font-semibold">
            {calculationResult?.buffer}% -{" "}
            {formatRupiah(calculationResult?.bufferPrice)}
          </span>
        </div>
      </div>
    </Card>
  );
}
