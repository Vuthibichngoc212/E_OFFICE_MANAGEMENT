import HeaderTitle from '@/components/layout/HeaderTitle/HeaderTitle';
import FormikTextField from '@/components/common/FormElements/FormikTextField/FormikTextField';
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import bg from '@/assets/images/lgImg.svg';
import LoadingButton from '@mui/lab/LoadingButton';
import { LoginRequestBody } from '../../types/auth.types';
import { loginSchema } from '../../helpers/validation-schema.helpers';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { loginActions } from '@/redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignInScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLoggingIn = useSelector((state: RootState) => state.auth.isLoggingIn);

	const methods = useForm({
		resolver: yupResolver(loginSchema)
	});

	const handleSubmit = async (values: LoginRequestBody) => {
		try {
			await dispatch(loginActions.fetchLoginRequest(values));
			toast.success('Đăng nhập thành công!');
			setTimeout(() => {
				navigate('/dashboard');
			}, 1000);
		} catch (error) {
			toast.error('Đăng nhập thất bại. Vui lòng kiểm tra thông tin!');
		}
	};

	return (
		<FormProvider {...methods}>
			<Box sx={{ maxHeight: '100vh', backgroundColor: '#DEEBFB' }}>
				<Grid container>
					<Grid item md={6}>
						<Box
							sx={{
								height: '100%',
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
							height: '100vh',
							backgroundColor: '#FFFFFF',
							borderTopLeftRadius: '60px',
							borderBottomLeftRadius: '60px'
						}}
					>
						{/* <Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mb: '3.6rem'
								}}
							>
								<img src={logo} alt="logo" />
							</Box> */}
						<Box>
							<Box>
								<HeaderTitle title="Xin chào" variant="heading1_bold" />
								<Typography sx={{ fontSize: '16px' }}>Chào mừng bạn đã quay trở lại!</Typography>
							</Box>
							<Formik
								initialValues={{ email: '', password: '' }}
								validationSchema={loginSchema}
								onSubmit={handleSubmit}
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
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center'
											}}
										>
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
												label="Ghi nhớ mật khẩu"
											/>
											<Typography
												sx={{
													fontSize: '1.4rem',
													fontWeight: 400,
													cursor: 'pointer',
													color: 'blue',
													mb: '3.2rem'
												}}
												onClick={() => {
													console.log('Quên mật khẩu được nhấn');
												}}
											>
												Quên mật khẩu?
											</Typography>
										</Box>
										<LoadingButton
											fullWidth
											variant="contained"
											// loading={loading}
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
					</Grid>
				</Grid>
			</Box>
		</FormProvider>
	);
};

export default SignInScreen;
