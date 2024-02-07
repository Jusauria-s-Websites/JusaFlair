let animationsArray=[
    'juflair_blink',
    'juflair_rotate',
    'juflair_fadeIn',
    'juflair_fadeOut',
    'juflair_slideIn',
    'juflair_slideOut',
    'juflair_zoomIn',
    'juflair_pulse',
    'juflair_bounce',
    'juflair_flip',
    'juflair_shake',
    'juflair_blink1_Delayed',
    'juflair_blink2_Delayed'
]

function newAdd(addToImage){
    let image = document.getElementById('exampleImage');
    image.classList=['col-3'];
    image.classList.add(animationsArray[addToImage])
    
}