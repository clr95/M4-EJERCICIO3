
  const input = document.getElementById('exampleDataList');
  const cards = document.querySelectorAll('.card');

  input.addEventListener('input', function() {
    const selectedOption = this.value;
    
    cards.forEach(function(card) {
      if (card.id === selectedOption) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });


