type PropsType = {
  i: number;
  data: {
    title: string;
    amount: string;
  };
};

function MetricsCard({ i, data }: PropsType) {
  return (
    <div
      key={i}
      className={`${
        i === 0 ? "bg-deepBlue" : "bg-white"
      } shadow-sm p-3  h-[120px] rounded-xl border border-lightSilver`}
    >
      <p
        className={`text-[12px] ${
          i === 0 ? "text-white" : "text-slateGray"
        }  mb-3`}
      >
        {data.title}
      </p>
      <p
        className={`font-medium ${
          i === 0 ? "text-limeGreen" : "text-deepBlue"
        } text-[24px] `}
      >
        {data.amount}
      </p>
      {i === 3 && (
        <div className="text-right mt-2">
          <p className="text-xs text-deepBlue">View Transactions</p>{" "}
        </div>
      )}
    </div>
  );
}

export default MetricsCard;
