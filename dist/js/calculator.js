const toggleSwitch = document.querySelector(
'.theme-switch input[type="checkbox"]'
);

function switchTheme(event) {
if (event.target.checked) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
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
      // output.innerHTML = math.eveluate(`${input.innerHTML}`) === infinity ? "Can't divided by zero": math.evaluate(`${input.innerHTML}`);
      break;
    case "=":
      // output.innerHTML = math.evaluate(`${input.innerHTML}`);
      // break;
      let result = math.evaluate(`${input.innerHTML}`);   // input.innerHTML = 1/0 ........result = Infinity
      // console.log(result);
      if(result == 'Infinity'){
        output.innerHTML = "Can't divided by 0";
      }
      else{
        output.innerHTML = result;
      }
      break;

    default:
      input.innerHTML += data;   // 
      // console.log(input.innerHTML);
}
}
