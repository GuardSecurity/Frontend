function BaseButton({ content, className, onClick, disabled, ...other }) {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`relative flex-shrink-0 text-white w-24 h-10 px-6 py-2.5 rounded-lg justify-center items-center gap-2.5 inline-flex ${
        disabled && "bg-gray-400"
      } ${className}`}
      onClick={onClick && onClick}
      {...other}
    >
      {content}
    </button>
  );
}

export default BaseButton;
