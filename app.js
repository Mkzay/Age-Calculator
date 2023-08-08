document.addEventListener('DOMContentLoaded', () => {
  const dayCheck = document.querySelector('#day');
  const monthCheck = document.querySelector('#month');
  const yearCheck = document.querySelector('#year');
  const errorDayElement = document.getElementById('error-day');
  const errorMonthElement = document.getElementById('error-month');
  const errorYearElement = document.getElementById('error-year');
  const submitForm = document.getElementById('submit');
  const labelDay = document.getElementById('label-day');
  const labelMonth = document.getElementById('label-month');
  const labelYear = document.getElementById('label-year');
  const yearResult = document.getElementById('year-result');
  const monthResult = document.getElementById('month-result');
  const dayResult = document.getElementById('day-result');

  submitForm.addEventListener('click', (e) => {
    e.preventDefault();

    let dayMessages = [];
    let monthMessages = [];
    let yearMessages = [];

    if (dayCheck.value === '' || dayCheck.value == null) {
      dayMessages.push('This field is required');
    }

    if (dayCheck.value > 31) {
      dayMessages.push('Must be a valid day');
    }

    if (monthCheck.value === '' || monthCheck.value == null) {
      monthMessages.push('This field is required');
    }

    if (monthCheck.value > 12) {
      monthMessages.push('Must be a valid month');
    }

    if (yearCheck.value === '' || yearCheck.value == null) {
      yearMessages.push('This field is required');
    }

    if (yearCheck.value > 2023) {
      yearMessages.push('Must be in the past');
    }

    if (dayMessages.length > 0) {
      labelDay.style.color = 'hsl(0, 100%, 67%)';
      dayCheck.style.borderColor = 'hsl(0, 100%, 67%)';
      errorDayElement.innerText = dayMessages.join(', ');
      errorDayElement.style.display = 'block';
    } else {
      labelDay.style.color = '';
      dayCheck.style.borderColor = '';
      errorDayElement.style.display = 'none';
      errorDayElement.textContent = '--';
    }

    if (monthMessages.length > 0) {
      labelMonth.style.color = 'hsl(0, 100%, 67%)';
      monthCheck.style.borderColor = 'hsl(0, 100%, 67%)';
      errorMonthElement.innerText = monthMessages.join(', ');
      errorMonthElement.style.display = 'block';
    } else {
      labelMonth.style.color = '';
      monthCheck.style.borderColor = '';
      errorMonthElement.style.display = 'none';
      errorMonthElement.textContent = '--';
    }

    if (yearMessages.length > 0) {
      labelYear.style.color = 'hsl(0, 100%, 67%)';
      yearCheck.style.borderColor = 'hsl(0, 100%, 67%)';
      errorYearElement.innerText = yearMessages.join(', ');
      errorYearElement.style.display = 'block';
    } else {
      labelYear.style.color = '';
      yearCheck.style.borderColor = '';
      errorYearElement.style.display = 'none';
      errorYearElement.textContent = '--';

      // If there are no errors, calculate age
      const day = parseInt(dayCheck.value);
      const month = parseInt(monthCheck.value);
      const year = parseInt(yearCheck.value);

      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      const timeDiff = currentDate - birthDate;

      const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

      yearResult.textContent = years;
      monthResult.textContent = months;
      dayResult.textContent = days;
    }
  });
});
