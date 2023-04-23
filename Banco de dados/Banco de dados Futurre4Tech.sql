CREATE TABLE cliente(
  id serial PRIMARY Key,
  nome VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  telefone VARCHAR(15) NOT NULL
);

CREATE TABLE prestador(
  id serial PRIMARY Key,
  nome VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  telefone VARCHAR(15) NOT NULL
);

CREATE TABLE solucoes(
  id serial PRIMARY KEY,
  servico VARCHAR(30) NOT NULL
);

create TABLE cliente_prestador(
  mensagem VARCHAR(100),
  autorizacao BOOLEAN,
  fk_id_cliente INT,
  fk_id_prestador INT,
  fk_id_solucoes INT,
  CONSTRAINT cliente_prestador_id PRIMARY KEY (fk_id_cliente,fk_id_prestador),
  CONSTRAINT fk_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente(id),
  CONSTRAINT fk_prestador FOREIGN KEY(fk_id_prestador) REFERENCES prestador(id),
  CONSTRAINT fk_solucoes FOREIGN KEY(fk_id_solucoes) REFERENCES solucoes(id)
);

insert into cliente(nome,email,telefone) values
('Josesvaldo','josesvaldo@hotmail.com','32-99545-7887'),
('Anadilda','anadilda@hotmail.com','27-97565-5788'),
('Edinaildo','edinaildo@gmail.com','11-76554-9983'),
('Felisberto','felisberto@gmail.com','11-98443-2589'),
('Cornelio','cornelio@gmail.com','21-89557-2345'),
('Doralicia','doralicia@hotmail.com','27-99787-3222'),
('Josesberta','josesberta@hotmail.com','21-87788-9999');

SELECT * from cliente;

insert into prestador(nome,email,telefone) values
('Adriana','adriana@future4tech.com','32-55864-4452'),
('Daniel','daniel@future4tech.com','21-12345-4565'),
('Jeane','jeane@future4tech.com','27-98745-4561'),
('Edson','edson@future4tech.com','11-97874-0195');

SELECT * from prestador;

insert into solucoes(servico) VALUES
('consultoria'),
('software'),
('sistema web'),
('aplicativo sistemas mobile'),
('site profissional'),
('software em nuvem');

SELECT * from solucoes;

insert into cliente_prestador(mensagem,autorizacao,fk_id_cliente,fk_id_prestador,fk_id_solucoes) VALUES
('Gostaria de um orcamento o mais breve possivel',true,1,2,3),
('Gostaria de solicitar um pedido',true,3,2,1),
('Gostaria que meu projeto ficasse pronto até o fim do ano',true,1,1,1);

SELECT * from cliente_prestador; 


SELECT * from cliente 
INNER JOIN cliente_prestador on cliente.id = cliente_prestador.fk_id_cliente 
INNER join prestador on prestador.id = cliente_prestador.fk_id_cliente
INNER join solucoes on solucoes.id = cliente_prestador.fk_id_solucoes;


SELECT cliente.nome as nome_cliente, prestador.nome As nome_prestador, solucoes.servico, from cliente 
INNER JOIN cliente_prestador on cliente.id = cliente_prestador.fk_id_cliente 
INNER join prestador on prestador.id = cliente_prestador.fk_id_cliente
INNER join solucoes on solucoes.id = cliente_prestador.fk_id_solucoes;

