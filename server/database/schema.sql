CREATE TABLE user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

CREATE TABLE item (
  id INT unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);
CREATE TABLE role (
  id INT  primary key auto_increment not null,
  name varchar(20) not null
)
CREATE TABLE person (
  id INT  primary key auto_increment not null,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  email varchar(100) not null,  
  password varchar (50) not null,
  pseudo varchar(20) not null,
  postal-code int null,
  city varchar(50) not null,
  role-id varchar(50),
  foreign key(role-id) references role(id)
)
CREATE TABLE picture (
  id int  primary key auto_increment not null,
  person-id int,
  art-work int,
  foreign key(person-id) references person(id),
  foreign key(art-work) references art-work(id)
)
CREATE TABLE artist (
  id int  primary key auto_increment not null,
  firstname varchar(50),
  lastname varchar(50),
  pseudo varchar(202) not null,
)
CREATE TABLE artwork (
  id int  primary key auto_increment not null,
  title varchar(50) not null,
  lattitude decimal (9,6+)not null,
  longitude decimal (9,6+)not null,
  description text  null,
)
CREATE TABLE artwork_artist (
  artwork-id int,
  artist-id int,
  foreign key(artwork-id) references artwork(id),
  foreign key(artist-id) references artist(id)
)
