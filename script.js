async function loadData() {
  const response = await fetch('public/result.json');
  const data = await response.json();

  const thead = document.querySelector('#data-table thead');
  const tbody = document.querySelector('#data-table tbody');

  // Clear existing content
  thead.innerHTML = '';
  tbody.innerHTML = '';

  // Create header row
  const headerRow = document.createElement('tr');
  data.columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Populate rows
  data.rows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

loadData();