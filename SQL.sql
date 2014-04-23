CREATE TABLE articles (
	id int(11) NOT NULL AUTO_INCREMENT,
	date date NOT NULL,
	project varchar(128) NOT NULL,
	title varchar(128) NOT NULL,
	slug varchar(128) NOT NULL,
	text text NOT NULL,
	PRIMARY KEY (id),
	KEY slug (slug)
);

CREATE TABLE post (
	id int(11) NOT NULL AUTO_INCREMENT,
	date date NOT NULL,
	title varchar(128) NOT NULL,
	slug varchar(128) NOT NULL,
	text text NOT NULL,
	PRIMARY KEY (id),
	KEY slug (slug)
);