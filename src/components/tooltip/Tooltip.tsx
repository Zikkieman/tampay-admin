import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    Width: 300,
    fontSize: theme.typography.pxToRem(12),
    padding: 2,
  },
}));

export default function ActionTooltips() {
  const navigate = useNavigate();

  const handleActionClick = () => {
    navigate("assign");
    console.log("called");
  };

  return (
    <div>
      <HtmlTooltip
        title={
          <div className=" shadow-md rounded-md">
            <p className="py-2 px-4 text-sm text-[#344054] cursor-pointer">
              Actions
            </p>
            <Divider />
            <p className="py-2 px-4 text-sm text-[#344054] cursor-pointer">
              Download Reciept
            </p>
            {/* <Divider /> */}
            <p
              className="py-2 px-4 text-sm text-[#344054] cursor-pointer"
              onClick={handleActionClick}
            >
              Assign
            </p>
          </div>
        }
      >
        <button className="text-gray-500 hover:text-gray-700 border border-lightSilver px-3 py-1 rounded-lg">
          ⋮
        </button>
      </HtmlTooltip>
    </div>
  );
}
