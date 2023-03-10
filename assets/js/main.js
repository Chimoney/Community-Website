//FEATURED POST***********************
  //ARTICLE CONTENT DATA
let data = {
    "data":[
        {
            id: 1,
            name: "Poppy M",
            date: "- Feb, 16th 2023",
            title: "Chimoney Chooses WireFX to Power Payments and Account",
            article: "Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
            tag1:  "chimoney news",
            tag2: "project utility",
            time: "3 mins read"
        },
        {
            id: 2,
            name: "Poppy B",
            date: "- Feb, 16th 2023",
            title: "How to spend your crypto in 2022 and beyond",
            article: "Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
            tag1:  "chimoney news",
            tag2: "project utility",
            time: "3 mins read"
    
    
        },
        {
            id: 3,
            name: "Poppy C",
            date: "- Feb, 16th 2023",
            title: "Chimoney Chooses WireFX to Power Payments and Account",
            article: "Cryptocurrencies like Bitcoin, XRP, and Eth have become increasingly popular over the past few years. They're also becoming an important part of our...",
            tag1:  "chimoney news",
            tag2: "project utility",
            time: "3 mins read"

        }
    ]
}
    
    

const Card = (data) => {
    data = data.data;
    let content = ""
    for (var i = 0; i < data.length; i++) {
      content += `
        <div >
            <img class="image" src="assets/images/image 1.png" />
            <div>
                <div class="profile">
                    <img class="profile-picture" src="assets/images/Author.png" />
                    <p class="name">${data[i].name}</p>
                    <p class="date">${data[i].date}</p>
                </div>
                    
                <a href="#" class="title">${data[i].title}</a>
                <p class="article">${data[i].article}</p>

                <div class="article-footer">
                    <a href="#" class="tag" >${data[i].tag1}</a>
                    <a href="#" class ="tag" >${data[i].tag2}</a>
                    <p class="time">${data[i].time}</p>
                </div>
            </div>
         </div> 
      `
    }
    document.getElementById('data').innerHTML = content
  }
  Card(data);

  /* End of Featured post -------- --------------------------------------
----------------------------------------------------------------*/
