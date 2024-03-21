import Sidebar from "./components/Sidebar/Sidebar.jsx";
import classes from './ProjectsManager.module.css';
import {useState} from "react";
import Empty from "./components/Empty/Empty.jsx";
import Create from "./components/Create/Create.jsx";
import Selected from "./components/Selected/Selected.jsx";

export default function ProjectsManager() {
	const [projects, setProjects] = useState([]);
	const [state, setState] = useState("empty");

	function setCreateState() {
		setState('create');
	}

	function setEmptyState() {
		setState('empty');
	}

	function addNewProjectHandler() {
		console.log('addNewProjectHandler');
	}

	let content;
	switch(state) {
		case "empty":
			content = <Empty createSetter={setCreateState} />
			break;
		case "create":
			content = <Create emptySetter={setEmptyState} addNewProjectHandler={addNewProjectHandler} />
			break;
		case "selected":
			content = <Selected />
	}

	return (
		<div className={classes['projects-manager']}>
			<Sidebar createSetter={setCreateState} projectsList={projects} />
			{content}
		</div>
	);
}