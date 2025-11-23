module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/groq-sdk/index.mjs [app-route] (ecmascript) <locals>");
;
;
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.GROQ_API_KEY
});
// Digital twin profile data
const profile = {
    "personal": {
        "name": "Chester",
        "title": "Information Technology Professional",
        "summary": "Aspiring Information Technology professional with strong interest in web development. Dedicated to applying technical knowledge, creativity, and problem-solving skills to develop secure and user-friendly digital solutions. Eager to gain hands-on experience and contribute to innovative projects that enhance system efficiency."
    },
    "career_goals": {
        "short_term": "Gain hands-on experience in web development and contribute to innovative projects",
        "long_term": "Develop secure and user-friendly digital solutions that enhance system efficiency",
        "interests": [
            "Web development",
            "Digital solutions",
            "System efficiency",
            "Secure applications"
        ]
    },
    "experience": [
        {
            "title": "Student",
            "company": "Saint Paul University Philippines (SPUP)",
            "duration": "Current - 3rd Year",
            "responsibilities": [
                "Studying Bachelor of Science in Information Technology",
                "Learning web development technologies and programming",
                "Working on academic projects and assignments",
                "Building technical skills in HTML, CSS, JavaScript, PHP, and MySQL"
            ],
            "achievements": [
                "Currently in 3rd year of BSIT program",
                "Developing proficiency in web development and programming"
            ]
        }
    ],
    "skills": {
        "web_development": [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL"
        ],
        "programming_languages": [
            "Python",
            "Java"
        ],
        "other_skills": [
            "Database Management",
            "Version Control (Git/GitHub)",
            "Microsoft Office Tools"
        ],
        "soft_skills": [
            "Problem solving",
            "Creativity",
            "Technical knowledge application",
            "Eagerness to learn"
        ]
    },
    "education": {
        "degree": "Bachelor of Science in Information Technology",
        "university": "Saint Paul University Philippines (SPUP)",
        "current_year": "3rd Year Student",
        "status": "Currently enrolled",
        "relevant_courses": [
            "Web Development",
            "Database Management",
            "Programming (Python, Java)",
            "Information Systems",
            "Software Engineering"
        ]
    },
    "interview_prep": {
        "behavioral_questions": {
            "motivation": "I'm passionate about web development and creating digital solutions that make a difference. I'm eager to apply my knowledge and learn from real-world projects.",
            "problem_solving": "I approach problems systematically by breaking them down, researching solutions, and applying creative thinking to find the best approach.",
            "collaboration": "I enjoy working in teams and believe that diverse perspectives lead to better solutions. I'm always willing to learn from others and share my knowledge."
        },
        "technical_questions": {
            "web_development": "I have experience with HTML, CSS, JavaScript, PHP, and MySQL. I'm comfortable building responsive websites and working with databases.",
            "learning_approach": "I learn best by doing - I take on projects, research documentation, and practice coding regularly to improve my skills.",
            "future_goals": "I want to become proficient in modern web frameworks and continue building secure, user-friendly applications that solve real problems."
        }
    }
};
async function POST(request) {
    try {
        const { question } = await request.json();
        if (!question) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Question is required'
            }, {
                status: 400
            });
        }
        const context = JSON.stringify(profile, null, 2);
        const prompt = `You are an AI assistant for Chester's portfolio website. Answer questions about Chester based on this information:

${context}

User Question: ${question}

Provide a helpful, concise answer based on the information above. If the question is not related to Chester's profile, politely redirect to relevant topics.`;
        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful AI assistant for a portfolio website, specializing in answering questions about professional profiles, skills, and career information."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
            max_tokens: 500
        });
        const answer = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            answer
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to process chat request'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8ddb4044._.js.map