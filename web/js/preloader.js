const preloader = document.querySelector('.preloader')

if (!preloader.classList.contains('done'))
{
    setTimeout(() => {
        preloader.classList.add('animate__animated', 'animate__zoomOut')
        setTimeout(()=>
        {
            preloader.classList.add('done')   
        },500)
    },3000)
}