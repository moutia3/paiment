const methods = document.querySelectorAll('.method');
const message = document.getElementById('message');

methods.forEach((method) => {
    method.addEventListener('click', () => {
        methods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
        message.textContent = `Selected: ${method.textContent.trim()}`;
    });
});

document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expMonth = document.getElementById('exp-month').value.trim();
    const expYear = document.getElementById('exp-year').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Regex pour valider le nom : seulement des lettres et des espaces
    const nameRegex = /^[A-Za-z\s]+$/;

    // Regex pour valider les nombres : seulement des chiffres
    const numberRegex = /^\d+$/;

    // Validation du champ "name"
    if (!nameRegex.test(name)) {
        message.textContent = 'Error: Invalid name.';
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        return; // Arrêter l'exécution si validation échoue
    }

    // Validation du champ "card-number"
    if (!numberRegex.test(cardNumber) || cardNumber.length !== 16) {
        message.textContent = 'Error: Card number must contain exactly 16 digits.';
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        return;
    }

    // Validation du champ "expMonth"
    if (!numberRegex.test(expMonth) || parseInt(expMonth) < 1 || parseInt(expMonth) > 12) {
        message.textContent = 'Error: Expiration month must be a number between 01 and 12.';
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        return;
    }

    // Validation du champ "expYear"
    if (!numberRegex.test(expYear) || expYear.length !== 2) {
        message.textContent = 'Error: Expiration year must contain exactly 2 digits.';
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        return;
    }

    // Validation du champ "cvv"
    if (!numberRegex.test(cvv) || cvv.length !== 3) {
        message.textContent = 'Error: CVV must contain exactly 3 digits.';
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        return;
    }

    // Si toutes les validations réussissent
    message.textContent = 'Payment successful!';
    message.style.backgroundColor = '#d4edda';
    message.style.color = '#155724';
});
