-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 04:12 AM
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
-- Database: `marriage`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `name`, `address`, `price`) VALUES
(16, 'Caterer 1', 'Vijayawada', 1200),
(17, 'Decor1', 'Hyd', 1300),
(18, 'Venue1', 'Che', 1400);

-- --------------------------------------------------------

--
-- Table structure for table `caterer`
--

CREATE TABLE `caterer` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `speciality` text NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `caterer`
--

INSERT INTO `caterer` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `speciality`, `price`) VALUES
(4, 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'Caterer 1', 'Vijayawada', 'Modern', 1200),
(5, 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'Caterer 1', 'Delhi', 'Modern', 1900);

-- --------------------------------------------------------

--
-- Table structure for table `decor`
--

CREATE TABLE `decor` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `theme` text NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `decor`
--

INSERT INTO `decor` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `theme`, `price`) VALUES
(4, 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'Decor1', 'Hyd', 'Modern', 1300);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `password` text NOT NULL,
  `userType` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone`, `password`, `userType`) VALUES
(1, 'Suresh', 'Ganta', 'Suresh@gmail.com', '929929292', 'Suresh', 'customer'),
(2, 'admin', 'admin', 'admin@gmail.com', 'admin', 'admin', 'admin'),
(3, 'Fyzu', 'Fyzu', 'Fyzu@gmail.com', '67777', 'Fyzu', 'customer'),
(4, 'pavan', 'chintakayala', 'samplea@gmail.com', '1345654332', 'Sample@123', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

CREATE TABLE `venue` (
  `id` int(11) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `capacity` text NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue`
--

INSERT INTO `venue` (`id`, `img1`, `img2`, `img3`, `img4`, `name`, `address`, `capacity`, `price`) VALUES
(5, 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg', 'Venue1', 'Che', '1200', 1400);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `caterer`
--
ALTER TABLE `caterer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `decor`
--
ALTER TABLE `decor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `caterer`
--
ALTER TABLE `caterer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `decor`
--
ALTER TABLE `decor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `venue`
--
ALTER TABLE `venue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
