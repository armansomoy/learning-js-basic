var n = parseInt(prompt("Enter the numbers of terms: "));  
// ধরি n = prompt এ আমিং একটা স্ট্রিং পাবো ওইটাকে integer এ convert করে n এ জমা করবো।  
var sum = 0;
// ধরি সাম = ০; 
var series = "";
// ধরি সিরিজ = খালি স্ট্রিং;


for (var i = 1; i <= n; i++) { 
    // প্রথমে ফর লুপ হবে ( ধরি i = 0; আবার i যদি n এর থেকা ছোট বা সমান হয় আবার, i এক ঘর করে বারবে বা ১ যোগ হবে)
    sum += i**2;
    // এখানে, সাম এর সাথে সাম এর যেই মান বের( i এর square ) হবে তাই আবার যোগ হবে। 
    series += (i**2).toString();
    // এখানে, সিরিজ এর সাথে সিরিজ এর যেই মান বের( i এর square ) হবে তাই আবার যোগ হয়ে string এ convert করে দিতে হবে
    if ( i == n ){
        continue;
    }
    // এখানে, যখন i আর  n এর মান সমান হয়ে যাবে তখন নিচের condition কাজ করবে না। 
    series += " + ";
}

console.log(`${series} = ${sum}`);