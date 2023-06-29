using System;
using System.Linq;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            /*
            if (n < 2)
                return 1;
            int fact = n;
            while (n > 0)
            {
                fact *= n - 1;
                n--;
                if (n == 1)
                    break;
            }
            return fact;*/
            //using recursive method
            if (n == 0)
                return 1;

            return n * GetFactorial(n - 1);
        }

        public static string FormatSeparators(params string[] items)
        {
            if (items == null || items.Length == 0)
                return string.Empty;

            string separator = ", ";
            string lastSeparator = " and ";

            if (items.Length == 1)
                return items[0];

            string result = string.Join(separator, items, 0, items.Length - 1) + lastSeparator + items[items.Length - 1];
            return result;
        }
    }
}