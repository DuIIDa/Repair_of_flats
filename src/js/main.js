'use strict';

$(document).ready(function () {
    const button = $('#button');
    const model = $('.model');
    console.log('model: ', model);

    const isOpen = () => {
        model.toggleClass('model_active');
    };

    button.on('click', () => {
        isOpen();
    });

    model.on('click', function(event){
        let target = $(event.target);
        if(target.hasClass('model-dialog__close') || 
        target.hasClass('model')){
            isOpen();
        }
    });

});

/*const openModel = () => {
    const button = document.getElementById('button');
    const model = document.querySelector('.model');

    const isOpen = () => {
        model.classList.toggle('model_active');
    };

    button.addEventListener('click', () => {
        isOpen();
    });

    model.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('model-dialog__close') || 
           target.classList.contains('model')){
            isOpen();
        }
    });
};

openModel();*/