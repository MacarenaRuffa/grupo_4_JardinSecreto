create database structure;

CREATE TABLE structure.roles_id (
  id INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE `structure`.`users` (
  `id` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `User_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `Roles_id` INT(1) NOT NULL,
  `Birthday` DATE NOT NULL,
  `Gender` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `Roles_id_idx` (`Roles_id` ASC),
  CONSTRAINT `Roles_id`
    FOREIGN KEY (`Roles_id`)
    REFERENCES `structure`.`roles_id` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE `structure`.`categories` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `structure`.`products` (
  `id` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(300) NULL,
  `Price` INT NOT NULL,
  `Discount` INT NULL,
  `categories_id` INT NOT NULL,  -- Corregido el nombre de la columna
  `Imagen` VARCHAR(45) NULL,
  `Productscol` VARCHAR(45) NULL,
  `Sale` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categories_id_idx` (`categories_id` ASC),  -- Corregido el nombre del índice
  CONSTRAINT `categories_id`
    FOREIGN KEY (`categories_id`)
    REFERENCES `structure`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE `structure`.`user_products` (
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC),
  INDEX `products_id_idx` (`product_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `structure`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `products_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `structure`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);