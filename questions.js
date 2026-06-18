const questions = [

{
question:"Which keyword is used to define a function in Python?",
options:["func","def","function","define"],
answer:"def"
},

{
question:"Which data type stores True or False values?",
options:["bool","int","float","str"],
answer:"bool"
},

{
question:"What is the output of print(5//2)?",
options:["2","2.5","3","Error"],
answer:"2"
},

{
question:"Which function returns the length of a list?",
options:["count()","size()","len()","length()"],
answer:"len()"
},

{
question:"Which symbol is used for comments?",
options:["//","#","/*","--"],
answer:"#"
},

{
question:"Which operator is used for exponentiation?",
options:["^","**","//","%%"],
answer:"**"
},

{
question:"What is the output of print(type(5))?",
options:["float","int","str","bool"],
answer:"int"
},

{
question:"Which collection is ordered and changeable?",
options:["Tuple","Set","List","Dictionary"],
answer:"List"
},

{
question:"Which collection cannot contain duplicate values?",
options:["List","Tuple","Set","String"],
answer:"Set"
},

{
question:"How do you start a while loop?",
options:["while()","while","loop","repeat"],
answer:"while"
},

{
question:"Which keyword exits a loop?",
options:["stop","exit","break","return"],
answer:"break"
},

{
question:"Which keyword skips the current iteration?",
options:["skip","next","continue","pass"],
answer:"continue"
},

{
question:"Which function takes user input?",
options:["scan()","input()","get()","read()"],
answer:"input()"
},

{
question:"What is the output of len('Python')?",
options:["5","6","7","8"],
answer:"6"
},

{
question:"Which method converts a string to lowercase?",
options:["lower()","small()","down()","case()"],
answer:"lower()"
},

{
question:"Which method converts a string to uppercase?",
options:["upper()","big()","caps()","high()"],
answer:"upper()"
},

{
question:"Which keyword is used to create a class?",
options:["object","class","Class","define"],
answer:"class"
},

{
question:"Which method acts as a constructor?",
options:["__start__","__init__","__create__","__new__"],
answer:"__init__"
},

{
question:"Which keyword refers to the current object?",
options:["this","self","current","obj"],
answer:"self"
},

{
question:"Which statement handles exceptions?",
options:["catch","try","handle","error"],
answer:"try"
},

{
question:"Which block runs when an exception occurs?",
options:["except","catch","error","finally"],
answer:"except"
},

{
question:"Which block always executes?",
options:["except","always","finally","last"],
answer:"finally"
},

{
question:"Which library is used for arrays and numerical computing?",
options:["Pandas","NumPy","Flask","Tkinter"],
answer:"NumPy"
},

{
question:"Which library is used for data analysis?",
options:["NumPy","Pandas","OpenCV","Requests"],
answer:"Pandas"
},

{
question:"Which library is used for plotting graphs?",
options:["Matplotlib","NumPy","Flask","PyGame"],
answer:"Matplotlib"
},

{
question:"Which function displays a graph in Matplotlib?",
options:["plot()","show()","graph()","display()"],
answer:"show()"
},

{
question:"Which operator checks equality?",
options:["=","==","===","!="],
answer:"=="
},

{
question:"Which operator means 'not equal'?",
options:["<>","!=","!==","~="],
answer:"!="
},

{
question:"What is the output of 10 % 3?",
options:["3","1","0","10"],
answer:"1"
},

{
question:"Which keyword imports a module?",
options:["include","using","import","require"],
answer:"import"
},

{
question:"Which module generates random numbers?",
options:["math","random","numpy","time"],
answer:"random"
},

{
question:"What is the output of print(3*'Hi')?",
options:["HiHiHi","3Hi","Error","Hi3"],
answer:"HiHiHi"
},

{
question:"Which function converts a string to integer?",
options:["integer()","int()","toInt()","convert()"],
answer:"int()"
},

{
question:"Which function converts integer to string?",
options:["str()","string()","text()","char()"],
answer:"str()"
},

{
question:"Which method adds an item to a list?",
options:["insert()","append()","add()","push()"],
answer:"append()"
},

{
question:"Which method removes the last item from a list?",
options:["delete()","remove()","pop()","drop()"],
answer:"pop()"
},

{
question:"Which data type is immutable?",
options:["List","Dictionary","Set","Tuple"],
answer:"Tuple"
},

{
question:"Which function returns the maximum value?",
options:["largest()","high()","max()","top()"],
answer:"max()"
},

{
question:"Which function returns the minimum value?",
options:["smallest()","low()","min()","bottom()"],
answer:"min()"
},

{
question:"What is the output of bool(0)?",
options:["True","False","0","Error"],
answer:"False"
},

{
question:"Which keyword creates an anonymous function?",
options:["lambda","anonymous","func","def"],
answer:"lambda"
},

{
question:"Which function is used to open a file?",
options:["read()","file()","open()","load()"],
answer:"open()"
},

{
question:"Which mode opens a file for reading?",
options:["w","a","r","x"],
answer:"r"
},

{
question:"Which mode opens a file for writing?",
options:["r","a","w","x"],
answer:"w"
},

{
question:"What does OOP stand for?",
options:[
"Object Oriented Programming",
"Object Operating Program",
"Online Object Program",
"Output Oriented Programming"
],
answer:"Object Oriented Programming"
},

{
question:"Which concept allows code reuse?",
options:["Inheritance","Looping","Recursion","Compilation"],
answer:"Inheritance"
},

{
question:"Which concept hides implementation details?",
options:["Polymorphism","Inheritance","Encapsulation","Looping"],
answer:"Encapsulation"
},

{
question:"Which concept means many forms?",
options:["Inheritance","Abstraction","Polymorphism","Class"],
answer:"Polymorphism"
},

{
question:"Which function sorts a list?",
options:["order()","sort()","arrange()","sortedlist()"],
answer:"sort()"
},

{
question:"Which built-in function returns sorted values?",
options:["sorted()","sort()","arrange()","order()"],
answer:"sorted()"
},

{
question:"Which statement is used for decision making?",
options:["for","if","while","def"],
answer:"if"
},

{
question:"Which keyword is used for an alternate condition?",
options:["else","alternate","other","otherwise"],
answer:"else"
},

{
question:"Which keyword checks another condition?",
options:["elseif","elif","nextif","else if"],
answer:"elif"
},

{
question:"Which loop is best when iterations are known?",
options:["while","for","repeat","do while"],
answer:"for"
},

{
question:"Which keyword creates a dictionary?",
options:["dict","map","dictionary","table"],
answer:"dict"
},

{
question:"Which brackets are used for dictionaries?",
options:["[]","()","{}","<>"],
answer:"{}"
},

{
question:"Which brackets are used for lists?",
options:["[]","()","{}","<>"],
answer:"[]"
},

{
question:"What is the output of print('Python'[0])?",
options:["P","y","0","Error"],
answer:"P"
},

{
question:"Which operator checks membership?",
options:["inside","contains","in","has"],
answer:"in"
}

];