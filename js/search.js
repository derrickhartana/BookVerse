document.addEventListener('DOMContentLoaded', (event) => {
let availableKeywords = [
    '<a class="text-decoration-none" href="https://medium.com/@angelicachelsea2510/sparring-antara-tim-tigers-tblc-tigirls-vs-sma-santo-leo-3-e5b242d972b1">↗ &nbsp;&nbsp;&nbsp; Sparring Antara Team Tigers (Girls) vs. SMA Santo Leo 3</a>',
    '<a class="text-decoration-none" href="https://medium.com/@nico88ananda/sparring-basket-sma-tunas-bangsa-vs-sma-penabur-jababeka-tertunda-akibat-hujan-de261f2861ab">↗ &nbsp;&nbsp;&nbsp; Sparring Basket SMA Tunas Bangsa vs. SMA Penabur Jababeka Tertunda Akibat Hujan</a>',
    '<a class="text-decoration-none" href="https://medium.com/@angelicachelsea2510/keseruan-open-house-tunas-bangsa-bareng-kampus-aksi-kreatif-siswa-7f77228859cd">↗ &nbsp;&nbsp;&nbsp; Keseruan Open House Tunas Bangsa Bareng Kampus dan Aksi Kreatif Siswa!</a>',
    '<a class="text-decoration-none" href="https://medium.com/@nico88ananda/hujan-lebat-terpal-penyelamat-76f46037ec85">↗ &nbsp;&nbsp;&nbsp; Hujan Lebat, Terpal menjadi Penyelamat</a>',
    '<a class="text-decoration-none" href="https://medium.com/@bookversemik/jajanan-murah-osis-harga-mewah-bikin-nangis-68f9857e9a38">↗ &nbsp;&nbsp;&nbsp; Jajanan Murah OSIS, Harga Mewah Bikin Nangis</a>'
];

const resultBox = document.querySelector('.resultBox');
const inputBox = document.getElementById('inputBox');
const searchIcon = document.getElementById('searchIcon');
const fadeUpBlur = document.getElementById('fadeUpBlur')


function cornerRadius(){
    searchIcon.classList.remove('rounded-start');
    searchIcon.classList.add('rounded-0');
    searchIcon.classList.add('rounded-top-start');
    inputBox.classList.remove('rounded-end');
    inputBox.classList.add('rounded-top-end');
}

function display(result){
    const content = result.map((list) => {
        // 1. Insert elements with the STARTING class: 'fade-up-blur'
        //    (and your base list classes)
        return '<li class="list-group-item text-white border-0 align-baseline list-group-item-action bg-transparent resultList fade-up-blur">' + list + "</li>";
    });

    // Insert the content
    resultBox.innerHTML = '<ul class="list-group list-group-flush m-0 p-0 text-start list-search">' + content.join('') + "</ul>";

    // Get the newly inserted items
    const listItems = resultBox.querySelectorAll('.resultList');

    // 2. Manually trigger the transition using a separate execution cycle (like the Intersection Observer would)
    if (listItems.length > 0) {
        // Use a slight delay (0ms) to ensure the element renders in the STARTING state first
        setTimeout(() => {
            listItems.forEach((item, index) => {
                // Manually apply the transition delay and the ENDING class: 'show'
                item.style.transitionDelay = `${index * 0.05}s`; // Use a small stagger
                item.classList.add('show'); 
            });
        }, 0); 
    }
}

function restoreCornerRadius(){
    searchIcon.classList.remove('rounded-0');
    searchIcon.classList.remove('rounded-top-start');
    searchIcon.classList.add('rounded-start');
    inputBox.classList.remove('rounded-top-end');
    inputBox.classList.add('rounded-end');
}

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        cornerRadius();
    } else {
        restoreCornerRadius();
    }
    display(result);
}
});