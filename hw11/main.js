function userName ()  {
    const name = prompt("Adınız nedir?")
    const myName = document.getElementById("myName")
    myName.textContent= name;
}

userName()

let clock = document.getElementById("myClock")

function showTime() {
    const time = document.getElementById("myClock");
  
    setInterval(() => {
      const currentDate = new Date(); // Doğru tanımlama
      const currentTime = currentDate.toLocaleTimeString();
      const currentDay = currentDate.toLocaleDateString();
  
      time.textContent = `${currentDay}, ${currentTime}`;
    }, 1000);
  }
  
  showTime();