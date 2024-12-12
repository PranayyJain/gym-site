
const plans = {
    beginner: [
        {
            title: "Plan 1: Walking Routine",
            description: "✓ 20 minutes walking\n✓ Light stretching\n✓ Basic bodyweight exercises",
            image: "https://media.istockphoto.com/id/979047146/photo/young-guy-doing-stretching-exercise-in-a-park.jpg?s=2048x2048&w=is&k=20&c=Q7XQQlkcGeVzm-oL1h8XnY-6fOmoR3R1-KIA2rXuJuc="
        },
        {
            title: "Plan 2: Basic Strength Training",
            description: "✓ 30 minutes strength training\n✓ Focus on form\n✓ Core exercises",
            image: "https://media.istockphoto.com/id/1447561928/photo/fitness-gym-with-men-and-women-doing-plank-strong-and-exercise-for-muscle-cardio-and.jpg?s=2048x2048&w=is&k=20&c=Q5yRQMVSRkl5guXT6CsR_otVuC9l8TmqYKRtFIdfWgo="
        }
    ],
    intermediate: [
        {
            title: "Plan 1: Cardio Plus",
            description: "✓ 30 minutes cardio\n✓ Resistance training\n✓ Core strengthening",
            image: "https://media.istockphoto.com/id/680101030/photo/young-people-working-out-with-trx.jpg?s=2048x2048&w=is&k=20&c=ZICFlmuHPbpk3aVrg40vvatOhuXKtJRmqqbXUltnWgQ="
        },
        {
            title: "Plan 2: Circuit Training",
            description: "✓ 45 minutes circuit workout\n✓ Mixed cardio and strength\n✓ Interval-based exercises",
            image: "https://media.istockphoto.com/id/647210502/photo/woman-doing-squats.jpg?s=2048x2048&w=is&k=20&c=g5yKWnJ-hCxEzkSx3rgjsdcg9tiYCrVrUFvTsmOCSlc="
        }
    ],
    advanced: [
        {
            title: "Plan 1: High-Intensity Interval Training (HIIT)",
            description: "✓ 30 minutes HIIT\n✓ Advanced strength exercises\n✓ Focus on endurance",
            image: "https://media.istockphoto.com/id/2027283183/photo/young-sportswoman-doing-stretching-exercises-while-warming-up-in-health-club.jpg?s=2048x2048&w=is&k=20&c=APwlwKrOxvau9Hcss7GSaWxXMJwuscBvK3gIVKP-oAU="
        },
        {
            title: "Plan 2: Strength and Conditioning",
            description: "✓ 60 minutes strength training\n✓ Plyometrics\n✓ Functional training",
            image: "https://media.istockphoto.com/id/1009644496/photo/male-and-two-females-doing-trx-straps-exercises-in-a-gym-club.jpg?s=2048x2048&w=is&k=20&c=kNZ9e6vduNRMcoRiOBT7yt7UFbFCsvACXqBjTe1sV-M="
        }
    ]
};

function updateWorkoutPlans() {
    const fitnessLevel = document.getElementById('fitness-level').value;
    const workoutPlansContainer = document.getElementById('workout-plans');

    workoutPlansContainer.innerHTML = ''; // Clear existing plans

    plans[fitnessLevel].forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.className = 'plan';
        
        planDiv.innerHTML = `
            <img src="${plan.image}" alt="${plan.title}">
            <h3>${plan.title}</h3>
            <ul>
                ${plan.description.split('\n').map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        
        workoutPlansContainer.appendChild(planDiv);
    });
}

// Initial call to display plans for the default selected value
updateWorkoutPlans();