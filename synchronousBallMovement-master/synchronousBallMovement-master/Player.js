class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    update(count){
        database.ref('/').update({
         playerCount:count
        })
    }
}