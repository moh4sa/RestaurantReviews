if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(function() {
        console.log('ServiceWorker Registration Done');
    }).catch(function(){
        console.log('SW Registration failed!')
    });
    };