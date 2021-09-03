using static System.Console;

namespace ProjectCodeTest
{
    class Program
    {
        public static void Main(string[] args)
        {
            Documentation display = new Documentation();
            display.Display2();

            CodeTestQ1 q1 = new CodeTestQ1(1000, 5);
            CodeTestQ1 q2 = new CodeTestQ1(1000, 3);
            q1.Display();
            q2.Display();
        }
    }
    class CodeTestQ1Procedual
    {
        private static int[] GetDataFormat()
        {
            Write("EXAMPLE of results - Enter integer '1000' ====> ");
            int.TryParse(ReadLine(), out int a);
            WriteLine();
            Write("Enter common difference,  3 or 5 ====> ");
            int.TryParse(ReadLine(), out int b);
            WriteLine();
            int[] numbers = new int[2];

            numbers[0] = a;
            numbers[1] = b;

            return numbers;
        }

        private static int SolveForN(int a, int b)
        {
            int n = a / b;

            return n;
        }

        public static void SumofW()
        {
            int[] arr = GetDataFormat();
            int a = arr[0];
            int b = arr[1];
            a -= b;
            int n = SolveForN(a, b);
            int sumofWhole = (n / 2) * (a + b);
            WriteLine("Results: {0} is sum of whole number {1} with the common difference {2}.", sumofWhole, a, b);

            Write("Enter Q to quit question or press enter to continue ");
            string quit = ReadLine();

            if (quit.ToUpper() == "Q")
            {
                WriteLine("NEXT QUESTION");
            }
            else
            {
                SumofW();
            }
        }
    }
    class Documentation
    {
        public string Purpose { get; set; }
        public string Defintions { get; set; }
        public string SoftSkills { get; set; }
        public string CodeInstructions { get; set; }
        public string Considerations { get; set; }
        public string Formulas { get; set; }
        public string Editor { get; set; }

        public Documentation()
        {
            Purpose = "PURPOSE: Discover JIT Developer, by implementing tests and interviews that support soft skills 'first' that uncover programming logic skills and aptitudes. Let Developer be creative with his/her solution and approach.";
            Defintions = "Definitions:  Just In Time Developer(JIT-Dev) |  Fudmentals - strong foundation in soft skills that bring about responsive solutions in programming logic and design.";
            CodeInstructions = "TEST SUMMARY: Write what you would think is the best possible solution to the questions below. Consider the following:";
            Considerations = "Considerations: data type, modularization, type safe, self documenting, classes and objects";
            Editor = "Visual Studio |  hint: make use of the VS intellisense.";
            SoftSkills = "Soft Skills: emotional intelligence, JIT learning, tenious problem solving attitude.";
            Formulas = "Formula(s): Arithmetic Progression(AP) -  sumOfW = (n / 2) * (a + b)";
        }
        public void Display2()
        {
            string string1 = new string(' ', 5);
            string string2 = new string(' ', 10);
            WriteLine("\n");
            WriteLine(string1 + "{0,10}", Purpose);
            Write("\n");
            WriteLine(string1 + "{0,10}", Defintions);
            Write("\n");
            WriteLine(string1 + "{0,10}", SoftSkills);
            Write("\n");
            WriteLine("\n");
            WriteLine(string1 + "{0,10}", Editor);
            Write("\n");
            WriteLine(string1 + "{0,10}", CodeInstructions);
            Write("\n");
            WriteLine(string2 + "{0,20}", Considerations);
            Write("\n");
            WriteLine(string2 + "{0,10}", Formulas);
            Write("\n");
        }
    }
    class CodeTestQ1
    {
        /// <summary>
        /// formula: arithmetic progression(AP) sumOfWholeNum = n / 2 * (a + b);
        /// </summary>
        public int A { get; set; }
        public int B { get; set; }
        public int Sum { get; set; }
        public int N { get; set; }

        public CodeTestQ1(int wholeNum, int commonDiff)
        {
            A = wholeNum;
            B = commonDiff;
            A -= B;
            N = A / B;
            Sum = N / 2 * (A + B);
        }
        public void Display()
        {
            string string3 = new string(' ', 10);
            WriteLine("\n");
            WriteLine(string3 + "Q1. Write code to determine the sum of all the whole numbers below 1000 which are multiplies of 3 or 5. Display Results!");
            WriteLine(string3 + "Example: [see AP formula] Results:==> {0, 10} is the sum of the whole number {1} minus common difference {2}", Sum, A, B);
            WriteLine("\n");
        }
    }
}
