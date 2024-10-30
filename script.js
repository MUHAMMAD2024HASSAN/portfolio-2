const menuToogle = () =>{
    let mainmenu = docoment.getElementById('mainmenu');

    if(mainmenu.style.left === "-120rem"){
        mainmenu.style.left = "0";
    }

    else{
        mainmenu.style.left = "012rem";
    }

}