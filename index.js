const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description about your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the first item in your Table Of Contents.",
        name: "toc1"
    },
    {
        type: "input",
        message: "What is the second item in your Table Of Contents.",
        name: "toc2"
    },
    {
        type: "input",
        message: "What is the third item in your Table Of Contents.",
        name: "toc3"
    },
{
        type: "input",
        message: "What is the fourth item in your Table Of Contents.",
        name: "toc4"
    },
    {
        type: "input",
        message: "What is the fifth item in your Table Of Contents.",
        name: "toc5"
    },
    {
        type: "input",
        message: "How do you install your app?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is your application used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Pick a license for your project",
        choices: ["MIT", "ISC", "IBM"],
        name: "license"
    },
    {
        type: "input",
        message: "How can someone contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Describe the tests you ran on your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

inquirer.prompt(questions).then(answers);  {
    const markdown = getMarkdown(answers);
    console.log(Success)

fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
        return console.log(err);
    } 
});
};

// Function call to initialize app
init();
