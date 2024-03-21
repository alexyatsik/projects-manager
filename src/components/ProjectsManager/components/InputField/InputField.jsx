import classes from "./InputField.module.css"

export default function InputField({ type, label }) {
	return (
		<div className={classes['input-field']}>
			<label className={classes.label}>{label}</label>
			<input className={classes.input} type={type} name={label} />
		</div>

	);
}