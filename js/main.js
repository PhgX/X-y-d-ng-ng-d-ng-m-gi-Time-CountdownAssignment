function timeout(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function countDown(value) {
  while (value > 0) {
    document.getElementById("output").innerHTML = value;
    value--;
    await timeout(1000);
  }
  return "Đếm xong";
}

function count_down() {
  let time = document.getElementById("input").value;
  let counter = countDown(time);
  counter.then((msg) => {
    document.getElementById("output").innerHTML = msg;
  });
}
