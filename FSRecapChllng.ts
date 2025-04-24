// TS-Recap-Challenge

// type WeatherType = "sunny" | "rainy" | "snowy";
// let Weather: WeatherType = "sunny";

let Weather: string = "sunny";
let temp: number = 16;
let WindSpeed: number = 40;
if (Weather === "sunny" && temp > 25) {
  // nested if for the wind speed
  if (WindSpeed > 30) {
    console.log("Go swimming! TOO WINDY!!");
  } else {
    console.log("Go swimming!");
  }
} else if (Weather === "sunny" && temp <= 25) {
  // nested if for the wind speed
  if (WindSpeed > 30) {
    console.log("wear a hat and play soccor! TOO WINDY!!");
  } else {
    console.log("wear a hat and play soccor!");
  }
} else if (Weather === "rainy" && temp > 15) {
  // nested if for the wind speed
  if (WindSpeed > 30) {
    console.log("bring an umbrella and walk TOO WINDY!!");
  } else {
    console.log("bring an umbrella and walk");
  }
} else if (Weather === "rainy" && temp <= 15) {
  // nested if for the wind speed
  if (WindSpeed > 30) {
    console.log("stay home and drink tea TOO WINDY!!");
  } else {
    console.log("stay home and drink tea");
  }
} else if (Weather === "snowy") {
  // nested if for the wind speed
  if (WindSpeed > 30) {
    console.log("build a snowman TOO WINDY!!");
  } else {
    console.log("build a snowman");
  }
} else {
  console.log("Invalid weather type");
}
