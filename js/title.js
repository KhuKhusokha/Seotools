document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabName = button.getAttribute('data-tab');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Title generation functionality
    const generateBtn = document.getElementById('generateTitles');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const titlesOutput = document.getElementById('titlesOutput');
    const titlesList = document.getElementById('titlesList');
    const contentFocus = document.getElementById('contentFocus');
    const toneStyle = document.getElementById('toneStyle');
    const topicDescription = document.getElementById('topicDescription');
    const toneDescription = document.getElementById('toneDescription');
    
    generateBtn.addEventListener('click', generateTitles);
    
    function generateTitles() {
        const topic = contentFocus.value.trim();
        const tone = toneStyle.value;
        
        if (!topic) {
            alert('Please enter a topic or keyword');
            return;
        }
        
        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        titlesOutput.classList.add('hidden');
        
        // Update descriptions
        topicDescription.textContent = topic;
        toneDescription.textContent = tone;
        
        // Simulate API call with timeout
        setTimeout(() => {
            const titles = generateTitleSuggestions(topic, tone);
            
            // Clear previous titles
            titlesList.innerHTML = '';
            
            // Add new titles
            titles.forEach(title => {
                const li = document.createElement('li');
                li.textContent = title;
                titlesList.appendChild(li);
            });
            
            // Hide loading, show results
            loadingIndicator.classList.add('hidden');
            titlesOutput.classList.remove('hidden');
        }, 1500);
    }
    
    function generateTitleSuggestions(topic, tone) {
        // This is a simplistic template system
        // In a real app, this would be an API call to an AI service
        
        const templates = {
            conversational: [
                `"${topic}: What You Should Know Today"`,
                `"How I Discovered the Truth About ${topic}"`,
                `"${topic} Explained: A Simple Guide for Everyone"`,
                `"Let's Talk About ${topic}: The Complete Breakdown"`,
                `"Is ${topic} Worth Your Time? My Honest Take"`
            ],
            professional: [
                `"The Ultimate Guide to ${topic}: Comprehensive Analysis"`,
                `"${topic} in 2025: Strategic Approaches for Success"`,
                `"Optimizing Your ${topic} Strategy: Professional Insights"`,
                `"${topic} Implementation: Best Practices and Standards"`,
                `"${topic} Performance Metrics: Key Indicators Analysis"`
            ],
            persuasive: [
                `"Why ${topic} Will Transform Your Business This Year"`,
                `"The Undeniable Benefits of Mastering ${topic}"`,
                `"How ${topic} Can Solve Your Biggest Challenges"`,
                `"5 Reasons Why ${topic} Deserves Your Immediate Attention"`,
                `"${topic}: The Secret Advantage Your Competitors Don't Want You to Know"`
            ],
            informative: [
                `"${topic} 101: Essential Facts and Information"`,
                `"Understanding ${topic}: A Comprehensive Overview"`,
                `"${topic} Analysis: Data-Driven Insights"`,
                `"The Complete History and Evolution of ${topic}"`,
                `"${topic} Research: Latest Findings and Developments"`
            ],
            entertaining: [
                `"You Won't Believe What Happened When I Tried ${topic}"`,
                `"${topic} Fails: Hilarious Stories and Lessons Learned"`,
                `"The Wildest ${topic} Stories You'll Ever Read"`,
                `"${topic} Adventures: My Crazy Journey and What I Discovered"`,
                `"10 Surprising Facts About ${topic} That Will Blow Your Mind"`
            ]
        };
        
        // If the topic appears to be in Indonesian (based on input in the screenshot)
        if (topic.toLowerCase().includes('slot') || topic.toLowerCase().includes('gacor')) {
            return [
                `"${topic}: Apa Saja Jackpot Terbaru di Link Slot?"`,
                `"Cara Mendapatkan ${topic} di Link Slot Hari Ini"`,
                `"${topic}: Pros dan Kons?"`,
                `"Tips Menghindari Pemainan yang ga Berhasil di ${topic}"`,
                `"Apakah ${topic} Memiliki Gacor Hari Ini? Analisis Mata Uang"`
            ];
        }
        
        return templates[tone] || templates.conversational;
    }
});
