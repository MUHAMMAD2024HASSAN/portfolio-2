const menuToogle = () => {

    // console.log("function call");
    
    let mainmenu = document.getElementById('mainmenu');

    if (mainmenu.style.left === "-120rem") {
        mainmenu.style.left = "0";
    }
    else {
        mainmenu.style.left = "-120rem";
    }

}