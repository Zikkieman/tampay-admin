import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CiFilter } from "react-icons/ci";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Checkbox, Divider } from "@mui/material";
import NGN from "../../assets/images/Nigeria.png";
import USA from "../../assets/images/USA.png";

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

const FilterTitle = () => {
  return (
    <div className="bg-white shadow-xl rounded-md py-4">
      <div className="flex items-center justify-between mx-3 mb-3">
        <p>Filter By</p>
        <div className="bg-mintCream px-2 py-1 rounded-full flex items-center gap-2 text-[#036B26]">
          <MdOutlineCancel /> <p>Clear all</p>{" "}
        </div>
      </div>
      <Divider />
      <div>
        <Accordion disableGutters sx={{ boxShadow: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">User</div>
          </AccordionSummary>
          <AccordionDetails sx={{ marginTop: -2 }}>
            <div className="flex  w-full  h-[40px] rounded-lg items-center  gap-1 p-0">
              <div>
                <CiSearch size={20} className="text-coolGray" />
              </div>
              <div className="w-full font-sora">
                <input
                  name=""
                  id=""
                  className=" w-full h-[40px] bg-transparent placeholder:text-coolGray placeholder:font-light text-sm border-none outline-none"
                  placeholder="Search by User id"
                  autoFocus
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* txn type */}
        <Accordion disableGutters sx={{ boxShadow: 0, marginTop: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">Type</div>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 2, marginTop: 0 }}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Credit</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Debit</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Exchange</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* currency */}
        <Accordion disableGutters sx={{ boxShadow: 0, marginTop: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">Currency</div>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 2, marginTop: 0 }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <div className="flex items-center gap-2">
                  <img src={NGN} alt="NGN" />
                  <p className="text-[#344054]">NGN</p>
                </div>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <div className="flex items-center gap-2">
                  <img src={USA} alt="USD" className="w-[25px] h-[25px]" />
                  <p className="text-[#344054]">USD</p>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* payment method */}
        <Accordion disableGutters sx={{ boxShadow: 0, marginTop: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">Payment Method</div>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 2, marginTop: 0 }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Transfer</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Debit Card</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* status */}
        <Accordion disableGutters sx={{ boxShadow: 0, marginTop: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">Status</div>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 2, marginTop: 0 }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Successful</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Pending</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Failed</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* date range */}
        <Accordion disableGutters sx={{ boxShadow: 0, marginTop: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ boxShadow: 0, margin: 0, paddingX: 2, minHeight: "auto" }}
          >
            <div className="flex items-center">Date Range</div>
          </AccordionSummary>
          {/* <AccordionDetails sx={{ paddingX: 2, marginTop: 0 }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Successful</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Pending</p>
              </div>
              <div className="flex items-center text-sm gap-2">
                <Checkbox sx={{ padding: 0 }} />
                <p className="text-[#344054]">Failed</p>
              </div>
            </div>
          </AccordionDetails> */}
        </Accordion>
      </div>
    </div>
  );
};

export default function FilterAccordion() {
  return (
    <div className="border border-coolGray h-[40px] rounded-lg px-2 flex items-center justify-center">
      <HtmlTooltip title={<FilterTitle />}>
        <div className="flex items-center gap-2 text-slateGray font-light">
          <CiFilter className="text-gray-500" size={22} />
          <p className="text-sm"> Filter</p>
        </div>
      </HtmlTooltip>
    </div>
  );
}
