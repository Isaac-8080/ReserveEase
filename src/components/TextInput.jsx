
const TextInput = ({ value, onChange, ...props }) => {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        required
        placeholder={props.placeholder}
        className={props.inputStyle}
        value={value} 
        onChange={onChange} 
      />
    </>
  );
};

export default TextInput
