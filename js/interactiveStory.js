//Variables
var alreadyPlayed = 0;
var audioFirst = new Audio("Sounds/Melancholy.mp3");
$(audioFirst).animate({ volume: 0 });


$('body').on('click', function () {
    if (alreadyPlayed == 0) {
        audioFirst.play();
        $(audioFirst).animate({ volume: 0.6 }, 2000);
        console.log(alreadyPlayed);
        console.log('Successfully played');
        alreadyPlayed = 1;
    };
});

var alreadyExist = 0;
var timeControl = 0;
var timeManage = 0;
var characterName = 1;
var characterDisappear = 1;
var nextSceneControl = 1;
var count = 0;
var audioSecond = '';
var timeCount = 0;
var numberCount = 1;
var numberCount2 = 0;
var inspection = 0;
//var changeScreen = 0;

//Arrays
arrCover = [
    { name: 'firstImage', img: 'Images/First.jpg' },
    { name: 'secondImage', img: 'Images/Second.jpg' },
    { name: 'thirdImage', img: 'Images/Third.jpg' },
    { name: 'fourthImage', img: 'Images/Fourth.jpg' },
    { name: 'fifthImage', img: 'Images/Fifth.jpg' },
];

arrTransition = [
    { name: 'Image0', img: 'Transition/Sand/0.png', id: '#Image0', id2: '' },
    { name: 'Image1', img: 'Transition/Sand/1.png', id: '#Image1', id2: '#Image0' },
    { name: 'Image2', img: 'Transition/Sand/2.png', id: '#Image2', id2: '#Image1' },
    { name: 'Image3', img: 'Transition/Sand/3.png', id: '#Image3', id2: '#Image2' },
    { name: 'Image4', img: 'Transition/Sand/4.png', id: '#Image4', id2: '#Image3' },
    { name: 'Image5', img: 'Transition/Sand/5.png', id: '#Image5', id2: '#Image4' },
    { name: 'Image6', img: 'Transition/Sand/6.png', id: '#Image6', id2: '#Image5' },
    { name: 'Image7', img: 'Transition/Sand/7.png', id: '#Image7', id2: '#Image6' },
    { name: 'Image8', img: 'Transition/Sand/8.png', id: '#Image8', id2: '#Image7' },
    { name: 'Image9', img: 'Transition/Sand/9.png', id: '#Image9', id2: '#Image8' },
    { name: 'Image10', img: 'Transition/Sand/10.png', id: '#Image10', id2: '#Image9' },
    { name: 'Image11', img: 'Transition/Sand/11.png', id: '#Image11', id2: '#Image10' },
    { name: 'Image12', img: 'Transition/Sand/12.png', id: '#Image12', id2: '#Image11' },
    { name: 'Image13', img: 'Transition/Sand/13.png', id: '#Image13', id2: '#Image12' },
    { name: 'Image14', img: 'Transition/Sand/14.png', id: '#Image14', id2: '#Image13' },
    { name: 'Image15', img: 'Transition/Sand/15.png', id: '#Image15', id2: '#Image14' },
    { name: 'Image16', img: 'Transition/Sand/16.png', id: '#Image16', id2: '#Image15' },
    { name: 'Image17', img: 'Transition/Sand/17.png', id: '#Image17', id2: '#Image16' },
    { name: 'Image18', img: 'Transition/Sand/18.png', id: '#Image18', id2: '#Image17' },
    { name: 'Image19', img: 'Transition/Sand/19.png', id: '#Image19', id2: '#Image18' },
    { name: 'Image20', img: 'Transition/Sand/20.png', id: '#Image20', id2: '#Image19' },
    { name: 'Image21', img: 'Transition/Sand/21.png', id: '#Image21', id2: '#Image20' },
    { name: 'Image22', img: 'Transition/Sand/22.png', id: '#Image22', id2: '#Image21' },
    { name: 'Image23', img: 'Transition/Sand/23.png', id: '#Image23', id2: '#Image22' },
    { name: 'Image24', img: 'Transition/Sand/24.png', id: '#Image24', id2: '#Image23' },
    { name: 'Image25', img: 'Transition/Sand/25.png', id: '#Image25', id2: '#Image24' },
    { name: 'Image26', img: 'Transition/Sand/26.png', id: '#Image26', id2: '#Image25' },
    { name: 'Image27', img: 'Transition/Sand/27.png', id: '#Image27', id2: '#Image26' },
    { name: 'Image28', img: 'Transition/Sand/28.png', id: '#Image28', id2: '#Image27' },
    { name: 'Image29', img: 'Transition/Sand/29.png', id: '#Image29', id2: '#Image28' },
    { name: 'Image30', img: 'Transition/Sand/30.png', id: '#Image30', id2: '#Image29' },
    { name: 'Image31', img: 'Transition/Sand/31.png', id: '#Image31', id2: '#Image30' },
    { name: 'Image32', img: 'Transition/Sand/32.png', id: '#Image32', id2: '#Image31' }
];

