import classes from "./Button.module.css";

export default function Button({ text, onClick, className }) {
	return (
		<button className={`${classes.button} ${classes[className]}`} onClick={onClick}>{text}</button>
	);
}