
const TextInput = (props) => {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        required
        autoComplete={props.autoComplete}
        className="block w-full rounded-lg border-0 bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </>
  )
}

export default TextInput