//For loop for creating the cover background
for (var i = 0; i < arrCover.length; i++) {
    var createHTML = "<img id='" + arrCover[i].name + "' img src='" + arrCover[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px'></div>"
    console.log(createHTML);
    $('.coverBackground').append(createHTML);
};

//Function for transitioning between images
function callCover(wordID, secondNumberID) {
    var coverID = "#" + wordID;
    var secondID = "#" + secondNumberID;
    //console.log(coverID, secondID);
    if (alreadyExist == 1) {
        //console.log('already exist');
        $(secondID).fadeIn(6000);
    } else {
        $(coverID).fadeIn(500);
        //$(coverID).animate()
        alreadyExist = 1;
        //console.log(alreadyExist);
    };
};

var audioThird = '';

//Function for calling the next line of the plot
function nextLine(trigger, name, ID, time, title, text, characterVisible, characterHidden, characterID, extraTrigger, bonusTrigger, fileName, contextBackground) {
    var restriction = "#" + ID;
    var titleFull = "#" + title;
    $('body').on('click', function () {
        if (timeManage == trigger) {
            $(restriction).fadeOut(time);
            setTimeout(function () {
                $(restriction).replaceWith('<text id=' + ID + '>' + text + '</text>');
                $(restriction).fadeIn(time);
                timeManage = timeManage + 1;
                console.log('Required ' + timeManage + ' for next line');
                if (characterName == characterVisible) {
                    $(titleFull).fadeIn(time);
                    characterName = characterName + 1;
                    console.log('Required ' + characterName + ' for showing name');
                } else if (characterName != 0 && characterVisible) {
                    $(titleFull).replaceWith('<text id="' + title + '">' + name + '</text>')
                    $(titleFull).fadeIn(time);
                    characterName = characterName + 2;
                    console.log('Required ' + characterName + ' or ' + title + ' for showing name!!!');
                };
                if (characterDisappear == characterHidden) {
                    $(titleFull).fadeOut(time / 10);
                    characterDisappear = characterDisappear + 1;
                    console.log('Required ' + characterDisappear + ' for hiding name');
                };
                if (extraTrigger == 0) {
                    var character = '#' + characterID;
                    $(character).fadeIn(time * 2);
                };
                if (bonusTrigger == trigger) {
                    var audioFile = new Audio("Sounds/" + fileName + ".mp3");
                    $(audioFile).animate({ volume: 0 });
                    setTimeout(function () {
                        audioFile.play();
                        $(audioFile).animate({ volume: 0.55 })
                        console.log('File was played...')
                    }, time / 5);
                };
                if (trigger == 9) {
                    console.log('DELETTTEEEEE!!!!');
                    console.log('The next scene is scene: ' + nextSceneControl);
                    //$('#nextScene').fadeIn(3500);
                    $('body').on('click', function () {
                        if (nextSceneControl == 2) {
                            setTimeout(function () { secondScene(33) }, 200);
                        };
                    });
                    nextSceneControl = nextSceneControl + 1;
                } else if (trigger == 13) {
                    if (inspection == 0) {
                        $('#desk').fadeIn(1600);
                        $('#inspecting').fadeIn(1600);
                        $('#redJadeite').fadeIn(1600);
                        console.log('The time count is: ' + time);
                        inspection = 1;
                        console.log(inspection);
                    };
                } else if (trigger == 14) {
                    $('#inspecting').animate({ left: '250px', bottom: '80px' }, 1600);
                    console.log('Successful animation');
                } else if (trigger == 15) {
                    $('#inspecting').animate({ width: '75%', bottom: '20px', left: '237px' }, 2000);
                    $('#redJadeite').animate({ width: '20%' }, 2000);
                } else if (trigger == 16) {
                    $('#desk').fadeOut(800);
                    $('#inspecting').fadeOut(800);
                    $('#redJadeite').fadeOut(800);
                    setTimeout(function () { deleteElements('desk'); }, 800);
                } else if (trigger == 19) {
                    $('#characterC').fadeOut(2400);
                    inspection = 1;
                } else if (trigger == 20) {
                    if (inspection == 1) {
                        $('#characterA').fadeOut(800);
                        $('#characterName').fadeOut(800);
                        $('#textBox').fadeOut(800);
                        $('#backgroundContext').fadeOut(800);
                        inspection = 2;
                        console.log(inspection);
                        if (inspection == 2) {
                            $(audioSecond).animate({ volume: 0 }, 5000);
                            for (var i = 0; i < arrStudy.length; i++) {
                                var insertHTML = "<img id='" + arrStudy[i].name + "' img src='" + arrStudy[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 50'></div>"
                                console.log(insertHTML);
                                $('.time').append(insertHTML);
                            };
                            setTimeout(function () { callCover('study', 'studySecond') }, 1000);
                            setTimeout(function () {
                                callCover('studySecond', 'studyThird')
                                $(audioSecond).remove();
                                audioThird = new Audio("Sounds/Contemplating.mp3");
                                $(audioThird).animate({ volume: 0 });
                                audioThird.play();
                                $(audioThird).animate({ volume: 0.55 }, 2000)
                            }, 6500);
                            setTimeout(function () {
                                callCover('studyThird', 'studyFourth')
                                inspection = 3;
                            }, 12000);
                            $('#inspecting').css({ bottom: '90px' });
                            $('#redJadeite').css({ top: '180px', width: '18%' });
                        };
                    };
                } else if (trigger == 21) {
                    $('#inspecting').fadeIn(800 * 2);
                    $('#redJadeite').fadeIn(800 * 2);
                    $('#characterA').fadeIn(800);
                    $('#textBox').fadeIn(800);
                } else if (trigger == 22) {
                    setTimeout(function () {
                        deleteElements(undefined, undefined, undefined, undefined, "characterA", "textBox");
                        setTimeout(function () {
                            $('#context').fadeIn(2000)
                            $('#prologue').fadeIn(2000);
                        }, 1000);
                    }, 200);
                    deleteElements('study', 'studySecond', 'studyThird', 'archeology', "inspecting", "redJadeite");
                } else if (trigger == 25){
                    deleteElements(undefined, undefined, undefined, undefined, "backgroundInformation", "textBox");
                }
                else if (trigger == 27){
                    $('#characterI').fadeOut(time*3);
                    $('#characterE').fadeIn(3000);
                    $('#firstChoice').fadeIn(3000);
                    $('#secondChoice').fadeIn(3000);
                };
            });
        };
        if(contextBackground == 1){
            $('#textBox').fadeIn(time);
        }else if(contextBackground == 2){
            setTimeout(function(){
                $('#textBox').fadeIn(3000);
            });
        }
    });
};

//Transition to the next scene - functions are interlinked
function secondScene(initiateNumber) {
    $('#characterA').fadeOut();
    $('#textBox').fadeOut();
    $('#characterB').fadeOut();
    $('#archeology').fadeOut();
    $('#backgroundContext').fadeOut();
    $('#characterName').fadeOut();
    for (var i = 0; i < arrTransition.length; i++) {
        var createHTML = "<img id='" + arrTransition[i].name + "' img src='" + arrTransition[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 20'></div>"
        console.log(createHTML);
        $('.transitions').append(createHTML);
        count = count + 1;
        console.log(count);
    };
    if (count == initiateNumber) {
        //timeSwitch(70, 70)
        transitionSand1(70);
    };
};

//Does not function as expected...
function timeSwitch(time, timePlus) {
    var HTML = "<img id='study' img src='Images/Study.jpg' style='position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 15'></div>"
    //Remember to append the html to the transition class - have not added yet
    console.log(HTML);
    console.log(arrTransition[1].id, arrTransition[1].id2);
    for (var i = 0; i < arrTransition.length; i++) {
        if (i == 0) {
            setTimeout(function () {
                $(arrTransition[0].id).show();
            }, time);
        } else if (i > 0) {
            setTimeout(function () {
                $(arrTransition[numberCount].id).show();
                numberCount = numberCount + 1;
                $(arrTransition[numberCount2].id2).hide();
                numberCount2 = numberCount2 + 1;
                timeCount = time
                time = time + timePlus
                console.log(numberCount, numberCount2);
                console.log('time for next setTimeout: ' + time);
            }, timeCount);
        };
    };
};

function transitionSand1(time) {
    setTimeout(function () {
        $('#Image0').show();
        var HTML = "<img id='study' img src='Images/Study.jpg' style='position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 15'></div>"
        console.log(HTML);
        setTimeout(function () {
            $('#Image1').show();
            $('#Image0').hide();
            $('.normalBackground').append(HTML);
            setTimeout(function () {
                $('#Image2').show();
                $('#Image1').hide();
                setTimeout(function () {
                    $('#Image3').show();
                    $('#Image2').hide();
                    setTimeout(function () {
                        $('#Image4').show();
                        $('#Image3').hide();
                        transitionSand2(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, 200);
};

function transitionSand2(time) {
    setTimeout(function () {
        $('#Image5').show();
        $('#Image4').hide();
        setTimeout(function () {
            $('#Image6').show();
            $('#Image5').hide();
            setTimeout(function () {
                $('#Image7').show();
                $('#Image6').hide();
                setTimeout(function () {
                    $('#Image8').show();
                    $('#Image7').hide();
                    setTimeout(function () {
                        $('#Image9').show();
                        $('#Image8').hide();
                        transitionSand3(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand3(time) {
    setTimeout(function () {
        $('#Image10').show();
        $('#Image9').hide();
        setTimeout(function () {
            $('#Image11').show();
            $('#Image10').hide();
            setTimeout(function () {
                $('#Image12').show();
                $('#Image11').hide();
                setTimeout(function () {
                    $('#Image13').show();
                    $('#Image12').hide();
                    setTimeout(function () {
                        $('#Image14').show();
                        $('#Image13').hide();
                        transitionSand4(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand4(time) {
    setTimeout(function () {
        $('#Image15').show();
        $('#Image14').hide();
        setTimeout(function () {
            $('#Image16').show();
            $('#Image15').hide();
            setTimeout(function () {
                $('#Image17').show();
                $('#Image16').hide();
                setTimeout(function () {
                    $('#Image18').show();
                    $('#Image17').hide();
                    setTimeout(function () {
                        $('#Image19').show();
                        $('#Image18').hide();
                        transitionSand5(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand5(time) {
    setTimeout(function () {
        $('#Image20').show();
        $('#Image19').hide();
        setTimeout(function () {
            $('#Image21').show();
            $('#Image20').hide();
            setTimeout(function () {
                $('#Image22').show();
                $('#Image21').hide();
                setTimeout(function () {
                    $('#Image23').show();
                    $('#Image22').hide();
                    setTimeout(function () {
                        $('#Image24').show();
                        $('#Image23').hide();
                        transitionSand6(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand6(time) {
    setTimeout(function () {
        $('#Image25').show();
        $('#Image24').hide();
        setTimeout(function () {
            $('#Image26').show();
            $('#Image25').hide();
            setTimeout(function () {
                $('#Image27').show();
                $('#Image26').hide();
                setTimeout(function () {
                    $('#Image28').show();
                    $('#Image27').hide();
                    setTimeout(function () {
                        $('#Image29').show();
                        $('#Image28').hide();
                        setTimeout(function () {
                            $('#Image30').show();
                            $('#Image29').hide();
                            setTimeout(function () {
                                $('#Image31').show();
                                $('#Image30').hide();
                                setTimeout(function () {
                                    $('#Image32').show();
                                    $('#Image31').hide();
                                    for (var i = 0; i < arrTransition.length; i++) {
                                        $(arrTransition[i].id).remove();
                                        if (i >= 32) {
                                            nextSceneControl = 3;
                                            $('.transitions').remove();
                                        };
                                    };
                                }, time);
                            }, time);
                        }, time);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

//Deleting elements
function deleteElements(v, w, x, y, z, i) {
    var firstElement = "#" + v;
    var secondElement = "#" + w;
    var thirdElement = "#" + x;
    var fourthElement = "#" + y;
    var fifthElement = "#" + z;
    var sixthElement = "#" + i;
    $(firstElement).remove();
    $(secondElement).remove();
    $(thirdElement).remove();
    $(fourthElement).remove();
    $(fifthElement).fadeOut(800);
    $(sixthElement).fadeOut(800);
};

//alert('To progress onwards, click on the area around the text.');
//calling for transitions
callCover('firstImage');
(callCover('firstImage', 'secondImage'));
setTimeout(function () { callCover('secondImage', 'thirdImage') }, 5500);
setTimeout(function () { callCover('thirdImage', 'fourthImage') }, 11000);
setTimeout(function () { callCover('fourthImage', 'fifthImage') }, 16500);
setTimeout(function () { callCover(0, 'bambooSlip') }, 1500);
setTimeout(function () { callCover(0, 'introduction') }, 3000);
$('#bambooSlip').on("click", function () {
    if (timeControl == 0) {
        $('#introduction').fadeOut(800);
        setTimeout(function () {
            $('#introduction').replaceWith('<text id="introduction">...and with a great interest, I seeked<br>for the answer...</text>');
            $('#introduction').fadeIn(2000);
        }, 800);
        timeControl = 1;
    } else if (timeControl == 1) {
        $('#introduction').fadeOut(800);
        setTimeout(function () {
            $('#introduction').replaceWith('<text id="introduction">...it began back in the spring of 1974<br>...a spring when I just became<br>an archaeologist...</text>');
            $('#introduction').fadeIn(2000);
        }, 800);
        $('#fifthImage').on("click", function () {
            deleteElements('firstImage', 'secondImage', 'thirdImage', 'fourthImage', 'introduction', 'bambooSlip');
            $("#startGame").fadeIn(7000);
            $(audioFirst).animate({ volume: 0 }, 8000);
        });
        timeControl = 2;
    } else {
        console.log('Already changed');
    };
});

//Starting the game - plot line follows
$('#startGame').click(function () {
    //Add audio here
    $(audioFirst).animate({ volume: 0 }, 400);
    setTimeout(function () { $(audioFirst).remove() }, 500);
    audioSecond = new Audio("Sounds/Discovery.mp3");
    audioSecond.play();
    $(audioSecond).animate({ volume: 0.2 }, 1000);
    deleteElements('fifthImage', 'startGame', 'bambooSlip', 'introduction');
    $('#archeology').fadeIn(1400);
    setTimeout(function () { $('#textBox').fadeIn(2000) }, 1800);
    setTimeout(function () {
        $('#characterA').fadeIn(1400);
        $('#backgroundContext').fadeIn(2000);
        timeManage = 1;
    }, 2000);
    nextLine(1, 0, 'backgroundContext', 800, 'characterName', 'Within a short period of time, the authorities were notified and soon came the government order of dispatching<br>official archaeologists to the site.', 0);
    nextLine(2, 'You', 'backgroundContext', 800, 'characterName', 'I came from an archaeological family that traces its ancestry back to the Song dynasty. Hundreds of years allowed<br>our skills to mature further...so even if I just recently graduated, I was still notified as a member of this event.', 1);
    nextLine(3, 'You', 'backgroundContext', 800, 'characterName', 'Across the centuries, occasional reports from this region have mentioned pieces of terracotta figures and fragments<br> of Qin necropolis...many were prompted to investigate this place...', 2);
    nextLine(4, 'You', 'backgroundContext', 800, 'characterName', 'It was not along ago, perhaps late-April, when archaeologist Zhao Kang-Min first recognised the significance of<br>the shattered pieces and successfully reconstructed the soldiers.', 3);
    nextLine(5, '', 'backgroundContext', 800, 'characterName', 'Many things happened during this period, of which the Cultural Revolution was one of the most renowned. Zhao feared the<br>reportage of his discovery would lead to the destruction of the warriors and he rejected for publicisation.', 2, 1);
    nextLine(6, 0, 'backgroundContext', 800, 'characterName', 'The news eventually reached the top of the Chinese leadership but instead of destruction, a formal excavation<br>was organised.', 0, 1);
    nextLine(7, 'You', 'backgroundContext', 800, 'characterName', 'Between the time of our arrival to the excavation site, small and scattered discoveries of warriors were continuously<br>unearthed...we are certain that behind these findings, something extremely important would be uncovered.', 4);
    nextLine(8, 'You', 'backgroundContext', 800, 'characterName', 'It might be about the past dynasties or even Emperor Qin himself...and it will be a significant milestone within our<br>history...', 5);
    setTimeout(function () { nextLine(9, 'Assistant', 'backgroundContext', 800, 'characterName', 'Lady...the governor is seeking for you.', 6, 3, 'characterB', 0, 9, 'Sand'), 2400 });
});

//Must click to initiate
$('.normalBackground').on('click', function () {
    //if(changeScreen == 0){
    console.log('Clicked on study');
    $('#characterA').fadeIn(800);
    $('#textBox').fadeIn(800);
    nextLine(10, 'Governor', 'backgroundContext', 800, 'characterName', '...latest reports mentioned the appearance of a red jadeite lying absurdly at a corner of the temporary excavation site.<br>The discoverer was an experienced antique appraiser who asserts for the jadeite not belonging to any current dynasties', 3, 4, 'characterC', 0);
    nextLine(11, 'Governor', 'backgroundContext', 800, 'characterName', 'yet he affirms for its invaluableness.', 6);
    nextLine(12, 'Governor', 'backgroundContext', 800, 'characterName', 'You belong to a family of one of the oldest lines for archaeology. What is your speak on this matter.', 7, 0, '', 12);
    //add transition to desk
    nextLine(13, 'You', 'backgroundContext', 800, 'characterName', 'In ancient times, the burial possessions of nobles consists of more or less, at least one jadeite.', 5, 5);
    nextLine(14, 'You', 'backgroundContext', 800, 'characterName', 'Most were emerald and some were yellow but red...only those of extreme high status would have the opportunity to acquire.', 5);
    nextLine(15, 'You', 'backgroundContext', 800, 'characterName', "And this...not only differs to the defective jadeites within the markets but also renders itself distinctive<br>from the high-quality ones excavated before.", 5);
    nextLine(16, 'You', 'backgroundContext', 800, 'characterName', '...please guarantee me the permission of observing it at anytime.', 5);
    nextLine(17, 'Governor', 'backgroundContext', 800, 'characterName', 'Lady, I trust you merely because you are an expert dispatched by the government. If anything destructive happens to<br>this jadeite, I hope you understand the consequences.', 7);
    nextLine(18, 'You', 'backgroundContext', 800, 'characterName', 'Yes, Governor.', 9);
    nextLine(19, 'Governor', 'backgroundContext', 800, 'characterName', 'You will have the ability to observe it anytime you want to, but only in this room.', 9, 4, '', 1, 19, 'Sand');
    nextLine(20);
    nextLine(21, 'You', 'backgroundContext', 800, 'characterName', 'A red jadeite...', 9);
    nextLine(22, '', 'backgroundContext', 800, 'characterName', '', 9);
    //};
});

//Array
var arrStudy = [
    { name: 'studySecond', img: 'Images/Study-Second.jpg' },
    { name: 'studyThird', img: 'Images/Study-Third.jpg' },
    { name: 'studyFourth', img: 'Images/Study-Fourth.jpg' },
];

//Database
var displayID = '';
var apikey = '61a3fa9234abfc7f972efc07';
var url = 'https://mmou1226-b813.restdb.io/rest/ancientchina';
/* --- Functions --- */
function getCharacter(url, apikey, value) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {

            console.log(response[i].Value, value);
            if (value == response[i].Value) {
                // Character item
                //  var characterItem = '<img id="character' + response[i].Letter + '" src="' + response[i].ImageReference + '" width="' + response[i].OriginalWidth + '" style="z-index: 80; width:' + response[i].Width + '%; left:' + response[i].Left + 'px; top:' + response[i].Top + 'px; display: none">';
                //  console.log(characterItem);
                //  $(".female").append(characterItem);

                // Character cropped
                var characterCropped = '<img id="character' + response[i].Selection + '" class="hover-opacity" src="Images/Character' + response[i].Selection + '.png" style="z-index: 80; height: 650px; display: none; border: 1px solid #ffffff; top: 80px; left: ' + response[i].Interval + 'px">';
                console.log(characterCropped);
                $(".female").append(characterCropped);
            };
        }
    });
}
function addCharacter(item, url, apikey) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(item)
    }

    $.ajax(settings).done(function (response) {
        console.log('Item successfully added');
        console.log(response);
    });

}
function getCharacters(itemID, url, apikey) {
    var serviceURL = url + itemID;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": serviceURL,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log('Item successfully retrieved');
        console.log(response);
        /*var female1 = new Female(value, 18, 0, 0, 58, 'female', this.value);
        female1.create('Girl');*/
    });
};

//OOP classes
class Character {
    constructor(name, age, top, left) {
        this.name = name;
        this.age = age;
        this.top = top;
        this.left = left;
    };
    create() {
        //inside class character is method
        // var className = '#' + this.name
        // $(className).animate({
        //     top: this.top,
        //     left: this.left
        // }, 1000, function () {
        //     // Animation complete.
        // });
    }
    getName() {
        //console.log(this.name);
        return 'The name of the character is ' + this.name;
    }
    setName() {
        if (this.name == 'Name') {
            console.log('?')
        } else {
            this.name = getName();
            console.log(this.name);
        }
    }
    displayCharacter() {
        displayID = '#' + this.name;
        $(displayID).fadeIn(5000);
    }
};

class Female extends Character {
    //Inheritance: Female inherits Character
    //Female is subclass of Character
    constructor(name, age, top, left, gender, imageNumber, originalWidth) {
        super(name, age, top, left);
        //constructor of the super class
        this.gender = gender;
        this.image = imageNumber;

        var HTML1 = '<img id="character' + imageNumber + '" class="female" src="Images/Character' + this.image + '.png" width="' + originalWidth + '" style="height: -webkit-fill-available; left:' + this.left + 'px; top:' + this.top + 'px; object-fit: cover; object-position: top; z-index: 75; display: none">';
        $('.characters').append(HTML1);
        console.log(HTML1);

        //superclass Character, subclass Female
    }//Two methods
    pullInformation() {
        var displayInfo = '#character' + this.image + 'Identity';
        console.log(displayInfo);
        $(displayInfo).fadeIn(5000);
        $('#characterIdentity').fadeIn(5000);
        console.log("Loading the character's background information and details...");
    }
    chooseAnother() {
        console.log('Wanting to choose another character...');
    }
    confirmButton() {
        $('#confirmSelection').fadeIn(5000);
        console.log('Faded in button for confirmation');
    }
    fadeCharacter() {
        // $("#characterEE").fadeOut(5000);
        // $("#characterFF").fadeOut(5000);
        // $("#characterGG").fadeOut(5000);
        // $("#characterJJ").fadeOut(5000);
        $(".hover-opacity").fadeOut(5000);
        setTimeout(function(){
            $('.hover-opacity').remove();
        }, 5000);
        console.log('success????');
    }
};

//Prologue ending
$('#context').on('click', function () {
    deleteElements('characterB', 'characterC', 'redJadeite', 'studyFourth', 'context', 'prologue');
    $('#selection').fadeIn(3000);
    $('#selection').on('mouseover', function () {
        $("#characterEE").fadeIn(5000);
        $("#characterFF").fadeIn(5000);
        $("#characterGG").fadeIn(5000);
        $("#characterJJ").fadeIn(5000);
        $('#characterEE').on('click', function(){
            console.log('Character information...');
            var female1 = new Female('characterE', 18, 0, -150, 'female', 'E', 1195);
            //female1.create();
            female1.fadeCharacter();
            setTimeout(function(){
                female1.displayCharacter();
                female1.pullInformation();
                female1.confirmButton();
            }, 5000);
            console.log('...')
        });
    });
});

//calling the database
getCharacter(url, apikey, 2);
getCharacter(url, apikey, 3);
getCharacter(url, apikey, 4);
getCharacter(url, apikey, 5);
var destinationWent = 0;
var firstTime = 1;

//Confirming character selection
$("#confirmSelection").click(function(){
    $("#mapE").fadeIn(3000);
    $(audioThird).animate({ volume: 0}, 5000);
    setTimeout(function(){$('#characterE').fadeOut()}, 5000);
    $("#streetDestination").fadeIn(3000);
    $("#templeDestination").fadeIn(3000);
    $("#streetDestination").click(function(){
        //destinationWent = 1;
        $("#streetE").fadeIn(3000);
            $(audioThird).remove();
            var audioFourth = new Audio("Sounds/Zhaoge.mp3");
            $(audioFourth).animate({ volume: 0});
            audioFourth.play();
            $(audioFourth).animate({ volume: 0.35 }, 2000);
            deleteElements(undefined, undefined, undefined, undefined, 'streetDestination', 'templeDestination');
            $("#teaHouseDestination").fadeIn(3000);
            //if(firstTime == 1){
            setTimeout(function(){
                nextLine(23, '', 'backgroundInformation', 800, 'characterTitle', '1600 BC - 1046 BC<br>Shang Dynasty, Zhaoge', 9, undefined, undefined, undefined, undefined, undefined, 1);
            }, 5000);
                nextLine(24, '', 'backgroundInformation', 800, 'characterTitle', 'Ancient historical records noted for the prosperity of the last capital of the Shang Dynasty. Bearing a long history of over three thousand years...<br>Zhaoge flourished the most under the reign of Di Xin, the King Zhou of Shang.');
                nextLine(25, '', 'backgroundInformation', 800, undefined, '', 11, undefined, undefined, undefined, undefined, undefined, 0);
                //firstTime = 0;
            //};
            $("#teaHouseDestination").click(function(){;
                $("#teaHouseDestination").fadeOut(800);
                $("#storeE").fadeIn(3000);
                setTimeout(function(){
                    nextLine(26, 'Maid', 'backgroundInformation', 800, 'characterTitle', 'Miss, please wait for a moment, the private room is already prepared for you upstairs, I will go order some dishes for you.', 13, 1, 'characterI', 0, undefined, undefined, 2);
                    nextLine(27, '', 'backgroundInformation', 800, 'characterTitle', 'After the maid left, you slightly stood at the end of the staircase for a little moment and looked around. You noticed two unordinary tables of<br>guests situated just underneath your normal private room.', undefined, 2, 'characterE', undefined, 27, 'Sand');
                    $("#firstChoice").click(function(){
                        console.log("a.	(undesirable choice) You wanted to but your moral conscience tells you it is inappropriate to overhear other people’s conversations…after a short debate in your conscious mind managed to stay but not move. (context) Ladies within this period of time were strictly educated to behave according to a set of social expectations, including not overhearing the business of others.");
                    });
                    $("#secondChoice").click(function(){
                        console.log("b. (desirable choice) You followed social expectations...plot progresses");
                    });
                }, 3000);
        });
    });
    //Trying to code if the user could return to the big map and choose the second choice
    $("#templeDestination").click(function(){
        deleteElements(undefined, undefined, undefined, undefined, 'streetDestination', 'templeDestination');
        if(destinationWent == 0){
            $("#templeDayE").fadeIn(3000);
            destination = 1;
        }else if(destination == 1){
            $("#templeSunsetE").fadeIn(3000);
        };
    });
});

//The code was not actually finished...