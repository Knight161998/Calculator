const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80')";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);

let input = document.getElementById("input");
let output = document.getElementById("output");

function calculate(data) {  // data = DEL
    // console.log(data);
    // input.innerHTML += data;
    switch (data) {   // data = DEL
        case "AC":
          input.innerHTML = "";
          output.innerHTML = 0;
          break;
        case "DEL":   // this case executes after clicking DEL
          input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);    // input  = 124, 012 => consider only 0 to 1 here due to substring method
          output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);   // (condition)? return true: return false
          output.innerHTML = math.eveluate(`${input.innerHTML}`) === infinity ? "Can't divided by zero": math.evaluate(`${input.innerHTML}`);
          break;
        case "=":
          output.innerHTML = math.evaluate(`${input.innerHTML}`);
          break;
    
        default:
          input.innerHTML += data;   // 
    }
}