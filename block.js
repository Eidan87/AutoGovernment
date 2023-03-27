//SPANISH PARTIAL VERSION

//block.js con bloques extendidos
const SHA256 = require('crypto-js/sha256');


//Bloque master
class Block {
constructor(timestamp, hashPrevio = '', nonce = 0, id = '') {
this.timestamp = timestamp;
this.hashPrevio = hashPrevio;
this.nonce = nonce;
this.hash = this.calcularHash();
this.id = id;
}

calcularHash() {
return SHA256(
this.timestamp + this.hashPrevio + this.nonce + this.id).toString();
}

minarBloque(dificultad) {
while (
this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')
) {
this.nonce++;
this.hash = this.calcularHash();
}
}
}

// Ministerio de Agricultura, ganadería y pesca
class Block1 extends Block {
constructor(timestamp,productor,producto,cantidad,certificado,ubicacion,evaluacion,votacion,tipoAlimento,fechaCaducidad,procesoProduccion,ubicacionExacta,pruebasLaboratorio,contacto,certificaciones,transacciones,hashPrevio = '',nonce = 0,id = '') {
super(timestamp, hashPrevio, nonce, id);
this.productor = productor;
this.producto = producto;
this.cantidad = cantidad;
this.certificado = certificado;
this.ubicacion = ubicacion;
this.evaluacion = evaluacion;
this.votacion = votacion;
this.tipoAlimento = tipoAlimento;
this.fechaCaducidad = fechaCaducidad;
this.procesoProduccion = procesoProduccion;
this.ubicacionExacta = ubicacionExacta;
this.pruebasLaboratorio = pruebasLaboratorio;
this.contacto = contacto;
this.certificaciones = certificaciones;
this.transacciones = transacciones;
}

calcularHash() {
return SHA256(this.timestamp +this.productor +this.producto +this.cantidad +this.certificado +this.ubicacion +this.evaluacion +this.votacion +this.tipoAlimento +
this.fechaCaducidad +this.procesoProduccion +this.ubicacionExacta +this.pruebasLaboratorio +this.contacto +this.certificaciones +this.transacciones +
this.hashPrevio +this.nonce +this.id).toString();
}

minarBloque(dificultad) {
while (
this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')
) {
this.nonce++;
this.hash = this.calcularHash();
}
}
}

class Block2 extends Block {
constructor(timestamp,ubicacion,armamento,misionesEjecutadas,efectivos,coordenadas,logistica,infraestructura,transacciones,hashPrevio = '',nonce = 0,id = '') {
super(timestamp, hashPrevio, nonce, id);
this.ubicacion = ubicacion;
this.armamento = armamento;
this.misionesEjecutadas = misionesEjecutadas;
this.efectivos = efectivos;
this.coordenadas = coordenadas;
this.logistica = logistica;
this.infraestructura = infraestructura;
this.transacciones = transacciones;
}

calcularHash() {
return SHA256(this.timestamp +this.ubicacion +this.armamento +this.misionesEjecutadas +this.efectivos +this.coordenadas +this.logistica +this.infraestructura +this.transacciones +
this.hashPrevio +this.nonce +this.id).toString();
}
  
  minarBloque(dificultad) {
while (
this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')
) {
this.nonce++;
this.hash = this.calcularHash();
}
}
}


module.exports = { Block, Block1, Block2};

