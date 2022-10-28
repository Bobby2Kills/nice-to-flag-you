const imageSelector = (score) =>{
    source = ""
    switch(score){
        case 0: source = "./images/0outof10.png"
            break;
        case 1: source = "./images/1outof10.png"
            break;
        case 2: source = "./images/2outof10.png"
            break;
        case 3: source = "./images/3outof10.png"
            break;
        case 4: source = "./images/4outof10.png"
            break;
        case 5: source = "./images/5outof10.png"
            break;
        case 6: source = "./images/6outof10.png"
            break;
        case 7: source = "./images/7outof10.png"
            break;
        case 8: source = "./images/8outof10.png"
            break;
        case 9: source = "./images/9outof10.png"
            break;
        case 10: source = "./images/10outof10.png"
            break;
        default: source = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.ebaumsworld.com%2FmediaFiles%2Fpicture%2F718392%2F84890886.jpg&f=1&nofb=1&ipt=60b28fa562215291746470af9060933ed75eb0a7ee43c064bca4bcc9ec117fbb&ipo=images"
            break;
    }   
    return source;
}