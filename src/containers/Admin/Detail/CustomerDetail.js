import Descriptions from "../../../components/Descriptions";
import {
  amountFormatting,
  valueToLabelGender,
  valueToLabelGuardStatus,
} from "../../../utils/formatHelper";

function CustomerDetail({ details }) {
  console.log("details", details);
  const { address, dob, firstname, gender, img, lastname, phone } = details;

  return (
    <div className="grid grid-cols-2 gap-4">
      <Descriptions title="Name" content={firstname + " " + lastname} />
      <Descriptions title="Date of birth" content={dob} />
      <Descriptions title="Gender" content={valueToLabelGender(gender)} />
      <Descriptions title="Address" content={address} />
      <Descriptions title="Phone" content={phone} />
    </div>
  );
}

export default CustomerDetail;
