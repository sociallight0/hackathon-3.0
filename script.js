// Global state management for Zero Hunger App
let hungerData = {
    regions: [
        { name: 'Afghanistan', risk: 'critical', population: 39.8, affected: 22.8, trend: 'worsening', lastUpdate: '2025-08-30' },
        { name: 'Yemen', risk: 'critical', population: 30.4, affected: 19.0, trend: 'stable', lastUpdate: '2025-08-28' },
        { name: 'South Sudan', risk: 'critical', population: 11.2, affected: 8.9, trend: 'worsening', lastUpdate: '2025-08-29' },
        { name: 'Haiti', risk: 'high', population: 11.4, affected: 4.6, trend: 'improving', lastUpdate: '2025-08-25' },
        { name: 'Somalia', risk: 'high', population: 16.4, affected: 6.6, trend: 'stable', lastUpdate: '2025-08-27' },
        { name: 'Nigeria', risk: 'medium', population: 218.5, affected: 25.0, trend: 'stable', lastUpdate: '2025-08-26' },
        { name: 'Chad', risk: 'high', population: 17.2, affected: 5.1, trend: 'worsening', lastUpdate: '2025-08-29' },
        { name: 'Madagascar', risk: 'medium', population: 28.9, affected: 4.3, trend: 'stable', lastUpdate: '2025-08-24' },
        { name: 'Guatemala', risk: 'medium', population: 17.6, affected: 2.8, trend: 'improving', lastUpdate: '2025-08-23' }
    ],
    solutions: {
        implemented: 156,
        beneficiaries: 2400000,
        countries: 45,
        funding: 2800000000
    },
    metrics: {
        peopleFed: 2400000,
        programsActive: 156,
        countriesReached: 45,
        fundsRaised: 2800000000,
        mealsDistributed: 12500000,
        farmersTrained: 45000
    }
};

