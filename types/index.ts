export interface ModalFormProp {
	FormHeader: string;
	inputForm: {
		label: string;
		type: string;
		name: string;
		value: string;
	}[];
	funcHandleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	funcOnSubmit: () => void;
}