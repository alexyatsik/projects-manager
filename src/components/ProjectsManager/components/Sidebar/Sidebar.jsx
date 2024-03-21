import classes from "./Sidebar.module.css";
import Button from "../Button/Button.jsx";

export default function Sidebar() {
	return (
		<aside className={classes.aside}>
			<h1 className={classes.header}>Your Projects</h1>
			<Button text="+ Add Project" className="side-bar"/>
		</aside>
	);
}