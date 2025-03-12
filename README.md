# Quiz app

This quiz app is developed using `reactjs`, `tanstack query`, `tailwind css` and for the data it has used `json-server` to serve local json file.

## Features

- **Quiz Categories** - Different quiz topics or categories for users to choose from (e.g., history, science, general knowledge).
- **Timer** - A countdown timer for timed quizzes to increase difficulty.
- In order to move forward, user must select an option else next button will remain disabled
- if user selects a correct option then it will be marked green else red for notifying the user about correctness of selected option
- move to next question after 30 seconds each time if user didn't select any option or press next
- **Instant score updation** - update score on each successful attempt
- **Quiz Summary and Score Display** - Show a summary with correct and incorrect answers, score, and time taken at the end of each quiz. Display all the answers submitted by the user for each question on the result page through mapping over the `usersanswerarray`
- **Numeric Progress Bar** - Display a progress bar or percentage showing how far along the user is in the quiz.
- **Instant Feedback** - Option to show immediate feedback after each question, explaining the correct answer. Mark the correct option with green among all the options for a question if user has selected a wrong option
- **Review Questions** - Let users review questions they answered incorrectly and see correct answers after the quiz.

## Features to be implemented

- keeps track of previous answers through `useranswerarray` array to show selected answer when user visits previous questions, however in that case options will remain disabled to prevent the user from changing their submitted answer to the corresponding question

- **User Authentication** - Sign up and log in functionality to track user progress and scores.
- **Offline accessibility** - Through service workers convert this web app into an fully functional offline-first mobile app
- **Question Types** - Support for multiple-choice, true/false, fill-in-the-blank, and other question types.
- **Randomized Questions** - Shuffle questions and options to provide a fresh experience each time.
- **Difficulty Levels** - Provide different difficulty levels (easy, medium, hard) that users can select.
- **Hints and Lifelines** - Add features like "50/50" (eliminate two options), hints, or skip questions.
- **Quiz Creation and Customization** - Allow users or admins to create their own quizzes and share them with others.
- **Leaderboard** - Display a leaderboard with top scorers, encouraging competition.
- **Achievements and Badges** - Award badges or points for completing certain milestones, like consecutive correct answers or completing a quiz in a set time.
- **Answer Explanation** - Provide explanations for correct and incorrect answers to help users learn.

### User Experience Enhancements

- **Dark/Light Theme** - Allow users to toggle between dark and light modes for a comfortable experience.
- **Save Progress and Resume** - Allow users to save their progress and resume a quiz later.
- **Animations and Sound Effects** - Add sound effects or animations for correct/incorrect answers, encouraging interactivity.
- **Bookmark Questions** - Enable users to bookmark challenging questions for future review.
- **Quiz History** - Keep a history of completed quizzes so users can track their progress over time.

### Social and Sharing Features

- **Share Scores** - Allow users to share their scores or achievements on social media.
- **Challenge Friends** - Let users invite or challenge friends to take a specific quiz.
- **Commenting and Discussion** - Add a discussion section under quizzes to let users discuss questions and answers.
- **Global/Weekly Competitions** - Host global or weekly competitions with real-time leaderboards to engage users.

### Data Security

- **Data Privacy** - Ensure user data, such as scores and quiz results, are private and only accessible to the user.
- **Secure Authentication** - Use secure authentication methods to protect user accounts.
- **Parental Controls** - Add settings for child users or restrict access to certain categories if the app is intended for younger audiences.

### Notifications and Alerts

- **Push Notifications** - Notify users about new quizzes, competitions, or when friends challenge them.
- **Reminders** - Set reminders for daily or weekly quizzes to keep users engaged.
- **Progress Alerts** - Alert users when they’re close to a milestone or when they reach a new high score.
