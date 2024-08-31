let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    //click events for all buttons
    button.addEventListener('click', (e) => {
        //action for = btn
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        //action for C btn
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        //action for M+ btn
        else if (e.target.innerHTML == 'M+') {
            string = string + eval(string);
            document.querySelector('input').value = string;
        }
        //action for M- btn
        else if (e.target.innerHTML == 'M-') {
            string = string - eval(string);
            document.querySelector('input').value = string;
        }
        //action for MC btn
        else if (e.target.innerHTML == 'MC') {

        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})