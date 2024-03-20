import styled from "styled-components";

const Aside = styled.aside`
  position: absolute;
	bottom: 0;
	left: 0;
	width: 400px;
	height: 95%;
	background-color: black;
	border-radius: 0 30px 0 0;
	padding: 100px 50px 0;
`;

const Header = styled.header`
	text-transform: uppercase;
	font-size: 30px;
	font-weight: 600;
	color: white;
`;

export default function SideBar() {
	return (
		<Aside>
			<Header>Your Projects</Header>
		</Aside>
	);
}