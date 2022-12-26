let json_ar = [
    {
        name: "Bill Gates",
        "worth": "$90B",
        "birth_year": "1955",
        "source": "microsoft",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813"

    },
    {
        "name": "Warren Buffett",
        "worth": "$84B",
        "birth_year": "1931",
        "source": "Berkshire Hathaway",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806"
    },
    {
        "name": "Mark Zuckerberg",
        "worth": "$71B",
        "birth_year": "1984",
        "source": "Facebook",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044"
    },
    {
        "name": "Larry Ellison",
        "worth": "$57B",
        "birth_year": "1945",
        "source": "Sun, Oracle",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228"
    },
    {
        "name": "Michael Bloomberg",
        "worth": "$50B",
        "birth_year": "1942",
        "source": "Bloomberg",
        "country": "USA",
        "image": "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784"
    }
]
const cardsDisplay = document.getElementById("rich-dudes-display") /*as  HTMLDivElement */;


json_ar.map((rich) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    cardDiv.style.width = '18rem';
    const cardDiv2 = document.createElement('div');
    cardDiv2.classList.add("card-body")
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src= `${rich.image}`
    const firstName = document.createElement("H1");
    firstName.classList.add("first-name");
    firstName.innerText += `${rich.name}`
    const para = document.createElement("p");
    para.classList.add("card-text");

    para.innerText += `Birthday: ${rich.birth_year}
    Worth: ${rich.worth}
    Source: ${rich.source}
    Country: ${rich.country}`;
    cardsDisplay.appendChild(cardDiv)
    cardDiv.appendChild(cardDiv2)
    cardDiv2.appendChild(cardImg)
    cardDiv2.appendChild(firstName)
    cardDiv2.appendChild(para)
    cardDiv.id = `${rich.name}`
    cardDiv.addEventListener('click', () => {
        json_ar.filter((r) => r !== rich)
        document.getElementById(cardDiv.id)?.remove()
    })
}) 