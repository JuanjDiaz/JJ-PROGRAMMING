using System;


namespace CSharpHelloWorld
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            // Hola mundo
            Console.WriteLine("Hola, C#");

            /* 
            Esto 
            es
            un
            comentario
            */


            // TIPOS DE DATOS

            string myString = "Esto es una cadena de texto";
            myString = "Aquí cambió el valor de la cadena de texto";
            Console.WriteLine(myString);

            int myInt = 2;
            myInt = myInt + 7;
            Console.WriteLine(myInt - 3);
            Console.WriteLine(myInt);

            double myDouble = 6.5;
            Console.WriteLine(myDouble);

            float myFloat = 6.5f;
            Console.WriteLine(myFloat);

            bool myBool = true;
            myBool = false;
            Console.WriteLine(myBool);

            Console.WriteLine(myInt + myDouble + myFloat);

            var myVar = "Mi variable de tipo inferido";
            // myVar = 6; es un error
            Console.WriteLine(myVar);

            Console.WriteLine($"El valor de mi entero es: {myInt} y el de mi bool es: {myBool}");

            const string MyConst = "Mi constante";
            Console.WriteLine(MyConst);


            // ESTRUCTURAS

            var myArray = new string[] {"Brais", "Moure", "MoureDev"};
            Console.WriteLine(myArray[0]);
            Console.WriteLine(myArray[1]);
            Console.WriteLine(myArray[2]);

            myArray[2] = "36";
            Console.WriteLine(myArray[2]);

            var myDictionary = new Dictionary<string,int>
            {
                {"mouredev", 36},
                {"martha", 44},
                {"vale", 19}
            };

            Console.WriteLine(myDictionary["martha"]);


            var mySet = new HashSet<string> {"Brais", "Moure", "MoureDev"};
            
            var myTuple = ("Brais", "Moure", "MoureDev");
            Console.WriteLine(myTuple);


            //bucles

            for (int index = 0; index < 10; index++)
            {
                Console.WriteLine(index);
            }

            foreach (var myItem in myArray)
            {
                Console.WriteLine(myItem);
            }
            foreach (var myItem in myDictionary)
            {
                Console.WriteLine(myItem);
            }
            foreach (var myItem in mySet)
            {
                Console.WriteLine(myItem);
            }


            //flujos 

            myInt=11;

            if (myInt == 9)
            {
                Console.WriteLine("El valor es 9");
            }
            else if(myInt == 11)
            {
                Console.WriteLine("El valor es 11");
            }
            else{
                Console.WriteLine("El valor no es 9 ni 11");
            }

            //funciones 
            MyFunction();
            Console.WriteLine(MyFunctionWithReturn(5));


            //clases

            var myClass = new MyClass("Juan");
            myClass.myName = "Juan Jose";
            Console.WriteLine(myClass.myName);

        }
        static void MyFunction()
        {
            Console.WriteLine("Mi función");
        }

        static int MyFunctionWithReturn(int param)
        {
            return 10 + param;
        }
        
        class MyClass
        {
            public string myName{ get; set;}

            public MyClass(string myCurrentName){
                myName = myCurrentName;
            }
        }
    }

}


