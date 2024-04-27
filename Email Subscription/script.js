const scriptURL = 'https://script.google.com/macros/s/AKfycbwrrf1poNX0Rsdume3zV0R01SqZbTM1nW01KNOJ-47cgTH-tAfk9jwFUKM04QLhaWYB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Thanks for subscribing!'
      setTimeout(function(){
        msg.innerHTML = 'Thanks for subscribing!'
      } ,5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})