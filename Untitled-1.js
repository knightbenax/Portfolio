

function toggleViewport(){
    let viewport = document.querySelector('meta[name=viewport]');
    if (!viewport){
        viewport=document.createElement('meta');
        viewport.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(viewport);
    }
    
    viewport.setAttribute('content','width=device-width, initial-scale=1.0, user-scalable=yes');
}