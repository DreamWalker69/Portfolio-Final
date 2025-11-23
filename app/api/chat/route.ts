import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

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
    "interests": ["Web development", "Digital solutions", "System efficiency", "Secure applications"]
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
    "web_development": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    "programming_languages": ["Python", "Java"],
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
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    const context = JSON.stringify(profile, null, 2)

    const prompt = `You are an AI assistant for Chester's portfolio website. Answer questions about Chester based on this information:

${context}

User Question: ${question}

Provide a helpful, concise answer based on the information above. If the question is not related to Chester's profile, politely redirect to relevant topics.`

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
      max_tokens: 500,
    })

    const answer = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
