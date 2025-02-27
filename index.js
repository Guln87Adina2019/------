let pharma = [
    {
        id: 1,
        title: "Vichy шампунь тонизирующий с аминексилом Деркос",
        price: '3 333₸',
        oldPrice: '11197₸',
        discount: "70%",
        img: "https://st.europharma.kz/cache/product/1696/160x160_8576.jpeg"
    },
    {
        id: 2,
        title: "La Roche редермик интенсивный уход против старения для контура глаз",
        price: '9 738₸',
        oldPrice: '30736₸',
        discount: "68%",
        img: "https://st.europharma.kz/cache/product/13447/400x400_50431.jpeg"
    },
    {
        id: 3,
        title: "Vichy DERCOS шампунь-уход против перхоти для сухой кожи головы 390 мл",
        price: '6 110₸',
        oldPrice: '18080₸',
        discount: "66%",
        img: "https://st.europharma.kz/cache/product/26422/x248_5ef9b0fd7de39.png"
    },
    {
        id: 4,
        title: "Элевит Пронаталь № 30 табл",
        price: '3 430₸',
        oldPrice: '6860₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/6200/x248_5ee88ee702839.jpg"
    },
    {
        id: 5,
        title: "Элевит Пронаталь № 100 табл",
        price: '9 095₸',
        oldPrice: '18190₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/6222/x248_5ee88f114c995.jpg"
    },
    {
        id: 6,
        title: "Бепантен Derma Восстановление баланса 200мл",
        price: '3 745₸',
        oldPrice: '7490₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/50501/400x400_657a832a90ca1.jpg"
    },
    {
        id: 7,
        title: "Бепантен Derma Восполнение липидов 200мл",
        price: '4 040₸',
        oldPrice: '8080 ₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/51561/400x400_676e6825647ab.jpg"
    },
    {
        id: 8,
        title: "Бепантен Derma Гель для душа, 200 мл",
        price: '2 645₸',
        oldPrice: '5290₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/51745/400x400_676e6eb2a3fb9.jpg"
    },
    {
        id: 9,
        title: "РелиБаланс №20 саше",
        price: '5 488₸',
        oldPrice: '10975₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/49875/400x400_653f6c9063194.jpeg"
    },
    {
        id: 10,
        title: "Бепантен-Derma крем-восстановитель для рук 50 мл",
        price: '2 088₸',
        oldPrice: '4175₸',
        discount: "50%",
        img: "https://st.europharma.kz/cache/product/51918/400x400_676e6ecd32d2c.jpg"
    },
    {
        id: 11,
        title: "Vichy Коллаген Ночной крем 50 мл MB275500",
        price: '20 780₸',
        oldPrice: '40815₸',
        discount: "49%",
        img: "https://st.europharma.kz/cache/product/31352/400x400_6078569d5bf95.jpg"
    },
    {
        id: 12,
        title: "Vichy Коллаген Ночной крем 50 мл MB275500",
        price: '9 000₸',
        oldPrice: '16695₸',
        discount: "46%",
        img: "https://st.europharma.kz/cache/product/33957/400x400_61499d6c049e5.png"
    },
]

let promotional = [
    {
        id: 1,
        title: 'У - Релиф 28,4 г мазь ректальная (Уценка)',
        img: 'https://st.europharma.kz/cache/product/3551/160x160_5f572647acb92.png',
        price: '1 514₸',
    },
    {
        id: 2,
        title: 'У - Кардиомагнил 150 мг № 30 табл п/плён оболоч (Уценка)',
        img: 'https://st.europharma.kz/cache/product/32382/160x160_609ca57a65322.jpeg',
        price: '512₸',
    },
    {
        id: 3,
        title: 'У - Кардиомагнил 150 мг № 100 табл п/плён оболоч (Уценка)',
        img: 'https://st.europharma.kz/cache/product/32404/160x160_609bab864b56f.jpg',
        price: '1 310₸',
    },
    {
        id: 4,
        title: 'У - Азидрат 100 мг/5 мл 17,1 г № 1 порошок для приг-я сусп-и (Уценка)',
        img: 'https://st.europharma.kz/cache/product/38547/160x160_63f5bfd76840b.png',
        price: '718₸',
    },
]


// function searchMedicine() {
//     let query = document.getElementById("search").value.toLowerCase();
//     let results = medicines.filter(med => med.toLowerCase().includes(query));
    
//     let resultsList = document.getElementById("results");
//     resultsList.innerHTML = "";
    
//     results.forEach(med => {
//         let li = document.createElement("li");
//         li.textContent = med;
//         resultsList.appendChild(li);
//     });
// }
function createDiscountCard(i) {
    const discountCard = document.createElement("div");
    discountCard.className = "dicount-card";

    if (i.discount) {
        const discount = document.createElement("div");
        discount.textContent = i.discount;
        discount.className = "dic"
        
        discountCard.appendChild(discount);
    }


    const img = document.createElement("img");
    img.src = i.img;
    img.alt = "Vichy Shampoo";

    const title = document.createElement("p");
    title.textContent = i.title;
    title.style.color = "#979daa";
    title.style.height = "57px";
    title.style.overflow = "hidden";
    title.addEventListener('mouseenter', () => {
        title.style.color = "green";
        title.style.transition = '0.5s'
    })
    title.addEventListener('mouseleave', () => {
        title.style.color = "#979daa";
        title.style.transition = '0.5s'
    })
    title.addEventListener('click', () => {
        window.location.href = "pharm.html?"+i.id;
    })

    const price = document.createElement("p");
    price.style.fontWeight = "bold";
    price.innerHTML = `${i.price} <span style='font-size: 15px; text-decoration: line-through; color: #979daa;'>${i.oldPrice ? i.oldPrice : ''}</span`;
    price.style.fontSize = "20px"
    const button = document.createElement("button");
    button.textContent = "В Корзину";
    button.addEventListener("click", () => {
        alert("Товар добавлен в корзину");
    });

    discountCard.appendChild(img);
    discountCard.appendChild(title);
    discountCard.appendChild(price);
    discountCard.appendChild(button);
    

    return discountCard;
}

let div = document.querySelector('.dicount-cards')
let promotionalCards = document.querySelector('.promotional-cards')
for (let i of pharma) {
    div.appendChild(createDiscountCard(i));
}

for (let i of promotional) {
    promotionalCards.appendChild(createDiscountCard(i));
}