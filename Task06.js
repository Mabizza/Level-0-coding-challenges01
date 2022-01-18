function maximum(...numbers)
{
    maxno = numbers[0];

    for (let i=0; i < numbers.length; i++)
    {
        if (numbers[i] > maxno)
            maxno = numbers[i];
    }

   console.log(maxno);
}
//---------------------------------------------
maximum(15, 7, 10);				// Task 0.6
