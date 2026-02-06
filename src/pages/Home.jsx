import MainLayout from "../components/layout/MainLayout";
import Container from "../components/atoms/Container";
import CardInput from "../components/molecules/CardInput";
import CardSummary from "../components/molecules/CardSummary";
import { useMemo, useState } from "react";
import Card from "../components/atoms/Card";
import { formatRupiah } from "../utils/currency";

export default function Home() {
  const [formValue, setFormValue] = useState(null);

  const calculate = ({
    experienceRate,
    projectDays,
    hoursPerDay,
    difficulty,
    deadline,
    revisionLevel,
    buffer,
  }) => {
    const baseHourlyRate = experienceRate;
    const totalHours = projectDays * hoursPerDay;
    const finalHourlyRate =
      baseHourlyRate * difficulty * deadline * revisionLevel;

    const subTotalPrice = finalHourlyRate * totalHours;
    const recommendedPrice = subTotalPrice * (1 + buffer / 100);

    return {
      baseHourlyRate,
      totalHours,
      finalHourlyRate,
      subTotalPrice,
      recommendedPrice,
      buffer,
      bufferPrice: subTotalPrice * (buffer / 100),
    };
  };

  const calculationResult = useMemo(() => {
    const payload = {
      experienceRate: formValue?.selectedExperience?.rate || 0,
      projectDays: formValue?.projectDuration || 0,
      hoursPerDay: formValue?.workHoursPerDay || 0,
      difficulty: formValue?.selectedDifficulty?.multiplier || 0,
      deadline: formValue?.selectedDeadline?.multiplier || 0,
      revisionLevel: formValue?.selectedRevisionLevel?.multiplier || 0,
      buffer: formValue?.riskBuffer || 0,
    };
    console.log(payload, "cek");
    const result = calculate(payload);
    console.log(result, "result");
    return result;
  }, [formValue]);

  const experienceLevelItems = [
    { value: "1", label: "Junior", rate: 100000 },
    { value: "2", label: "Mid", rate: 200000 },
    { value: "3", label: "Senior", rate: 350000 },
  ];

  const difficulty = [
    { value: "1", label: "Easy", multiplier: 1 },
    { value: "2", label: "Medium", multiplier: 1.2 },
    { value: "3", label: "Hard", multiplier: 1.5 },
    { value: "4", label: "Very Hard", multiplier: 2 },
  ];

  const deadline = [
    { value: "1", label: "Normal", multiplier: 1 },
    { value: "2", label: "Fast", multiplier: 1.2 },
    { value: "3", label: "Rush", multiplier: 1.5 },
  ];

  const revisionLevel = [
    { value: "1", label: "Low", multiplier: 1 },
    { value: "2", label: "Normal", multiplier: 1.2 },
    { value: "3", label: "High", multiplier: 1.5 },
  ];

  return (
    <MainLayout>
      <Container className="flex flex-col gap-4 items-center p-4">
        <div className="py-4">
          <h1 className="text-4xl font-bold text-neutral-900">
            Freelance Rate Calculator
          </h1>
          <p className="text-neutral-400">
            Don't guess your price. Calculate it.
          </p>
        </div>
        <div className="w-full max-w-4xl">
          <Card>
            <h2 className="text-lg font-bold text-neutral-900">Reference:</h2>
            <ul>
              <li>
                <b>Experience Level:</b> {experienceLevelItems.map((item) => `${item.label} (${formatRupiah(item.rate)})`).join(", ")}
              </li>
              <li>
                <b>Difficulty:</b> {difficulty.map((item) => `${item.label} (${item.multiplier})`).join(", ")}
              </li>
              <li>
                <b>Deadline:</b> {deadline.map((item) => `${item.label} (${item.multiplier})`).join(", ")}
              </li>
              <li>
                <b>Revision Level:</b> {revisionLevel.map((item) => `${item.label} (${item.multiplier})`).join(", ")}
              </li>
            </ul>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
          <div className="w-full md:w-1/2">
            <CardInput setFormValue={setFormValue} />
          </div>
          <div className="w-full md:w-1/2">
            <CardSummary calculationResult={calculationResult} />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
