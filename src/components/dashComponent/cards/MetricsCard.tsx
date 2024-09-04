type PropsType = {
  title: string;
  amount: string;
  action: string;
};
function MetricsCard({ title, amount, action }: PropsType) {
  return (
    <div>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{action}</p>
    </div>
  );
}

export default MetricsCard;
