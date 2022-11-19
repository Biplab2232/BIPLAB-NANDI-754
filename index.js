var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// ------------sidemenu-------------

var sidemeu = document.getElementById("sidemenu");

function openMenu(){
    sidemeu.style.right = "0";
}
function closeMenu(){
    sidemeu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwtjlDOxsuv2U_PDE2NXP5janfkrlAQNcJkRkMOXGx8GhOSeZYJgKDoxg-JejpetBdw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })