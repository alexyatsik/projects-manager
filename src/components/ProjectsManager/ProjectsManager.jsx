import Sidebar from "./components/Sidebar/Sidebar.jsx";
import classes from './ProjectsManager.module.css';

export default function ProjectsManager() {
	return (
		<div className={classes['projects-manager']}>
			<Sidebar />
		</div>
	);
}