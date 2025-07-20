// Enum হলো একটি স্পেশাল টাইপ যা কিছু নির্দিষ্ট নামকরণকৃত মান সংরক্ষণ করে। যেমন দিক নির্দেশ করতে হলে Admin, Super_admin, Guest  ব্যবহার করতে পারি।
// Enumeration


enum userRole {
    Admin = "admin",
    Super_admin = "super_admin",
    Guest = "guest"

}
enum statusCode {
    Abandoned = "Abendoned ststus code 500",
    Not_Fonud = "404"
}
statusCode.Not_Fonud
