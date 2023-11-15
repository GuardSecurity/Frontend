function BaseInput({
  required,
  label,
  type,
  classExtend,
  classInput,
  error,
  ...other
}) {
  return (
    <div className={classExtend}>
      <div className="text-gray-400 leading-7 mb-1">{label}</div>
      <input
        type={type || "text"}
        className={`h-11 px-4 py-2 bg-white rounded border border-orange-400 w-full ${classInput}`}
        {...(required && required)}
        {...other}
      ></input>
      {error && <div className="text-red-400 mt-2">{error}</div>}
    </div>
  );
}

export default BaseInput;
