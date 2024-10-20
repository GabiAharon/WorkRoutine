const cardData = [
    {
        title: "משימות אישיות",
        frontContent: `<button class="btn-custom" onclick="openPersonalTasks(event)">הוסף/צפה במשימות</button>`,
        backContent: `
            <h5 class="card-title">משימות אישיות</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס משימות"></i>
            </div>
            <h6 class="mt-3">משימות דחופות:</h6>
            <ul id="urgent-tasks" class="task-list"></ul>
            <h6 class="mt-3">משימות בנחת:</h6>
            <ul id="relaxed-tasks" class="task-list"></ul>
            <button class="btn-custom mt-3" onclick="openTaskModal(event)">הוסף משימה</button>
        `
    },
    {
        title: "Salesforce",
        frontContent: `
            <img src="https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg" alt="Salesforce" class="card-icon" onclick="openSalesforce(event)">
        `,
        backContent: `
            <h5 class="card-title">משימות Salesforce</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס משימות"></i>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <input type="checkbox" id="salesforce-task1" class="checkbox-custom">
                    <label for="salesforce-task1" class="checkbox-custom-label">לעבור על כל מרכז</label>
                </li>
                <li class="task-item">
                    <input type="checkbox" id="salesforce-task2" class="checkbox-custom">
                    <label for="salesforce-task2" class="checkbox-custom-label">לשים לב למגמה של חניכים</label>
                </li>
                <li class="task-item">
                    <input type="checkbox" id="salesforce-task3" class="checkbox-custom">
                    <label for="salesforce-task3" class="checkbox-custom-label">לוודא תיעוד מפגשים</label>
                </li>
            </ul>
            <button class="btn-custom mt-3" onclick="completeCard(event)">השלם משימות</button>
        `
    },
    {
        title: "תיקי מרכז",
        frontContent: `
            <div class="center-item">
                <a href="https://docs.google.com/spreadsheets/d/1WUox7YWDQ4rdzjoua7ymkd3_P6LSfn8TH0bMP6BRqas/edit?gid=0#gid=0" target="_blank" class="merkaz-button">נתיבות</a>
                <a href="https://docs.google.com/spreadsheets/d/1DZP8pN_IFJkIEF3tRuQKmSnZwNWbrzfvO4vs9EwcFhI/edit#gid=1505285157" target="_blank" class="merkaz-button">באר שבע</a>
                <a href="https://docs.google.com/spreadsheets/d/1aBxCQuz9PPXrVF85Ww54nvNZpnfJXDMhSAz3T4AnR-s/edit?gid=0#gid=0" target="_blank" class="merkaz-button">ירושלים-בויאר</a>
                <a href="https://docs.google.com/spreadsheets/d/163_7WH6g9Q8uoW-U5rJTwnlXZy7J7m0VrXmcXyV3AqY/edit?gid=0#gid=0" target="_blank" class="merkaz-button">כפר חב"ד</a>
                <a href="https://docs.google.com/spreadsheets/d/1J5ntGNoEI_J7fsDeljPROgGm7VLtVPbkWtUr_69fQVo/edit?gid=0#gid=0" target="_blank" class="merkaz-button">שדרות</a>
            </div>
        `,
        backContent: `
            <h5 class="card-title">משימות תיקי מרכז</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס משימות"></i>
            </div>
            <div class="merkaz-selector">
                <select id="merkaz-select" onchange="showMerkazTasks(event)" onclick="event.stopPropagation();">
                    <option value="">בחר מרכז</option>
                    <option value="netivot">נתיבות</option>
                    <option value="beer-sheva">באר שבע</option>
                    <option value="jerusalem">ירושלים-בויאר</option>
                    <option value="kfar-chabad">כפר חב"ד</option>
                    <option value="sderot">שדרות</option>
                </select>
            </div>
            <!-- משימות לכל מרכז -->
            <div id="netivot" class="merkaz-tasks">
                <ul class="task-list">
                    <li class="task-item">
                        <input type="checkbox" id="netivot-task1" class="checkbox-custom">
                        <label for="netivot-task1" class="checkbox-custom-label">לוודא שאין משימות פתוחות</label>
                    </li>
                    <li class="task-item">
                        <input type="checkbox" id="netivot-task2" class="checkbox-custom">
                        <label for="netivot-task2" class="checkbox-custom-label">לעבור על ת עבודה</label>
                    </li>
                    <li class="task-item">
                        <input type="checkbox" id="netivot-task3" class="checkbox-custom">
                        <label for="netivot-task3" class="checkbox-custom-label">לבדוק התקדמות פרויקטים</label>
                    </li>
                </ul>
            </div>
            <div class="completed-merkaz" id="completed-merkaz"></div>
            <button class="btn-custom mt-3" onclick="completeMerkazCard(event)">השלם משימות</button>
            <button class="btn-edit" onclick="editMerkazCard(event)">ערוך שוב</button>
        `
    },
    {
        title: "מעבר על מיילים",
        frontContent: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook" class="card-icon" onclick="openOutlook(event)">
        `,
        backContent: `
            <h5 class="card-title">משימות מיילים</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס משימות"></i>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <input type="checkbox" id="email-task1" class="checkbox-custom">
                    <label for="email-task1" class="checkbox-custom-label">לענות למיילים דחופים</label>
                </li>
                <li class="task-item">
                    <input type="checkbox" id="email-task2" class="checkbox-custom">
                    <label for="email-task2" class="checkbox-custom-label">לארגן תיבת דואר נכנס</label>
                </li>
            </ul>
            <button class="btn-custom mt-3" onclick="completeCard(event)">השלם משימות</button>
        `
    },
    {
        title: "Trello",
        frontContent: `
            <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="Trello" class="card-icon" onclick="openTrello(event)">
        `,
        backContent: `
            <h5 class="card-title">משימות Trello</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס משימות"></i>
            </div>
            <ul class="task-list">
                <li class="task-item">
                    <input type="checkbox" id="trello-task1" class="checkbox-custom">
                    <label for="trello-task1" class="checkbox-custom-label">לעבור על מש חדשות</label>
                </li>
                <li class="task-item">
                    <input type="checkbox" id="trello-task2" class="checkbox-custom">
                    <label for="trello-task2" class="checkbox-custom-label">לעדכן סטטוס משימות</label>
                </li>
            </ul>
            <button class="btn-custom mt-3" onclick="completeCard(event)">השלם משימות</button>
        `
    },
    {
        title: "לוז קבוע",
        frontContent: `<button class="btn-custom" onclick="openPersonalTasks(event)">צפה בלוז</button>`,
        backContent: `
            <h5 class="card-title">לוז שבועי קבוע</h5>
            <div class="control-buttons">
                <i class="fas fa-redo reset-button" onclick="resetCard(event)" title="איפוס לוז"></i>
            </div>
            <div class="schedule-container" style="height: 350px; overflow-y: auto;">
                <ul class="schedule-list">
                    <li><strong>יום ראשון:</strong> 09:00 - פ.ע עם יוני קדם, 14:00 - פ.ע עם יקיר כרמל</li>
                    <li><strong>יום שני:</strong> 11:00 - פ.ע עם תאיר חיים</li>
                    <li><strong>יום שלישי:</strong> 10:00 - פ.ע עם מנשה</li>
                    <li><strong>יום רביעי:</strong> 12:00 - ישיבת צוות</li>
                    <li><strong>יום חמישי:</strong> 13:00 - פ.ע עם יונת גרינפלד</li>
                </ul>
            </div>
        `
    }
];

function createCard(cardInfo) {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    cardWrapper.innerHTML = `
        <div class="card" onclick="flipCard(event)">
            <div class="control-buttons">
                <i class="fas fa-grip-vertical drag-handle" title="הזז"></i>
                <i class="fas fa-sync-alt flip-icon" title="החלף צד"></i>
            </div>
            <div class="card-inner">
                <div class="card-front">
                    <h5 class="card-title">${cardInfo.title}</h5>
                    ${cardInfo.frontContent}
                </div>
                <div class="card-back">
                    ${cardInfo.backContent}
                </div>
            </div>
        </div>
    `;
    return cardWrapper;
}

const cardContainer = document.getElementById('card-container');
cardData.forEach(card => {
    cardContainer.appendChild(createCard(card));
});

new Sortable(cardContainer, {
    animation: 150,
    handle: '.drag-handle',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    forceFallback: true,
    fallbackClass: 'sortable-fallback'
});

function flipCard(event) {
    const clickableElements = ['BUTTON', 'INPUT', 'A', 'LABEL', 'IMG', 'I'];
    if (clickableElements.includes(event.target.tagName)) return;
    const card = event.currentTarget;
    card.classList.toggle('is-flipped');
}

// ... (כל הפונקציות האחרות שהיו בקובץ הישן)

function openPersonalTasks(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.card');
    card.classList.toggle('is-flipped');
}

function resetCard(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.card');
    card.classList.remove('completed');
    const checkboxes = card.querySelectorAll('.checkbox-custom');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function completeCard(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.card');
    card.classList.add('completed');
}

function openSalesforce(event) {
    event.stopPropagation();
    window.open('https://login.salesforce.com/', '_blank');
}

function openTaskModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById('task-modal');
    modal.style.display = 'block';
    
    // מיקום הפופאפ קרוב למיקום הנוכחי של המשתמש
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    modal.style.top = `${scrollY + (windowHeight * 0.1)}px`; // 10% מגובה החלון מתחת למיקום הנוכחי
    
    const taskInput = document.getElementById('modal-new-task');
    taskInput.focus();
    
    // וידוא שהכרטיסייה של המשימות האישיות מוכנה לקבל משימות חדשות
    const personalTasksCard = document.querySelector('.card-wrapper:first-child .card');
    if (personalTasksCard && personalTasksCard.classList.contains('is-flipped')) {
        personalTasksCard.classList.remove('is-flipped');
    }
    
    // הוספת אירוע לחיצה על Enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTaskFromModal();
        }
    });
}

function closeTaskModal() {
    document.getElementById('task-modal').style.display = 'none';
}

function addTaskFromModal() {
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

        // מציאת הכרטיסייה של המשימות האישיות וסיבובה
        const personalTasksCard = document.querySelector('.card-wrapper:first-child .card');
        if (personalTasksCard && !personalTasksCard.classList.contains('is-flipped')) {
            personalTasksCard.classList.add('is-flipped');
        }
    }
}

function createTaskItem(taskText, checkboxId) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <input type="checkbox" id="${checkboxId}" class="checkbox-custom">
        <label for="${checkboxId}" class="checkbox-custom-label">${taskText}</label>
        <button class="btn-help" onclick="requestHelp(event, '${taskText}')">בקש עזרה</button>
    `;
    return taskItem;
}

function requestHelp(event, taskText) {
    event.stopPropagation();
    console.log("Requesting help for:", taskText); // הוספת לוג לבדיקה
    if (typeof window.getHelp === 'function') {
        window.getHelp(taskText).then(response => {
            window.showAIResponse(response);
        }).catch(error => {
            console.error("Error requesting help:", error);
            window.showAIResponse("מצטערים, אירעה שגיאה בבקשת העזרה. נסה שוב מאוחר יותר.");
        });
    } else {
        console.error("getHelp function is not defined");
        window.showAIResponse("מצטערים, לא ניתן לבקש עזרה כרגע. נסה שוב מאוחר יותר.");
    }
}

// הוספת אירועי לחיצה לכפתורים
document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('fab');
    if (fab) {
        fab.addEventListener('click', openTaskModal);
    }

    const closeModalButton = document.querySelector('.close-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeTaskModal);
    }

    const addTaskButton = document.querySelector('.btn-modal');
    if (addTaskButton) {
        addTaskButton.addEventListener('click', addTaskFromModal);
    }

    // הוספת ��ירוע לחיצה על Enter בשדה הקלט
    const taskInput = document.getElementById('modal-new-task');
    if (taskInput) {
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addTaskFromModal();
            }
        });
    }

    // הוספת מאזיני אירועים לכפתורי "בקש עזרה" קיימים
    document.querySelectorAll('.btn-help').forEach(button => {
        button.addEventListener('click', function(event) {
            const taskText = this.previousElementSibling.textContent;
            requestHelp(event, taskText);
        });
    });
});

// חשיפת פונקציות לשימוש גלובלי
window.openPersonalTasks = openPersonalTasks;
window.resetCard = resetCard;
window.completeCard = completeCard;
window.openSalesforce = openSalesforce;
window.openTaskModal = openTaskModal;
window.closeTaskModal = closeTaskModal;
window.addTaskFromModal = addTaskFromModal;
window.requestHelp = requestHelp;
window.flipCard = flipCard;
window.showAIResponse = showAIResponse;  // הוסף את זה

// הוספת קיצור מקלדת לפתיחת המודל
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        openTaskModal();
    }
});

