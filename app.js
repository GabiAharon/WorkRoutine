import { OPENAI_API_KEY } from './config.js';

// פונקציה לקבלת עזרה מ-OpenAI
async function getHelp(task) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "אתה עוזר אישי שמסייע בניהול משימות ומציע דרכים לייעול העבודה."
                    },
                    {
                        role: "user",
                        content: `כיצד אוכל לבצע את המשימה הבאה ביעילות: ${task}`
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching help from OpenAI:", error);
        return "מצצערים, לא הצלחנו לקבל עזרה כרגע. נסה שוב מאוחר יותר.";
    }
}

// פונקציה להצגת התשובה מ-OpenAI
function showAIResponse(response) {
    const modal = document.getElementById('ai-response-modal');
    const content = document.getElementById('ai-response-content');
    content.textContent = response;
    modal.style.display = 'block';
}

// פונקציה לסגירת המודל של תשובת ה-AI
function closeAIResponseModal() {
    document.getElementById('ai-response-modal').style.display = 'none';
};

// פונקציה ליצירת משימה חדשה עם כפתור "בקש עזרה"
function createTaskItem(taskText, checkboxId) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <input type="checkbox" id="${checkboxId}" class="checkbox-custom">
        <label for="${checkboxId}" class="checkbox-custom-label">${taskText}</label>
        <button class="btn-help">בקש עזרה</button>
    `;
    
    const helpButton = taskItem.querySelector('.btn-help');
    helpButton.onclick = async function(event) {
        event.stopPropagation();
        const response = await getHelp(taskText);
        showAIResponse(response);
    };
    
    return taskItem;
}

// פונקציה להוספת משימה חדשה
window.addTaskFromModal = function() {
    const taskInput = document.getElementById('modal-new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        let priority = 'relaxed';
        let cleanTaskText = taskText;

        if (taskText.endsWith('דחוף')) {
            priority = 'urgent';
            cleanTaskText = taskText.slice(0, -5).trim();
        } else if (taskText.endsWith('בנחת')) {
            cleanTaskText = taskText.slice(0, -5).trim();
        }

        const checkboxId = 'personal-task-' + Date.now();
        const taskItem = createTaskItem(cleanTaskText, checkboxId);

        const taskList = document.getElementById(priority === 'urgent' ? 'urgent-tasks' : 'relaxed-tasks');
        taskList.appendChild(taskItem);

        taskInput.value = '';
        closeTaskModal();
    }
};

// הפעלת הפונקציה בטעינת הדף
document.addEventListener('DOMContentLoaded', function() {
    console.log("App.js loaded"); // הוספת לוג לבדיקה
    
    // הוספת מאזיני אירועים לכפתורי "בקש עזרה" קיימים
    document.querySelectorAll('.btn-help').forEach(button => {
        button.addEventListener('click', async function(event) {
            event.stopPropagation();
            const taskText = this.previousElementSibling.textContent;
            console.log("Requesting help for:", taskText); // הוספת לוג לבדיקה
            const response = await getHelp(taskText);
            showAIResponse(response);
        });
    });
});

// ייצוא פונקציות נדרשות לשימוש ב-HTML
window.openTaskModal = function() {
    document.getElementById('task-modal').style.display = 'block';
    document.getElementById('modal-new-task').focus();
};

window.closeTaskModal = function() {
    document.getElementById('task-modal').style.display = 'none';
    document.getElementById('modal-new-task').value = '';
};

// חשיפת פונקציות לשימוש גלובלי
window.getHelp = getHelp;
window.showAIResponse = showAIResponse;
window.closeAIResponseModal = closeAIResponseModal;

// רישום Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// הוספת הודעת התקנה
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  const installButton = document.createElement('button');
  installButton.textContent = 'התקן את האפליקציה';
  installButton.classList.add('install-button');
  installButton.addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('המשתמש התקין את האפליקציה');
        } else {
          console.log('המשתמש דחה את ההתקנה');
        }
        deferredPrompt = null;
      });
    }
  });
  document.body.appendChild(installButton);
}

window.addEventListener('appinstalled', (evt) => {
  console.log('האפליקציה הותקנה בהצלחה');
});
