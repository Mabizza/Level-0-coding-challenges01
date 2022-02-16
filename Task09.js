function printVowels(str)
{
    let vowel = "aeiou";

    str.toLowerCase();
    let res = str.match(/[aeiou]/ig);
    
    res = [...new Set(res)];

    if (res.length != 0)
    {
        console.log(res);
    }
}

//---------------------------------------------
printVowels("umuzi");
printVowels("This is a long sentence");
