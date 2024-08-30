import HeaderTitle from '@/components/layout/HeaderTitle/HeaderTitle';
import FormikTextField from '@/components/common/FormElements/FormikTextField/FormikTextField';
import { Box, Card, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import bg from '@/assets/images/banner.jpg';
import logo from '@/assets/images/logo-2.png';
// import theme from '@/themes/theme.d';
import LoadingButton from '@mui/lab/LoadingButton';
import { LoginRequestBody } from '../../types/auth.types';
import { loginSchema } from '../../helpers/validation-schema.helpers';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SignInScreen = () => {
	const methods = useForm({
		resolver: yupResolver(loginSchema)
	});

	return (
		<FormProvider {...methods}>
			<Box sx={{ maxHeight: '99vh' }}>
				<Grid container>
					<Grid item md={6}>
						<Box
							sx={{
								height: '100vh',
								width: '100%',
								'& img': {
									height: '100%',
									width: '100%'
								}
							}}
						>
							<img src={bg} alt="bg" />
						</Box>
					</Grid>
					<Grid
						item
						md={6}
						sx={{
							position: 'relative',
							placeItems: 'center',
							display: 'grid',
							padding: '0 6rem',
							height: '100vh'
						}}
					>
						<Card sx={{ width: '49.4rem', padding: '6.4rem 4rem' }}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mb: '3.6rem'
								}}
							>
								<img src={logo} alt="logo" />
							</Box>
							<Box>
								<HeaderTitle
									title="Đăng nhập"
									variant="heading1_bold"
									customStyles={{
										marginBottom: '2.8rem',
										textAlign: 'center',
										mb: '3.2rem'
									}}
								/>
								<Formik
									initialValues={{ email: '', password: '' }}
									validationSchema={loginSchema}
									onSubmit={(values: LoginRequestBody) => {
										// handleSubmit(values);
										console.log(values);
									}}
								>
									{({ values, setFieldValue, handleBlur }) => (
										<Form>
											<FormikTextField
												fullWidth
												size="small"
												variant="outlined"
												id="email"
												topLabel="Email"
												name="email"
												placeholder="Nhập email"
												onBlur={(e: any) => {
													handleBlur(e);
													setFieldValue('email', values.email.trim(), true);
												}}
												sx={{ marginBottom: '2.4rem' }}
											/>
											<FormikTextField
												fullWidth
												size="small"
												variant="outlined"
												name="password"
												topLabel="Mật khẩu"
												placeholder="Nhập mật khẩu"
												id="password"
												type={'password'}
												sx={{
													marginBottom: '1.6rem'
												}}
											/>
											<FormControlLabel
												sx={{
													mb: '3.2rem',
													'& .MuiTypography-root': {
														fontSize: '1.4rem',
														fontWeight: 400,
														display: 'block'
													},
													'& svg': {
														fontSize: '2.4rem'
													}
												}}
												control={<Checkbox disabled />}
												label="Đăng nhập bằng tài khoản nội bộ"
											/>
											<LoadingButton
												fullWidth
												variant="contained"
												// loading={isPendingSignIn}
												type="submit"
												sx={{
													background: 'black',
													'&:hover': {
														background: 'black'
													}
												}}
											>
												Đăng nhập
											</LoadingButton>
										</Form>
									)}
								</Formik>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</FormProvider>
	);
};

export default SignInScreen;
