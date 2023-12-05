buttonClickOn = () => {
  document.getElementById("card-wrapper").style.display = "block";
};
buttonClickOff = () => {
  document.getElementById("card-wrapper").style.display = "none";
};

add = () => {
  var form = document.getElementById("form");

  var formData = new FormData(form);

  console.log(formData.get("title"));
  //   console.log(formData.discription);
  for (var value of formData.values()) {
    console.log(value);
  }
  console.log(formData.values.value[0]);
  console.log(typeof formData);

  console.log(Object.keys(formData));
};
