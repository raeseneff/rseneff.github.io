
function distributeGuestsToTables(totalGuests,totalTables) {
  let guestsPerTable = Math.floor(totalGuests/totalTables);
  let remainingGuests = totalGuests % totalTables;

  return {
    totalGuests: totalGuests,
    totalTables: totalTables,
    guestsPerTable: guestsPerTable,
    remainingGuests: remainingGuests,
  };
}

let totalGuestsInput = prompt("How many guests are you bringing?");
let totalTablesInput = prompt("How many tables do you need?");

let totalGuests = parseInt(totalGuestsInput);
let totalTables = parseInt(totalTablesInput);

if (isNaN(totalGuests) || isNaN(totalTables) || totalGuests <0 || totalTables <= 0) {
  alert("Invalid input. Please enter a valid number");
}
else {
  let result = distributeGuestsToTables(totalGuests, totalTables);
  alert(`Your ${totalGuestsInput} will be seated as follows: ${result.remainingGuests} tables of ${result.guestsPerTable +1}, and ${totalTables - result.remainingGuests} tables of ${result.guestsPerTable}`);
}

//*tables of ${result.guestsPerTable}`);