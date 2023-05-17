CREATE DATABASE modo;

use modo

CREATE TABLE todo (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `timestamp` BIGINT NOT NULL,
  `isComplete` TINYINT(1) NOT NULL,
  `color` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
