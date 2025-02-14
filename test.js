import { lc_gemini } from "./lc_gemini.js";

const qnaRaw = [
    {
        "question": {
            "id": "7f2a4f89-c610-4404-9d21-69521f9ac91a",
            "title": "ds_values_beliefs_13",
            "content": "If you value success at all costs, how might you respond to cheating on an exam?",
            "type": "mcq",
            "difficulty": "easy",
            "points": 1,
            "choices": [
                {
                    "content": "Reject the idea of cheating",
                    "id": "6a087bfd-bd17-49cc-a623-9a1106612f0b"
                },
                {
                    "content": "Feel guilty but cheat anyway",
                    "id": "44d195fc-2089-43af-a98f-5f141e3b8446"
                },
                {
                    "content": "Refuse to cheat but try to succeed without help",
                    "id": "b488f2c2-ad5b-44c6-a8fc-43136fb5edd5"
                },
                {
                    "content": "Not care about cheating if it leads to success",
                    "id": "f4c43a0b-f35f-45fa-b335-48abeed2fb58"
                }
            ]
        },
        "attempt_id": "ac890115-7a12-4c68-994a-f75c571a38a0",
        "question_id": "7f2a4f89-c610-4404-9d21-69521f9ac91a",
        "sequence": 3,
        "status": "unanswered"
    },
    {
        "question": {
            "id": "8d48dabd-08c1-4fe4-8855-a806a4509448",
            "title": "ds_values_beliefs_11",
            "content": "How does Malala Yousafzai’s story demonstrate the importance of values?",
            "type": "mcq",
            "difficulty": "easy",
            "points": 1,
            "choices": [
                {
                    "content": "She acted based on her belief in the power of education",
                    "id": "25167c00-1eaf-40ab-9d4f-fd485689b265"
                },
                {
                    "content": "She followed the crowd to stay safe",
                    "id": "4224bdf9-5d51-43db-83c2-f3aa05da24a9"
                },
                {
                    "content": "She didn’t value education",
                    "id": "cce9e642-4a3d-4623-91a0-3917d0d88af6"
                },
                {
                    "content": "She ignored the consequences of her actions",
                    "id": "15bb6d1f-f5a2-47d0-86f6-94800b7c0392"
                }
            ]
        },
        "attempt_id": "ac890115-7a12-4c68-994a-f75c571a38a0",
        "question_id": "8d48dabd-08c1-4fe4-8855-a806a4509448",
        "sequence": 5,
        "status": "unanswered"
    },
    {
        "question": {
            "id": "ddeee7da-e908-444c-816b-8b85baef14b5",
            "title": "ds_values_beliefs_5",
            "content": "What are values in life similar to in the context of Arya’s story?",
            "type": "mcq",
            "difficulty": "easy",
            "points": 1,
            "choices": [
                {
                    "content": "Money",
                    "id": "7bda0548-412e-4cb4-bb91-fc2b31660c7d"
                },
                {
                    "content": "Compass",
                    "id": "0e4abd3b-0c66-4eb1-8c35-4cef4c1896f2"
                },
                {
                    "content": "Clothes",
                    "id": "cd6e3deb-9532-413a-b5cc-88658a57c98c"
                },
                {
                    "content": "Directions",
                    "id": "de887b10-affd-43ee-bf5f-3803d97d2973"
                }
            ]
        },
        "attempt_id": "ac890115-7a12-4c68-994a-f75c571a38a0",
        "question_id": "ddeee7da-e908-444c-816b-8b85baef14b5",
        "sequence": 9,
        "status": "unanswered"
    },
    {
        "question": {
            "id": "af1c0a9a-ba79-4301-bf42-ba92797774a4",
            "title": "ds_values_beliefs_4",
            "content": "Which is the first step Arya followed to discover her values?",
            "type": "mcq",
            "difficulty": "easy",
            "points": 1,
            "choices": [
                {
                    "content": "Reflect on times she felt fulfilled",
                    "id": "60ecca8a-9afc-4810-9321-10749c9dbc66"
                },
                {
                    "content": "Recall times she felt happiest",
                    "id": "c7bb44d2-f619-4c1a-b7ae-5d23346a1262"
                },
                {
                    "content": "Reflect on times she felt proud",
                    "id": "11abcd46-88d6-44e6-82d4-876070872e31"
                },
                {
                    "content": "Determine her top values",
                    "id": "b7d3733b-faff-4015-b3fa-1e467e42ab21"
                }
            ]
        },
        "attempt_id": "ac890115-7a12-4c68-994a-f75c571a38a0",
        "question_id": "af1c0a9a-ba79-4301-bf42-ba92797774a4",
        "sequence": 13,
        "status": "unanswered"
    },
    {
        "question": {
            "id": "b451f0f8-2024-4a1f-8647-68ce2cca0192",
            "title": "ds_values_beliefs_1",
            "content": "What is the primary purpose of values in a person's life?",
            "type": "mcq",
            "difficulty": "easy",
            "points": 1,
            "choices": [
                {
                    "content": "To dictate how others should behave",
                    "id": "df89aaff-0cac-4396-9a8e-ab9578d9db08"
                },
                {
                    "content": "To guide choices and actions",
                    "id": "7e1e4a99-d3cc-4b86-af65-34ab07489548"
                },
                {
                    "content": "To create conflict in relationships",
                    "id": "ace9dfec-cc19-458b-9247-f5f0c87ff88f"
                },
                {
                    "content": "To influence the economy",
                    "id": "21ca857b-67be-44d0-ac44-2b395d6fbad1"
                }
            ]
        },
        "attempt_id": "ac890115-7a12-4c68-994a-f75c571a38a0",
        "question_id": "b451f0f8-2024-4a1f-8647-68ce2cca0192",
        "sequence": 15,
        "status": "unanswered"
    }
]


const qna = qnaRaw.map((item, idx) => ({
    question: item.question.content,
    question_number: idx,
    options: item.question.choices.map((choice, i) => ({
        content: choice.content,
        option_number: i,
    })),
}));

// console.log(qna);
// console.log(JSON.stringify(qna, null, 2));


const apiKey = "AIzaSyBg23Q-M2fKCo4Igas1D4QgHSJZIUfysIw"
const model = "gemini-1.5-pro"

const result = await lc_gemini(JSON.stringify(qna, null, 2), apiKey, model);

// console.log(result);

console.log(result);
