// 1. نظام الحماية ومنع السرقة (منع كليك يمين واختصارات المطورين)
document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = (e) => {
    // منع F12 و Ctrl+Shift+I و Ctrl+Shift+J و Ctrl+U
    if(e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
       (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};

/**
 * 2. وظيفة الحصول على بصمة الجهاز (Device Fingerprint)
 * تستخدم لربط حساب الطالب بجهازه ومنع تسجيل الحضور من أجهزة أخرى
 */
export function getDeviceId() {
    // نجمع مواصفات المتصفح والشاشة لعمل بصمة شبه فريدة
    const fingerprint = navigator.userAgent + 
                        navigator.language + 
                        screen.colorDepth + 
                        screen.width + "x" + screen.height;
    return btoa(fingerprint); // تحويلها لكود مشفر بسيط (Base64)
}

/**
 * 3. التحقق من صلاحيات الوصول
 * @param {string} requiredRole - الرتبة المطلوبة (student, doctor, assistant)
 */
export function checkAccess(requiredRole) {
    const role = localStorage.getItem('userRole');
    if (role !== requiredRole) {
        alert("عذراً، وصول غير مصرح به لهذه الصفحة!");
        window.location.href = 'index.html';
    }
}

// وظيفة إضافية للتأكد من حالة الاتصال
window.addEventListener('offline', () => alert('انقطع الاتصال بالإنترنت!'));