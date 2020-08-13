var parameters, viewer, radius, button, position, infospot, timerId, easingItem, list, listItem, index = 0, baseScale = 300;


  list = document.querySelector( '.mdl-list' );
  listItem = document.querySelector( '.mdl-list__item' );

  // Focus tweening parameter
  parameters = {
    amount: 50,
    duration: 1000,
    curve: 'Cubic',
    easing: 'In',
    iterative: false
  };

  // Init rooms
  blackRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blackRoom/finalRoom.png');
  whiteRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/whiteRoom/whiteRoom.png');
  redRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/redRoom/redRoom.png');
  blueRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blueRoom/walls/blueRoom.png');

  // Recording image dimensions
  const { edgeLength } = blackRoom;
  radius = edgeLength / 2;


  /* Insert Info Spots */

  /* Main Room Items */
  /* What is diplomacy */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -3494.28, -4383.53),"what-is-diplomacy-info" , true, blackRoom, "What is diplomacy?", "https://michelleFae.github.io/impactHack/assets/misc/liberty.png", radius);

  //whats your diplomat
  linkPanoInfoSpotWtInfo(new THREE.Vector3(91.94, -533.50, 5000.00), 'wydq-container', true,  blackRoom, "What's Your Digital Diplomat", "https://michelleFae.github.io/impactHack/assets/icons/digitalDiplomatGoQuestion.png", radius / 2.5);

  //wheel
  linkPanoInfoSpotWtInfo(new THREE.Vector3(3077.13, 2147.35, -5000.00),"diplomatic-wheel-info" , false, blackRoom, "info for wheel", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-8.14, -352.10, -5000.00), 'diplomatic-wheel-container', true,  blackRoom, " Wheel of Diplomat Skills", "https://michelleFae.github.io/impactHack/assets/wheel/wheel.png" , radius / 2);
 
  //Share on social media
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -431.44, -4953.42), 'share-container', true,  blackRoom, "Share the Digital Love", "https://michelleFae.github.io/impactHack/assets/icons/shareIcon.png", radius / 3);



  /* FSO Room Items (blue) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"fso-dim-container" , true, blueRoom, "FSO Dimensions", "https://michelleFae.github.io/impactHack/assets/icons/dimensionIcons/lightBlueDims.png" , radius / 2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-103.73, -463.00, -5000.00),"fso-interactive-container" , true, blueRoom, "In FSO Shoes", "https://michelleFae.github.io/impactHack/assets/icons/fsoShoes.png", radius/2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, 784.49, 103.72),"fso-wheel" , true, blueRoom, "The FSO wheel","https://michelleFae.github.io/impactHack/assets/wheel/fsoWheel.png", radius/1.5);

  // Diplomats
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -1961.48, 3770.59),"consular-affairs-container" , true, blueRoom, "Consular Officers", "https://michelleFae.github.io/impactHack/assets/officers/fso_consular.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1725.68, 4881.38),"economic-affairs-container" , true, blueRoom, "Economic Officers", "https://michelleFae.github.io/impactHack/assets/officers/fso_econ.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1737.50, -4799.07),"management-container" , true, blueRoom, "Management Officers", "https://michelleFae.github.io/impactHack/assets/officers/fso_management.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(4193.59, -1720.01, -5000.00),"political-affairs-container" , true, blueRoom, "Political Affairs Officers", "https://michelleFae.github.io/impactHack/assets/officers/fso_political.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(2548.13, -1483.93, 5000.00),"public-diplomacy-container" , true, blueRoom, "Public Diplomacy Officers", "https://michelleFae.github.io/impactHack/assets/officers/fso_pd.png", radius/0.8);



  /* FSS Room Items (red) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"fss-dim-container" , true, redRoom, "FSS Dimensions", "https://michelleFae.github.io/impactHack/assets/icons/dimensionIcons/redPinkDims.png" , radius / 2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-103.73, -463.00, -5000.00),"fss-interactive-container" , true, redRoom, "In FSS Shoes","https://michelleFae.github.io/impactHack/assets/icons/fssShoes.png", radius/2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, 784.49, 103.72),"fss-wheel" , true, redRoom, "The FSS wheel", "https://michelleFae.github.io/impactHack/assets/wheel/fssWheel.png", radius/1.5);

  // Diplomats
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -1961.48, 3770.59),"medical-and-health-specialist-container" , true, redRoom, "Medical and Health Specialists", "https://michelleFae.github.io/impactHack/assets/officers/fss_med.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1725.68, 4881.38),"information-technology-specialist-container" , true, redRoom, "Information Technology Specialists", "https://michelleFae.github.io/impactHack/assets/officers/fss_it.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1737.50, -4799.07),"engineering-specialist-container" , true, redRoom, "Engineering Specialists", "https://michelleFae.github.io/impactHack/assets/officers/fss_eng.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(4193.59, -1720.01, -5000.00),"international-programs-and-english-language-container" , true, redRoom, "International Programs and English Language Speicalists", "https://michelleFae.github.io/impactHack/assets/officers/fss_lang.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-2314.64, -1758.32, -5000.00),"law-enforcement-and-security-specialists-container" , true, redRoom, "Law Enforcement and Security Specialists", "https://michelleFae.github.io/impactHack/assets/officers/fss_security.png", radius/0.8);






  /* Civil Service Room Items (white) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-103.73, -463.00, -5000.00),"cso-dim-container" , true, whiteRoom, "CSO Dimensions", "https://michelleFae.github.io/impactHack/assets/icons/dimensionIcons/csoDims.png" , radius / 2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"cso-interactive-container" , true, whiteRoom, "In CSO Shoes","https://michelleFae.github.io/impactHack/assets/icons/csoShoes1.png", radius/2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, 721.39, 5.00),"cso-wheel" , true, whiteRoom, "The CSO wheel", "https://michelleFae.github.io/impactHack/assets/wheel/csoWheel.png", radius/1.5);
  
  // Diplomats
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -1961.48, 3770.59),"foreign-affairs-container" , true, whiteRoom, "Foreign Affairs Officers", "https://michelleFae.github.io/impactHack/assets/officers/cso_fa.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1725.68, 4881.38),"intelligence-series-officer-container" , true, whiteRoom, "Intelligence Series Officers", "https://michelleFae.github.io/impactHack/assets/officers/cso_intelligence.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1737.50, -4799.07),"information-technology-management-container" , true, whiteRoom, "Information Technology Management Officers", "https://michelleFae.github.io/impactHack/assets/officers/cso_it.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(4193.59, -1720.01, -5000.00),"public-affairs-container" , true, whiteRoom, "Public Affairs Officers", "https://michelleFae.github.io/impactHack/assets/officers/cso_public.png", radius/0.8);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-2314.64, -1758.32, -5000.00),"language-specialists-container" , true, whiteRoom, "Language Specialists", "https://michelleFae.github.io/impactHack/assets/officers/cso_lang.png", radius/0.8);



  
  // Link Rooms
  linkPanoRooms (blackRoom, blueRoom, new THREE.Vector3(5000.00, -405.41, -1679.79), new THREE.Vector3(5000.00, -911.25, 20.85), 1000, "Main Room", "Foreign Service Officer Exhibit", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow1.png", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow.png");
  linkPanoRooms (blackRoom, redRoom, new THREE.Vector3(5000.00, -408.72, 1570.36), new THREE.Vector3(5000.00, -911.25, 20.85), 1000, "Main Room", "Foreign Service Specialist Exhibit", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow4.png", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow5.png");
  linkPanoRooms (blackRoom, whiteRoom, new THREE.Vector3(-5000.00, -877.80, 5.84), new THREE.Vector3(-5000.00, -877.80, 5.84), 1000, "Main Room", "Civil Service Officer Exhibit", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow2.png", "https://michelleFae.github.io/impactHack/assets/icons/arrows/arrow3.png");
  
 

  

  // Add Scenes
  addScenes();

  // Removes the template div from list
  list.removeChild(listItem);

  // Set the navbar list to visible for the first room
  setNavBarListInView(blackRoom);


/* Set Intro vector - so the user sees ceiling on entrance into room */
var lookAtPositions = [
  new THREE.Vector3(188.35, 5000.00, 0.00)
];

blackRoom.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );






