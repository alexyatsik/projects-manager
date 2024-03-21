import classes from "./Sidebar.module.css";
import Button from "../Button/Button.jsx";

export default function Sidebar({ createSetter, projectsList }) {
	return (
		<aside className={classes.aside}>
			<h1 className={classes.header}>Your Projects</h1>
			<Button text="+ Add Project" className="side-bar" onClick={createSetter}/>
			<ul>
				{projectsList.map(project => (
					<li key={project.title}>{project.title}</li>
				))}
			</ul>
		</aside>
	);
}