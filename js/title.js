<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO AI Tools</title>
    <link rel="stylesheet" href="/static/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <header class="bg-dark text-white p-3">
        <div class="container">
            <h1>SEO AI Tools</h1>
            <p>Powered by Local AI Models</p>
        </div>
    </header>

    <div class="container mt-4">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="keywords-tab" data-bs-toggle="tab" data-bs-target="#keywords" type="button" role="tab">Keywords Finder</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="title-meta-tab" data-bs-toggle="tab" data-bs-target="#title-meta" type="button" role="tab">Title & Meta</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="article-tab" data-bs-toggle="tab" data-bs-target="#article" type="button" role="tab">Article Generation</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="seo-analysis-tab" data-bs-toggle="tab" data-bs-target="#seo-analysis" type="button" role="tab">SEO Analysis</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="lounge-tab" data-bs-toggle="tab" data-bs-target="#lounge" type="button" role="tab">AI Lounge</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="title-generation-tab" data-bs-toggle="tab" data-bs-target="#title-generation" type="button" role="tab">Title Generation</button>
            </li>
        </ul>

        <div class="tab-content mt-3" id="myTabContent">
            <!-- Keywords Finder Tab -->
            <div class="tab-pane fade show active" id="keywords" role="tabpanel" aria-labelledby="keywords-tab">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Keywords Finder</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="keywordQuery" class="form-label">Enter your main topic</label>
                                    <input type="text" class="form-control" id="keywordQuery" placeholder="e.g., digital marketing">
                                </div>
                                <button type="button" class="btn btn-primary" id="generateKeywords">Generate Keywords</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Results</h5>
                            </div>
                            <div class="card-body">
                                <div id="keywordsResult" class="result-area"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Title & Meta Tab -->
            <div class="tab-pane fade" id="title-meta" role="tabpanel" aria-labelledby="title-meta-tab">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Title & Meta Description Generator</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="titleKeyword" class="form-label">Primary Keyword</label>
                                    <input type="text" class="form-control" id="titleKeyword" placeholder="e.g., SEO tools">
                                </div>
                                <div class="mb-3">
                                    <label for="targetAudience" class="form-label">Target Audience</label>
                                    <input type="text" class="form-control" id="targetAudience" placeholder="e.g., marketing professionals">
                                </div>
                                <button type="button" class="btn btn-primary" id="generateTitleMeta">Generate</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Results</h5>
                            </div>
                            <div class="card-body">
                                <div id="titleMetaResult" class="result-area"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Article Generation Tab -->
            <div class="tab-pane fade" id="article" role="tabpanel" aria-labelledby="article-tab">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Article Generator</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="articleTitle" class="form-label">Article Title</label>
                                    <input type="text" class="form-control" id="articleTitle" placeholder="e.g., The Ultimate Guide to SEO">
                                </div>
                                <div class="mb-3">
                                    <label for="articleKeywords" class="form-label">Keywords (comma separated)</label>
                                    <input type="text" class="form-control" id="articleKeywords" placeholder="e.g., SEO, backlinks, content marketing">
                                </div>
                                <div class="mb-3">
                                    <label for="articleOutline" class="form-label">Outline (optional)</label>
                                    <textarea class="form-control" id="articleOutline" rows="3" placeholder="Brief outline of what you want in the article"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SEO Analysis Tab -->
            <div class="tab-pane fade" id="seo-analysis" role="tabpanel" aria-labelledby="seo-analysis-tab">
                <!-- Add SEO Analysis content here -->
            </div>

            <!-- AI Lounge Tab -->
            <div class="tab-pane fade" id="lounge" role="tabpanel" aria-labelledby="lounge-tab">
                <!-- Add AI Lounge content here -->
            </div>

            <!-- Title Generation Tab -->
            <div class="tab-pane fade" id="title-generation" role="tabpanel" aria-labelledby="title-generation-tab">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Title Generator</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="contentFocus" class="form-label">Topic or Keyword</label>
                                    <input type="text" class="form-control" id="contentFocus" placeholder="e.g., SEO tools">
                                </div>
                                <div class="mb-3">
                                    <label for="toneStyle" class="form-label">Tone Style</label>
                                    <select class="form-select" id="toneStyle">
                                        <option value="conversational">Conversational</option>
                                        <option value="professional">Professional</option>
                                        <option value="persuasive">Persuasive</option>
                                        <option value="informative">Informative</option>
                                        <option value="entertaining">Entertaining</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-primary" id="generateTitles">Generate Titles</button>
                                <div id="loadingIndicator" class="hidden">Loading...</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5>Results</h5>
                            </div>
                            <div class="card-body">
                                <div id="titlesOutput" class="hidden">
                                    <ul id="titlesList"></ul>
                                    <p><b>Topic Description:</b> <span id="topicDescription"></span></p>
                                    <p><b>Tone Description:</b> <span id="toneDescription"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabButtons = document.querySelectorAll('.nav-link');
            const tabContents = document.querySelectorAll('.tab-pane');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('show', 'active'));

                    // Add active class to clicked button and show corresponding content
                    button.classList.add('active');
                    document.querySelector(button.getAttribute('data-bs-target')).classList.add('show', 'active');
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

        // Function to generate a title based on keywords
        function generateTitle(keywords) {
            // Example logic: Add "Best" and "Guide" to the keywords
            return `Best ${keywords} Guide`;
        }
    </script>
    <style>
        .hidden {
            display: none;
        }
    </style>
</body>
</html>
