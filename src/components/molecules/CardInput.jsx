import {
  RiAdminFill,
  RiCalendarCheckLine,
  RiDashboard3Line,
  RiEdit2Line,
  RiFileShieldLine,
  RiHourglassFill,
  RiStairsLine,
  RiTimeFill,
  RiTimeLine,
} from "@remixicon/react";
import Card from "../atoms/Card";
import Input from "../atoms/Inputs";
import Select from "../atoms/Select";
import { useState } from "react";
import Button from "../atoms/Button";

export default function CardInput({ setFormValue }) {
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

  const [selectedExperience, setSelectedExperience] = useState(
    experienceLevelItems[0],
  );
  const [projectDuration, setProjectDuration] = useState(0);
  const [workHoursPerDay, setWorkHoursPerDay] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty[0]);
  const [selectedDeadline, setSelectedDeadline] = useState(deadline[0]);
  const [selectedRevisionLevel, setSelectedRevisionLevel] = useState(
    revisionLevel[0],
  );
  const [riskBuffer, setRiskBuffer] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormValue({
      selectedExperience,
      projectDuration,
      workHoursPerDay,
      selectedDifficulty,
      selectedDeadline,
      selectedRevisionLevel,
      riskBuffer,
    });
  };

  return (
    <Card className="w-full">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900">Inputs</h2>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Experience Level
            </label>
            <Select
              id="experience-level"
              items={experienceLevelItems}
              value={selectedExperience}
              onChange={setSelectedExperience}
              preIcon={<RiStairsLine />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Project Duration (Days)
            </label>
            <Input
              placeholder="Project Duration"
              type="number"
              preIcon={<RiHourglassFill />}
              value={projectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Work Hours per Day
            </label>
            <Input
              placeholder="Work Hours per Day"
              type="number"
              preIcon={<RiTimeLine />}
              postIcon={<span>hours</span>}
              value={workHoursPerDay}
              onChange={(e) => setWorkHoursPerDay(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Difficulty
            </label>
            <Select
              id="difficulty"
              items={difficulty}
              value={selectedDifficulty}
              onChange={setSelectedDifficulty}
              preIcon={<RiDashboard3Line />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Deadline
            </label>
            <Select
              id="deadline"
              items={deadline}
              value={selectedDeadline}
              onChange={setSelectedDeadline}
              preIcon={<RiCalendarCheckLine />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Revision Level
            </label>
            <Select
              id="revision-level"
              items={revisionLevel}
              value={selectedRevisionLevel}
              onChange={setSelectedRevisionLevel}
              preIcon={<RiEdit2Line />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-neutral-700">
              Risk Buffer
            </label>
            <Input
              placeholder="Risk Buffer"
              min={0}
              max={50}
              value={riskBuffer}
              onChange={(e) => setRiskBuffer(e.target.value)}
              preIcon={<RiFileShieldLine />}
            />
          </div>
        </div>
        <div className="flex justify-center py-4">
          <Button type="submit">Calculate</Button>
        </div>
      </form>
    </Card>
  );
}
