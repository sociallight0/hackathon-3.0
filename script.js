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
            title: 'Sustainable Agriculture Solutions',
            description: 'Comprehensive programs to boost food production while protecting the environment',
            details: [
                'Climate-resilient seed varieties that can withstand drought and flooding',
                'Precision agriculture using satellite monitoring and IoT sensors',
                'Organic farming techniques that improve soil health',
                'Market linkage programs connecting farmers to buyers',
                'Agricultural financing and insurance programs',
                'Training on post-harvest loss reduction techniques'
            ]
        },
        nutrition: {
            title: 'Nutrition Program Solutions',
            description: 'Targeted interventions to address malnutrition across all age groups',
            details: [
                'School feeding programs reaching 370 million children globally',
                'Maternal and infant nutrition support for first 1,000 days',
                'Micronutrient supplementation programs',
                'Community nutrition education and behavior change',
                'Treatment of severe acute malnutrition',
                'Food fortification programs in partnership with industry'
            ]
        },
        technology: {
            title: 'Technology-Driven Solutions',
            description: 'Leveraging innovation to revolutionize food systems',
            details: [
                'AI-powered crop monitoring and yield prediction',
                'Blockchain supply chain transparency and traceability',
                'Mobile apps connecting farmers to markets and weather data',
                'Drone delivery of supplies to remote areas',
                'Digital payment systems for cash transfers',
                'Satellite early warning systems for food crises'
            ]
        },
        emergency: {
            title: 'Emergency Response Solutions',
            description: 'Rapid response capabilities for acute food crises',
            details: [
                'Pre-positioned emergency food supplies in strategic locations',
                'Mobile malnutrition treatment units',
                'Emergency cash transfer programs',
                'Refugee camp nutrition support',
                'Disaster risk reduction and preparedness',
                'Coordination with government and UN agencies'
            ]
        },
        water: {
            title: 'Water & Sanitation Solutions',
            description: 'Essential infrastructure for nutrition and health',
            details: [
                'Clean water access programs in rural communities',
                'Sanitation facilities in schools and health centers',
                'Water treatment and purification systems',
                'Hygiene education and behavior change programs',
                'Irrigation systems for agricultural development',
                'Emergency water supply during crises'
            ]
        },
        education: {
            title: 'Education & Training Solutions',
            description: 'Building knowledge and capacity for long-term food security',
            details: [
                'Agricultural extension services and farmer field schools',
                'Nutrition education for mothers and caregivers',
                'Youth training programs in agriculture and food processing',
                'Community health worker training',
                'Leadership development for women in agriculture',
                'Policy maker capacity building on food security'
            ]
        }
    };
    
    const solution = solutions[solutionType];
    if (solution) {
        alert(`${solution.title}\n\n${solution.description}\n\nKey Components:\n• ${solution.details.join('\n• ')}`);
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
        resultDiv.innerHTML = '❌ Please enter a valid donation amount';
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

// Risk assessment functions
function assessHungerRisk(region) {
    const factors = {
        conflict: Math.random() * 10,
        climate: Math.random() * 10,
        economic: Math.random() * 10,
        governance: Math.random() * 10,
        infrastructure: Math.random() * 10
    };
    
    const totalRisk = Object.values(factors).reduce((sum, factor) => sum + factor, 0) / 5;
    
    if (totalRisk > 7) return 'critical';
    if (totalRisk > 5) return 'high';
    if (totalRisk > 3) return 'medium';
    return 'low';
}

// Data export functions
function exportHungerData() {
    const dataStr = JSON.stringify(hungerData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zero_hunger_data.json';
    link.click();
    
    URL.revokeObjectURL(url);
}

// Reporting functions
function generateReport() {
    const report = {
        generatedAt: new Date().toISOString(),
        summary: {
            totalAffected: hungerData.regions.reduce((sum, region) => sum + region.affected, 0),
            criticalRegions: hungerData.regions.filter(r => r.risk === 'critical').length,
            improvingRegions: hungerData.regions.filter(r => r.trend === 'improving').length
        },
        recommendations: [
            'Scale emergency assistance in Afghanistan, Yemen, and South Sudan',
            'Strengthen early warning systems in moderate-risk areas',
            'Continue supporting successful programs in improving regions',
            'Increase funding for long-term resilience building',
            'Enhance coordination between humanitarian partners'
        ]
    };
    
    console.log('Generated Report:', report);
    return report;
}

// Search and filter functions
function searchRegions(query) {
    return hungerData.regions.filter(region => 
        region.name.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByRisk(riskLevel) {
    return hungerData.regions.filter(region => region.risk === riskLevel);
}

// Prediction algorithms
function predictHungerTrends(region, timeframe) {
    // Simplified prediction model
    const baselineRisk = assessHungerRisk(region);
    const climateImpact = Math.random() * 2 - 1; // -1 to +1
    const economicTrend = Math.random() * 2 - 1;
    const conflictRisk = Math.random() * 2 - 1;
    
    const prediction = {
