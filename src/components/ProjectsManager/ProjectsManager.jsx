import SideBar from "./components/SideBar.jsx";
import styled from "styled-components";
import "./projects-manager.css";

const Manager = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	font-family: Arial;
`;

export default function ProjectsManager() {
	return (
		<Manager>
			<SideBar />
		</Manager>
	);
}