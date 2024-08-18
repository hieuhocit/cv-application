export default function InputGroup({ type, title, value, name, onChange, placeholder}) {
  return (
    <>
      <label>
        {title}
        {type === 'textarea' ? (
          <textarea
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </label>
    </>
  );
}
