const getActualSleepHours = () => {
  return 8 + 8 + 8 + 8 + 8 + 9 + 9  // replace each value by the daily amount you are sleeping each day starting from monday
}

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7
}

const calculateSleepDebt = (idealHours) => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours(idealHours)
  if (actualSleepHours === idealSleepHours) {
    return 'Perfect amount of sleeping'
  } else if (actualSleepHours > idealSleepHours) {
    return `You are sleeping ${actualSleepHours - idealSleepHours} hour(s) more than you should be`
  } else {
    return `the actual sleep is ${idealSleepHours - actualSleepHours } hour(s) less than the ideal amount, try getting some rest`
  }
}

const sleepDebtCalculator = (idealHours) => {
console.log(calculateSleepDebt(idealHours))
}

// example :
sleepDebtCalculator(8)
