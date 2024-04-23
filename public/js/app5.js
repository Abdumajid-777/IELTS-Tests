let footerBtn = document.querySelector("#footer-button")
let blueBox = document.querySelector("#blue-box")
let text = document.querySelector("#text-base")
let score = document.querySelector("#score")
// Avvalgi massivni takrorlanmaydigan elementlari uchun yangi massiv hosil qilish
function shuffleArray(array) {
    // Massivni nusxalash
    let newArray = array.slice();

    // Elementlarni tasodifiy tartibda tartiblash
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

// quizData massivini tasodifiy tartibda tartiblash
let shuffledQuizData = shuffleArray(quizData);

// dataRandom massivini quizData ning tasodifiy tartiblangan elementlari bilan to'ldirish
let dataRandom = shuffledQuizData.map(function (item) {
    return item;
});


let filterData = dataRandom.filter(function (item, index) {
    return index < 10
})

console.log(filterData);

let testNumber = 0
let testNumber1 = 0
score.innerHTML = testNumber + 1


let question = document.querySelector(".question")
let list = document.querySelector("#box")
let faq = document.querySelectorAll(".faq")
let togrijavob = document.querySelector(".testNumber1")


function quizANS() {
    question.innerHTML = filterData[testNumber].question
    faq[0].innerText = filterData[testNumber].a
    faq[1].innerText = filterData[testNumber].b
    faq[2].innerText = filterData[testNumber].c
    faq[3].innerText = filterData[testNumber].d
}

quizANS()


faq.forEach(function (item, index, arr) {
    item.addEventListener('click', function () {
        let nam = null
        score.innerHTML = testNumber + 1
        if (item.innerHTML == filterData[testNumber].a) {
            nam = "a"
        } else if (item.innerHTML == filterData[testNumber].b) {
            nam = "b"
        } else if (item.innerHTML == filterData[testNumber].c) {
            nam = "c"
        } else if (item.innerHTML == filterData[testNumber].d) {
            nam = "d"
        }
        if (nam == filterData[testNumber].correct) {
            testNumber1++
            togrijavob.innerHTML = testNumber1
        } else {
            // alert('notogri')
        }
        if (testNumber == 9) {
            // alert("test tugadi")
            if (testNumber1 < 5) {
                list.innerHTML = ` <div class="text-center">
            <h1 id="text-base" class="text-sm md:text-2xl text-black md:semi-bold capitalize mb-4 md:mb-6 md:flex gap-2 justify-center items-center">Siz <span
                    class="font-bold color active2">${testNumber + 1}</span> Ta Dan <span class="font-bold color active">${testNumber1}</span> Taga Javob Topdingiz
            </h1>
            <p id="text-base" class="text-black md:text-3xl mb-4 text-xl font-bold capitalize">Darajangiz ADVANCED Emas 🤥</p >
            <div class="pl-2.5 text-center mt-4">
                <a href="index.html"
                    class="py-2 px-5 bg-[#0b58a7] text-white rounded-2xl cursor-pointer transition-all hover:bg-[#064484]"
                    >Bosh Saxifaga</a>
            </div>
        </div >
            `
            } else {
                list.innerHTML = ` <div class="text-center">
            <h1 id="text-base" class="text-sm md:text-2xl text-black md:semi-bold capitalize mb-4 md:mb-6 md:flex gap-2 justify-center items-center">Siz <span
                    class="font-bold color active2">${testNumber + 1}</span> Ta Dan <span class="font-bold color active">${testNumber1}</span> Taga Javob Topdingiz
            </h1>
            <p id="text-base" class="text-black md:text-3xl mb-5 text-xl font-bold capitalize">Darajangiz ADVANCED 😎</p >
            <div class="pl-2.5 text-center mt-4">
                <a href="index.html"
                    class="py-2 px-5 bg-[#0b58a7] text-white rounded-2xl cursor-pointer transition-all hover:bg-[#064484]"
                    >Bosh Saxifaga</a>
            </div>
        </div >
            `
            }
            text.innerHTML = ''
        } else {
            testNumber++
        }
        quizANS()
    })
})
