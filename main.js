var testImgRelativeURLStrs=['blue_math_folder.jpg', 'blue_pen.jpg', 'elmers_solid_disappearing_glue.jpg', 'green_candy_cane_bag.jpg', 'green_fat_crayola_marker.jpg', 'mini_santa_hat.jpg', 'pink_eraser.jpg', 'purple_thin_crayola_marker.jpg', 'us_dollar_bill.jpg', 'white_crayola_colored_pencil.jpg'];
var testImgAltStrs=['Blue Math Folder', 'Blue Pen', 'Elmers Solid Disappearing Glue', 'Green Candy Cane Bag', 'Green Fat Crayola Marker', 'Mini Santa Hat', 'Pink Eraser', 'Purple Thin Crayola Marker', 'U.S. Dollar Bill', 'White Crayola Colored Pencil'];
var microsoftAzureResultItemNameStrs=['Person', 'Wall', 'Person', 'Indoor', 'Indoor', 'Wall' , 'Person', 'Indoor', 'Indoor', 'Indoor'];
var i=0;
var microsoftAzureResultItemNameP=document.querySelector('.microsoft_azure_result_item_name');
var mobilenetResultItemNameP=document.querySelector('.mobilenet_result_item_name');
var testImgNameP=document.querySelector('.test_img_name');
var testImg=document.querySelector('img');
var moreAccurateItemIdentificationSystemP=document.querySelector('.more_accurate_item_identification_system');

function prevTestImg(){
    i=i-1;

    if(i<0){
        i=9;
    }

    testImg.src='images/'+testImgRelativeURLStrs[i];
    testImg.alt=testImgAltStrs[i];
    testImgNameP.innerText=testImgAltStrs[i];
    microsoftAzureResultItemNameP.innerText=microsoftAzureResultItemNameStrs[i];
}

function nextTestImg(){
    i=i+1;

    if(i>9){
        i=0;
    }

    testImg.src='images/'+testImgRelativeURLStrs[i];
    testImg.alt=testImgAltStrs[i];
    testImgNameP.innerText=testImgAltStrs[i];
    microsoftAzureResultItemNameP.innerText=microsoftAzureResultItemNameStrs[i];
}
