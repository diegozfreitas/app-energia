-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql746.umbler.com:3306
-- Tempo de geração: 28-Mar-2022 às 11:06
-- Versão do servidor: 5.6.51
-- versão do PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `app_energia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `orders`
--

CREATE TABLE `orders` (
  `id` bigint(10) NOT NULL,
  `userId` bigint(10) DEFAULT NULL,
  `addressStreet` varchar(100) DEFAULT NULL,
  `addressNumber` varchar(100) DEFAULT NULL,
  `addressNeighborhood` varchar(100) DEFAULT NULL,
  `addressCity` varchar(100) DEFAULT NULL,
  `status` enum('pendente','andamento','cancelado','concluido') DEFAULT NULL,
  `createdAt` varchar(100) DEFAULT NULL,
  `updateAt` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `orders`
--

INSERT INTO `orders` (`id`, `userId`, `addressStreet`, `addressNumber`, `addressNeighborhood`, `addressCity`, `status`, `createdAt`, `updateAt`) VALUES
(4, 2, 'do campo', '30', 'canto do mangue', 'Japaratinga', 'pendente', '2022-03-27 16:20:20.332', '2022-03-27 16:22:08.175'),
(5, 2, 'PRAÇA N0VA', '30', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:21:11.590', NULL),
(6, 2, 'PRAÇA N0VA', '30', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:21:27.879', NULL),
(7, 2, 'PRAÇA N0VA', '30', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:21:31.791', NULL),
(8, 4, 'PRAÇA N0VA', '30', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:21:50.720', NULL),
(13, 13, 'PRAÇA N0VA', '20', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:24:35.007', NULL),
(14, 14, 'PRAÇA N0VA', '20', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:24:50.841', NULL),
(24, 1, 'PRAÇA N0VA', '20', 'canto do USOR', 'Japaratinga', 'pendente', '2022-03-27 16:33:16.189', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`) VALUES
(1, 'diego', '11945123724', 'diego@diego.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
