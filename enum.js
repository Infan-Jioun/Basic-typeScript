"use strict";
// Enum হলো একটি স্পেশাল টাইপ যা কিছু নির্দিষ্ট নামকরণকৃত মান সংরক্ষণ করে। যেমন দিক নির্দেশ করতে হলে Admin, Super_admin, Guest  ব্যবহার করতে পারি।
var userRole;
(function (userRole) {
    userRole["Admin"] = "admin";
    userRole["Super_admin"] = "super_admin";
    userRole["Guest"] = "guest";
})(userRole || (userRole = {}));
var statusCode;
(function (statusCode) {
    statusCode["Abandoned"] = "Abendoned ststus code 500";
    statusCode["Not_Fonud"] = "404";
})(statusCode || (statusCode = {}));
statusCode.Not_Fonud;
