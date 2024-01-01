string b1;
 double summ = 0;
 int day = 0;
 double b;
do
{

   Console.WriteLine("введите количество белок за этот день");
   b1= Console.ReadLine();
   if (Double.TryParse(b1, out b))
   {
       b = Double.Parse(b1);
       summ += (b);
       day++;
   }
   else
   {
       Console.WriteLine("это не число");
   };
}
while (summ <= 400) ;

 

   Console.WriteLine(summ);
   Console.WriteLine(day);