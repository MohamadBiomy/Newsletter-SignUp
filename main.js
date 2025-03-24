let input = document.querySelector("input[type='text'")
let submitBtn = document.querySelector("input[type='submit'")
let showError = document.querySelector("#error-shower")
let span = document.querySelector(`#error-shower > span`)
let signUpStage = document.querySelector(".inputting-stage")
let regExp = /[A-Za-z0-9]+@[A-Za-z]+\.[a-z]+/
let submittingStage = document.querySelector(".submitting-stage")

submittingStage.remove()

submitBtn.addEventListener("click", (event) => {

  let value = input.value

  if (value !== "") {
    if (regExp.test(value)) {

      signUpStage.remove()
      document.querySelector(".container").append(submittingStage)
      document.querySelector(".container").style.padding = "0"

    } else {
      
      span.innerHTML = "Valid email required"
      input.classList.add("error")
      input.addEventListener("input", resetInput)
      
    }
  } else {
    span.innerHTML = "Enter your email"
    input.classList.add("error")
    input.addEventListener("input", resetInput)
  }


  event.preventDefault()
})


function resetInput() {
  span.innerHTML = ""
  input.classList.remove("error")
}

// change img

document.body.onresize = function () {
  if (document.body.clientWidth < 767) {
    document.querySelector(".image-box img").src = "images/illustration-sign-up-mobile.svg"
  } else {
    document.querySelector(".image-box img").src = "images/illustration-sign-up-desktop.svg"
  }
}