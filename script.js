// Form handling for Aguilera Aguirre & Asociados
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const nombre = formData.get('nombre')?.trim();
      const email = formData.get('email')?.trim();
      const telefono = formData.get('telefono')?.trim();
      const caso = formData.get('caso')?.trim();
      
      // Validation
      if (!nombre || !email || !telefono || !caso) {
        showMessage('Por favor complete todos los campos', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage('Por favor ingrese un email válido', 'error');
        return;
      }
      
      // Phone validation (basic)
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(telefono)) {
        showMessage('Por favor ingrese un teléfono válido', 'error');
        return;
      }
      
      // Simulate sending data (in real app, send to server)
      showMessage(`Gracias ${nombre}, hemos recibido tu consulta. Te contactaremos pronto.`, 'success');
      
      // Reset form
      this.reset();
    });
  }
});

// Helper function to show messages
function showMessage(message, type) {
  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    max-width: 400px;
    ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
  `;
  
  // Add to page
  document.body.appendChild(messageDiv);
  
  // Remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}