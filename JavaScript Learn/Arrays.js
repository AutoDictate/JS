let anime = ["One piece", "Naruto", "demon Slayer"];

anime.push("Attack on Titan");

for (const i in anime) {
    console.log(anime[i]);
}
console.log("---------------------");
for (const i of anime){
    console.log(i);
}

console.log("---------------------");
console.log(anime.join(","));
console.log(anime.toString().concat("."));

