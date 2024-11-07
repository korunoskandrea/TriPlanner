import PropTypes from 'prop-types';

export default function InputField({label, type, value, onChange}) {
    return (
        <div className="input-field-container">
            <legend className="input-field-label">{label}</legend>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder={label}
                className="input-field"
            />
        </div>
    );
}
InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}