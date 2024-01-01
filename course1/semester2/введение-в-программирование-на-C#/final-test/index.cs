//Console.WriteLine("Hello, World!");

//Console.WriteLine("количество строк!");
//int n = Convert.ToInt32(Console.ReadLine());
//Console.WriteLine("количество столбцов!");
//int m = Convert.ToInt32(Console.ReadLine());

//int[,] arr = new int[n,m];
//int summ = 0;

//for (int i = 0; i < n; i++)
//{
//    for (int j = 0; j < m; j++)
//    {
//        Console.WriteLine($"введите элемент [{i},{j}]");
//        arr[i, j] = Convert.ToInt32(Console.ReadLine());
//    }
//}

//for (int i = 0; i < n; i++)
//{
//    for (int j = 0; j < m; j++)
//    {
//        if(i == j)
//        {
//            summ += arr[i, j];
//        }
//    }

//}

//for (int i = 0; i < n; i++)
//{
//    for (int j = 0; j < m; j++)
//        Console.Write($"{arr[i, j]} ");
//    Console.WriteLine();
//}
//Console.WriteLine();
//Console.WriteLine(summ);


//задание 2


//Console.WriteLine("введите длину массива 1");
//int n = Convert.ToInt32(Console.ReadLine());
//Console.WriteLine("введите длину массива 2");
//int m = Convert.ToInt32(Console.ReadLine());

//int[] arr1 = new int[n];
//double[] arr2 = new double[m];


//for (int i = 0; i < n; i++)
//{
//    Console.WriteLine($"введите элемент {i}");
//    arr1[i] = Convert.ToInt32(Console.ReadLine());
//}
//for (int j = 0; j < m; j++)
//{
//    Console.WriteLine($"введите элемент {j}");
//    arr2[j] = Convert.ToDouble(Console.ReadLine());
//}

//static void Func<O>(O[] arr1, int n)
//{
//    for (int i = 0; i < n; i++)
//    {

//        Console.Write($"{arr1[i]} ");
//        Console.WriteLine();
//    }
//}
//Console.WriteLine();
//Func(arr1, n);
//Func(arr2, m);


//задание 3


//Console.WriteLine("Hello, World!");

//int Factorial(int n)

//{

//    if (n == 1) return 1;

//    return n * Factorial(n - 1);

//}

//int factorial = Factorial(5);
//Console.WriteLine(factorial);


////задание 4
///

//Console.WriteLine("введите слово");
//string text = Console.ReadLine();

//string b = "";
//for(int i = text.Length - 1; i >= 0; i--)
//{
//    b += text[i];
//}
//Console.WriteLine(b);


//задание 5


Console.WriteLine("введите предложение");
string predl = Console.ReadLine();

string[] slovo = predl.Split(' ');

Console.WriteLine(slovo.Length);





Console.WriteLine("введите массив, сколько элементов в нем должно быть?");
int n = Convert.ToInt32(Console.ReadLine());

int[] c = new int[n];

int i = 0;
int y = 1;
int j = 0;


for (i = 0; i < c.Length; i++)
{
   Console.WriteLine($"введите {i} элемент");
   c[i] = Convert.ToInt32(Console.ReadLine());


}


for (i = 0; i < c.Length; i += 2)
{
   j = c[i];
  // c[i] += j;
   y *= j;

//   Console.WriteLine(y);
  // Console.WriteLine("  ");
}

 


//Console.WriteLine(y);
Console.WriteLine("  ");
//

int n1 = 0;
int Ind1 = 0;
int Ind2 = 0;
for (i = 0; i < c.Length; i++)
{
   if (c[i] == 0)
   {
       Ind1 = i;
       break;
   }
}
for (i = n - 1; i > 0; i--)
{
   if (c[i] == 0)
   {
       Ind2 = i;
       break;
   }
}
for (i = Ind1; i < Ind2; i++)
{
   n1 += c[i];
}

//Console.WriteLine(n1);


//

int[] c2 = new int[n+2];
c2[0] = n1;
c2[n + 1] = y;

for (i = 1; i < n+1; i++)
{
   c2[i] = c[i - 1];
  
}
for (i = 0; i < n + 2; i++)
{

   Console.Write($"{c2[i]}  ");
}

//

 


int p;
int temp;
for (i = 0; i < c2.Length - 1; i++)
{
   for (p = i + 1; p < c2.Length; p++)
   {
       if (c2[i] > c2[p])
       {
           temp = c2[i];
           c2[i] = c2[p];
           c2[p] = temp;
       }
   }
}


Console.Write(" ");
for (i = 0; i < c2.Length - 1; i++)
{
   Console.Write($"{c2[i]}   ");
}