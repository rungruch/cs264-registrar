const scriptURL = 'https://script.google.com/macros/s/AKfycbxWAUg5QkcWbT0w18ZfvU1mYc8o1gE4BcQVqzGZVhJlVib3e3t6Cvqv4hTjjfzpR3g/exec'
const form = document.forms['hello-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("บันทึกข้อมูลเรียบร้อยแล้ว.."))
    .catch(error => console.error('Error!', error.message))
})