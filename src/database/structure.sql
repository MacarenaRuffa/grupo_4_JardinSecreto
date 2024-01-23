create database structure;

CREATE TABLE structure.roles (
  id INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE `structure`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `roles_id` INT(1) NOT NULL,
  `birthday` DATE NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `roles_id_idx` (`roles_id` ASC),
  CONSTRAINT `roles_id`
    FOREIGN KEY (`roles_id`)
    REFERENCES `structure`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE `structure`.`categories` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `structure`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(300) NULL,
  `price` INT NOT NULL,
  `discount` INT NULL,
  `categories_id` INT NOT NULL, 
  `imagen` VARCHAR(45) NULL,
  `sale` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `categories_id_idx` (`categories_id` ASC),
  CONSTRAINT `categories_id`
    FOREIGN KEY (`categories_id`)
    REFERENCES `structure`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE `structure`.`user_products` (
  `users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  INDEX `users_id_idx` (`users_id` ASC),
  INDEX `products_id_idx` (`products_id` ASC),
  CONSTRAINT `users_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `structure`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `products_id`
    FOREIGN KEY (`products_id`)
    REFERENCES `structure`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);