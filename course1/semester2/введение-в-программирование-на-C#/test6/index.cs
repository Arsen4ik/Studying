using System;
using System.IO;
namespace ConsoleApp11
{
   class Program
   {
       static bool PrintFile2(string filename)
       {
           int eps = 0;
           StreamReader sr;
           try
           {
               sr = new StreamReader(filename);
           }
           catch (FileNotFoundException e)
           {
               Console.WriteLine("Error: {0}", e.Message);
               return false;
           }


           string s = sr.ReadToEnd();
           string[] lines = s.Split(' ');

           for (int i = 0; i <lines.Length-1; i++)
           {
               if (lines[i][lines[i].Length-1] == 'ь')
               {
                   eps++;
               }
           }
           Console.WriteLine(eps);
           sr.Close();
           return true;

           //    string s = sr.ReadToEnd();
           //    string[] lines = s.Split('\n');
           //    for (int i = 0; i < lines.Length; i++)
           //    {
           //        Console.WriteLine("{0}", lines[i]);
           //        for (int j = 0; j < lines[i].Length; j++)
           //        {
           //            if (lines[i][j] == '4')
           //                eps++;
           //        }
           //    }
           //    Console.WriteLine(eps);
           //    sr.Close();
           //    return true;
       }
       static bool PrintFile(string filename)
       {
           StreamReader sr;
           try
           {
               sr = new StreamReader(filename);
           }
           catch (FileNotFoundException e)
           {
               Console.WriteLine("Error: {0}", e.Message);
               return false;
           }
           string s;
           Console.WriteLine("The content of file {0}:", filename);
           s = sr.ReadLine();
           while (s != null)
           {
               Console.WriteLine(s);
               s = sr.ReadLine();
           }
           sr.Close();
           return true;
       }
       static void Main(string[] args)
       {
           PrintFile("TextFile1.txt");
           // Console.ReadLine();
           PrintFile2("TextFile1.txt");
           //Console.ReadLine();
       }
   }
}

using System;
using System.IO;
namespace ConsoleApp7
{
   class Program
   {
       static bool ReplaceStringInFile(string filename)
       {
           int v = 0;
           if (!File.Exists(filename)) return false;
           string[] arrayS = File.ReadAllLines(filename);
           for (int i = 0; i < arrayS.Length; i++)
           {
               //string[] words = arrayS[i].Split(' ');
               //if(words[i] == "Иванов")
               //{
               //    words[i].Replace("Иванов", "Сидоров");
               //}
               arrayS[i] = arrayS[i].Replace("Иванов", "Сидоров");

               for (int j = 0; j < arrayS[i].Length; j++)
               {
                   if (arrayS[i][j] == '(' || arrayS[i][j] == ')')
                   {
                       v++;
                       
                   }
               }
               arrayS[i] = arrayS[i].Replace(")", "}");
               arrayS[i] = arrayS[i].Replace("(", "{");

           }
           File.WriteAllLines(filename, arrayS);
           Console.WriteLine(v);
           return true;
           

       }
       static void Main(string[] args)
       {
          
           if (ReplaceStringInFile("TextFile1.txt"))
           {
               Console.WriteLine("Ok!");
              
               
           }
               
           else
               Console.WriteLine("Error.");
       }
   }
}