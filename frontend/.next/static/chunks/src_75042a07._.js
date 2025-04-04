(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_75042a07._.js", {

"[project]/src/firebase/config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/portfolioUpload/portfolioUpload.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "portfolioUpload-module__VSbqnW__active",
  "analysis-button": "portfolioUpload-module__VSbqnW__analysis-button",
  "analysis-heading": "portfolioUpload-module__VSbqnW__analysis-heading",
  "analysis-section": "portfolioUpload-module__VSbqnW__analysis-section",
  "analysis-text": "portfolioUpload-module__VSbqnW__analysis-text",
  "analyze-footer": "portfolioUpload-module__VSbqnW__analyze-footer",
  "btn-primary": "portfolioUpload-module__VSbqnW__btn-primary",
  "btn-secondary": "portfolioUpload-module__VSbqnW__btn-secondary",
  "category-item": "portfolioUpload-module__VSbqnW__category-item",
  "category-list": "portfolioUpload-module__VSbqnW__category-list",
  "category-title": "portfolioUpload-module__VSbqnW__category-title",
  "checkbox-container": "portfolioUpload-module__VSbqnW__checkbox-container",
  "close-btn": "portfolioUpload-module__VSbqnW__close-btn",
  "college-item": "portfolioUpload-module__VSbqnW__college-item",
  "content-container": "portfolioUpload-module__VSbqnW__content-container",
  "delete": "portfolioUpload-module__VSbqnW__delete",
  "delete-btn": "portfolioUpload-module__VSbqnW__delete-btn",
  "expanded": "portfolioUpload-module__VSbqnW__expanded",
  "file-action-btn": "portfolioUpload-module__VSbqnW__file-action-btn",
  "file-actions": "portfolioUpload-module__VSbqnW__file-actions",
  "file-details": "portfolioUpload-module__VSbqnW__file-details",
  "file-icon": "portfolioUpload-module__VSbqnW__file-icon",
  "file-item": "portfolioUpload-module__VSbqnW__file-item",
  "file-meta": "portfolioUpload-module__VSbqnW__file-meta",
  "file-name": "portfolioUpload-module__VSbqnW__file-name",
  "file-status": "portfolioUpload-module__VSbqnW__file-status",
  "files-list": "portfolioUpload-module__VSbqnW__files-list",
  "files-section": "portfolioUpload-module__VSbqnW__files-section",
  "final-file-name": "portfolioUpload-module__VSbqnW__final-file-name",
  "form-control": "portfolioUpload-module__VSbqnW__form-control",
  "form-group": "portfolioUpload-module__VSbqnW__form-group",
  "logo": "portfolioUpload-module__VSbqnW__logo",
  "logo-container": "portfolioUpload-module__VSbqnW__logo-container",
  "logo-icon": "portfolioUpload-module__VSbqnW__logo-icon",
  "logout": "portfolioUpload-module__VSbqnW__logout",
  "main-content": "portfolioUpload-module__VSbqnW__main-content",
  "menu-item": "portfolioUpload-module__VSbqnW__menu-item",
  "modal": "portfolioUpload-module__VSbqnW__modal",
  "modal-body": "portfolioUpload-module__VSbqnW__modal-body",
  "modal-btn": "portfolioUpload-module__VSbqnW__modal-btn",
  "modal-content": "portfolioUpload-module__VSbqnW__modal-content",
  "modal-footer": "portfolioUpload-module__VSbqnW__modal-footer",
  "modal-header": "portfolioUpload-module__VSbqnW__modal-header",
  "modal-title": "portfolioUpload-module__VSbqnW__modal-title",
  "page-header": "portfolioUpload-module__VSbqnW__page-header",
  "page-title": "portfolioUpload-module__VSbqnW__page-title",
  "portfolio-container": "portfolioUpload-module__VSbqnW__portfolio-container",
  "portfolio-content": "portfolioUpload-module__VSbqnW__portfolio-content",
  "portfolio-sidebar": "portfolioUpload-module__VSbqnW__portfolio-sidebar",
  "portfolioPage": "portfolioUpload-module__VSbqnW__portfolioPage",
  "radio-group": "portfolioUpload-module__VSbqnW__radio-group",
  "radio-label": "portfolioUpload-module__VSbqnW__radio-label",
  "section-header": "portfolioUpload-module__VSbqnW__section-header",
  "section-title": "portfolioUpload-module__VSbqnW__section-title",
  "selected-file-name": "portfolioUpload-module__VSbqnW__selected-file-name",
  "sidebar": "portfolioUpload-module__VSbqnW__sidebar",
  "status-analyzed": "portfolioUpload-module__VSbqnW__status-analyzed",
  "status-pending": "portfolioUpload-module__VSbqnW__status-pending",
  "sub-category": "portfolioUpload-module__VSbqnW__sub-category",
  "suggestion-item": "portfolioUpload-module__VSbqnW__suggestion-item",
  "suggestion-list": "portfolioUpload-module__VSbqnW__suggestion-list",
  "upload-button": "portfolioUpload-module__VSbqnW__upload-button",
  "upload-form": "portfolioUpload-module__VSbqnW__upload-form",
  "upload-icon": "portfolioUpload-module__VSbqnW__upload-icon",
  "upload-section": "portfolioUpload-module__VSbqnW__upload-section",
  "upload-subtitle": "portfolioUpload-module__VSbqnW__upload-subtitle",
  "upload-title": "portfolioUpload-module__VSbqnW__upload-title",
});
}}),
"[project]/src/app/portfolioUpload/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PortfolioUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/portfolioUpload/portfolioUpload.module.css [app-client] (css module)"); // 改用 CSS Modules
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PortfolioUpload() {
    _s();
    const [targetSchools, setTargetSchools] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSchool, setSelectedSchool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [documentType, setDocumentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('learning');
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        // 這裡可以之後從 Firebase 獲取檔案列表
        {
            id: 1,
            name: '臺灣大學-資訊工程學系-學習歷程自述.pdf',
            size: '4.2 MB',
            uploadDate: '2025/03/18',
            status: 'analyzed',
            analysisDate: '2025/03/19',
            score: 92,
            school: 'ntu-csie',
            type: 'learning'
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioUpload.useEffect": ()=>{
            const fetchTargetSchools = {
                "PortfolioUpload.useEffect.fetchTargetSchools": async ()=>{
                    try {
                        const schoolsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'targetSchools');
                        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(schoolsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', 'currentUserId')); // 替換成實際用戶 ID
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                        const schools = [];
                        querySnapshot.forEach({
                            "PortfolioUpload.useEffect.fetchTargetSchools": (doc)=>{
                                schools.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                        }["PortfolioUpload.useEffect.fetchTargetSchools"]);
                        setTargetSchools(schools);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }
            }["PortfolioUpload.useEffect.fetchTargetSchools"];
            fetchTargetSchools();
        }
    }["PortfolioUpload.useEffect"], []);
    const handleFileUpload = (event)=>{
        const file = event.target.files[0];
        setSelectedFile(file);
        setIsModalOpen(true);
    };
    const handleConfirmUpload = ()=>{
        if (!selectedSchool) {
            alert('請選擇志願學校');
            return;
        }
        if (!selectedFile) {
            document.getElementById('fileUpload').click();
            return;
        }
        // 這裡處理檔案上傳邏輯
        alert(`文件「${selectedFile.name}」上傳成功！`);
        setIsModalOpen(false);
        setSelectedFile(null);
        setSelectedSchool('');
    };
    const handleCategoryClick = (category)=>{
        setActiveCategory(category);
    };
    const handleAnalyzeClick = ()=>{
        const selectedFileInput = document.querySelector('input[name="fileSelect"]:checked');
        if (selectedFileInput) {
            const fileItem = selectedFileInput.closest('.file-item');
            const fileName = fileItem.querySelector('.file-name').textContent;
            const fileStatus = fileItem.querySelector('.file-status');
            localStorage.setItem('currentAnalysis', JSON.stringify({
                fileName: fileName,
                timestamp: new Date().getTime()
            }));
            if (fileStatus.classList.contains('status-analyzed')) {
                if (confirm('此文件已經分析過，確定要重新分析嗎？')) {
                    window.location.href = '/initAnalysis';
                }
            } else {
                window.location.href = '/initAnalysis';
            }
        } else {
            alert('請先選擇一個要分析的文件');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portfolioPage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['main-content'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['content-container'],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['page-header'],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['page-title'],
                                children: "學習歷程"
                            }, void 0, false, {
                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolioUpload/page.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['portfolio-container'],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['portfolio-sidebar'],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['category-title'],
                                            children: "志願學校系所"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['category-list'],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['category-item']} ${activeCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['active'] : ''}`,
                                                    onClick: ()=>handleCategoryClick('all'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-list"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, this),
                                                        " 所有文件"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                targetSchools.map((school)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['category-item']} ${activeCategory === school.code ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['active'] : ''}`,
                                                        onClick: ()=>handleCategoryClick(school.code),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-university"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            school.name
                                                        ]
                                                    }, school.id, true, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['portfolio-content'],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-section'],
                                            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['uploadArea'],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-icon'],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-cloud-upload-alt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-title'],
                                                    children: "上傳你的學習歷程文件"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-subtitle'],
                                                    children: "支持 PDF、Word、PPT、圖片等格式，最大 20MB"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-button'],
                                                    onClick: ()=>document.getElementById('fileUpload').click(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-plus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this),
                                                        " 選擇文件"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    id: "fileUpload",
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    onChange: handleFileUpload,
                                                    multiple: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['files-section'],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['section-header'],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['section-title'],
                                                        children: activeCategory === 'all' ? '所有文件' : targetSchools.find((s)=>s.code === activeCategory)?.name + ' 申請資料'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['files-list'],
                                                    children: files.filter((file)=>activeCategory === 'all' || file.school === activeCategory).map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-item'],
                                                            "data-school": file.school,
                                                            "data-type": file.type,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['checkbox-container'],
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "fileSelect",
                                                                        id: `file${file.id}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                        lineNumber: 170,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                    lineNumber: 169,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-icon'],
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-file-pdf"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                        lineNumber: 173,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-details'],
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-name'],
                                                                            children: file.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                            lineNumber: 176,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-meta'],
                                                                            children: [
                                                                                file.size,
                                                                                " · 上傳於 ",
                                                                                file.uploadDate
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                            lineNumber: 177,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['file-status']} status-${file.status}`,
                                                                    children: file.status === 'analyzed' ? `已分析 · ${file.analysisDate} · 評分: ${file.score}` : '待分析'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                    lineNumber: 179,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['delete-btn'],
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-trash"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                        lineNumber: 185,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                    lineNumber: 184,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, file.id, true, {
                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['analyze-footer'],
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['analysis-button'],
                                                        onClick: handleAnalyzeClick,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-robot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this),
                                                            " AI 分析所選文件"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portfolioUpload/page.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/portfolioUpload/page.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/portfolioUpload/page.js",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-content'],
                    style: {
                        maxWidth: '500px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-header'],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-title'],
                                    children: "設定文件屬性"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['close-btn'],
                                    onClick: ()=>setIsModalOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-times"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portfolioUpload/page.js",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-body'],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['upload-form'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['form-group'],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "schoolSelect",
                                                children: "選擇志願學校系所："
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "schoolSelect",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['form-control'],
                                                value: selectedSchool,
                                                onChange: (e)=>setSelectedSchool(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "請選擇學校系所..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    targetSchools.map((school)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: school.code,
                                                            children: school.name
                                                        }, school.id, false, {
                                                            fileName: "[project]/src/app/portfolioUpload/page.js",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['form-group'],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "選擇文件類型："
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['radio-group'],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['radio-label'],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "documentType",
                                                                value: "learning",
                                                                checked: documentType === 'learning',
                                                                onChange: (e)=>setDocumentType(e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 235,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "學習歷程自述"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 234,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['radio-label'],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "documentType",
                                                                value: "diversity",
                                                                checked: documentType === 'diversity',
                                                                onChange: (e)=>setDocumentType(e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 245,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "多元表現"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['form-group'],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "選擇的文件："
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['selected-file-name'],
                                                children: selectedFile ? selectedFile.name : '尚未選擇文件'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['form-group'],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "最終檔案名稱："
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['final-file-name'],
                                                children: selectedFile && selectedSchool ? `${targetSchools.find((s)=>s.code === selectedSchool)?.name}-${documentType === 'learning' ? '學習歷程自述' : '多元表現'}.${selectedFile.name.split('.').pop()}` : '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portfolioUpload/page.js",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portfolioUpload/page.js",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolioUpload/page.js",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-footer'],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-btn'],
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portfolioUpload$2f$portfolioUpload$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['modal-btn'],
                                    children: "確認上傳"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolioUpload/page.js",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portfolioUpload/page.js",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/portfolioUpload/page.js",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/portfolioUpload/page.js",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/portfolioUpload/page.js",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(PortfolioUpload, "3sAiDvMier9DJY4Ldo1z8dtLi3g=");
_c = PortfolioUpload;
var _c;
__turbopack_context__.k.register(_c, "PortfolioUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_75042a07._.js.map