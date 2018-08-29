 // Implement a representation of the universe where matter and energy is conserved. To do so implement one object called Universe 
 // that contains two objects within: Matter and Energy. If matter is destroyed; that is say we call Universe.Matter.destroy(5), 
 // then the amount of energy in the universe needs to be increased so that if we call Universe.Energy.total() we should obtain a 
 // total value of energy that has increased +5 compared to the energy value previous to calling Universe.Matter.destroy(5). 
 // Of course the total amount of Matter obtained by calling Universe.Matter.total()has been reduced by 5 compared to the initial 
 // value.
    //     - Implement this objects using context
    //     - The matter and energy objects are defined within an object called Universe
    //     - No other variable should be defined out of the Universe object
    //     - Also implement the create methods for both matter an energy which are opposite to their counterparts
    //     - You should be able to give an initial amount to either the energy or the matter, otherwise should default to 0.
    

module.exports = {
    Universe
}