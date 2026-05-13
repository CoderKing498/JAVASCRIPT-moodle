function clasifyAge(){

    const age = Number(document.getElementById("inputAge").value);

    const box = document.getElementById("resultAge");

    if(!age || isNaN(age) || age <= 0){
        box.textContent = "Please, enter a valid number";
        box.className = "resultado visible error";
        return;
    }

    let message;
    let clase;

    if (age < 0 || age > 120){
        message = "Age out of range (0/120)"
        clase = "resultado visible error"
    } else if (age <= 11){
        message = `🧒 At ${age} years old you are a child`
        clase = "resultado visible info"
    } else if (age <= 17){
        message = `🧑 At ${age} years old you are a teenager`
        clase = "resultado visible warning"
    }  else if (age <= 64){
        message = `🧑‍💼 At ${age} years old you are an adult ✅`
        clase = "resultado visible ok"
    } else {
        message = `👴 At ${age} years old you are a senior citizen`
        clase = "resultado visible info"
    }

    box.textContent = message;
    box.className = clase;
}