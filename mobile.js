// פונקציות ספציפיות למובייל
function initMobileView() {
    // התאמות ספציפיות למובייל
    document.body.classList.add('mobile-view');
    
    // שינוי גודל הכרטיסיות
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.minHeight = '400px';
    });

    // התאמת גודל הכפתור הצף
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.style.width = '60px';
        fab.style.height = '60px';
        fab.style.lineHeight = '60px';
        fab.style.fontSize = '30px';
    }
}

// בדיקה אם המכשיר הוא מובייל
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// הפעלת הפונקציות הספציפיות למובייל אם המכשיר הוא מובייל
if (isMobile()) {
    document.addEventListener('DOMContentLoaded', initMobileView);
}
