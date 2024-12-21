function changeCalculator() {
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let returnCash = parseFloat(document.getElementById('cashGiven').value);
  
    if (isNaN(billAmount) || isNaN(returnCash)) {
      alert("enter the amount in numbers");
      return;
    }
  
    if (billAmount > returnCash) {
      alert(`cash given should not less than ${billAmount}`);
      return;
    }
  
    const remainingAmount = returnCash - billAmount;
    const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const notesToReturn = calculateNotes(remainingAmount, availableNotes);
  
    const tableContent = document.getElementById('tableContent');
    tableContent.innerHTML = ""; 
    let tableHTML = "<table><thead><tr><th>Denomination</th><th>Number of Notes</th></tr></thead><tbody>";
  
    for (const [note, count] of Object.entries(notesToReturn)) {
      if (count > 0) {
        tableHTML += `<tr><td>${note}</td><td>${count}</td></tr>`;
      }
    }
    tableHTML += "</tbody></table>";
  
    tableContent.innerHTML = tableHTML;
  
    function calculateNotes(amount, notes) {
      const notesToReturn = {};
  
      notes.sort((a, b) => b - a);
  
      for (const note of notes) {
        notesToReturn[note] = Math.floor(amount / note);
        amount -= notesToReturn[note] * note;
      }
  
      return notesToReturn;
    }
  }