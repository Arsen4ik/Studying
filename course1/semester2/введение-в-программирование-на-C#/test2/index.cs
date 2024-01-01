Console.WriteLine("введите a");
double a = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("введите b");
double b = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("введите h");
double h = Convert.ToDouble(Console.ReadLine());

double i = 0;
for (i = a; i <= b; i += h)
{
   double y = (i - 2)/(Math.Pow(i, 2) + 4);
   Console.WriteLine(y); 
}


///////////


Console.WriteLine("Введите первый день");
double a0 = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("На сколько процентов увеличивается расстояние");
double b0 = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("Введите сколько надо пробежеть");
double c0 = Convert.ToDouble(Console.ReadLine());
double g = 0;
int i2 = 0;
while (a0 < c0)
{
   g = a0 * (b0 / 100);
   a0 = a0 + g;
   i2++;
}
Console.WriteLine(a0);
Console.WriteLine(i2);


////////////


Console.WriteLine("введите a");
int a2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("введите b");
int b2 = Convert.ToInt32(Console.ReadLine());

int i3 = 0;
for (i3 = a2; i3 <= b2; i3++)
{
   if (i3 < 0)
   {
       Console.WriteLine(i3);
   }
}


///////////


int s = 0;
for (int i4 = 10; i4 < 100; i4++)
{
   int a3 = i4 / 10;
   int b3 = i4 % 10; 
    s = a3 * b3 * 3;
   if (s == i4)
   {
       Console.WriteLine(s);
   }
} 