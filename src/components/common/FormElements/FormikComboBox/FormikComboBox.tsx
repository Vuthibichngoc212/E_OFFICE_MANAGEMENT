import { FormControl, FormHelperText, Typography, Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Field, useFormikContext } from 'formik';
import { get } from 'lodash';
import theme from '@/themes/theme.d';

interface FormikComboboxProps {
	fullWidth?: boolean;
	defaultLabel?: string;
	topLabel?: string;
	id?: string;
	name: string;
	variant?: 'filled' | 'outlined' | 'standard';
	options: { value: any; label: string }[];
	placeholder?: string;
	minWidth?: string;
	size?: string;
	sxPropsLabel?: any;
	isShrinkInputLabel?: boolean;
	required?: boolean;
	customComponentStyles?: any;
	[x: string]: any;
	triggerOnChange?: any;
}
const FormikComboBox = ({
	fullWidth,
	required,
	topLabel,
	defaultLabel,
	id,
	name,
	variant = 'outlined',
	options,
	placeholder,
	isShrinkInputLabel = false,
	minWidth = '120px',
	customComponentStyles,
	triggerOnChange,
	...props
}: FormikComboboxProps) => {
	const { errors, touched, values, handleBlur, setFieldValue } = useFormikContext();
	const error = get(errors, name) && get(touched, name);
	const errorText = get(errors, name);

	const getOptionLabel = (type: number) => {
		const optionValue = options.find((option: { value: number }) => option.value == type);
		return optionValue?.label;
	};

	return (
		<FormControl sx={{ minWidth: { minWidth } }} fullWidth={fullWidth}>
			{topLabel && (
				<Typography
					variant='body2_regular'
					sx={{ mb: '0.4rem', display: 'block', color: theme.palette.neutral.coolGray }}
				>
					{topLabel}
					{required && (
						<Typography sx={{ color: 'red', position: 'relative', top: '-2px' }} component='span'>
							*
						</Typography>
					)}
				</Typography>
			)}
			<Field
				required={required}
				component={Autocomplete}
				label_id={`label-${id || name}`}
				id={id || name}
				name={name}
				options={options}
				getOptionLabel={(option: { label: any; name: any }) =>
					option.label || getOptionLabel(get(values, name)) || option.name || ''
				}
				isOptionEqualToValue={(option: { id: any }, value: { id: any }) => option?.id == value?.id}
				onBlur={handleBlur}
				onChange={(e: any, value: { value: any }) => {
					setFieldValue(name, value?.value, false);
					setTimeout(() => {
						const activeElement = document.activeElement as HTMLElement;
						if (activeElement && activeElement.blur) {
							activeElement.blur();
						}
					}, 0);
					if (triggerOnChange) {
						triggerOnChange(e, value);
					}
				}}
				ListboxProps={{
					style: {
						maxHeight: '370px'
					}
				}}
				value={get(values, name) || ''}
				renderInput={(params: any) => (
					<TextField
						error={error}
						variant={variant}
						label={defaultLabel}
						placeholder={placeholder}
						sx={{
							'& .MuiInputBase-root.MuiOutlinedInput-root': {
								height: '4rem',
								fontSize: '1.4rem',
								borderRadius: '0.8rem',
								...customComponentStyles
							},
							'& .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
								borderColor: error ? 'red !important' : 'rgba(0, 0, 0, 0.23)'
							}
						}}
						InputLabelProps={{ shrink: isShrinkInputLabel }}
						{...params}
					/>
				)}
				{...props}
			/>
			{error && (
				<FormHelperText
					sx={{
						margin: 0,
						marginTop: '0.5rem',
						'&.MuiFormHelperText-root': {
							marginLeft: 0,
							fontSize: '1.1rem'
						}
					}}
					error
				>
					{errorText}
				</FormHelperText>
			)}
		</FormControl>
	);
};
export default FormikComboBox;
