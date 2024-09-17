import { useEffect, useState } from "react";
import Search from "../../../components/searchInput/Search";
import ToggleSwitch from "../../../components/sliderButton/Slider";
import { serviceEntries } from "../../../constants/services";
import Pagination from "../../../components/pagination/Pagination";
import ServiceTooltips from "../../../components/tooltip/ServiceTooltip";

function Services() {
  const [currentEntries, setCurrentEntries] = useState<typeof serviceEntries>(
    []
  );
  const [filteredEntries, setFilteredEntries] = useState<typeof serviceEntries>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (serviceEntries.length > 0) {
      setFilteredEntries(serviceEntries);
    }
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredEntries(serviceEntries);
    } else {
      const filtered = serviceEntries.filter((serviceEntries) =>
        serviceEntries.apiName.includes(searchQuery)
      );
      setFilteredEntries(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="px-4 py-5 font-sora">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center w-full max-w-[500px]">
          <p className="text-lg font-medium text-darkNavy">Services</p>
          <div className="w-full">
            <Search placeholder="Search by name" onSearch={setSearchQuery} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <p className="text-base text-[#344054]">Maintenance Mode</p>
            <p className="text-xs text-[#98A2B3]">This affects all services</p>
          </div>
          <ToggleSwitch />
        </div>
      </div>

      <div className="relative w-full overflow-x-auto z-[50] scroll-smooth mt-10">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">API Name</th>
              <th className="px-6 py-3">Endpoint</th>
              <th className="px-6 py-3">Method</th>
              <th className="px-6 py-3">Last Accessed</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((service) => (
              <tr
                key={service.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{service.apiName}</td>
                <td className="px-6 py-4">{service.endpoint}</td>
                <td className="px-6 py-4">{service.method}</td>

                <td className="px-6 py-4">{service.lastAccessed}</td>
                <td className="px-6 py-4">{service.description}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    service.status === "Active"
                      ? "text-green-600"
                      : "text-[#F3A218]"
                  }`}
                >
                  <div
                    className={`py-1 px-3 rounded-full ${
                      service.status === "Active"
                        ? "bg-[#EFFEF0]"
                        : "bg-[#FEF6E7]"
                    }`}
                  >
                    {service.status}
                  </div>
                </td>
                <td className="">
                  <ServiceTooltips />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center mt-5">
        <Pagination
          entriesPerPage={9}
          entries={filteredEntries}
          onPageChange={setCurrentEntries}
        />
      </div>
    </div>
  );
}

export default Services;
