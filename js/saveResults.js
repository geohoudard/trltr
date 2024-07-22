// saveResults.js

function saveResults() {
    const headers = ["Nom du navire", "Catégorie de navire", "Nombre de matelots", "Age cumulé des matelots", "Poids total de la pêche (g)", "Nombre de seiches ramenées à terre", "Technique de pêche innovante", "Feignasse (absence lors du nettoyage des seiches)"];
    const rows = [
        [
            document.getElementById('navire1_name').value,
            document.getElementById('boat1_type').value,
            document.getElementById('boat1_crew').value,
            document.getElementById('boat1_age').value,
            document.getElementById('boat1_weight').value,
            document.getElementById('boat1_amount').value,
            document.getElementById('boat1_bonus1').checked ? 'Oui' : 'Non',
            document.getElementById('boat1_malus1').checked ? 'Oui' : 'Non'
        ],
        [
            document.getElementById('navire2_name').value,
            document.getElementById('boat2_type').value,
            document.getElementById('boat2_crew').value,
            document.getElementById('boat2_age').value,
            document.getElementById('boat2_weight').value,
            document.getElementById('boat2_amount').value,
            document.getElementById('boat2_bonus1').checked ? 'Oui' : 'Non',
            document.getElementById('boat2_malus1').checked ? 'Oui' : 'Non'
        ],
        [
            document.getElementById('navire3_name').value,
            document.getElementById('boat3_type').value,
            document.getElementById('boat3_crew').value,
            document.getElementById('boat3_age').value,
            document.getElementById('boat3_weight').value,
            document.getElementById('boat3_amount').value,
            document.getElementById('boat3_bonus1').checked ? 'Oui' : 'Non',
            document.getElementById('boat3_malus1').checked ? 'Oui' : 'Non'
        ],
        [
            document.getElementById('navire4_name').value,
            document.getElementById('boat4_type').value,
            document.getElementById('boat4_crew').value,
            document.getElementById('boat4_age').value,
            document.getElementById('boat4_weight').value,
            document.getElementById('boat4_amount').value,
            document.getElementById('boat4_bonus1').checked ? 'Oui' : 'Non',
            document.getElementById('boat4_malus1').checked ? 'Oui' : 'Non'
        ]
    ];
    let csvContent = headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.map(value => `"${value}"`).join(",") + "\n";
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'diagnosis_results.csv';
    link.click();
}

function loadCSV(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const text = reader.result;
        parseCSV(text);
    };
    reader.readAsText(input.files[0]);
}

function parseCSV(csvText) {
    const rows = csvText.split('\n').map(row => row.trim()).filter(row => row !== '');
    const headers = rows[0].split(',');
    const values = rows.slice(1).map(row => row.split(','));

    values.forEach((value, index) => {
        if (index === 0) {
            document.getElementById('navire1_name').value = value[0].replace(/"/g, '');
            document.getElementById('boat1_type').value = value[1].replace(/"/g, '');
            document.getElementById('boat1_crew').value = value[2].replace(/"/g, '');
            document.getElementById('boat1_age').value = value[3].replace(/"/g, '');
            document.getElementById('boat1_weight').value = value[4].replace(/"/g, '');
            document.getElementById('boat1_amount').value = value[5].replace(/"/g, '');
            document.getElementById('boat1_bonus1').checked = value[6].replace(/"/g, '') === 'Oui';
            document.getElementById('boat1_malus1').checked = value[7].replace(/"/g, '') === 'Oui';
        } else if (index === 1) {
            document.getElementById('navire2_name').value = value[0].replace(/"/g, '');
            document.getElementById('boat2_type').value = value[1].replace(/"/g, '');
            document.getElementById('boat2_crew').value = value[2].replace(/"/g, '');
            document.getElementById('boat2_age').value = value[3].replace(/"/g, '');
            document.getElementById('boat2_weight').value = value[4].replace(/"/g, '');
            document.getElementById('boat2_amount').value = value[5].replace(/"/g, '');
            document.getElementById('boat2_bonus1').checked = value[6].replace(/"/g, '') === 'Oui';
            document.getElementById('boat2_malus1').checked = value[7].replace(/"/g, '') === 'Oui';
        } else if (index === 2) {
            document.getElementById('navire3_name').value = value[0].replace(/"/g, '');
            document.getElementById('boat3_type').value = value[1].replace(/"/g, '');
            document.getElementById('boat3_crew').value = value[2].replace(/"/g, '');
            document.getElementById('boat3_age').value = value[3].replace(/"/g, '');
            document.getElementById('boat3_weight').value = value[4].replace(/"/g, '');
            document.getElementById('boat3_amount').value = value[5].replace(/"/g, '');
            document.getElementById('boat3_bonus1').checked = value[6].replace(/"/g, '') === 'Oui';
            document.getElementById('boat3_malus1').checked = value[7].replace(/"/g, '') === 'Oui';
        } else if (index === 3) {
            document.getElementById('navire4_name').value = value[0].replace(/"/g, '');
            document.getElementById('boat4_type').value = value[1].replace(/"/g, '');
            document.getElementById('boat4_crew').value = value[2].replace(/"/g, '');
            document.getElementById('boat4_age').value = value[3].replace(/"/g, '');
            document.getElementById('boat4_weight').value = value[4].replace(/"/g, '');
            document.getElementById('boat4_amount').value = value[5].replace(/"/g, '');
            document.getElementById('boat4_bonus1').checked = value[6].replace(/"/g, '') === 'Oui';
            document.getElementById('boat4_malus1').checked = value[7].replace(/"/g, '') === 'Oui';
        }
    });

    updateButtonNames();
}
