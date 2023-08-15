window.onload = function()
{
    document.getElementById("buton").onclick = function Variable(e)
    {
        let gelenDeger = document.getElementById("movietitle").value;
        let gelenDeger2 = document.getElementById("genre").value;
        let gelenDeger3 = document.getElementById("director").value;
        
        // 1-) Bu Örnekte td adlı bir tablo kolon oluşturuyoruz ama forma yazdıgımız değerleri tek bir kolona yazdırıyoruz dikkat edelim.

        // let td = document.createElement("td");
        // td.append(gelenDeger);
        // td.append(gelenDeger2);
        // td.append(gelenDeger3);

        // let tr = document.getElementById("tr");
        // tr.append(td);

        //2
        let tbody = document.getElementById("satir");
        let tr = document.createElement("tr");
        tr.innerHTML = `

                        <td>2</td>
                        <td>${gelenDeger}</td>
                        <td>${gelenDeger2}</td>
                        <td>${gelenDeger3}</td>

        `
        tbody.append(tr);
        e.preventDefault(); //post/back işlemini önlemek için tanımlandı.
    }
}