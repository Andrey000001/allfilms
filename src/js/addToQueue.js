export default function addToQueue(btnQueue ,localStr) {
    btnQueue.addEventListener('click',() => {
        const isQueue = true
        localStr.isQueue = isQueue
        const savedMovieQueue = JSON.parse(localStorage.getItem('savedMovieQueue')) || []
        
        const successMovie = savedMovieQueue.findIndex(({gotId}) => gotId === localStr.gotId)
        if(successMovie === - 1) {
            savedMovieQueue.push(localStr)
            localStorage.setItem('savedMovieQueue',JSON.stringify(savedMovieQueue))  
        }else { 
            console.log('Уже добавлен');
        }
    })
}

 