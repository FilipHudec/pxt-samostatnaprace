
    let pocetHodu = 0;
    let sixCount = 0;
    

    input.onGesture(Gesture.Shake, function () {
        let cisloHodu = randint(1, 6);
        music.playTone(500, 500);   
        whaleysans.showNumber(cisloHodu);
        if(cisloHodu === 6)
        {
            sixCount++;
        }
        pocetHodu++;
        console.log([cisloHodu, pocetHodu, sixCount])
        if (sixCount === 3) {
            music.playTone(1000, 1000)
            whaleysans.showNumber(pocetHodu);
            sixCount = 0;
            pocetHodu = 0;

        }
    })
        
       

        


    

