import PropTypes from 'prop-types';

export default function InputField({label, type, value, onChange}) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                className="form-control"
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