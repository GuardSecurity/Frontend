const CheckBox = ({ classNameName, isChecked, label, onCheck }) => {
  const bg = isChecked ? "[#3A57E8]" : "white";

  return (
    <div
      className={`flex flex-wrap justify-center items-center ${classNameName}`}
      onClick={onCheck && onCheck}
    >
      <div
        className={`w-4 h-4 bg-${bg} rounded-sm shadow border border-gray-400 justify-center items-center inline-flex`}
      >
        <div className="w-4 h-4 relative shadow"></div>
      </div>
      {label && label}
    </div>
  );
};

export default CheckBox;
