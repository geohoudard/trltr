// script.js

function calculateDiagnosis() {
    console.log("calculateDiagnosis called");

    // Récupérer les valeurs du formulaire
    const boat1Name = document.getElementById('navire1_name').value;
    const boat1Type = document.getElementById('boat1_type').value;
    const boat1Crew = parseFloat(document.getElementById('boat1_crew').value);
    const boat1Age = parseFloat(document.getElementById('boat1_age').value);
    const boat1Weight = parseFloat(document.getElementById('boat1_weight').value);
    const boat1Amount = parseFloat(document.getElementById('boat1_amount').value);
    const boat1Bonus1 = document.getElementById('boat1_bonus1').checked;
    const boat1Malus1 = document.getElementById('boat1_malus1').checked;

    const boat2Name = document.getElementById('navire2_name').value;
    const boat2Type = document.getElementById('boat2_type').value;
    const boat2Crew = parseFloat(document.getElementById('boat2_crew').value);
    const boat2Age = parseFloat(document.getElementById('boat2_age').value);
    const boat2Weight = parseFloat(document.getElementById('boat2_weight').value);
    const boat2Amount = parseFloat(document.getElementById('boat2_amount').value);
    const boat2Bonus1 = document.getElementById('boat2_bonus1').checked;
    const boat2Malus1 = document.getElementById('boat2_malus1').checked;

    const boat3Name = document.getElementById('navire3_name').value;
    const boat3Type = document.getElementById('boat3_type').value;
    const boat3Crew = parseFloat(document.getElementById('boat3_crew').value);
    const boat3Age = parseFloat(document.getElementById('boat3_age').value);
    const boat3Weight = parseFloat(document.getElementById('boat3_weight').value);
    const boat3Amount = parseFloat(document.getElementById('boat3_amount').value);
    const boat3Bonus1 = document.getElementById('boat3_bonus1').checked;
    const boat3Malus1 = document.getElementById('boat3_malus1').checked;

    const boat4Name = document.getElementById('navire4_name').value;
    const boat4Type = document.getElementById('boat4_type').value;
    const boat4Crew = parseFloat(document.getElementById('boat4_crew').value);
    const boat4Age = parseFloat(document.getElementById('boat4_age').value);
    const boat4Weight = parseFloat(document.getElementById('boat4_weight').value);
    const boat4Amount = parseFloat(document.getElementById('boat4_amount').value);
    const boat4Bonus1 = document.getElementById('boat4_bonus1').checked;
    const boat4Malus1 = document.getElementById('boat4_malus1').checked;

    console.log("Form Values:", {
        boat1Name, boat1Type, boat1Crew, boat1Age, boat1Weight, boat1Amount, boat1Bonus1, boat1Malus1,
        boat2Name, boat2Type, boat2Crew, boat2Age, boat2Weight, boat2Amount, boat2Bonus1, boat2Malus1,
        boat3Name, boat3Type, boat3Crew, boat3Age, boat3Weight, boat3Amount, boat3Bonus1, boat3Malus1,
        boat4Name, boat4Type, boat4Crew, boat4Age, boat4Weight, boat4Amount, boat4Bonus1, boat4Malus1
    });

    // Logique de calcul
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    let score4 = 0;

    if (boat1Weight > 910) score1 += 3;
    if (boat1Weight > 835 && boat1Weight < 910 && boat1Type === 'standard') score1 += 3;
    if (boat1Weight > 835 && boat1Weight < 910 && boat1Type === 'speciale') score1 += 1;
    if (boat1Amount === 'opaque' || boat1Amount === 'blanche') score1 += 3;
    if (boat1Bonus1) score1 += 3;
    if (boat1Malus1) score1 -= 3;

    if (boat2Weight > 910) score2 += 3;
    if (boat2Weight > 835 && boat2Weight < 910 && boat2Type === 'standard') score2 += 3;
    if (boat2Weight > 835 && boat2Weight < 910 && boat2Type === 'speciale') score2 += 1;
    if (boat2Amount === 'opaque' || boat2Amount === 'blanche') score2 += 3;
    if (boat2Bonus1) score2 += 3;
    if (boat2Malus1) score2 -= 3;

    if (boat3Weight > 910) score3 += 3;
    if (boat3Weight > 835 && boat3Weight < 910 && boat3Type === 'standard') score3 += 3;
    if (boat3Weight > 835 && boat3Weight < 910 && boat3Type === 'speciale') score3 += 1;
    if (boat3Amount === 'opaque' || boat3Amount === 'blanche') score3 += 3;
    if (boat3Bonus1) score3 += 3;
    if (boat3Malus1) score3 -= 3;

    if (boat4Weight > 910) score4 += 3;
    if (boat4Weight > 835 && boat4Weight < 910 && boat4Type === 'standard') score4 += 3;
    if (boat4Weight > 835 && boat4Weight < 910 && boat4Type === 'speciale') score4 += 1;
    if (boat4Amount === 'opaque' || boat4Amount === 'blanche') score4 += 3;
    if (boat4Bonus1) score4 += 3;
    if (boat4Malus1) score4 -= 3;

    console.log("Calculated Scores:", score1, score2, score3, score4);

    const diagnosisResult = document.getElementById('diagnosisResult');
    diagnosisResult.innerHTML = `
        <p>Score de ${boat1Name || 'Navire 1'}: ${score1} sur 21</p>
        <p>Score de ${boat2Name || 'Navire 2'}: ${score2} sur 21</p>
        <p>Score de ${boat3Name || 'Navire 3'}: ${score3} sur 21</p>
        <p>Score de ${boat4Name || 'Navire 4'}: ${score4} sur 21</p>
    `;

    if (score1 <= 7) {
        diagnosisResult.innerHTML += '<p>Amélioration nécessaire pour ' + (boat1Name || 'Navire 1') + '.</p>';
    } else if (score1 <= 14) {
        diagnosisResult.innerHTML += '<p>Amélioration possible pour ' + (boat1Name || 'Navire 1') + '.</p>';
    } else {
        diagnosisResult.innerHTML += '<p>Pratique optimale pour ' + (boat1Name || 'Navire 1') + '.</p>';
    }

    if (score2 <= 7) {
        diagnosisResult.innerHTML += '<p>Amélioration nécessaire pour ' + (boat2Name || 'Navire 2') + '.</p>';
    } else if (score2 <= 14) {
        diagnosisResult.innerHTML += '<p>Amélioration possible pour ' + (boat2Name || 'Navire 2') + '.</p>';
    } else {
        diagnosisResult.innerHTML += '<p>Pratique optimale pour ' + (boat2Name || 'Navire 2') + '.</p>';
    }

    if (score3 <= 7) {
        diagnosisResult.innerHTML += '<p>Amélioration nécessaire pour ' + (boat3Name || 'Navire 3') + '.</p>';
    } else if (score3 <= 14) {
        diagnosisResult.innerHTML += '<p>Amélioration possible pour ' + (boat3Name || 'Navire 3') + '.</p>';
    } else {
        diagnosisResult.innerHTML += '<p>Pratique optimale pour ' + (boat3Name || 'Navire 3') + '.</p>';
    }

    if (score4 <= 7) {
        diagnosisResult.innerHTML += '<p>Amélioration nécessaire pour ' + (boat4Name || 'Navire 4') + '.</p>';
    } else if (score4 <= 14) {
        diagnosisResult.innerHTML += '<p>Amélioration possible pour ' + (boat4Name || 'Navire 4') + '.</p>';
    } else {
        diagnosisResult.innerHTML += '<p>Pratique optimale pour ' + (boat4Name || 'Navire 4') + '.</p>';
    }
}

// Accordéon
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Fermer toutes les sections ouvertes
        for (let j = 0; j < accordions.length; j++) {
            if (accordions[j] !== this) {
                accordions[j].classList.remove("active");
                accordions[j].nextElementSibling.style.display = "none";
            }
        }
        // Ouvrir la section cliquée
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Afficher la pop-up lorsque l'utilisateur arrive sur le site
window.onload = function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
};

// Fermer la pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
