window.onload = function () {
    document.getElementById("boto").onclick = function () {
        document.getElementById("marcaCotxe").value = "mercedes";
        document.getElementById("Moto").checked = true;
        document.getElementById("nom").disabled = true;
        document.getElementById("llinatges").readonly = true;
    }
}