Console.WriteLine("введите массив, сколько элементов в нем должно быть?");
int n = Convert.ToInt32(Console.ReadLine());
int[] c = new int[n];

int i = 0;
int j = 0;
for (i = 0; i < c.Length; i++)
{
   Console.WriteLine($"введите {i} элемент");
   c[i] = Convert.ToInt32(Console.ReadLine());

   if (c[i] == 0)
   {
       j++;
   }

}
Console.WriteLine($"количество нулей в массиве: {j}"); */

/*
Console.WriteLine("введите количество элементов массива");
int y = Convert.ToInt32(Console.ReadLine());

double[] c = new double[y];
int l = 0;
double max = double.MinValue;
//double min = double.MaxValue;
int y1 = 0;
for (int i = 0; i < c.Length; i++)
{
   Console.WriteLine($"введите {i} элемент");
   c[i] = Convert.ToInt32(Console.ReadLine());
   //  summ += c[i];


   if (max < c[i])
   {
       l = i;
       max = c[i];
       //    summ = 0;
   }

  
}
for (int i = 0; i < c.Length; i++)
{
   if (i != l)
   {
       c[i] = 0;
   }
}
   Console.WriteLine(max);
for (int i = 0; i < c.Length; i++)
{
    Console.Write(c[i]);

} */

//////
/*
Console.WriteLine("количество строк!");
int n = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("количество столбцов!");
int m = Convert.ToInt32(Console.ReadLine());

double[,] arr = new double[n, m];

for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
   {
       Console.WriteLine($"введите элемент [{i},{j}]");
       arr[i, j] = Convert.ToDouble(Console.ReadLine());
   }
}

Console.WriteLine();
for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
       Console.Write($"{arr[i, j]} ");
   Console.WriteLine();
}

Console.WriteLine();

double summ = 0;
double x = 0;
for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
   {
       if (arr[i, j] < 0)
       {
           x = arr[i, j];
           summ += x;
           Console.WriteLine();
           Console.WriteLine(x);
       }

   }
}
Console.WriteLine();
Console.WriteLine(summ); */

/////

Console.WriteLine("количество строк!");
int n = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("количество столбцов!");
int m = Convert.ToInt32(Console.ReadLine());

double[,] arr = new double[n, m];
//double[] arr2;

for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
   {
       Console.WriteLine($"введите элемент [{i},{j}]");
       arr[i, j] = Convert.ToDouble(Console.ReadLine());
   }
}

Console.WriteLine();
for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
       Console.Write($"{arr[i, j]} ");
   Console.WriteLine();
}

double l = 0;
/*for (int i = 0; i < n; i++)
{
   l += arr[i, j];
   l / ()
}
for (int i = 0; i < n; i++)
{
   if (arr[i, j] > l)
   {

   }
}*/
double k = 0;
double []sa=new double[n];
//double[] sb = new double[n];
for (int i = 0; i < n; i++)
{
   l = 0;
   k = 0;
   for (int j = 0; j < m; j++)
   {
       if (arr[i, j] > 0)
       {
           l += arr[i, j];
           k++;

       }
   }
   sa[i] = l / k;
}
/*for (int i = 0; i < n; i++)
{
   if (sb[i] > sa[i])
   {
       sb[i] = sa[i];
   }
}*/
/*double d = 0;
for (int i = 0; i < n; i++)
{
   for (int j = 0; j < m; j++)
   {
       if (arr[i, j] > 0)
       {
           if (arr[i, j] > l)
           {
               d += arr[i, j];
//               arr2 = new double[d];
           }
       }
   }
}*/
Console.WriteLine();
for (int i = 0; i < n; i++)
{
   Console.WriteLine(sa[i]);
}

