-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2026 at 07:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcerp_hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `login_tokens`
--

CREATE TABLE `login_tokens` (
  `id` int(11) NOT NULL,
  `employee_id` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `level` int(11) NOT NULL,
  `token` varchar(32) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_tokens`
--

INSERT INTO `login_tokens` (`id`, `employee_id`, `fullname`, `username`, `level`, `token`, `created_at`) VALUES
(24, 'TCERP002', 'Santosh Kumar', '', 3, '07482fafcd0b9626ac87a0019cdb1ae7', '2026-03-17 07:23:16'),
(32, 'TCERP001', 'sai rupesh', '', 3, '2f741fc9c185f52cefcc4a100e5295fc', '2026-03-26 06:13:07'),
(34, 'TCERP004', 'HR', '', 2, '213434e2363eefc7f263c16554450629', '2026-03-26 12:59:30'),
(35, 'admin', 'admin', '', 1, '1d6347b8a32be09b8007ad27c375aa84', '2026-03-27 06:56:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_assets`
--

CREATE TABLE `tbl_assets` (
  `asset_id` int(11) NOT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `asset_name` varchar(255) NOT NULL,
  `allocated_date` date DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_assets`
--

INSERT INTO `tbl_assets` (`asset_id`, `emp_id`, `asset_name`, `allocated_date`, `remarks`, `created_at`) VALUES
(1, 'TCERP001', 'Laptop', '2025-08-11', 'Laptop', '2025-04-29 12:16:56'),
(4, 'TCERP001', 'mobile phone', '2025-08-11', 'mobile phone', '2025-04-29 12:16:56'),
(5, 'TCERP002', 'mobile phone', '2025-08-11', 'mobile phone', '2025-04-29 12:16:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attendance`
--

CREATE TABLE `tbl_attendance` (
  `id` int(11) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `att_date` datetime NOT NULL,
  `att_status` int(10) NOT NULL COMMENT '0=clock in ,1=clock out',
  `location` varchar(100) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_companys`
--

CREATE TABLE `tbl_companys` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_image` varchar(250) NOT NULL,
  `registration_number` varchar(30) NOT NULL,
  `tax_id` varchar(30) DEFAULT NULL,
  `founded_date` date DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `country` varchar(50) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_department`
--

CREATE TABLE `tbl_department` (
  `id` int(50) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `status` int(15) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_department`
--

INSERT INTO `tbl_department` (`id`, `department_name`, `status`, `created_at`) VALUES
(2, 'IT', 1, '2025-04-28 19:28:41'),
(3, 'HR', 0, '2025-04-28 19:28:33');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employees`
--

CREATE TABLE `tbl_employees` (
  `user_id` int(11) NOT NULL,
  `employee_id` varchar(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL,
  `office_email` varchar(100) DEFAULT NULL,
  `personal_email` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `pan_card_no` varchar(20) DEFAULT NULL,
  `department_id` varchar(25) NOT NULL,
  `position_id` varchar(25) NOT NULL,
  `aadhar_card_no` varchar(20) DEFAULT NULL,
  `passport` varchar(20) DEFAULT NULL,
  `bank_name` varchar(50) DEFAULT NULL,
  `bank_account_number` varchar(30) DEFAULT NULL,
  `bank_ifsc_code` varchar(20) DEFAULT NULL,
  `basic_salary` decimal(12,2) DEFAULT NULL,
  `special_allowance` decimal(12,2) DEFAULT NULL,
  `conveyance_allowance` decimal(12,2) DEFAULT NULL,
  `food_allowance` decimal(12,2) DEFAULT NULL,
  `medical_reimbursement` decimal(12,2) DEFAULT NULL,
  `hra` decimal(12,2) DEFAULT NULL,
  `medical_insurance_income` decimal(12,2) DEFAULT NULL,
  `other_special_allowance` decimal(12,2) DEFAULT NULL,
  `pf_employee_contribution` decimal(12,2) DEFAULT NULL,
  `professional_tax` decimal(12,2) DEFAULT NULL,
  `total_salary` varchar(95) NOT NULL,
  `reporting_manager_id` varchar(20) DEFAULT NULL,
  `reporting_tl_id` varchar(20) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `marital_status` varchar(20) DEFAULT NULL,
  `blood_group` varchar(5) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `profile_image` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_employees`
--

INSERT INTO `tbl_employees` (`user_id`, `employee_id`, `first_name`, `last_name`, `gender`, `address`, `mobile_number`, `office_email`, `personal_email`, `birth_date`, `pan_card_no`, `department_id`, `position_id`, `aadhar_card_no`, `passport`, `bank_name`, `bank_account_number`, `bank_ifsc_code`, `basic_salary`, `special_allowance`, `conveyance_allowance`, `food_allowance`, `medical_reimbursement`, `hra`, `medical_insurance_income`, `other_special_allowance`, `pf_employee_contribution`, `professional_tax`, `total_salary`, `reporting_manager_id`, `reporting_tl_id`, `notes`, `marital_status`, `blood_group`, `status`, `profile_image`, `created_at`, `updated_at`) VALUES
(1, 'TCERP001', 'kovvuri', 'sairupesh', 'Male', '7-33-153', '9121914017', 'kovvurisairupesh@gmail.com', 'kovvurisairupesh@gmail.com', '1999-12-29', 'EGBPR9971Q', '1', '1', '945678914521', '', 'SBI', '94404745848', 'SBIN0000758', 15000.00, 5703.00, 1000.00, 1000.00, 1250.00, 7500.00, 1257.00, 1800.00, 1800.00, 200.00, '34510', 'TCERP003', 'TCERP002', '', 'Single', 'O+', 0, NULL, '2025-04-26 14:09:31', '2025-08-11 11:49:06'),
(2, 'TCERP002', 'Santosh ', 'Kumar', 'Male', '7-33-153', '9121914017', 'Santosh@gmail.com', 'Santosh@techclouderp.com', '1999-12-29', 'EGBPR9971Q', '1', '1', '945678914521', '', 'RBL', '94404745848', 'SBIN0000758', 15000.00, 5703.00, 1000.00, 1000.00, 1250.00, 7500.00, 1257.00, 1800.00, 1800.00, 200.00, '34510', '', '', '', 'Single', 'O+', 0, NULL, '2025-04-26 14:09:31', '2025-09-01 07:00:23'),
(5, 'TCERP003', 'Sai', 'Akhilesh', 'Male', '7-33-153', '9121914017', 'SaiAkhilesh@gmail.com', 'saiakhilesh@techclouderp.com', '1999-12-29', 'EGBPR9971Q', '1', '1', '945678914521', '', 'HDFC', '94404745848', 'SBIN0000758', 15000.00, 5703.00, 1000.00, 1000.00, 1250.00, 7500.00, 1257.00, 1800.00, 1800.00, 200.00, '34510', '', '', '', 'Single', 'O+', 0, NULL, '2025-04-26 14:09:31', '2025-09-01 07:00:09');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_holidays`
--

CREATE TABLE `tbl_holidays` (
  `id` int(11) NOT NULL,
  `holiday_name` varchar(255) NOT NULL,
  `holiday_date` date NOT NULL,
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Active, 1=Inactive',
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_holidays`
--

INSERT INTO `tbl_holidays` (`id`, `holiday_name`, `holiday_date`, `status`, `created_at`) VALUES
(3, 'rrrrr', '2025-09-25', 0, '2025-08-12 12:12:10'),
(4, 'rrrrr', '2025-09-26', 0, '2025-09-02 08:40:22'),
(5, 'pngals', '2025-09-25', 0, '2025-09-02 13:31:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_leaves`
--

CREATE TABLE `tbl_leaves` (
  `id` int(11) NOT NULL,
  `emp_id` varchar(50) NOT NULL,
  `leave_type_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `reason` text DEFAULT NULL,
  `session` tinyint(1) NOT NULL COMMENT '0=Complete Day, 1=First Half, 2=Second Half',
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Pending, 1=Approved, 2=Rejected',
  `approved_by` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_leaves`
--

INSERT INTO `tbl_leaves` (`id`, `emp_id`, `leave_type_id`, `start_date`, `end_date`, `reason`, `session`, `status`, `approved_by`, `created_at`) VALUES
(1, 'PET001', 1, '2025-04-30', '2025-04-30', 'demo', 0, 0, NULL, '2025-05-02 19:25:36'),
(2, 'TCERP001', 1, '2025-08-20', '2025-08-21', 'reason', 0, 0, NULL, '2025-08-18 06:57:42');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_leave_allocation`
--

CREATE TABLE `tbl_leave_allocation` (
  `id` int(11) NOT NULL,
  `emp_id` varchar(20) NOT NULL,
  `leave_id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_leave_allocation`
--

INSERT INTO `tbl_leave_allocation` (`id`, `emp_id`, `leave_id`, `count`, `status`, `created`) VALUES
(1, 'PET001', 1, 5, 0, '2025-05-09 18:00:46');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_leave_applications`
--

CREATE TABLE `tbl_leave_applications` (
  `id` int(11) NOT NULL,
  `emp_id` varchar(50) NOT NULL,
  `leave_type_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `reason` text DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Pending, 1=Approved, 2=Rejected',
  `approved_by` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_leave_applications`
--

INSERT INTO `tbl_leave_applications` (`id`, `emp_id`, `leave_type_id`, `start_date`, `end_date`, `reason`, `status`, `approved_by`, `created_at`) VALUES
(1, 'PET001', 1, '2025-04-30', '2025-04-30', 'demo', 2, NULL, '2025-05-02 19:25:36');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_leave_type`
--

CREATE TABLE `tbl_leave_type` (
  `id` int(11) NOT NULL,
  `leave_type_code` varchar(15) DEFAULT NULL,
  `leave_type_name` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Active, 1=Inactive',
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_leave_type`
--

INSERT INTO `tbl_leave_type` (`id`, `leave_type_code`, `leave_type_name`, `status`, `created_at`) VALUES
(1, 'SL', 'sick leavve', 0, '2025-05-01 14:00:31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_local_conveyance`
--

CREATE TABLE `tbl_local_conveyance` (
  `conveyance_id` int(11) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `travel_date` date NOT NULL,
  `from_location` varchar(255) NOT NULL,
  `to_location` varchar(255) NOT NULL,
  `mode_of_transport` varchar(100) DEFAULT NULL,
  `distance_km` decimal(10,2) DEFAULT NULL,
  `parking_charges` int(11) NOT NULL,
  `other_charges` int(11) NOT NULL,
  `remarks` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_local_conveyance`
--

INSERT INTO `tbl_local_conveyance` (`conveyance_id`, `employee_id`, `customer_name`, `travel_date`, `from_location`, `to_location`, `mode_of_transport`, `distance_km`, `parking_charges`, `other_charges`, `remarks`, `created_at`) VALUES
(5, 'PET002', 'raju', '2025-05-03', 'uppal', 'gachibowli', 'Bike', 5.00, 700, 500, 'remarks', '2025-05-09 16:38:11'),
(6, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-08-12 06:42:29'),
(7, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-08-18 06:57:00'),
(8, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-09-04 06:30:02'),
(9, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-11-18 01:31:00'),
(10, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-11-18 01:33:41'),
(11, 'TCERP001', 'raju', '2025-05-07', 'vizag', 'ichapuram', 'bike', 299.00, 459, 332, 'ttt', '2025-11-18 04:58:29');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_notification`
--

CREATE TABLE `tbl_notification` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'A UNIQUE identification of each and every notification',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'A short description on notification will use in notification also..',
  `message` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Notification message to display',
  `link` text DEFAULT NULL,
  `image` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Image path for notiofication, to sent in notification',
  `created_date` datetime NOT NULL COMMENT 'Notification creation date '
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='this table is used to save notification details';

--
-- Dumping data for table `tbl_notification`
--

INSERT INTO `tbl_notification` (`id`, `title`, `message`, `link`, `image`, `created_date`) VALUES
(1, 'Support', '<p>Support</p>\r\n', 'Support Required at Nagole', 'https://bssf.harithorganic.com/uploads/b60cec1474db13c559f8fde288d6f909.jpg', '2024-12-05 06:54:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_positions`
--

CREATE TABLE `tbl_positions` (
  `id` int(50) NOT NULL,
  `position_name` varchar(50) NOT NULL,
  `status` int(15) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_positions`
--

INSERT INTO `tbl_positions` (`id`, `position_name`, `status`, `created_at`) VALUES
(1, 'Networking', 0, '2025-04-29 06:13:48');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_roles`
--

CREATE TABLE `tbl_roles` (
  `id` int(15) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `status` int(15) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_roles`
--

INSERT INTO `tbl_roles` (`id`, `role_name`, `status`, `created_at`) VALUES
(1, 'Admin', 0, '2025-04-26 21:24:43'),
(2, 'HR', 0, '2025-04-26 21:24:43'),
(3, 'Employee', 0, '2025-04-26 21:24:43'),
(4, 'Manager', 0, '2025-04-26 21:24:43'),
(5, 'Team Lead', 0, '2025-04-26 21:24:43');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shifttype`
--

CREATE TABLE `tbl_shifttype` (
  `id` int(11) NOT NULL,
  `shifttype_name` varchar(100) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Active, 1=Inactive',
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_shifttype`
--

INSERT INTO `tbl_shifttype` (`id`, `shifttype_name`, `start_time`, `end_time`, `status`, `created_at`) VALUES
(1, 'general ', '05:19:00', '19:32:00', 0, '2025-04-29 13:47:42');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shift_ass`
--

CREATE TABLE `tbl_shift_ass` (
  `id` int(11) NOT NULL,
  `emp_id` varchar(50) NOT NULL,
  `shift_type_id` int(11) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0 COMMENT '0=Active, 1=Inactive',
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_shift_ass`
--

INSERT INTO `tbl_shift_ass` (`id`, `emp_id`, `shift_type_id`, `start_date`, `end_date`, `status`, `created_at`) VALUES
(1, 'PET001', 1, '2025-05-01', '2025-05-31', 0, '2025-05-01 12:15:37'),
(2, 'PET002', 1, '2025-05-01', '2025-10-31', 0, '2025-05-01 18:53:30');

-- --------------------------------------------------------

--
-- Table structure for table `user_dashboard`
--

CREATE TABLE `user_dashboard` (
  `user_code` int(11) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_dashboard`
--

INSERT INTO `user_dashboard` (`user_code`, `employee_id`, `fullname`, `username`, `password`, `level`) VALUES
(1, 'admin', 'admin', 'admin@techclouderp.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 1),
(2, 'TCERP001', 'sai rupesh', 'rupesh@techclouderp.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 3),
(3, 'TCERP002', 'Santosh Kumar', 'Santosh@techclouderp.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 3),
(4, 'TCERP003', 'Sai Akhilesh', 'saiakhilesh@techclouderp.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 3),
(5, 'TCERP004', 'HR', 'Hr@techclouderp.com', 'fe01ce2a7fbac8fafaed7c982a04e229', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login_tokens`
--
ALTER TABLE `login_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_token` (`token`);

--
-- Indexes for table `tbl_assets`
--
ALTER TABLE `tbl_assets`
  ADD PRIMARY KEY (`asset_id`);

--
-- Indexes for table `tbl_attendance`
--
ALTER TABLE `tbl_attendance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `att_status` (`att_status`);

--
-- Indexes for table `tbl_companys`
--
ALTER TABLE `tbl_companys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `registration_number` (`registration_number`),
  ADD UNIQUE KEY `tax_id` (`tax_id`);

--
-- Indexes for table `tbl_department`
--
ALTER TABLE `tbl_department`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `tbl_employees`
--
ALTER TABLE `tbl_employees`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_holidays`
--
ALTER TABLE `tbl_holidays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_leaves`
--
ALTER TABLE `tbl_leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_leave_allocation`
--
ALTER TABLE `tbl_leave_allocation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_leave_applications`
--
ALTER TABLE `tbl_leave_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_leave_type`
--
ALTER TABLE `tbl_leave_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leave_type_code` (`leave_type_code`);

--
-- Indexes for table `tbl_local_conveyance`
--
ALTER TABLE `tbl_local_conveyance`
  ADD PRIMARY KEY (`conveyance_id`);

--
-- Indexes for table `tbl_notification`
--
ALTER TABLE `tbl_notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_positions`
--
ALTER TABLE `tbl_positions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `tbl_roles`
--
ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `tbl_shifttype`
--
ALTER TABLE `tbl_shifttype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_shift_ass`
--
ALTER TABLE `tbl_shift_ass`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_dashboard`
--
ALTER TABLE `user_dashboard`
  ADD PRIMARY KEY (`user_code`),
  ADD KEY `employee_id` (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login_tokens`
--
ALTER TABLE `login_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tbl_assets`
--
ALTER TABLE `tbl_assets`
  MODIFY `asset_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_attendance`
--
ALTER TABLE `tbl_attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_companys`
--
ALTER TABLE `tbl_companys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_department`
--
ALTER TABLE `tbl_department`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_employees`
--
ALTER TABLE `tbl_employees`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_holidays`
--
ALTER TABLE `tbl_holidays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_leaves`
--
ALTER TABLE `tbl_leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_leave_allocation`
--
ALTER TABLE `tbl_leave_allocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_leave_applications`
--
ALTER TABLE `tbl_leave_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_leave_type`
--
ALTER TABLE `tbl_leave_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_local_conveyance`
--
ALTER TABLE `tbl_local_conveyance`
  MODIFY `conveyance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_notification`
--
ALTER TABLE `tbl_notification`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'A UNIQUE identification of each and every notification', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_positions`
--
ALTER TABLE `tbl_positions`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_roles`
--
ALTER TABLE `tbl_roles`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `tbl_shifttype`
--
ALTER TABLE `tbl_shifttype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_shift_ass`
--
ALTER TABLE `tbl_shift_ass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_dashboard`
--
ALTER TABLE `user_dashboard`
  MODIFY `user_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
