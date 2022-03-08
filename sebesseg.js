/*
@author: MM 
ut - pozitiv valós
ido - pozitiv valós
return 
    - sebesseg nem negatív 
    - hibás paraméterek esetén : 'err' stringet ad vissza 


*/
function sebesseg( ut, ido){
    if( ido <= 0 || ut < 0){
        return 'err';
    }
    return ut/ido;
}

module.exports = sebesseg;
