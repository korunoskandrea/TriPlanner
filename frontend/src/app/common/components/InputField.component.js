import PropTypes from 'prop-types';

export default function InputField({label, type, value, onChange}) {
    return (
        <div>
            <legend>{label}</legend>
            <input
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                required
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