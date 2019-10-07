import axios from "axios";

describe("unit tests for simple app", () => {
  it("checks for dark mode on toggle", () => {
    if (!localStorage.getItem("dark-mode")) {
      console.log("first run");
    } else {
      console.log(localStorage.getItem("dark-mode"));
    }
  });

  it("runs the axios call", () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => console.log(res))
      .catch(err => console.error(err));
  });
});
