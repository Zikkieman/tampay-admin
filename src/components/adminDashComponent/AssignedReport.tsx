function AssignedReport() {
  const assignedReport = [
    {
      issue: "Card issues",
      id: "US1827",
    },
    {
      issue: "Card issues",
      id: "US1827",
    },
    {
      issue: "Card issues",
      id: "US1827",
    },
  ];
  return (
    <div className="bg-white shadow-sm p-5 rounded-xl font-sora ">
      <div className="flex flex-col gap-4">
        {assignedReport.map(() => (
          <div className="bg-[#F9FAFB] p-2 rounded-lg flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[#344054] font-medium">Card issues</p>
              <p className="text-[#344054] text-sm">US1827</p>
            </div>
            <div className="bg-lightSilver px-3 py-2 rounded-full text-sm">
              <p className="text-[#344054]">View </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignedReport;
