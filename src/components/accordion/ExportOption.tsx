import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Divider } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} disableFocusListener />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    Width: 300,
    fontSize: theme.typography.pxToRem(14),
    padding: 2,
  },
}));

const ExportOption = () => {
  return (
    <div className="bg-white shadow-xl rounded-md py-4 w-[170px] ">
      <p className="px-4 mb-2">Export as</p>
      <Divider />
      <div className="flex flex-col gap-3 px-4 mt-2">
        <p className="cursor-pointer">CSV</p>
        <p className="cursor-pointer">PDF</p>
        <p className="cursor-pointer">Excel</p>
      </div>
    </div>
  );
};

export default function ExportAccordion() {
  return (
    <div className="border border-coolGray h-[40px] rounded-lg px-2 flex items-center justify-center">
      <HtmlTooltip title={<ExportOption />}>
        <div className="flex items-center gap-2 text-sm text-slateGray font-light">
          Export Transactions
        </div>
      </HtmlTooltip>
    </div>
  );
}
