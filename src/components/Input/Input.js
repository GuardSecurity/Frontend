function BaseInput({ label, type, classExtend, classInput }) {
  return (
    <div class={classExtend}>
      <div class="text-gray-400  leading-7 mb-2">{label}</div>
      <input
        type={type || "text"}
        class={`h-11 px-4 py-2 bg-white rounded border border-orange-400 ${classInput}`}
      ></input>
    </div>
  );
}

export default BaseInput;
