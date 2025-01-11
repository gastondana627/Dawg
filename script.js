document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;
    const loadingOverlay = document.getElementById('loading-overlay');

    // Sample Data for Student Dashboard
    const studentData = {
        progressTimeline: {
            labels: ['Start', 'Quiz 1', 'Assignment 1', 'Quiz 2', 'End'],
            data: [10, 30, 50, 70, 100]
        },
        recentQuizSummary: {
            score: 85,
            feedback: "Excellent work on the last quiz!"
        },
        subjectEngagement: {
            labels: ['Math', 'Science', 'History', 'English'],
            data: [30, 40, 20, 10],
            colors: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
        },
        learningHoursBreakdown: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [10, 12, 8, 15]
        },
        studentLeaderboard:{
            rank: 5,
            totalStudents: 20
        },
        learningStreak: {
            currentStreak: 10
        },
        personalizedRecommendation: 'Focus on reviewing "Math" to improve your understanding.',
        achievementBadges: [
            { name: 'Learning Champion', icon: './img/badge_champion.png' },
            { name: 'Quiz Wiz', icon: './img/badge_quiz.png' },
            { name: 'Perfect Attendance', icon: './img/badge_attendance.png' }
        ]
    };
       // Sample Data for Teacher Dashboard
    const teacherData = {
        studentEngagement: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            lessonsTaught: [20, 25, 30, 35, 40, 45],
            quizzesAssigned: [15, 20, 25, 30, 35, 40],
             hoursSpent: [50, 60, 70, 80, 90, 100]
         },
         topStudents:[
             {name: 'Sarah', progress: 95, icon: './img/avatar_sarah.png'},
              {name: 'John', progress: 80, icon: './img/avatar_john.png'},
              {name: 'Emily', progress: 90, icon: './img/avatar_emily.png'}
         ],
        peerBenchmarking:{
             rank: 20,
             totalTeachers: 200
        },
        yearlyGrowth:{
             years: ['2024','2025'],
             hoursTaught: [200, 250]
         }
  };
  // Function to display loading overlay
    function showLoading() {
        loadingOverlay.classList.remove('hidden');
    }

  // Function to hide loading overlay
    function hideLoading() {
        loadingOverlay.classList.add('hidden');
    }

    // Theme Toggle Functionality
    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });

