const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const ct_btn = document.querySelector("#center_btn");
  
  function change_bgc() {
    const color_list1 = colors[Math.floor(Math.random() * colors.length)];
    const color_list2 = colors[Math.floor(Math.random() * colors.length)];
    console.log(color_list1, color_list2);
    document.body.style.backgroundImage =
      "linear-gradient(to right, " +
      String(color_list1) +
      ", " +
      String(color_list2) +
      ")";
  }
  ct_btn.addEventListener("click", change_bgc);
  