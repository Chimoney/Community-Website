function getCopyRightYear() {
   const span = document.getElementsByClassName('year')
   const d = new Date()
   span[0].innerHTML = d.getFullYear()
   console.log(span[0].innerHTML);
}
getCopyRightYear()