// ------------------------
// Category Switching
// ------------------------
function changeCategory(category) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.doc-group').forEach(group => group.classList.remove('active'));
    const activeGroup = document.getElementById(category);
    activeGroup.classList.add('active');

    resetFirstItem(activeGroup);
    updateYearOptions(activeGroup);
}

// ------------------------
// Dropdown Menu Behavior
// ------------------------
function toggleDropdown(element) {
    const selectItems = element.nextElementSibling;

    document.querySelectorAll('.select-items').forEach(drop => {
        if (drop !== selectItems) drop.classList.remove('show');
    });

    element.classList.toggle('active');
    selectItems.classList.toggle('show');
}

function resetFirstItem(group) {
    const first = group.querySelector('.select-item');
    if (first) {
        group.querySelector('.select-selected').textContent = first.textContent.trim();
        document.getElementById('pdf-viewer').src = first.getAttribute('data-value');
    }
}

// ------------------------
// Year Filter Logic
// ------------------------
function initYearFilter() {
    const activeGroup = document.querySelector('.doc-group.active');
    updateYearOptions(activeGroup);
}

function updateYearOptions(docGroup) {
    const yearSelect = document.getElementById('year-select');
    yearSelect.innerHTML = '<option value="all">All</option>';

    const yearDividers = docGroup.querySelectorAll('.year-divider span');
    const years = Array.from(yearDividers).map(y => y.textContent.trim());

    years.forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearSelect.appendChild(opt);
    });

    filterByYear();
}

function filterByYear() {
    const selectedYear = document.getElementById('year-select').value;
    const activeGroup = document.querySelector('.doc-group.active');
    if (!activeGroup) return;

    const items = activeGroup.querySelectorAll('.select-item');
    const dividers = activeGroup.querySelectorAll('.year-divider');

    if (selectedYear === 'all') {
        dividers.forEach(d => d.style.display = 'flex');
        items.forEach(i => i.style.display = 'block');
        return;
    }

    dividers.forEach(div => {
        const year = div.querySelector('span').textContent.trim();
        const visible = (year === selectedYear);
        div.style.display = visible ? 'flex' : 'none';

        let next = div.nextElementSibling;
        while (next && !next.classList.contains('year-divider')) {
            if (next.classList.contains('select-item')) {
                next.style.display = visible ? 'block' : 'none';
            }
            next = next.nextElementSibling;
        }
    });
}

// ------------------------
// Init
// ------------------------
document.addEventListener('DOMContentLoaded', function () {

    // Attach click listeners
    document.querySelectorAll('.select-item').forEach(item => {
        item.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            const text = this.textContent.trim();

            const group = this.closest('.doc-group');
            const selectedDiv = group.querySelector('.select-selected');

            selectedDiv.textContent = text;
            document.getElementById('pdf-viewer').src = value;

            group.querySelector('.select-items').classList.remove('show');
            selectedDiv.classList.remove('active');
        });
    });

    // Clicking outside closes dropdowns
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('.select-items').forEach(drop => drop.classList.remove('show'));
            document.querySelectorAll('.select-selected').forEach(s => s.classList.remove('active'));
        }
    });

    // Initialize first document
    const firstGroup = document.querySelector('.doc-group.active');
    if (firstGroup) resetFirstItem(firstGroup);

    // Initialize Year Filter
    initYearFilter();

    // Year selection listener
    document.getElementById('year-select').addEventListener('change', filterByYear);
});
