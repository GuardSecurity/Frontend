const CheckBox = ({ className, isChecked, label }) => {
  const bg = isChecked ? "[#3A57E8]" : "white";

  return (
    <div class={`flex flex-wrap justify-center items-center ${className}`}>
      <div
        class={`w-4 h-4 bg-${bg} rounded-sm shadow border border-gray-400 justify-center items-center inline-flex`}
      >
        <div class="w-4 h-4 relative shadow"></div>
      </div>
      {label && label}
    </div>
  );
};

export default CheckBox;
