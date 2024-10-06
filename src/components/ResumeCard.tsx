interface ResumeCardProps {
  title: string;

  version: number;
  //   lastDeploy: string;
}

export const ResumeCard = ({ title, version }: ResumeCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-3 shadow-md">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <div className="text-gray-500 text-sm">
        <div>Version: v{Array.from(version.toString()).join(".")}</div>
        {/* <div>Last Deploy: {version}</div> */}
      </div>
    </div>
  );
};
