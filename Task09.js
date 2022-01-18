function PrintVowels(str)
{
    let vowel = "aeiou";
    let vfound;

    str.toLowerCase();
    let res = str.match(/[aeiou]/ig);
    
    res = [...new Set(res)];

    if (res.length != 0)
    {
        console.log(res);
    }
}

//---------------------------------------------
PrintVowels("umuzi");
PrintVowels("This is a long sentence"); 
