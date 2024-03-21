import classes from "./Create.module.css";
import Button from "../Button/Button.jsx";
import InputField from "../InputField/InputField.jsx";

export default function Create({ emptySetter, addNewProjectHandler }) {
	return (
		<div className={classes['create-project']}>
			<form>
				<div className={classes.buttons}>
					<Button text="Cancel" className={'create-cancel'} onClick={emptySetter} />
					<Button text="Save" className={'create-save'} onClick={addNewProjectHandler} />
				</div>
				<div className={classes.inputs}>
					<InputField label="title" type="text" />
					<InputField label="description" type="textarea" />
					<InputField label="due date" type="date" />
				</div>
			</form>
		</div>
	);
}