document.addEventListener('DOMContentLoaded', () => {
	
  const transactionForm = document.getElementById('transactionForm');
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const typeSelect = document.getElementById('type');
  
  const totalBalanceEl = document.getElementById('totalBalance');
  const totalIncomeEl = document.getElementById('totalIncome');
  const totalExpenseEl = document.getElementById('totalExpense');
  const transactionListEl = document.getElementById('transactionList');

  let transactions = JSON.parse(localStorage.getItem('dompetku_transactions')) || [];
  const snackbarEl = document.getElementById('snackbar');
  let snackbarTimer = null;
  function showSnackbar(pesan){
	  snackbarEl.textContent = pesan;
	  snackbarEl.classList.add('show');
	  clearTimeout(snackbarTimer);
	  snackbarTimer = setTimeout(() => snackbarEl.classList.remove('show'), 3000);
	}

  function formatIDR(amount) {
    return 'Rp ' + Number(amount).toLocaleString('id-ID');
  }

  function updateSummary() {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);

    const balance = income - expense;

    totalBalanceEl.textContent = formatIDR(balance);
    totalIncomeEl.textContent = formatIDR(income);
    totalExpenseEl.textContent = formatIDR(expense);
  }

  function renderList() {
    transactionListEl.innerHTML = '';

    if (transactions.length === 0) {
      transactionListEl.innerHTML = '<li class="empty-state">Belum ada transaksi.</li>';
      return;
    }

    transactions.forEach(t => {
      const li = document.createElement('li');
      li.className = `transaction-item ${t.type}`;

      const amountSign = t.type === 'income' ? '+' : '-';

      li.innerHTML = `
        <div class="item-info">
          <span class="item-desc">${t.description}</span>
          <span class="item-amount">${amountSign} ${formatIDR(t.amount)}</span>
        </div>
        <button class="btn-delete" data-id="${t.id}">Hapus</button>
      `;

      transactionListEl.appendChild(li);
    });
  }

  function saveAndRender() {
    localStorage.setItem('dompetku_transactions', JSON.stringify(transactions));
    updateSummary();
    renderList();
  }

  transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (!description || isNaN(amount) || amount <= 0) {
      showSnackbar('Masukkan keterangan dan jumlah nominal yang valid.');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount,
      type
    };

    transactions.push(newTransaction);
    saveAndRender();

    descriptionInput.value = '';
    amountInput.value = '';
    typeSelect.value = 'income';
  });

  transactionListEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const idToDelete = parseInt(e.target.getAttribute('data-id'));
      transactions = transactions.filter(t => t.id !== idToDelete);
      saveAndRender();
    }
  });

  updateSummary();
  renderList();
});