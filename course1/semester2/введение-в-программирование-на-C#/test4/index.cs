// Console.WriteLine("введите количество предложений");

// int n = Convert.ToInt32(Console.ReadLine());


 

// string[] predl = new string[n];

// string[] Newpredl = new string[predl.Length];


 

// for(int i = 0; i < predl.Length; i++) {

// Console.WriteLine($"введите {i + 1} предложение");

// predl[i] = Console.ReadLine();

// }

// for (int i = 0; i < predl.Length; i++){

// string[] slove = predl[i].Split(' ');

// for(int j = 0; j < slove.Length; j++){

// if(slove[j][slove[j].Length-1] != 'А' || slove[j][slove[j].Length-1] != 'Б' || slove[j][slove[j].Length-1] != 'В' || slove[j][slove[j].Length-1] != 'Г' || slove[j][slove[j].Length-1] != 'Д' || slove[j][slove[j].Length-1] != 'Е' || slove[j][slove[j].Length-1] != 'Ж' || slove[j][slove[j].Length-1] != 'З' || slove[j][slove[j].Length-1] != 'И' || slove[j][slove[j].Length-1] != 'Й' || slove[j][slove[j].Length-1] != 'К' || slove[j][slove[j].Length-1] != 'Л' || slove[j][slove[j].Length-1] != 'М' || slove[j][slove[j].Length-1] != 'Н' || slove[j][slove[j].Length-1] != 'О' || slove[j][slove[j].Length-1] != 'П' || slove[j][slove[j].Length-1] != 'Р' || slove[j][slove[j].Length-1] != 'С' || slove[j][slove[j].Length-1] != 'Т' || slove[j][slove[j].Length-1] != 'У' || slove[j][slove[j].Length-1] != 'Ф' || slove[j][slove[j].Length-1] != 'Х' || slove[j][slove[j].Length-1] != 'Ц' || slove[j][slove[j].Length-1] != 'Ч' || slove[j][slove[j].Length-1] != 'Ш' || slove[j][slove[j].Length-1] != 'Щ' || slove[j][slove[j].Length-1] != 'Ы' || slove[j][slove[j].Length-1] != 'Ь' || slove[j][slove[j].Length-1] != 'Ъ' || slove[j][slove[j].Length-1] != 'Э' || slove[j][slove[j].Length-1] != 'Ю' || slove[j][slove[j].Length-1] != 'Я')

// {

// Console.WriteLine(slove[j]);

// }

// /* else if(slove[j][slove[j].Length-1] != 'Б')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'В'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Г'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Д')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Е')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ж'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'З'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'И')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Й')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'К'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Л'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'М')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Н')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'О'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'П'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Р')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'С')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Т'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'У'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ф')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Х')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ц'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ч'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ш')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Щ')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ы'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ь'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Э')

// {

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Ю'){

// Console.WriteLine(slove[j]);

// }

// else if(slove[j][slove[j].Length-1] != 'Я'){

// Console.WriteLine(slove[j]);

// } */

 

// }

// }

 

// вот еще 4 задание


/*
Console.WriteLine("Введите слово");
String v = Console.ReadLine();
for (int i = 0; i < v.Length/2; i++)
   {
   if (v[i] == v[v.Length - 1 - i])
   {
       Console.WriteLine("it works");
   }
} */

//int b = 0;
//for (int i = 0; i < v.Length; i++)
//{
//    b++;
//    string[] n = new string[b];
//    for (int j = v.Length - 1; j >= 0; j--)
//    {
//        n[i] += v[j];
//    }
//    Console.WriteLine(n);
//}

 

Console.WriteLine("Введите предложение");

string predl = Console.ReadLine();
string[]v = predl.Split(' ');
Console.WriteLine(v.Length);
for (int i = 0; i < v.Length; i++)
{
   if (v[i].Length%2==0)
   {
       Console.WriteLine(v[i]);
   }
}

//for (int i = 0; i < predl.Length; i++)
//{
//        if (predl[i] == " ")
//            b++;

////}
//int c = 0;
////string[] predl = new string[];
////for (int i = 0; i < n.Length; i++)
////{
////    Console.Write(n[i]);
////}

//for (int i = 0; i < predl.Length; i++)
//{
//    string[] slova = predl[i].Split(' ');
//    for (int j = 0; j < slova.Length; j++)
//    {
//        if (slova[j].Length % 2 == 0)
//        {
//            c++;
//        }
//    }
   
//}
//Console.WriteLine(c);
//Console.WriteLine();
//Console.WriteLine(b+1);