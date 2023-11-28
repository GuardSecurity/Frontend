// TABLE FREE GUARDS

import { amountFormatting } from "../../../utils/formatHelper";

const TITLES_COLUMN_TABLE = [
  "First name",
  "Last name",
  "Gender",
  "Salary",
  "Address",
];

const HeaderTable = TITLES_COLUMN_TABLE.map((header) => (
  <th
    className="border-b border-gray-200 bg-blue-500 text-white p-1 text-sm"
    key={`${header}`}
  >
    {header}
  </th>
));

const TableFreeGuards = ({
  freeGuards,
  numberLackGuard,
  guardsAllocated,
  setGuardsAllocated,
}) => {
  const handlePickGuard = (guardId, firstName, lastName) => {
    // If guard is not exist guardsAllocated list --> Push to state array
    const isInclude = guardsAllocated.find((e) => e.guardId === guardId);

    if (!isInclude) {
      setGuardsAllocated((guardsAllocated) => [
        ...guardsAllocated,
        { guardId, firstName, lastName },
      ]);
    }
  };

  const BodyTable = () =>
    freeGuards.map((freeGuard) => (
      <tbody>
        <BodyTableRow
          key={freeGuard.guard_id}
          guardId={freeGuard.guard_id}
          firstName={freeGuard.firstname}
          lastName={freeGuard.lastname}
          gender={freeGuard.gender}
          address={freeGuard.address}
          salary={freeGuard.salary}
        />
      </tbody>
    ));

  const BodyTableRow = ({
    guardId,
    firstName,
    lastName,
    gender,
    address,
    salary,
  }) => {
    const isDisabledPick =
      guardsAllocated.includes(guardId) || numberLackGuard === 0;

    return (
      <tr className="h-8">
        <td className="border-gray-300 pl-2">{firstName}</td>

        <td className="border-gray-300 pl-2">{lastName}</td>

        <td className="border-gray-300 flex justify-center">
          {gender ? "Male" : "Female"}
        </td>

        <td className="border-gray-300">{amountFormatting(salary)}</td>

        <td className="border-gray-300 flex justify-center">{address}</td>

        <td className=" border-gray-300">
          <button
            onClick={() => handlePickGuard(guardId, firstName, lastName)}
            className={`${
              isDisabledPick
                ? "text-gray-300"
                : "text-blue-600 hover:bg-blue-100"
            } rounded-full text-xs ml-2`}
            disabled={isDisabledPick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="w-[98%] mt-4 bg-white border border-gray-300 [&>*:nth-child(odd)]:bg-gray-100">
      <thead>
        <tr className="border border-gray-300 ">{HeaderTable}</tr>
      </thead>
      {freeGuards.length > 0 && <BodyTable />}
    </table>
  );
};

export default TableFreeGuards;
