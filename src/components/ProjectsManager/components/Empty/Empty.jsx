import classes from "./Empty.module.css";
import Button from "../Button/Button.jsx";

export default function Empty() {
	return (
		<div className={classes['empty-project']}>
			<img className={classes.image} src="/src/components/ProjectsManager/assets/no-projects.png" alt="Tablet with pen and a piece of paper"/>
			<span className={classes.description}>Select a project or get started with a new one</span>
			<Button text="Create new project" className="create-new-project"/>
		</div>
	);
}