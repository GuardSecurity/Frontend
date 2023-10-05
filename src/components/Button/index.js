function BaseButton({ content, className, bg = "#C7923E" }) {
  return (
    <button
      type="button"
      className={`relative flex-shrink-0 rounded-full text-white bg-[${bg}] w-24 h-10 px-6 py-2.5 rounded-lg justify-center items-center gap-2.5 inline-flex ${className}`}
    >
      {content}
    </button>
  );
}

export default BaseButton;
