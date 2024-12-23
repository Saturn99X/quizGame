
document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    const progressBar = document.getElementById('progressBar');
    const quiz = [
        {
          "question": "Which data structure uses the LIFO principle?",
          "answers": ["Magical Bag of Holding", "Queue", "Array", "Stack"]
        },
        {
          "question": "In which year was the Python programming language created?",
          "answers": ["1989", "1991", "3000 BC", "2000"]
        },
        {
          "question": "What is an IP address used for?",
          "answers": ["Tracking pizza deliveries", "Identifying a device on a network", "Hosting a video game server", "Storing website content"]
        },
        {
          "question": "Which of these is an example of an operating system?",
          "answers": ["Refrigerator OS", "Google Chrome", "Windows", "Microsoft Word"]
        },
        {
          "question": "In relational databases, what does SQL stand for?",
          "answers": ["Simple Query Logic", "Super Quick Linguini", "Sequential Query Language", "Structured Query Language"]
        },
        {
          "question": "What is the purpose of DNS in networking?",
          "answers": ["Delivering Nachos Securely", "Translating domain names into IP addresses", "Securing communication", "Increasing network speed"]
        },
        {
          "question": "What does 'OOP' stand for in programming?",
          "answers": ["Octopus on the Playground", "Object-Oriented Programming", "Object Overload Processor", "Operation-Oriented Program"]
        },
        {
          "question": "What is the primary function of a compiler?",
          "answers": ["Running programs directly", "Convert high-level code into machine code", "Debugging programs", "Complaining about your code without offering solutions"]
        },
        {
          "question": "Which of the following is a JavaScript framework?",
          "answers": ["Django", "React", "Flask", "CoffeeScript"]
        },
        {
          "question": "What does 'GUI' stand for in computing?",
          "answers": ["Ghosts Under Icons", "General Utility Interface", "Graphical User Interface", "General User Interaction"]
        },
        {
          "question": "What is a primary key in a database?",
          "answers": ["The key to success", "A unique identifier for each record", "The first user of the database", "The main encryption method"]
        },
        {
          "question": "Which company developed the Linux operating system?",
          "answers": ["Linus Torvalds", "Microsoft", "Apple", "The Penguins Association"]
        },
        {
          "question": "What does 'RAM' stand for?",
          "answers": ["Really Awesome Machine", "Rapid Action Module", "Read Access Memory", "Random Access Memory"]
        },
        {
          "question": "Which sorting algorithm is the fastest in the average case for large datasets?",
          "answers": ["Quick Sort", "Bubble Sort", "Merge Sort", "Rocket-Powered Sort"]
        },
        {
          "question": "Which of these is a NoSQL database?",
          "answers": ["MongoDB", "PostgreSQL", "ExcelSheetDB", "MySQL"]
        },
        {
          "question": "What is the term for unauthorized access to a network or computer?",
          "answers": ["Playing hide and seek", "Programming", "Hacking", "Cracking"]
        },
        {
          "question": "What is the main function of the 'git' command in software development?",
          "answers": ["Starting a feud with GitHub", "Version control", "Running scripts", "File compression"]
        },
        {
          "question": "What does 'API' stand for?",
          "answers": ["Application Programming Interface", "Automated Process Interface", "Always Perfect Interface", "Advanced Protocol Interface"]
        },
        {
          "question": "Which of these is a high-level programming language?",
          "answers": ["Python", "Assembly", "Machine Code", "AlienScript"]
        },
        {
          "question": "Which of the following is a cloud service provider?",
          "answers": ["WiFi", "My Grandma's attic", "USB Drive", "AWS"]
        },
        {
          "question": "What is the purpose of the 'chmod' command in Unix/Linux systems?",
          "answers": ["Change file permissions", "Compress files", "Check memory usage", "Change your mood"]
        },
        {
          "question": "In machine learning, what does 'overfitting' mean?",
          "answers": ["The model is too complex and fits the training data too closely", "The machine is physically overfilled", "The model needs to hit the gym", "The model fits all data perfectly"]
        },
        {
          "question": "What does CSS stand for?",
          "answers": ["Cascading Style Sheets", "Computer Style Syntax", "Code Sparkles and Styles", "Colorful Simple Sheets"]
        },
        {
          "question": "What is a 'firewall' used for in network security?",
          "answers": ["Defend against literal fire on the network cables", "Speed up internet connections", "Create backups of files", "Prevent unauthorized access to a network"]
        },
        {
          "question": "What is 'big data'?",
          "answers": ["Data that goes to the gym regularly", "Extremely large datasets that are difficult to process", "A brand of storage devices", "A large floppy disk"]
        },
        {
          "question": "Which programming language is primarily used for iOS development?",
          "answers": ["BirdCall", "Ruby", "Swift", "C#"]
        },
        {
          "question": "What is the difference between HTTP and HTTPS?",
          "answers": ["HTTPS comes with free pizza", "HTTPS is secure, HTTP is not", "HTTP is faster than HTTPS", "HTTP is only for mobile devices"]
        }
      ]

      const correctAnswers = [
        "Stack", "1991", "Identifying a device on a network", "Windows", "Structured Query Language",
        "Translating domain names into IP addresses", "Object-Oriented Programming", "Convert high-level code into machine code",
        "React", "Graphical User Interface", "A unique identifier for each record", "Linus Torvalds", "Random Access Memory",
        "Quick Sort", "MongoDB", "Hacking", "Version control", "Application Programming Interface", "Python", "AWS",
        "Change file permissions", "The model is too complex and fits the training data too closely", "Cascading Style Sheets",
        "Prevent unauthorized access to a network", "Extremely large datasets that are difficult to process", "Swift",
        "HTTPS is secure, HTTP is not"
    ];

    function showQuestion() {
        const questionElement = document.getElementById('question');
        const answerButtons = [
            document.getElementById('answer1'),
            document.getElementById('answer2'),
            document.getElementById('answer3'),
            document.getElementById('answer4')
        ];

        // Display the current question
        if (questionElement) {
            questionElement.textContent = quiz[currentQuestionIndex].question;
        }

        // Display the answers for the current question
        answerButtons.forEach((button, index) => {
            if (button) {
                button.textContent = quiz[currentQuestionIndex].answers[index];
            }
        });
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex >= quiz.length) {
            currentQuestionIndex = 0;  // Reset the quiz if at the end
        }
        showQuestion();
    }

    function checkAnswer(selectedElement) {
        const selectedAnswer = selectedElement.textContent;
        const correctAnswer = correctAnswers[currentQuestionIndex];

        if (selectedAnswer === correctAnswer) {
            selectedElement.classList.add("correct");
            progressBar.value += 1;
        } else {
            selectedElement.classList.add("incorrect");
            document.querySelectorAll('.answer').forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add("correct");
                }
            });
        }
    }

    // Add event listeners to answer buttons
    document.querySelectorAll('.answer').forEach(button => {
        button.addEventListener('click', (event) => {
            checkAnswer(event.target);
        });
    });

    // Handle "Next Question" button
    let submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
        document.querySelectorAll('.answer').forEach(button => {
            button.classList.remove('correct', 'incorrect');  // Reset button styles
        });
        nextQuestion();  
    });
    showQuestion();  
    if (currentQuestionIndex == 25) {
        alert(`You have completed the quiz! your score is ${progressBar.value}/26`);
    }
});