const siswa = [
    {name:"Andi", class:"A", score:80},
    {name:"Budi", class:"A", score:85},
    {name:"Citra", class:"B", score:90},
    {name:"Dina", class:"B", score:75},
    {name:"Eko", class:"A", score:88},
    {name:"Fajar", class:"B", score:70},
    {name:"Gina", class:"A", score:95},
    {name:"Hani", class:"B", score:82},
    {name:"Indra", class:"A", score:78},
    {name:"Joko", class:"B", score:86}
];

function tampil(data){

    document.getElementById("dataSiswa").innerHTML =
    data.map(s => `
        <tr>
            <td>${s.name}</td>
            <td>${s.class}</td>
            <td>${s.score}</td>
        </tr>
    `).join("");

    let total = data.reduce((a,b) => a + b.score, 0);

    let rata = data.length ? (total / data.length).toFixed(2) : 0;

    document.getElementById("rata").innerHTML =
    "Rata-rata Nilai : " + rata;
}

tampil(siswa);

document.getElementById("cari").addEventListener("keyup", function(){

    let keyword = this.value.toLowerCase();

    let hasil = siswa.filter(s =>
        s.name.toLowerCase().includes(keyword)
    );

    tampil(hasil);
});