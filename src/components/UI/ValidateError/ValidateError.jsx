function ValidateError({ errors }) {
  return (
    <p style={{ color: 'red' }}>
      <span>{errors}</span>
    </p>
  );
}

export default ValidateError;