// Function to initialize the student dashboard if its elements are present
    async function initStudentDashboard() {
      try{
        if(document.getElementById('progress-timeline')) {
              // Function to create and render all the charts
                async function createCharts() {
                // Progress Timeline Chart
                const progressTimelineCtx = document.getElementById('progress-timeline').getContext('2d');
                  new Chart(progressTimelineCtx, {
                    type: 'line',
                    data: {
                      labels: studentData.progressTimeline.labels,
                      datasets: [{
                         label: 'Course Progress',
                         data: studentData.progressTimeline.data,
                            backgroundColor: '#f8f9fa',
                          borderColor: 'orange',
                           borderWidth: 2,
                            tension: 0.4
                      }]
                      },
                      options: {
                      scales: {
                        y: {
                              beginAtZero: true,
                              max: 100
                          }
                       },
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          title: {
                             display: true,
                              text: 'Course Progress',
                              align: 'start',
                                font: {
                                    size: 18,
                                    weight: 'bold'
                                },
                               padding: {
                                  bottom: 15
                                }
                           },
                            legend: {
                                display: false
                              }
                            }
                       }
                    });
                      // Subject Engagement Chart
                    const subjectEngagementCtx = document.getElementById('subject-engagement-pie').getContext('2d');
                    new Chart(subjectEngagementCtx, {
                    type: 'pie',
                    data: {
                          labels: studentData.subjectEngagement.labels,
                         datasets: [{
                          data: studentData.subjectEngagement.data,
                              backgroundColor: studentData.subjectEngagement.colors
                           }]
                    },
                     options: {
                      responsive: true,
                        maintainAspectRatio: false,
                     plugins: {
                            title: {
                                display: true,
                                text: 'Subject Engagement',
                              align: 'start',
                                  font: {
                                  size: 18,
                                 weight: 'bold'
                                },
                                padding: {
                                    bottom: 15
                                }
                              },
                             legend: {
                                position: 'right',
                                align: 'center'
                                 }
                           }
                        }
                   });
                    // Learning Hours Breakdown Chart
                    const learningHoursCtx = document.getElementById('learning-hours-breakdown').getContext('2d');
                  new Chart(learningHoursCtx, {
                        type: 'bar',
                       data: {
                         labels: studentData.learningHoursBreakdown.labels,
                           datasets: [{
                                label: 'Learning Hours',
                              data: studentData.learningHoursBreakdown.data,
                                backgroundColor: 'orange'
                              }]
                         },
                        options: {
                            scales: {
                             y: {
                                beginAtZero: true
                               }
                            },
                           responsive: true,
                             maintainAspectRatio: false,
                           plugins: {
                             title: {
                                display: true,
                                  text: 'Learning Hours Breakdown',
                               align: 'start',
                                  font: {
                                    size: 18,
                                    weight: 'bold'
                                  },
                                  padding: {
                                    bottom: 15
                                   }
                              },
                             legend: {
                                 display: false
                                  }
                              }
                            }
                     });
            }
              // Function to render quiz summary
                function renderQuizSummary() {
                    const quizSummaryDiv = document.getElementById('quiz-summary');
                  quizSummaryDiv.innerHTML = `
                        <p>
                             Score: <span class="boldtext">${studentData.recentQuizSummary.score}%</span>
                          </p>
                          <p>
                            Feedback: <span class="italictext">${studentData.recentQuizSummary.feedback}</span>
                        </p>
                    `;
              }
              // Function to render personalized recommendations
                function renderRecommendations() {
                  const recommendationsDiv = document.getElementById('personalized-recommendations');
                    recommendationsDiv.innerHTML = `<p>${studentData.personalizedRecommendation}</p>`;
              }
                // Function to render achievement badges
                function renderAchievementBadges() {
                const badgesDiv = document.getElementById('achievement-badges');
                    badgesDiv.innerHTML = '';
                    studentData.achievementBadges.forEach(badge => {
                    const badgeImg = document.createElement('img');
                      badgeImg.src = badge.icon;
                        badgeImg.alt = badge.name;
                         badgeImg.style.width = '50px';
                      badgeImg.style.height = '50px';
                     badgeImg.style.margin = '5px';
                       badgesDiv.appendChild(badgeImg);
                  });
              }
              // Function to render student leaderboard
              function renderLeaderboard(){
                  const leaderboardDiv = document.getElementById('student-leaderboard');
                    leaderboardDiv.innerHTML = `
                    <p>
                         You are ranked <span class="boldtext"> #${studentData.studentLeaderboard.rank}</span> out of <span class="boldtext">${studentData.studentLeaderboard.totalStudents}</span> Students
                       </p>
                   `;
                }
                 // Function to render student streaks
                function renderStreaks(){
                    const streaksDiv = document.getElementById('learning-streaks');
                       streaksDiv.innerHTML = `
                         <p>
                            <span class="boldtext"> ${studentData.learningStreak.currentStreak}</span> Day Streak of continuous learning!
                        </p>
                     `;
                 }
                //Initial functions to run
                 await createCharts();
                 renderQuizSummary();
                renderRecommendations();
                 renderAchievementBadges();
                renderLeaderboard();
                 renderStreaks();
              //hide the loading screen after all data is rendered.
                hideLoading();
        }
      } catch(error){
          console.error("Failed to initialize student dashboard", error);
        }
    }
    async function initTeacherDashboard(){
        try{
          if (document.getElementById('student-engagement-bar')){
             async function createCharts(){
                   // Student Engagement Chart
                    const studentEngagementCtx = document.getElementById('student-engagement-bar').getContext('2d');
                     new Chart(studentEngagementCtx, {
                         type: 'bar',
                        data: {
                             labels: teacherData.studentEngagement.labels,
                            datasets: [
                               {
                                      label: 'Lessons Taught',
                                    data: teacherData.studentEngagement.lessonsTaught,
                                    backgroundColor: '#36a2eb'
                               },
                                {
                                     label: 'Quizzes Assigned',
                                    data: teacherData.studentEngagement.quizzesAssigned,
                                    backgroundColor: '#ff6384'
                                 },
                                 {
                                    label: 'Hours Spent',
                                   data: teacherData.studentEngagement.hoursSpent,
                                      backgroundColor: '#4caf50'
                                }
                            ]
                       },
                         options: {
                            scales: {
                              y: {
                                    beginAtZero: true
                                }
                          },
                           responsive: true,
                             maintainAspectRatio: false,
                            plugins: {
                                title: {
                                      display: true,
                                     text: 'Student Engagement Metrics',
                                      align: 'start',
                                      font: {
                                       size: 18,
                                       weight: 'bold'
                                   },
                                    padding: {
                                       bottom: 15
                                  }
                            },
                                 legend:{
                                       position: 'bottom',
                                      align: 'center'
                                }
                            }
                        }
                   });
                   const yearlyGrowthCtx = document.getElementById('yearly-growth-line').getContext('2d');
                    new Chart(yearlyGrowthCtx, {
                       type: 'line',
                       data: {
                          labels: teacherData.yearlyGrowth.years,
                            datasets: [{
                                  label: 'Hours Taught',
                                 data: teacherData.yearlyGrowth.hoursTaught,
                                  backgroundColor: '#f8f9fa',
                                  borderColor: 'orange',
                                   borderWidth: 2,
                                  tension: 0.4
                           }]
                        },
                       options: {
                            scales: {
                                y: {
                                   beginAtZero: true,
                               }
                          },
                             responsive: true,
                             maintainAspectRatio: false,
                            plugins: {
                                title: {
                                     display: true,
                                      text: 'Yearly Growth - Hours Taught',
                                   align: 'start',
                                      font: {
                                       size: 18,
                                        weight: 'bold'
                                   },
                                    padding: {
                                         bottom: 15
                                  }
                               },
                                legend:{
                                     display: false
                                 }
                           }
                      }
                  });
                 }
             function renderTopStudents(){
                const topStudentsDiv = document.getElementById('top-student-highlights');
                topStudentsDiv.innerHTML = '';
                teacherData.topStudents.forEach(student => {
                   const studentDiv = document.createElement('div');
                    const studentImg = document.createElement('img');
                    studentImg.src = student.icon;
                     studentImg.alt = student.name;
                    studentImg.style.width = '50px';
                    studentImg.style.height = '50px';
                     studentImg.style.margin = '5px';
                    const studentInfo = document.createElement('p');
                   studentInfo.textContent = `${student.name} completed ${student.progress}% of your lessons.`;
                    studentDiv.appendChild(studentImg);
                    studentDiv.appendChild(studentInfo);
                    topStudentsDiv.appendChild(studentDiv);
                });
             }
             function renderPeerBenchmarking(){
              const peerBenchmarkingDiv = document.getElementById('peer-benchmarking');
                peerBenchmarkingDiv.innerHTML = `
                    <p>
                       You are in the <span class="boldtext">top ${Math.round(teacherData.peerBenchmarking.rank / teacherData.peerBenchmarking.totalTeachers * 100)}%</span> of most active teachers.
                   </p>
                 `;
             }
            await createCharts();
            renderTopStudents();
           renderPeerBenchmarking();
         hideLoading();
        }
       } catch (error){
            console.error("Failed to initialize teacher dashboard", error);
       }
   }

    //Initial Function call
    initStudentDashboard();
   initTeacherDashboard();
});