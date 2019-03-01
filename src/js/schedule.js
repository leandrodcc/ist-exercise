const accToggle = document.querySelectorAll('.acc-content')

export const accordion = () => {
    accToggle.forEach(acc => {
        acc.addEventListener('click', () => {
            const plus = acc.querySelector('.plus')
            const panel = acc.nextElementSibling;
            panel.classList.toggle('panel-open')
            if (panel.classList.contains('panel-open')) {
                plus.innerHTML = `<img src='img/minus.svg'>`
            } else {
                plus.innerHTML = `<img src='img/plus.svg'>`
            }
        })
    })

}

export const scheduleInfo = [
    {
        info: `<h3 class="white pd-btm-2">Intelligent Experiences</h3>
                <p class="white pd-btm-5">10AM - Room 1 - <span class="bold">XpandIt</span></p>
                <h3 class="white pd-btm-2">Big Trucks, Big Data</h3>
                <p class="white pd-btm-5">10:30AM - Room 1 - <span class="bold">Tech+Data Hub</span></p>
                <h3 class="white pd-btm-2">Welcome to the New Human Era</h3>
                <p class="white pd-btm-5">11:30AM - Room 1 - <span class="bold">Everis</span></p>`
    }, 
    {
        info: `<h3 class="white pd-btm-2">Bing Wei</h3>
                <p class="white pd-btm-2"><span class="bold">Staff Engineer @ Slack</span> - 3PM - Auditorium</p>
                <p class="white pd-btm-5">Slack - a communication and collaboration platform - has
                been fortunate to experience exponential user growth since its launch in 2014. Some of its initial 
                design decisions, centered on small teams, became liabilities when we had to support hundreds of 
                thousands of users communicating with each other. In this talk, you’ll hear how re-architecting the 
                system with lazy loading, a publish/subscribe model and an edge cache service overcame the problem 
                with improved performance and reliability. I’ll discuss the challenges and pain points we ran into, 
                how we innovated when new usage patterns emerged, and ongoing optimization to the service.</p>
                <h3 class="white pd-btm-2">Diana Kelley</h3>
                <p class="white pd-btm-2"><span class="bold">Cybersecurity Field CTO @ Microsoft</span> - 3PM - 
                Auditorium</p>
                <p class="white pd-btm-5">Insights from Microsoft on the latest cybersecurity threats and trends.</p>
                <h3 class="white pd-btm-2">António Gameiro Marques</h3>
                <p class="white pd-btm-2"><span class="bold">Director @ Portugal's National Security Office</span> 
                - 3PM - Auditorium</p>
                <p class="white pd-btm-5">During the presentation, a brief description of the forthcoming National 
                Cyberspace Security Strategy will be done and the importance of the human factor has the most 
                fragile element in cyberspace will be addressed. The national cybersecurity ecosystem will be 
                described, including the national cybersecurity framework and the associated deliverables to 
                contribute to the digital resilience of the Portuguese society.</p>`
    }, 
    {
        info: `<h3 class="white pd-btm-2">André Guilhoto</h3>
                <p class="white pd-btm-5"><span class="bold">Head Coach, League of Legends @ Origen</span> - 2PM 
                - Auditorium</p>
                <h3 class="white pd-btm-2">Scott Warner</h3>
                <p class="white pd-btm-5"><span class="bold">Game Director @ Ubisoft</span> - 3PM 
                - Auditorium</p>
                <h3 class="white pd-btm-2">Philippe Renaud</h3>
                <p class="white pd-btm-5"><span class="bold">Senior User Experience Researcher @ EA</span> - 3PM 
                - Auditorium</p>`
    }
]


