/* eslint-disable react/prop-types */
const FormCheckbox = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control grid place-items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  )
}
export default FormCheckbox
