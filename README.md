# Server for Course site data

The api is designed to provide courses data to client server. Its a simple data with no authentication. So you can just use the link and play.

## Details we provide in our api

- courseName
- id
- category
- duration
- description
- image
- addedInList
- Lessons
- Quizzes
- Author
- name
- img_url
- Reviews
- Instructor Rating
- Students
- Courses
- SkillLevel
- Language
- Certificate
- enrolled
- tags

## How to get data ?

- /courses >to get all the data
- /:category >to get all courses of a category
- /courses/:id >to get single course data
- /courses/:tags >to get all courses of the category
- /language/:language >to get all courses of the language
- /skillLevel/:skillLevel >to get all course of the skill level
