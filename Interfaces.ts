// Interfaces and Type Aliases
// Defining Interfaces 
// Using Interfaces to define object shapes
// Expending interfaces
// Type aliases
// Intersection types

// Interfaces and Type Aliases
// Interfaces ও Type Aliases — দুটোই object-এর গঠন বা structure বোঝাতে ব্যবহৃত হয়। এর মাধ্যমে আপনি বলবেন, object-এর ভিতরে কী কী থাকবে এবং তার টাইপ কী হবে।
interface User {
    name: string;
    email: string;
    pass : string;
    age ? : number;
    gender ? : string;
    pastUser   ? : boolean;
}
function abcdUser (object : User) {
   abcdUser({name : "infan" , email : "email" , pass : "pass" , age: 12 , gender : "male" , pastUser : false} )
}