import { Box, Typography, Avatar } from '@mui/material';
import baner from '@/assets/images/image.png';
import notiAvatar from '@/assets/icons/Avatar.svg';

const statusData = [
	{
		label: 'Văn bản cần duyệt',
		count: '1,234',
		increment: '8',
		color: '#E4FAFF',
		icon: '📄'
	},
	{
		label: 'Nhiệm vụ được giao',
		count: '1,234',
		increment: '8',
		color: '#FEF6EE',
		icon: '📄'
	},
	{
		label: 'Văn bản cần ký',
		count: '1,234',
		increment: '8',
		color: '#F5ECFE',
		icon: '📄'
	},
	{
		label: 'Từ chối',
		count: '524',
		increment: '8',
		color: '#FEF3F2',
		icon: '🚫'
	}
];

const notifications = [
	{ id: 1, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' },
	{ id: 2, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' },
	{ id: 3, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' },
	{ id: 4, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' },
	{ id: 5, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' }
	// { id: 6, text: 'Thông báo nội dung học tập Tiếng Anh tuần 36', time: '36 phút trước' }
];

const meetings = [
	{
		id: 1,
		name: 'Họp triển khai dự án PhenikaaMEC',
		time: '15:30 - 16:30 20/09/2024',
		location: 'Phòng họp tầng 12 - A10',
		attendees: 'Toàn bộ CBNV PHX'
	},
	{
		id: 2,
		name: 'Họp triển khai dự án PhenikaaMEC',
		time: '15:30 - 16:30 20/09/2024',
		location: 'Phòng họp tầng 12 - A10',
		attendees: 'Toàn bộ CBNV PHX'
	},
	{
		id: 3,
		name: 'Họp triển khai dự án PhenikaaMEC',
		time: '15:30 - 16:30 20/09/2024',
		location: 'Phòng họp tầng 12 - A10',
		attendees: 'Toàn bộ CBNV PHX'
	},
	{
		id: 4,
		name: 'Họp triển khai dự án PhenikaaMEC',
		time: '15:30 - 16:30 20/09/2024',
		location: 'Phòng họp tầng 12 - A10',
		attendees: 'Toàn bộ CBNV PHX'
	},
	{
		id: 5,
		name: 'Họp triển khai dự án PhenikaaMEC',
		time: '15:30 - 16:30 20/09/2024',
		location: 'Phòng họp tầng 12 - A10',
		attendees: 'Toàn bộ CBNV PHX'
	}
];

const Home = () => {
	return (
		<Box>
			<Box
				sx={{
					width: '97w',
					height: '340px',
					'& img': {
						width: '100%',
						height: '100%'
					}
				}}
			>
				<img src={baner} alt="baner" />
			</Box>
			<Box display="flex" justifyContent="space-between" mt={2}>
				{statusData.map((status, index) => (
					<Box
						key={index}
						bgcolor={status.color}
						borderRadius="8px"
						p={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						flex={1}
						mx={1}
					>
						<Box display="flex" width="100%">
							<Typography variant="h4" component="div">
								{status.icon}
							</Typography>
							<Typography variant="body1">{status.label}</Typography>
						</Box>
						<Box
							sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '12px' }}
						>
							<Typography variant="subtitle2" sx={{ color: '#17B26A', fontSize: '16px' }}>
								<span style={{ width: '7px', height: '7px' }}>+</span>
								{status.increment}
							</Typography>
							<Typography
								variant="h5"
								sx={{ color: '#213970', fontWeight: 'bold', fontSize: '32px', marginLeft: '12px' }}
							>
								{status.count}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>

			<Box sx={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
				<Box flex={1} mr={2}>
					<Box
						sx={{
							backgroundColor: '#FFFFFF',
							borderRadius: '8px',
							boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
						}}
					>
						<Box
							sx={{
								display: 'flex',
								padding: '16px',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<Typography
								variant="h6"
								sx={{ fontWeight: '600', color: '#1C2A4F', fontSize: '18px', lineHeight: '23px' }}
							>
								Thông báo
							</Typography>
							<Typography
								variant="body2"
								sx={{ cursor: 'pointer', color: '#498CE8', fontSize: '14px', ineHeight: '18px' }}
							>
								Xem tất cả
							</Typography>
						</Box>
						{notifications.map((notification) => (
							<Box
								key={notification.id}
								display="flex"
								alignItems="center"
								sx={{ backgroundColor: '#FEF6EE', marginBottom: '4px', padding: '12px 16px' }}
							>
								<Avatar src={notiAvatar} />
								<Box ml={2}>
									<Typography
										variant="body1"
										sx={{ fontSize: '14px', lineHeight: '18px', color: '#1C2A4F' }}
									>
										{notification.text}
									</Typography>
									<Typography
										variant="caption"
										color="textSecondary"
										sx={{ fontSize: '12px', lineHeight: '16px', color: '#92939E' }}
									>
										{notification.time}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>

				<Box flex={2} ml={2}>
					<Box
						sx={{
							backgroundColor: '#FFFFFF',
							borderRadius: '8px',
							boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
						}}
					>
						<Box
							sx={{
								display: 'flex',
								padding: '16px',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<Typography
								variant="h6"
								sx={{ fontWeight: '600', color: '#1C2A4F', fontSize: '18px', lineHeight: '23px' }}
							>
								Lịch họp sắp tới
							</Typography>
							<Typography
								variant="body2"
								sx={{ cursor: 'pointer', color: '#498CE8', fontSize: '14px', ineHeight: '18px' }}
							>
								Xem tất cả
							</Typography>
						</Box>
						<Box display="flex" fontWeight="bold" mb={2}>
							<Typography variant="body2" width="10%">
								STT
							</Typography>
							<Typography variant="body2" width="30%">
								Tên cuộc họp
							</Typography>
							<Typography variant="body2" width="20%">
								Thời gian
							</Typography>
							<Typography variant="body2" width="20%">
								Địa điểm
							</Typography>
							<Typography variant="body2" width="20%">
								Thành phần tham gia
							</Typography>
						</Box>
						{meetings.map((meeting, index) => (
							<Box
								display="flex"
								alignItems="center"
								mb={2}
								key={meeting.id}
								p={1}
								borderRadius="8px"
								bgcolor="#F9FAFB"
							>
								<Typography variant="body2" width="10%">
									{index + 1}
								</Typography>
								<Typography variant="body2" width="30%">
									{meeting.name}
								</Typography>
								<Typography variant="body2" width="20%">
									{meeting.time}
								</Typography>
								<Typography variant="body2" width="20%">
									{meeting.location}
								</Typography>
								<Typography variant="body2" width="20%">
									{meeting.attendees}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
