const express = require("express")
const app = express();
const PORT = 3000;


const students = [
    { id: 1, name: "Анна Иванова", age: 19, group: "ИС-21" },
    { id: 2, name: "Иван Петров", age: 20, group: "ИС-21" },
    { id: 3, name: "Мария Смирнова", age: 18, group: "ДИ-11" },
    { id: 4, name: "Алексей Сидоров", age: 21, group: "ПИ-31" }
];
const auto = [
    { id: 1, name: "BMW" },
    { id: 2, name: "MERS" },
    { id: 3, name: "AUDI" },
];



app.get("/", (req, res) => {
    res.send("Главная страница!")
})
app.get("/about", (req, res) => {
    res.send("О нас")
})
app.get("/contacts", (req, res) => {
    res.send("Контакты")
})

app.get("/students/" , (req, res)=>{
    res.send(students)
})
app.get("/auto" , (req, res)=>{
    res.send(auto)
})
app.get("/register" , (req, res)=>{
    res.send("Регистрация")
})
app.get("/auth" , (req, res)=>{
    res.send("Вход")
})

app.get("/students/:id" , (req , res)=>{
    console.log(req.params.id);
    let student = students.find((stud)=>{
        return stud.id == req.params.id
    })
    res.send(student)    
    
})

app.listen(PORT, () => {
    console.log("Сервер успешно запущен!");

});