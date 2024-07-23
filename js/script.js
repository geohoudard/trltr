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
    const boat1Bonus2 = document.getElementById('boat1_bonus2').checked;
    const boat1Bonus3 = document.getElementById('boat1_bonus3').checked;
    const boat1Malus1 = document.getElementById('boat1_malus1').checked;
    const boat1Malus2 = document.getElementById('boat1_malus2').checked;

    const boat2Name = document.getElementById('navire2_name').value;
    const boat2Type = document.getElementById('boat2_type').value;
    const boat2Crew = parseFloat(document.getElementById('boat2_crew').value);
    const boat2Age = parseFloat(document.getElementById('boat2_age').value);
    const boat2Weight = parseFloat(document.getElementById('boat2_weight').value);
    const boat2Amount = parseFloat(document.getElementById('boat2_amount').value);
    const boat2Bonus1 = document.getElementById('boat2_bonus1').checked;
    const boat2Bonus2 = document.getElementById('boat2_bonus2').checked;
    const boat2Bonus3 = document.getElementById('boat2_bonus3').checked;
    const boat2Malus1 = document.getElementById('boat2_malus1').checked;
    const boat2Malus2 = document.getElementById('boat2_malus2').checked;

    const boat3Name = document.getElementById('navire3_name').value;
    const boat3Type = document.getElementById('boat3_type').value;
    const boat3Crew = parseFloat(document.getElementById('boat3_crew').value);
    const boat3Age = parseFloat(document.getElementById('boat3_age').value);
    const boat3Weight = parseFloat(document.getElementById('boat3_weight').value);
    const boat3Amount = parseFloat(document.getElementById('boat3_amount').value);
    const boat3Bonus1 = document.getElementById('boat3_bonus1').checked;
    const boat3Bonus2 = document.getElementById('boat3_bonus2').checked;
    const boat3Bonus3 = document.getElementById('boat3_bonus3').checked;
    const boat3Malus1 = document.getElementById('boat3_malus1').checked;
    const boat3Malus2 = document.getElementById('boat3_malus2').checked;

    const boat4Name = document.getElementById('navire4_name').value;
    const boat4Type = document.getElementById('boat4_type').value;
    const boat4Crew = parseFloat(document.getElementById('boat4_crew').value);
    const boat4Age = parseFloat(document.getElementById('boat4_age').value);
    const boat4Weight = parseFloat(document.getElementById('boat4_weight').value);
    const boat4Amount = parseFloat(document.getElementById('boat4_amount').value);
    const boat4Bonus1 = document.getElementById('boat4_bonus1').checked;
    const boat4Bonus2 = document.getElementById('boat4_bonus2').checked;
    const boat4Bonus3 = document.getElementById('boat4_bonus3').checked;
    const boat4Malus1 = document.getElementById('boat4_malus1').checked;
    const boat4Malus2 = document.getElementById('boat4_malus2').checked;

    const boat5Name = document.getElementById('navire5_name').value;
    const boat5Type = document.getElementById('boat5_type').value;
    const boat5Crew = parseFloat(document.getElementById('boat5_crew').value);
    const boat5Age = parseFloat(document.getElementById('boat5_age').value);
    const boat5Weight = parseFloat(document.getElementById('boat5_weight').value);
    const boat5Amount = parseFloat(document.getElementById('boat5_amount').value);
    const boat5Bonus1 = document.getElementById('boat5_bonus1').checked;
    const boat5Bonus2 = document.getElementById('boat5_bonus2').checked;
    const boat5Bonus3 = document.getElementById('boat5_bonus3').checked;
    const boat5Malus1 = document.getElementById('boat5_malus1').checked;
    const boat5Malus2 = document.getElementById('boat5_malus2').checked;

    const boat6Name = document.getElementById('navire6_name').value;
    const boat6Type = document.getElementById('boat6_type').value;
    const boat6Crew = parseFloat(document.getElementById('boat6_crew').value);
    const boat6Age = parseFloat(document.getElementById('boat6_age').value);
    const boat6Weight = parseFloat(document.getElementById('boat6_weight').value);
    const boat6Amount = parseFloat(document.getElementById('boat6_amount').value);
    const boat6Bonus1 = document.getElementById('boat6_bonus1').checked;
    const boat6Bonus2 = document.getElementById('boat6_bonus2').checked;
    const boat6Bonus3 = document.getElementById('boat6_bonus3').checked;
    const boat6Malus1 = document.getElementById('boat6_malus1').checked;
    const boat6Malus2 = document.getElementById('boat6_malus2').checked;

    console.log("Form Values:", {
        boat1Name, boat1Type, boat1Crew, boat1Age, boat1Weight, boat1Amount, boat1Bonus1, boat1Bonus2, boat1Bonus3, boat1Malus1, boat1Malus2,
        boat2Name, boat2Type, boat2Crew, boat2Age, boat2Weight, boat2Amount, boat2Bonus1, boat2Bonus2, boat2Bonus3, boat2Malus1, boat2Malus2,
        boat3Name, boat3Type, boat3Crew, boat3Age, boat3Weight, boat3Amount, boat3Bonus1, boat3Bonus2, boat3Bonus3, boat3Malus1, boat3Malus2,
        boat4Name, boat4Type, boat4Crew, boat4Age, boat4Weight, boat4Amount, boat4Bonus1, boat4Bonus2, boat4Bonus3, boat4Malus1, boat4Malus2,
        boat5Name, boat5Type, boat5Crew, boat5Age, boat5Weight, boat5Amount, boat5Bonus1, boat5Bonus2, boat5Bonus3, boat5Malus1, boat5Malus2,
        boat6Name, boat6Type, boat6Crew, boat6Age, boat6Weight, boat6Amount, boat6Bonus1, boat6Bonus2, boat6Bonus3, boat6Malus1, boat6Malus2
    });

    // Logique de calcul

    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    let score4 = 0;
    let score5 = 0;
    let score6 = 0;
    let totalWeight = 0;
    
    //Poids total
    if (boat1Weight > 0) totalWeight += boat1Weight;
    if (boat2Weight > 0) totalWeight += boat2Weight;
    if (boat3Weight > 0) totalWeight += boat3Weight;
    if (boat4Weight > 0) totalWeight += boat4Weight;
    if (boat5Weight > 0) totalWeight += boat5Weight;
    if (boat6Weight > 0) totalWeight += boat6Weight;

    // Score navire 1
    if (boat1Weight > 0) score1 += boat1Weight;

    if (boat1Type === 'voile') score1 += 100;
    if (boat1Type === 'rafiot') score1 += 200;

    if (boat1Bonus1) score1 += 150;
    if (boat1Bonus2) score1 += 150;
    if (boat1Bonus3) score1 += 300;

    if (boat1Crew > 0) score1 -= (boat1Crew*50 + boat1Age*2)

    if (boat1Malus1) score1 -= 100;
    if (boat1Malus2) score1 -= 250;
    
    // Score navire 2
    if (boat2Weight > 0) score2 += boat2Weight;

    if (boat2Type === 'voile') score2 += 100;
    if (boat2Type === 'rafiot') score2 += 200;

    if (boat2Bonus1) score2 += 150;
    if (boat2Bonus2) score2 += 150;
    if (boat2Bonus3) score2 += 300;

    if (boat2Crew > 0) score2 -= (boat2Crew*50 + boat2Age*2)

    if (boat2Malus1) score2 -= 100;
    if (boat2Malus2) score2 -= 250;

    // Score navire 3
    if (boat3Weight > 0) score3 += boat3Weight;

    if (boat3Type === 'voile') score3 += 100;
    if (boat3Type === 'rafiot') score3 += 200;

    if (boat3Bonus1) score3 += 150;
    if (boat3Bonus2) score3 += 150;
    if (boat3Bonus3) score3 += 300;

    if (boat3Crew > 0) score3 -= (boat3Crew*50 + boat3Age*2)

    if (boat3Malus1) score3 -= 100;
    if (boat3Malus2) score3 -= 250;

    // Score navire 4
    if (boat4Weight > 0) score4 += boat4Weight;

    if (boat4Type === 'voile') score4 += 100;
    if (boat4Type === 'rafiot') score4 += 200;

    if (boat4Bonus1) score4 += 150;
    if (boat4Bonus2) score4 += 150;
    if (boat4Bonus3) score4 += 300;

    if (boat4Crew > 0) score4 -= (boat4Crew*50 + boat4Age*2)

    if (boat4Malus1) score4 -= 100;
    if (boat4Malus2) score4 -= 250;

    // Score navire 5
    if (boat5Weight > 0) score5 += boat5Weight;

    if (boat5Type === 'voile') score5 += 100;
    if (boat5Type === 'rafiot') score5 += 200;

    if (boat5Bonus1) score5 += 150;
    if (boat5Bonus2) score5 += 150;
    if (boat5Bonus3) score5 += 300;

    if (boat5Crew > 0) score5 -= (boat5Crew*50 + boat5Age*2)

    if (boat5Malus1) score5 -= 100;
    if (boat5Malus2) score5 -= 250;

    // Score navire 6
    if (boat6Weight > 0) score6 += boat6Weight;

    if (boat6Type === 'voile') score6 += 100;
    if (boat6Type === 'rafiot') score6 += 200;

    if (boat6Bonus1) score6 += 150;
    if (boat6Bonus2) score6 += 150;
    if (boat6Bonus3) score6 += 300;

    if (boat6Crew > 0) score6 -= (boat6Crew*50 + boat6Age*2)

    if (boat6Malus1) score6 -= 100;
    if (boat6Malus2) score6 -= 250;

    console.log("Calculated Scores:", score1, score2, score3, score4, score5, score6);
 
    // Affichage des scores & distinctions

    const diagnosisResult = document.getElementById('diagnosisResult');
    diagnosisResult.innerHTML = `
        <p>Score de : ${(totalWeight)/1000} kg de seiches pour l'apéro.</p>
    `;

    if (score1 < 0 || score1 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat1Name || 'Navire 1') + ' : ' + (score1) +'pts </h3>'+(boat1Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat1Weight)/(boat1Amount)))+'g - '+'Age moy. : '+(Math.round((boat1Age)/(boat1Crew)))+' ans';
    }
    if (score2 < 0 || score2 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat2Name || 'Navire 2') + ' : ' + (score2) +'pts </h3>'+(boat2Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat2Weight)/(boat2Amount)))+'g - '+'Age moy. : '+(Math.round((boat2Age)/(boat2Crew)))+' ans';
    }
    if (score3 < 0 || score3 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat3Name || 'Navire 3') + ' : ' + (score3) +'pts </h3>'+(boat3Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat3Weight)/(boat3Amount)))+'g - '+'Age moy. : '+(Math.round((boat3Age)/(boat3Crew)))+' ans';
    }
    if (score4 < 0 || score4 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat4Name || 'Navire 4') + ' : ' + (score4) +'pts </h3>'+(boat4Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat4Weight)/(boat4Amount)))+'g - '+'Age moy. : '+(Math.round((boat4Age)/(boat4Crew)))+' ans';
    }
    if (score5 < 0 || score5 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat5Name || 'Navire 5') + ' : ' + (score5) +'pts </h3>'+(boat5Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat5Weight)/(boat5Amount)))+'g - '+'Age moy. : '+(Math.round((boat5Age)/(boat5Crew)))+' ans';
    }
    if (score6 < 0 || score6 > 0) {
        diagnosisResult.innerHTML += '<h3>Score ' + (boat6Name || 'Navire 6') + ' : ' + (score6) +'pts </h3>'+(boat6Amount)+' seiche(s) - '+'Poids moy. = '+(Math.round((boat6Weight)/(boat6Amount)))+'g - '+'Age moy. : '+(Math.round((boat6Age)/(boat6Crew)))+' ans';
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
