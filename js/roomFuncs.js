  function linkPanoRooms (panorama1, panorama2, vect1, vect2, size, room1Name, room2Name, img1, img2) {
    linkPanoInfoSpot(vect1, true, room2Name, panorama1, true)
    linkPanoInfoSpot(vect2, true, room1Name, panorama2, true)
    panorama1.linkWtMenuChange(panorama2, vect1, size, img1); //img can be second param here
    
    //link pano2 to main room
    panorama2.linkWtMenuChange(panorama1, vect2, size, img2);



  }

  function addToNavBar(hoverText, infospot, panoramaRoom) {
    var item = listItem.cloneNode( true );
    item.classList.remove( 'template' );
    item.querySelector( 'button' ).textContent = hoverText;
    item.addEventListener( 'click', onFocus.bind( infospot ), false );
    appendToNavBarList(panoramaRoom, item);
  }


  function linkPanoInfoSpot (vect, isAnimated, hoverText, panoramaRoom, isAddToNavBar) {
    // sizing s.t. further away appears smaller
    infoSpotSize = baseScale * vect.length() / radius;

    // Create info spot and add to sidebar
    infospot = new PANOLENS.Infospot( infoSpotSize, PANOLENS.DataImage.Info, isAnimated);
    infospot.position.copy( vect );
    infospot.addHoverText(hoverText);
    infospot.addEventListener('click', onFocus);
    panoramaRoom.add(infospot);

    // Add to left panel
    if (isAddToNavBar) {
      addToNavBar(hoverText, infospot, panoramaRoom);
    }
  }

  function linkPanoInfoSpotWtInfo(vect, divContainer, isAddToNavBar, panoramaRoom, hoverText, image, infoSpotSize=undefined ) {
    if (infoSpotSize == undefined) {
      // sizing s.t. further away appears smaller
      infoSpotSize = baseScale * vect.length() / radius;
    }
    
    // add infospot with info that pops up in same room
    infospot2 = new PANOLENS.Infospot( infoSpotSize, image);
    infospot2.position.copy(vect);
    infospot2.addHoverElement( document.getElementById(divContainer), 200 );

    panoramaRoom.add(infospot2);

    // Add to left panel
    if (isAddToNavBar) {
      addToNavBar(hoverText, infospot2, panoramaRoom);
    }
  }

  function addInfoSpotFunc(item, _) {
    linkPanoInfoSpotWtInfo (new THREE.Vector3(item.positionVector[0], item.positionVector[1], item.positionVector[2]), item.container, item.displayOnNavbar, item.panoramaRoom, item.title, item.image);
  }


  function onFocus () {
    this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );
  }


/* Swaps divs with click from mainDivStr+initialNum to mainDivStr+NextNum*/
  function SwapDivsWithClick(mainDivStr, initialNum, NextNum)
  {
     d1 = document.getElementById(mainDivStr + initialNum);
     d2 = document.getElementById(mainDivStr + NextNum);
     if( d2.style.display == "none" )
     {
        d1.style.display = "none";
        d2.style.display = "block";
     }
     else
     {
        d1.style.display = "block";
        d2.style.display = "none";
     }
  }




  function addScenes() {
    // Add panorama scenes to viewer
    /* Add all scenes to viewer */ // todo: maybe change so can add 1 scene at a time

    //viewer config: https://pchen66.github.io/Panolens/docs/index.html
    viewer = new PANOLENS.Viewer( { output: 'console', container: document.querySelector( '#pcontainer' ), autoHideInfospot: false, cameraFov: 90} );
    viewer.add(blackRoom, whiteRoom,redRoom, blueRoom); //todo: MANUALLY ADD NEW SCENES HERE RN // NEED TO MAKE FUNC S.T. ITS NOT MANUAL
    viewer.renderer.sortObjects = true;
    
  }