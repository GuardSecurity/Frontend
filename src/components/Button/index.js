function BaseButton({ content, className, onClick }) {
  return (
    <button
      type="button"
      className={`relative flex-shrink-0 text-white w-24 h-10 px-6 py-2.5 rounded-lg justify-center items-center gap-2.5 inline-flex ${className}`}
      onClick={onClick && onClick}
    >
      {content}
    </button>
  );
}

export default BaseButton;
