import ShowChartIcon from "@mui/icons-material/ShowChart";
import moment from "moment";
import { ButtonPrimary } from "./buttons/ButtonPrimary";

interface HistoryCardProps {
  title: string;
  history: HistoryCardRowProps[];
}

interface HistoryCardRowProps {
  version: number;
  date: Date;
}

export const HistoryCard = ({ title, history }: HistoryCardProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-3 shadow-md">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <div className="flex flex-col max-h-[200px] overflow-y-auto">
        {history?.map(({ version, date }) => {
          return <HistoryCardRow version={version} date={date} />;
        })}
      </div>
      <ButtonPrimary isActive={true}>Deploy</ButtonPrimary>
    </div>
  );
};

const HistoryCardRow = ({ version, date }: HistoryCardRowProps) => {
  return (
    <div className="p-2 px-6 text-gray-500 text-sm border-b-2 flex justify-between">
      <ShowChartIcon />
      <span>v{Array.from(version.toString()).join(".")}</span>
      <span>{moment(date).format("DD/MM/YY - hh:mm")}</span>
    </div>
  );
};
