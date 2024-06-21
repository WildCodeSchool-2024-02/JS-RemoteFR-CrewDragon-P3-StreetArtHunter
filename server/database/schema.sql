CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE item (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id)
);
CREATE TABLE role (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(20) NOT NULL
);
CREATE TABLE person (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,  
  password VARCHAR(50) NOT NULL,
  pseudo VARCHAR(20) NOT NULL,
  postal_code INT NULL,
  city VARCHAR(50) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id)
);
CREATE TABLE artist (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  pseudo VARCHAR(202) NOT NULL
);
CREATE TABLE artwork (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  lattitude DECIMAL(9,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  description TEXT NULL
);
CREATE TABLE picture (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  person_id INT,
  artwork_id INT,
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (artwork_id) REFERENCES artwork(id)
);
CREATE TABLE artwork_artist (
  artwork_id INT,
  artist_id INT,
  FOREIGN KEY (artwork_id) REFERENCES artwork(id),
  FOREIGN KEY (artist_id) REFERENCES artist(id),
  PRIMARY KEY(artwork_id,artist_id)
);
