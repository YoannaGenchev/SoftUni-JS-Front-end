function softUniStudents(input) {
    const courses = {};

    for (let line of input) {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            capacity = Number(capacity);
            if (!courses[courseName]) {
                courses[courseName] = {
                    capacity,
                    students: []
                };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else {
            const match = line.match(/^(.+)\[(\d+)\] with email (.+) joins (.+)$/);
            if (!match) continue;

            const [, username, creditsStr, email, courseName] = match;
            const credits = Number(creditsStr);

            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, email, credits });
            }
        }
    }

    const sortedCourses = Object.entries(courses)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [courseName, course] of sortedCourses) {
        const remaining = course.capacity - course.students.length;
        console.log(`${courseName}: ${remaining} places left`);

        course.students
            .sort((a, b) => b.credits - a.credits)
            .forEach(st => {
                console.log(`--- ${st.credits}: ${st.username}, ${st.email}`);
            });
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);
