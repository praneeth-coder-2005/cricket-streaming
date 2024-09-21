document.addEventListener('DOMContentLoaded', () => {
    const matchesContainer = document.getElementById('matches-container');
    const detailsContainer = document.getElementById('details-container');
    const matchDetailsSection = document.getElementById('match-details');
    const liveMatchesSection = document.getElementById('live-matches');
    const backButton = document.getElementById('back-button');

    const matches = [
        { id: 1, team1: 'India', team2: 'Australia', status: 'Live' },
        { id: 2, team1: 'England', team2: 'South Africa', status: 'Live' },
        { id: 3, team1: 'Pakistan', team2: 'New Zealand', status: 'Upcoming' }
    ];

    function displayMatches() {
        matchesContainer.innerHTML = '';
        matches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.innerHTML = `
                <h3>${match.team1} vs ${match.team2}</h3>
                <p>Status: ${match.status}</p>
                <button onclick="viewDetails(${match.id})">View Details</button>
            `;
            matchesContainer.appendChild(matchCard);
        });
    }

    window.viewDetails = function(id) {
        const match = matches.find(m => m.id === id);
        detailsContainer.innerHTML = `
            <div class="detail-card">
                <h3>${match.team1} vs ${match.team2}</h3>
                <p>Status: ${match.status}</p>
                <p>Score: 250/3</p>
                <p>Overs: 45.2</p>
            </div>
        `;
        liveMatchesSection.classList.add('hidden');
        matchDetailsSection.classList.remove('hidden');
    };

    backButton.addEventListener('click', () => {
        matchDetailsSection.classList.add('hidden');
        liveMatchesSection.classList.remove('hidden');
    });

    displayMatches();
});
