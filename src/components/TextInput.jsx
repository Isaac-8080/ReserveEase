
const TextInput = (props) => {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        required
        placeholder={props.placeholder}
        className={props.inputStyle}
      />
    </>
  )
}

export default TextInput
