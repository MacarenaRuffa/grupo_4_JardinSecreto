create database structure;

CREATE TABLE structure.roles (
  id INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

  INSERT INTO `structure`.`roles` (id, name) VALUES
  (1, 'admin'),
  (2, 'user');


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
INSERT INTO `structure`.`users` (`id`, `name`, `user_name`, `email`, `roles_id`, `birthday`, `gender`) VALUES
(1, 'Usuario1', 'user1', 'usuario1@email.com', 1, '1990-01-01', 'Male'),
(2, 'Usuario2', 'user2', 'usuario2@email.com', 2, '1985-05-15', 'Female');

SELECT * FROM users WHERE id = 1;

UPDATE users SET name = 'Usuario Modificado', birthday = '1985-05-15' WHERE id = 1;

DELETE FROM users WHERE id = 1;

CREATE TABLE `structure`.`categories` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

  INSERT INTO `structure`.`categories`('id', 'name') VALUES
  (1, 'categories1'),
  (2, 'categories2');

  SELECT * FROM categories WHERE id = 1;

  UPDATE categories SET name = 'Categoría Modificada' WHERE id = 1;

  DELETE FROM categories WHERE id = 1;

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

INSERT INTO `structure`.`products` (`id`, `name`, `description`, `price`, `discount`, `categories_id`, `imagen`, `sale`) VALUES
(1, 'Producto1', 'Descripción del Producto 1', 100, 10, 1, 'imagen1.jpg', 1),
(2, 'Producto2', 'Descripción del Producto 2', 150, NULL, 2, 'imagen2.jpg', 0),
(3, 'Producto3', 'Descripción del Producto 3', 80, 5, 1, 'imagen3.jpg', 1);

SELECT * FROM `structure`.`products` WHERE id = 1;

UPDATE products SET name = 'Producto Modificado', price = 129.99 WHERE id = 1;

DELETE FROM products WHERE id = 1;

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