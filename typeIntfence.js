"use strict";
// UnderStanding Type
// Type Annomation
// Type Inference
// টাইপ ইনফারেন্স মানে হচ্ছে TypeScript নিজে থেকেই বুঝে ফেলে ভ্যারিয়েবলের টাইপটা কী হবে — ডেভেলপারকে আলাদা করে টাইপ বলতে হয় না।
let a = 12;
// Understanding Types 
// টাইপ বলতে বোঝানো হয় কোনো ভ্যারিয়েবলে কী ধরনের মান রাখা যাবে — যেমন: string, number, boolean, array, object ইত্যাদি। টাইপ ব্যবহার করলে ভুল কম হয় এবং কোড নিরাপদ হয়।
let b;
b = 12;
b = "infan";
b = true;
// . Type Annotation 
// টাইপ অ্যানোটেশন মানে আপনি নিজে টাইপটা স্পষ্ট করে বলে দেন। যখন TypeScript নিজে টাইপ বুঝতে পারে না, তখন এটা কাজে লাগে।
let price = 500;
let studentName = "Rahman";
