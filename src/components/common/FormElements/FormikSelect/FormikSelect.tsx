import { FormControl, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { get } from 'lodash';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const FormikSelect = ({
	fullWidth,
	label,
	id,
	name,
	displayEmpty = true,
	variant = 'filled',
	options,
	placeholder,
	disableValuePlaceholder = true,
	haveFunctionGoWithOnChange = false,
	functionsGoWithOnChange,
	sxPropsLabel,
	disableField = false,
	...props
}) => {
	const { errors, touched, values, handleChange, handleBlur } = useFormikContext();

	const error = get(errors, name) && get(touched, name);
	const errorText = get(errors, name);

	return (
		<FormControl sx={{ minWidth: 120 }} fullWidth={fullWidth}>
			{label && (
				<Typography mb={1} sx={sxPropsLabel}>
					<label htmlFor={`label-${id || name}`}>{label}</label>
				</Typography>
			)}

			<Field
				label=''
				disabled={disableField}
				displayEmpty={displayEmpty}
				label_id={`label-${id || name}`}
				component={Select}
				onChange={(e: any) => {
					handleChange(e);
					if (haveFunctionGoWithOnChange) {
						functionsGoWithOnChange();
					}
				}}
				onBlur={handleBlur}
				id={id || name}
				name={name}
				variant={variant}
				error={!!error}
				value={get(values, name)}
				inputProps={{
					name
				}}
				{...props}
			>
				<MenuItem value='' disabled={disableValuePlaceholder} selected>
					<Typography>{placeholder}</Typography>
				</MenuItem>
				{options.map(
					(option: {
						value: any;
						label:
							| string
							| number
							| boolean
							| ReactElement<any, string | JSXElementConstructor<any>>
							| Iterable<ReactNode>
							| ReactPortal
							| null
							| undefined;
					}) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					)
				)}
			</Field>
			{error && (
				<FormHelperText
					sx={{
						position: 'absolute',
						bottom: 0,
						transform: 'translateY(100%)',
						margin: 0
					}}
					error
				>
					{errorText}
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default FormikSelect;
