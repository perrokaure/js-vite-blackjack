import _ from 'underscore';


//funcion de crear un nuevo deck

/**
 * esta funcion cra un nuveo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}retorna un nuevo deck
 */
export const  crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0)
     throw new Error('tipos es obliglatorio Como Arreglo de string');

     
    if(!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tipos especiales es obliglatorio Como Arreglo de string');
   

    let deck = [];
 
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}