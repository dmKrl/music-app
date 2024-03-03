function ModalInput(props) {
  const { className, type, name, placeholder, onChange } = props;
  return (
    <input
      className={className}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default ModalInput;
