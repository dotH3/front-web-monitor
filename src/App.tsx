import { Card } from "./components/Card";
import { HistoryCard } from "./components/HistoryCard";
import { ResumeCard } from "./components/ResumeCard";

function App() {
  const history = [
    {
      version: 10,
      date: new Date("2023-01-01"),
    },
    {
      version: 11,
      date: new Date("2023-02-15"),
    },
    {
      version: 20,
      date: new Date("2023-09-23"),
    },
    {
      version: 11,
      date: new Date("2023-02-15"),
    },
    {
      version: 20,
      date: new Date("2023-09-23"),
    },
    {
      version: 11,
      date: new Date("2023-02-15"),
    },
    {
      version: 20,
      date: new Date("2023-09-23"),
    },
  ];
  return (
    <div className="flex px-10 md:px-[200px] lg:px-[300px] 2xl:px-[350px]">
      <div className="w-full flex flex-col gap-3 mt-[30px]">
        <h3 className="text-center font-bold text-2xl">Deploy Dashboard</h3>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Card title="Total Deploys">1,234</Card>
            <Card title="Last Deploy">2m 34s</Card>
            <Card title="Server Status" className="bg-green-100">
              200!
            </Card>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <HistoryCard title="Frontend Recent Deploys" history={history} />
            <HistoryCard title="Backend Recent Deploys" history={history} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ResumeCard title="Frontend" version={123} />
            <ResumeCard title="Backend" version={201} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
