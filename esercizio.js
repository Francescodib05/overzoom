function getPastEvent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const events = [
          { year: 1990, name: "World Wide Web Invented" },
          { year: 2001, name: "Wikipedia Launched" },
          { year: 1969, name: "Moon Landing" },
          { year: 2020, name: "Global Pandemic" },
          { year: 1989, name: "Fall of Berlin Wall" }
        ];
        const randomIndex = Math.floor(Math.random() * events.length);
        resolve(events[randomIndex]);
      }, Math.random() * 1000);
    });
  }

let arr = [];


async function travelThroughHistory (n=10) {
  try {
    const nr=[]
    for (let i = 0; i < n; i++) {
      nr.push(getPastEvent())
     
    }
    const result = await Promise.all(nr)
    
    ///console.log(result);
    
    arr=result.sort((a,b) => a.year - b.year).filter((result,i,arr) => i === arr.findIndex(event => event.name === result.name)).filter(res => res.year< 2000);
    console.log(arr);

    return arr;
    

  } catch (error) {
    console.log(error.message);
  }
}

travelThroughHistory();
