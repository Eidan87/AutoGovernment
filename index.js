//index.js

const BlockchainEstadoGobierno = require('./blockchain');
const {Block, Block1} = require('./block');

const blockchainEstadoGobierno = new BlockchainEstadoGobierno();

const block1 = new Block1(
  '18/03/2023',
  'Nombre Evento',
  'Tipo Evento',
  'Descripcion Evento',
  'Fecha Inicio Evento',
  'Fecha Fin Evento',
  'Ubicacion Evento',
  50,
  'Organizador Evento',
  'Artistas Evento',
  'Patrocinadores Evento',
  500,
  'Transacciones Evento',
  500,
  'Transacciones Evento',
  500
);

const block2 = new Block1(
  '18/03/2023',
  'Nombre Evento',
  'Tipo Evento',
  'Descripcion Evento',
  'Fecha Inicio Evento',
  'Fecha Fin Evento',
  'Ubicacion Evento',
  50,
  'Organizador Evento',
  'Artistas Evento',
  'Patrocinadores Evento',
  500,
  'Transacciones Evento',
  500,
  'Transacciones Evento',
  500
);

blockchainEstadoGobierno.agregarBloque(block1);
blockchainEstadoGobierno.agregarBloque(block2);



console.log(JSON.stringify(blockchainEstadoGobierno, null, 4));

console.log(blockchainEstadoGobierno.validarBlockchain()); // debería devolver true o false dependiendo de si la cadena es válida o no


