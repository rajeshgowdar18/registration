function loadDetails() {
    const details = JSON.parse(localStorage.getItem('registrationData'));
    const detailsDiv = document.getElementById('details');
    
    if (!details) {
      detailsDiv.innerHTML = '<p>No details found!</p>';
      return;
    }
  
    detailsDiv.innerHTML = `
      <p><strong>Name:</strong> ${details.name}</p>
      <p><strong>Date of Birth:</strong> ${details.dob}</p>
      <p><strong>USN:</strong> ${details.usn}</p>
      <p><strong>Gender:</strong> ${details.gender}</p>
      <p><strong>Phone Number:</strong> ${details.phone}</p>
      <p><strong>Email:</strong> ${details.email}</p>
      <p><strong>Address:</strong> ${details.address}</p>
    `;
  }
  
  function printPDF() {
    window.print();
  }
  
  window.onload = loadDetails;
  