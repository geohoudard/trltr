function updateButtonNames() {
    const navire1Name = document.getElementById('navire1_name').value;
    const navire2Name = document.getElementById('navire2_name').value;
    const navire3Name = document.getElementById('navire3_name').value;
    const navire4Name = document.getElementById('navire4_name').value;
    const navire5Name = document.getElementById('navire5_name').value;
    const navire6Name = document.getElementById('navire6_name').value;

    document.getElementById('navire1_button').innerText = navire1Name || 'Navire 1';
    document.getElementById('navire2_button').innerText = navire2Name || 'Navire 2';
    document.getElementById('navire3_button').innerText = navire3Name || 'Navire 3';
    document.getElementById('navire4_button').innerText = navire4Name || 'Navire 4';
    document.getElementById('navire5_button').innerText = navire5Name || 'Navire 5';
    document.getElementById('navire6_button').innerText = navire6Name || 'Navire 6';
}

document.getElementById('navire1_name').addEventListener('input', updateButtonNames);
document.getElementById('navire2_name').addEventListener('input', updateButtonNames);
document.getElementById('navire3_name').addEventListener('input', updateButtonNames);
document.getElementById('navire4_name').addEventListener('input', updateButtonNames);
document.getElementById('navire5_name').addEventListener('input', updateButtonNames);
document.getElementById('navire6_name').addEventListener('input', updateButtonNames);