// Navigation functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Tracker detail functions
function showDetails(riskLevel) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    
    const details = {
        high: {
            title: 'Critical Risk Areas - Immediate Action Required',
            content: `
                <h3 style="color: #e74c3c; margin-bottom: 20px;">🚨 Critical Hunger Zones</h3>
                
                <div style="margin-bottom: 30px;">
                    <h4>Afghanistan (22.8M people affected)</h4>
                    <ul>
                        <li>Economic collapse following political transition</li>
                        <li>Severe drought affecting 80% of agricultural regions</li>
                        <li>Limited humanitarian access due to security concerns</li>
                        <li>Healthcare system breakdown affecting nutrition programs</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h4>Yemen (19.0M people affected)</h4>
                    <ul>
                        <li>Ongoing conflict disrupting food distribution systems</li>
                        <li>Currency devaluation increasing food prices by 300%</li>
                        <li>Port infrastructure damage limiting food imports</li>
                        <li>Cholera outbreak worsening malnutrition</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h4>South Sudan (8.9M people affected)</h4>
                    <ul>
                        <li>Flooding destroying crops and livestock</li>
                        <li>Population displacement affecting food production</li>
                        <li>Limited road access for food distribution</li>
                        <li>Economic crisis reducing purchasing power</li>
                    </ul>
                </div>
                
                <div class="alert alert-danger">
                    <strong>Immediate Actions Required:</strong><br>
                    • Emergency food assistance scale-up<br>
                    • Cash transfer programs for vulnerable families<br>
                    • Malnutrition treatment center expansion<br>
                    • Coordination with local authorities for access
                </div>
            `
        },
        medium: {
            title: 'Moderate Risk Areas - Preventive Measures',
            content: `
                <h3 style="color: #f39c12; margin-bottom: 20px;">⚠️ Moderate Risk Zones</h3>
                
                <div style="margin-bottom: 30px;">
                    <h4>Haiti (4.6M people affected)</h4>
                    <ul>
                        <li>Political instability affecting market operations</li>
                        <li>Hurricane season damaging agricultural infrastructure</li>
                        <li>Fuel shortages limiting food transportation</li>
                        <li>Gang violence disrupting food supply chains</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h4>Somalia (6.6M people affected)</h4>
                    <ul>
                        <li>Desert locust swarms threatening crops</li>
                        <li>Irregular rainfall patterns affecting harvests</li>
                        <li>Limited market infrastructure in rural areas</li>
                        <li>Refugee influx straining local resources</li>
                    </ul>
                </div>
                
                <div class="alert alert-warning">
                    <strong>Preventive Measures:</strong><br>
                    • Strengthen early warning systems<br>
                    • Support climate-resilient agriculture<br>
                    • Improve market access for smallholder farmers<br>
                    • Enhance emergency preparedness
                </div>
            `
        },
        low: {
            title: 'Improving Areas - Continued Support',
            content: `
                <h3 style="color: #27ae60; margin-bottom: 20px;">✅ Improving Zones</h3>
                
                <div style="margin-bottom: 30px;">
                    <h4>Bangladesh (Showing positive trends)</h4>
                    <ul>
                        <li>Government nutrition programs reaching 15M children</li>
                        <li>Agricultural productivity increased by 25%</li>
                        <li>Economic growth reducing extreme poverty</li>
                        <li>Improved disaster preparedness systems</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h4>Ethiopia (Progress in food security)</h4>
                    <ul>
                        <li>Productive Safety Net Program benefiting 8M people</li>
                        <li>Investment in drought-resistant crops showing results</li>
                        <li>Improved early warning systems preventing crises</li>
                        <li>Women's empowerment programs increasing household income</li>
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h4>Rwanda (Model for recovery)</h4>
                    <ul>
                        <li>Comprehensive health insurance covering nutrition</li>
                        <li>Agricultural transformation reducing malnutrition by 60%</li>
                        <li>Strong governance ensuring program effectiveness</li>
                        <li>Regional cooperation improving food trade</li>
                    </ul>
                </div>
                
                <div class="alert alert-success">
                    <strong>Continued Support Needed:</strong><br>
                    • Sustain successful programs<br>
                    • Scale proven interventions to other regions<br>
                    • Strengthen institutional capacity<br>
                    • Maintain long-term funding commitments
                </div>
            `
        }
    };
    
    if (modalBody && details[riskLevel]) {
        modalBody.innerHTML = details[riskLevel].content;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Solution detail functions
function learnMore(solutionType) {
    const solutions = {
        agriculture: {
            title: '🌾 Sustainable Agriculture Solutions',
            description: 'Comprehensive programs to boost food production while protecting the environment',
            icon: '🌱',
            details: [
                'Climate-resilient seed varieties that can withstand drought and flooding',
                'Precision agriculture using satellite monitoring and IoT sensors',
                'Organic farming techniques that improve soil health',
                'Market linkage programs connecting farmers to buyers',
                'Agricultural financing and insurance programs',
                'Training on post-harvest loss reduction techniques'
            ],
            statistics: {
                'Farmers Trained': '45,000+',
                'Crop Yield Increase': '35% average',
                'Countries Active': '28',
                'Investment': '$850M annually'
            },
            successStory: "In Kenya, smallholder farmer Joseph increased his maize yield by 300% using drought-resistant seeds and precision farming techniques. His income rose from $500 to $2,000 annually, allowing him to send his children to school and expand his farm."
        },
        nutrition: {
            title: '🍎 Nutrition Program Solutions',
            description: 'Targeted interventions to address malnutrition across all age groups',
            icon: '🥗',
            details: [
                'School feeding programs reaching 370 million children globally',
                'Maternal and infant nutrition support for first 1,000 days',
                'Micronutrient supplementation programs',
                'Community nutrition education and behavior change',
                'Treatment of severe acute malnutrition',
                'Food fortification programs in partnership with industry'
            ],
            statistics: {
                'Children Fed Daily': '2.4M',
                'Recovery Rate': '85%',
                'Program Sites': '12,000',
                'Annual Budget': '$1.2B'
            },
            successStory: "Maria's 3 children in Guatemala now attend school regularly thanks to the feeding program. Her youngest, who was severely malnourished, has fully recovered and is thriving academically."
        },
        technology: {
            title: '📱 Technology-Driven Solutions',
            description: 'Leveraging innovation to revolutionize food systems',
            icon: '🔬',
            details: [
                'AI-powered crop monitoring and yield prediction',
                'Blockchain supply chain transparency and traceability',
                'Mobile apps connecting farmers to markets and weather data',
                'Drone delivery of supplies to remote areas',
                'Digital payment systems for cash transfers',
                'Satellite early warning systems for food crises'
            ],
            statistics: {
                'Farmers Connected': '180,000',
                'Prediction Accuracy': '92%',
                'Digital Payments': '$45M monthly',
                'Early Warnings': '24/7 monitoring'
            },
            successStory: "Using our mobile app, farmer Ahmed in Bangladesh receives real-time weather updates and market prices, increasing his profits by 40% through better timing of planting and selling."
        },
        emergency: {
            title: '🤝 Emergency Response Solutions',
            description: 'Rapid response capabilities for acute food crises',
            icon: '🚨',
            details: [
                'Pre-positioned emergency food supplies in strategic locations',
                'Mobile malnutrition treatment units',
                'Emergency cash transfer programs',
                'Refugee camp nutrition support',
                'Disaster risk reduction and preparedness',
                'Coordination with government and UN agencies'
            ],
            statistics: {
                'Response Time': '48 hours',
                'People Reached': '15M annually',
                'Supply Hubs': '75 locations',
                'Success Rate': '78% crisis prevention'
            },
            successStory: "When floods hit Bangladesh in 2024, our pre-positioned supplies reached 500,000 people within 48 hours, preventing a humanitarian crisis and saving thousands of lives."
        },
        water: {
            title: '💧 Water & Sanitation Solutions',
            description: 'Essential infrastructure for nutrition and health',
            icon: '🚰',
            details: [
                'Clean water access programs in rural communities',
                'Sanitation facilities in schools and health centers',
                'Water treatment and purification systems',
                'Hygiene education and behavior change programs',
                'Irrigation systems for agricultural development',
                'Emergency water supply during crises'
            ],
            statistics: {
                'People Served': '8.5M',
                'Clean Water Points': '25,000',
                'Health Centers': '3,400',
                'Investment': '$680M'
            },
            successStory: "In rural Mali, new water systems reduced waterborne diseases by 70% and increased agricultural productivity by 45%, transforming the lives of 50,000 villagers."
        },
        education: {
            title: '🎓 Education & Training Solutions',
            description: 'Building knowledge and capacity for long-term food security',
            icon: '📚',
            details: [
                'Agricultural extension services and farmer field schools',
                'Nutrition education for mothers and caregivers',
                'Youth training programs in agriculture and food processing',
                'Community health worker training',
                'Leadership development for women in agriculture',
                'Policy maker capacity building on food security'
            ],
            statistics: {
                'People Trained': '125,000 annually',
                'Training Centers': '450',
                'Women Leaders': '15,000',
                'Knowledge Retention': '89%'
            },
            successStory: "Through our women's leadership program in Rwanda, Sarah became a cooperative leader, helping 200 women increase their income by 250% through improved farming and business skills."
        }
    };
    
    const solution = solutions[solutionType];
    if (solution) {
        showSolutionsModal(solution);
    }
}

function showSolutionsModal(solution) {
    const modal = document.getElementById('solutions-modal');
    const modalBody = document.getElementById('solutions-modal-body');
    
    if (!modal || !modalBody) return;
    
    const statsHtml = Object.entries(solution.statistics)
        .map(([key, value]) => `<div class="stat-item"><strong>${key}:</strong> ${value}</div>`)
        .join('');
    
    modalBody.innerHTML = `
        <div class="solution-modal-content">
            <div class="solution-header">
                <div class="solution-icon">${solution.icon}</div>
                <div>
                    <h2>${solution.title}</h2>
                    <p class="solution-description">${solution.description}</p>
                </div>
            </div>
            
            <div class="solution-sections">
                <div class="solution-section">
                    <h3>🎯 Key Components</h3>
                    <ul class="solution-details-list">
                        ${solution.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="solution-section">
                    <h3>📊 Impact Statistics</h3>
                    <div class="solution-stats">
                        ${statsHtml}
                    </div>
                </div>
                
                <div class="solution-section">
                    <h3>✨ Success Story</h3>
                    <div class="success-story">
                        <p>${solution.successStory}</p>
                    </div>
                </div>
            </div>
            
            <div class="solution-actions">
                <button class="btn" onclick="donate()">💰 Support This Program</button>
                <button class="btn btn-transparent" onclick="volunteer()">🙋‍♀️ Get Involved</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeSolutionsModal() {
    const modal = document.getElementById('solutions-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Action functions
function donate() {
    alert('🙏 Thank you for your interest in donating!\n\nYour contribution will directly support:\n• Emergency food assistance\n• Long-term nutrition programs\n• Agricultural development\n• Technology solutions\n\nRedirecting to secure donation page...');
}

function volunteer() {
    alert('🌟 Thank you for wanting to volunteer!\n\nVolunteer opportunities:\n• Field work in affected regions\n• Remote support (data analysis, communications)\n• Fundraising and advocacy\n• Professional skills volunteering\n\nPlease fill out our volunteer application form.');
}

function partner() {
    alert('🤝 Partnership Opportunities\n\nWe work with:\n• Corporations for CSR initiatives\n• NGOs for program implementation\n• Governments for policy development\n• Academic institutions for research\n\nContact our partnerships team to discuss collaboration.');
}

function advocate() {
    alert('📢 Become an Advocate\n\nHelp us raise awareness:\n• Share our mission on social media\n• Contact your representatives about hunger issues\n• Organize community events\n• Join our advocacy campaigns\n\nTogether we can amplify the voice for the hungry.');
}

// Impact calculator
function calculateImpact() {
    const amount = document.getElementById('donation-amount').value;
    const resultDiv = document.getElementById('impact-result');
    
    if (!amount || amount <= 0) {
        resultDiv.innerHTML = '⚠️ Please enter a valid donation amount';
        return;
    }
    
    const meals = Math.floor(amount * 4); // $0.25 per meal
    const people = Math.floor(amount / 50); // $50 feeds one person for a month
    const farmers = Math.floor(amount / 200); // $200 trains one farmer
    
    resultDiv.innerHTML = `
        <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; margin-top: 20px;">
            <h4>Your $${amount} donation could provide:</h4>
            <p>🍽️ ${meals.toLocaleString()} nutritious meals</p>
            <p>👥 Feed ${people} people for one month</p>
            <p>🌾 Train ${farmers} farmers in sustainable agriculture</p>
            <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.8;">
                Based on our current program costs and efficiency metrics
            </p>
        </div>
    `;
}

// Dashboard updates and animations
function updateDashboard() {
    // Simulate real-time updates
    const metrics = hungerData.metrics;
    
    // Add some realistic variation
    metrics.peopleFed += Math.floor(Math.random() * 1000);
    metrics.mealsDistributed += Math.floor(Math.random() * 5000);
    
    // Update display
    document.getElementById('people-fed').textContent = formatNumber(metrics.peopleFed);
    document.getElementById('programs-active').textContent = metrics.programsActive;
    document.getElementById('countries-reached').textContent = metrics.countriesReached;
    document.getElementById('funds-raised').textContent = `$${formatNumber(metrics.fundsRaised / 1000000)}M`;
    document.getElementById('meals-distributed').textContent = formatNumber(metrics.mealsDistributed);
    document.getElementById('farmers-trained').textContent = `${formatNumber(metrics.farmersTrained)}`;
}

// Utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const detailsModal = document.getElementById('details-modal');
    const solutionsModal = document.getElementById('solutions-modal');
    
    if (event.target == detailsModal) {
        detailsModal.style.display = 'none';
    }
    if (event.target == solutionsModal) {
        solutionsModal.style.display = 'none';
    }
}

// Initialize dashboard updates
document.addEventListener('DOMContentLoaded', function() {
    // Update dashboard every 30 seconds
    setInterval(updateDashboard, 30000);
    
    // Initial update
    updateDashboard();
});
