function doSomething() {
    var option = prompt ("Enter a colour name:");
    var text = "";

    switch (option){

        case "red":
            text = "You chose red!"
            break;
        case "blue":
        text = "You chose blue!"
        break;

        case "something green":
            case "green":
            text = "You chose green!"
            break;

            default:
                text ="Unknown colour!"
                break;  

    }
    document.getElementById("header - text").innerHTML = text;
}