const makeDino = function(newSpecies, newPeriod, newCarnivore, extinct = false){
  const dino = {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: extinct,
  }
  return dino
}
/********************
 * HELPER FUNCTIONS *
 ********************/
const makeSingular = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (newDino.species.endsWith('us') === true) {
    newDino.species = newDino.species.slice(0, -2);
    }

  return newDino;
}

const truncateSpecies = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (newDino.species.length > 10 ){
    newDino.species = newDino.species.slice(0,7) + "..."
  }

  return newDino
}

const makeExtinct = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true,
  }

  return newDino
}

const isCarnivore = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return newDino.carnivore
}

const isExtinct = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return newDino.extinct 
}

const isTriassic = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return newDino.period === 'Triassic'
}

const isJurassic = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return newDino.period === 'Jurassic'
}

const isCretaceous = function(dino){
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return newDino.period === 'Cretaceous'
}


/***********************
 * ITERATION FUNCTIONS *
 **********************/
const singularizeDinos = function(dinos){
  return dinos.map(makeSingular)
}

const truncateDinos = function(dinos){
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = function(dinos){
  return dinos.map(makeExtinct)
}

const carnivoresOnly = function(dinos){
  return dinos.filter(isCarnivore)
}

const herbivoresOnly = function(dino){
  return dino.filter(function(dino){
    return dino.carnivore === false;
  })
}

const extinctOnly = function(dinos){
  return dinos.filter(isExtinct)
}

const notExtinct = function(dino){
  return dino.filter(function(dino){
    return dino.isExtinct === false;
  })
}

const triassicOnly = function(dinos){
  return dinos.filter(isTriassic)
}

const notTriassic = function(dino){
  return dino.filter(function(dino){
    return dino.isTriassic === false;
  })
}



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
