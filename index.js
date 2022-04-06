const questions = document.querySelectorAll(".FAQ-card__accordion__question");

// ***only one answer open at a time***

questions.forEach(question => question.addEventListener('click', (e) => {
    
    questions.forEach(item => {
        item.setAttribute('data-visible', false);
        item.nextElementSibling.setAttribute('data-visible', false);
    })

    e.target.setAttribute('data-visible', true);
    e.target.nextElementSibling.setAttribute('data-visible', true);
} ));


// ***all answers can stay open until clicked again***

// questions.forEach(question => question.addEventListener('click', (e) => {
//     const visibility = e.target.getAttribute('data-visible');
//     if(visibility === 'false') {
//         e.target.setAttribute('data-visible', true);
//         e.target.nextElementSibling.setAttribute('data-visible', true);
//     } else {
//         e.target.setAttribute('data-visible', false);
//         e.target.nextElementSibling.setAttribute('data-visible', false);
//     }
// } ));