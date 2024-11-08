import PropTypes from "prop-types";

export default function AuthSubmitBtnComponent({ label }) {
    return (
        <button type="submit" className="auth-btn">
            {label}
        </button>
    );
}

AuthSubmitBtnComponent.propTypes = {
    label: PropTypes.string.isRequired,
};