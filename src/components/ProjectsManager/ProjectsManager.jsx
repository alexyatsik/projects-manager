import Sidebar from "./components/Sidebar/Sidebar.jsx";
import classes from './ProjectsManager.module.css';
import {useState} from "react";
import Empty from "./components/Empty/Empty.jsx";
import Create from "./components/Create/Create.jsx";
import Selected from "./components/Selected/Selected.jsx";

export default function ProjectsManager() {
	const [state, setState] = useState("empty");

	let content;
	switch(state) {
		case "empty":
			content = <Empty />
			break;
		case "create":
			content = <Create />
			break;
		case "selected":
			content = <Selected />
	}

	return (
		<div className={classes['projects-manager']}>
			<Sidebar />
			{content}
		</div>
	);
}