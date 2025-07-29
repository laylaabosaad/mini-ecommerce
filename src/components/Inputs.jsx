function Inputs({ htmlFor, type, name, title }) {
  return (
    <>
      <label htmlFor={htmlFor}> {title}</label>
      <input type={type} name={name} />
    </>
  );
}

export default Inputs;
