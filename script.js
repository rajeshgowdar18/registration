function submitForm() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const details = {};
  
    formData.forEach((value, key) => {
      details[key] = value;
    });
  
    localStorage.setItem('registrationData', JSON.stringify(details));
    window.location.href = 'result.html';
  }
  