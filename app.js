const { Configuration, OpenAIApi } = require("openai");

const configiration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: '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',
});


console.log('<<--- Hello Node.js ---->>');
console.log('*- openai api tutorial...');

const openai = new OpenAIApi(configiration);

const runGPT35 = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });
    console.log(response.data.choices[0].message.content);
};

runGPT35("배고픈데 점심 메뉴 추천해줄래?");