//blockchain.js

const {Block, Block1} = require('./block');
  
class BlockchainEstadoGobierno {
constructor() {

    this.chain = [this.crearBloqueGenesis()]
    this.dificultad = 1
    this.mineros = []
    this.data = []
    this.pendingTransactions = []
    this.minerReward = 100
}

crearBloqueGenesis() {
    return new Block("19/03/2023", "0");}

getUltimoBloque(){
    return this.chain[this.chain.length - 1]
}   

agregarBloque(nuevoBloque){
        
    nuevoBloque.hashPrevio = this.getUltimoBloque().hash
    nuevoBloque.minarBloque(this.dificultad)
    //nuevoBloque.hash = nuevoBloque.calcularHash()
    this.chain.push(nuevoBloque)
}

agregarTransaccion(transaction) {
    this.pendingTransactions.push(transaction)
}

getBalanceOfAddress(address) {
    let balance = [] 
    for(const block of this.chain){
        for(const trans of block.transactions){
            if(trans.fromAddress === address) {
                balance.push('------- VENTA -------', -trans.amount, trans.transacciontituloLibro, trans.toAddress, 'de', address,'--------------------','')
            }

            if(trans.toAddress === address){
                balance.push('++++++ COMPRA ++++++', +trans.amount, trans.transacciontituloLibro, trans.fromAddress, 'de', address,'--------------------','')
            }     
        }   
    }

    return balance
    
}


validarBlockchain() {  
    for(let i = 1; i < this.chain.length; i++) {
        const bloqueActual = this.chain[i]
        const bloquePrevio = this.chain[i - 1]

        if(bloqueActual.hash !== bloqueActual.calcularHash()) {
            return false
        }

        if(bloqueActual.hashPrevio !== bloquePrevio.hash) {
            return false
        }
    }

    return true
}

}   

module.exports = BlockchainEstadoGobierno; 
