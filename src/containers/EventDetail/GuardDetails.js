import { useEffect, useState } from "react";

import { getGuardDetailById } from "../../utils/booking";
import Descriptions from "../../components/Descriptions";
import {
  amountFormatting,
  valueToLabelGender,
  valueToLabelGuardStatus,
} from "../../utils/formatHelper";

function GuardDetails({ guardId }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getGuardDetailData();
  }, []);

  if (!guardId) return null;

  const getGuardDetailData = async () => {
    try {
      const res = await getGuardDetailById({ guardId });
      setDetail(res?.data || {});
    } catch (error) {
      console.error(error);
    }
  };

  console.log("detail", detail);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Descriptions
        title="Name"
        content={detail?.firstname + " " + detail?.lastname}
      />
      <Descriptions title="Date of birth" content={detail?.dob} />
      <Descriptions
        title="Gender"
        content={valueToLabelGender(detail?.gender)}
      />
      <Descriptions title="Salary" content={amountFormatting(detail?.salary)} />
      <Descriptions title="Address" content={detail?.address} />
      <Descriptions title="Phone" content={detail?.phone} />
      <Descriptions
        title="Status"
        content={valueToLabelGuardStatus(detail?.status)}
      />
    </div>
  );
}

export default GuardDetails;
