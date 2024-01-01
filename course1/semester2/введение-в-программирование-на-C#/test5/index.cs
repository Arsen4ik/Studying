using System;
 

 

namespace bebebebababa
{
class Program
{
static void Main(string[] args)
{

static void Print<T>(T[,] a, int m, int n)
{
for (int g = 0; g < m; g++)
{
for (int i = 0; i < n; i++)
{
Console.Write($"{a[g, i]}\t");

 

 

 

 

}
Console.WriteLine();

 

 

 

}
Console.WriteLine();
}
///static void Main(string[] args)
{
Console.WriteLine("Hello, World!");
int m = Convert.ToInt32(Console.ReadLine());
int n = Convert.ToInt32(Console.ReadLine());
int g = Convert.ToInt32(Console.ReadLine());
int h = Convert.ToInt32(Console.ReadLine());
double summ = 0;

 

 

 

Console.WriteLine();
int[,] a = new int[m, n];
double[,] b = new double[g, h];
for (int i = 0; i < g; i++)
for (int j = 0; j < h; j++)
{
// Console.WriteLine($"[{i},{j}]");
b[i, j] = (i + j) * (i - j);
if (i == 1)
{
summ += b[i, j];
//Console.WriteLine(summ);

 

 

}

 

 

Console.WriteLine(summ);
}

 

 

 

for (int i = 0; i < m; i++)
for (int j = 0; j < n; j++)
{
//Console.WriteLine($"[{i},{j}]");
a[i, j] = (i + j) * (i - j);

 

 

 

}
Print(a, m, n);
Print(b, g, h);

 

 

 


}

 

 

 


}
}

}

 

 

 

 

 

// ЧАСТЬ 3: задание 2




//using System;

//namespace Айш
//{
//    class Program
//    {
//        static int f1(int n, int i, int g)
//        {
//            do
//            {
//                if (n % i == 0)
//                {
//                    g++;
//                }
//                f1(n, i + 1, g);
//            } while (i <= n);
//            return g;
//        }
//        static void Main(string[] args)
//        {
//            Console.WriteLine("enter a num");
//            int n = Convert.ToInt32(Console.ReadLine());

//            //int i = 1;

//            int g = 0;
           

//            Console.WriteLine();

//            if (g == 2)
//            {
//                Console.WriteLine(f1();

//            }
//            else
//            {
//                Console.WriteLine("false");
//            }


//        }
//    }
//}

 

using System;

namespace Айш
{
   class Program
   {
       //static int f1(int n, int i)
       //{
       //    if (i == n)
       //    {
               
       //    }
       //    else
       //    {
       //        if (n % i == 0)
       //        {
       //            g++;
       //        }
       //        f1(n, i + 1, g);

               
       //    }
       //    return g;
       //}
       static void Main(string[] args)
       {
               Console.WriteLine("enter a num");
               int n = Convert.ToInt32(Console.ReadLine());
           //    int g = 0;
           //    Console.WriteLine();
           //    int i = 1;
           //    if (f1(n,i,g) == 2)
           //    {
           //        Console.WriteLine("true");

           //    }
           //    else
           //    {
           //        Console.WriteLine("false");
           //    }
           static bool F(int n, int i)
           {

               if ((n % i == 0) & (i < n))
               {
                   return false;
               }
               else
               {
                   if (i < n)
                       return (F(n, i + 1));
                   else
                       return true;
               }

               return false;
           }
        //   int n = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine(F(n, 2));

       }
   }
}

 

 

 

 

 

// ЧАСТЬ 2: 4 номер


using System;

namespace нутипоитоговаяпо
{
   class Program
   {
       //static void f1(int n, int k, int l, int p, int[] c)
       //{

       //    for (int i = 0; i < n; i++)
       //    {
       //        Console.WriteLine($"   enter {i} element");
       //        c[i] = Convert.ToInt32(Console.ReadLine());

       //        if (c[i] > 0)
       //        {
       //            k++;
       //        }
       //        else if (c[i] < 0)
       //        {
       //            l++;
       //        }
       //        else
       //        {
       //            p++;
       //        }
       //    }
       //    Console.WriteLine($"  0: {p}");
       //    Console.WriteLine($"  >0: {k}");
       //    Console.WriteLine($"  <0: {l}");

       //}

       //static void f2(int n, int k, int l, int p, int[] c)
       //{
       //    for (int i = 0; i < n; i++)
       //    {
       //        Console.Write($"{c[i]} ");

 

       //    }


       //}
       static void Main(string[] args)
       {
           //    Console.WriteLine("Hello World!");

           //    Console.WriteLine("array 1");
           //    int n = Convert.ToInt32(Console.ReadLine());
           //    Console.WriteLine("array 2");
           //    int m = Convert.ToInt32(Console.ReadLine());

           //    int[] c = new int[n];
           //    int[] c2 = new int[m];

           //    int k = 0, l = 0, p = 0;

 

           //    f1(n, k, l, p, c);
           //   // f2(n, k, l, p, c);
           //    f1(m, k, l, p, c2);
           //   // f2(m, k, l, p, c2);

           //}
           Console.WriteLine("N");
           int u = Convert.ToInt32(Console.ReadLine());

           Console.WriteLine("array 1");
           int n = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("array 2");
           int m = Convert.ToInt32(Console.ReadLine());
           Console.WriteLine("array 3");
           int p = Convert.ToInt32(Console.ReadLine());

               int[] c = new int[n];
               int[] c2 = new int[m];
               int[] c3 = new int[p];
   

           //for (int i = 0; i < n; i++)
           //{
           //    Console.WriteLine($"enter {i} element");
           //    c[i] = Convert.ToInt32(Console.ReadLine());
           //}
           //for (int i = 0; i < n; i++)
           //{
           //    Console.WriteLine($"enter {i} element");
           //    c[i] = Convert.ToInt32(Console.ReadLine());
           //}
           //for (int i = 0; i < n; i++)
           //{
           //    Console.WriteLine($"enter {i} element");
           //    c[i] = Convert.ToInt32(Console.ReadLine());
           //}

           static void Print<Y>(Y[] c, int n, int u)
           {
               for (int i = 1; i <= n; i++)
               {


                   if(i % u == 0)
                   {
                       Console.Write($"{i}  ");
                   }
               }
           }
           Console.WriteLine();
           Print(c, n, u);
           Print(c2, m, u);
           Print(c3, p, u);
       }
   }
}