import Descriptions from "../../../components/Descriptions";
import {
  amountFormatting,
  valueToLabelGender,
  valueToLabelGuardStatus,
} from "../../../utils/formatHelper";

function GuardDetail({ details }) {
  const {
    address,
    dob,
    firstname,
    gender,
    img,
    lastname,
    phone,
    salary,
    status,
  } = details;

  return (
    <div className="grid grid-cols-2 gap-4">
      <Descriptions title="Name" content={firstname + " " + lastname} />
      <Descriptions title="Date of birth" content={dob} />
      <Descriptions title="Gender" content={valueToLabelGender(gender)} />
      <Descriptions title="Salary" content={amountFormatting(salary)} />
      <Descriptions title="Address" content={address} />
      <Descriptions title="Phone" content={phone} />
      <Descriptions title="Status" content={valueToLabelGuardStatus(status)} />
    </div>
  );
}

export default GuardDetail;
