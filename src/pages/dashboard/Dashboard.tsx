import Board from "../../components/dashComponent/board/Board";
import Sidebar from "../../components/dashComponent/sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full max-w-[300px]">
        <Sidebar />
      </div>
      <div className="w-full ">
        <Board />
      </div>
    </div>
  );
}

export default Dashboard;
