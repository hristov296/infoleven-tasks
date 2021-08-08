
function calculateMonthlyRate(down, months, rate, final) {
  let monthly;
  if (final) {
    let downDifference = down - final;
    monthly = ((rate / 100 / 12) * downDifference) / (1 - (Math.pow((1 + rate / 100 / 12), -months)) || 1) || downDifference / months
  } else {
    monthly = ((rate / 100 / 12) * down) / (1 - (Math.pow((1 + rate / 100 / 12), -months)) || 1) || down / months

  }
  return {
    monthly
  };
}

module.exports = {
  calculateMonthlyRate
}