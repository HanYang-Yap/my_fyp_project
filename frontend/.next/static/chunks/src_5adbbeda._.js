(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_5adbbeda._.js", {

"[project]/src/app/queryGuide/queryGuide.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "queryGuide-module__UMqazq__active",
  "answer-area": "queryGuide-module__UMqazq__answer-area",
  "answer-box": "queryGuide-module__UMqazq__answer-box",
  "answer-controls": "queryGuide-module__UMqazq__answer-controls",
  "answer-label": "queryGuide-module__UMqazq__answer-label",
  "answer-textarea": "queryGuide-module__UMqazq__answer-textarea",
  "completed": "queryGuide-module__UMqazq__completed",
  "content-header": "queryGuide-module__UMqazq__content-header",
  "current-number": "queryGuide-module__UMqazq__current-number",
  "guidance-container": "queryGuide-module__UMqazq__guidance-container",
  "hint-box": "queryGuide-module__UMqazq__hint-box",
  "hint-content": "queryGuide-module__UMqazq__hint-content",
  "hint-title": "queryGuide-module__UMqazq__hint-title",
  "list-title": "queryGuide-module__UMqazq__list-title",
  "main-content": "queryGuide-module__UMqazq__main-content",
  "nav-button": "queryGuide-module__UMqazq__nav-button",
  "next-button": "queryGuide-module__UMqazq__next-button",
  "next-stage-button": "queryGuide-module__UMqazq__next-stage-button",
  "page-title": "queryGuide-module__UMqazq__page-title",
  "prev-button": "queryGuide-module__UMqazq__prev-button",
  "progress-info": "queryGuide-module__UMqazq__progress-info",
  "question-content": "queryGuide-module__UMqazq__question-content",
  "question-header": "queryGuide-module__UMqazq__question-header",
  "question-item": "queryGuide-module__UMqazq__question-item",
  "question-list": "queryGuide-module__UMqazq__question-list",
  "question-number": "queryGuide-module__UMqazq__question-number",
  "question-preview": "queryGuide-module__UMqazq__question-preview",
  "save-button": "queryGuide-module__UMqazq__save-button",
});
}}),
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
"[project]/src/app/queryGuide/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QueryGuide)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/queryGuide/queryGuide.module.css [app-client] (css module)"); // 確保這行正確導入
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function QueryGuide() {
    _s();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(10).fill(''));
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(10).fill(false));
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hints, setHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 從 Firebase 獲取問題和提示
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QueryGuide.useEffect": ()=>{
            async function fetchQuestions() {
                try {
                    const questionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'guidanceQuestions');
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(questionsRef);
                    const fetchedQuestions = [];
                    const fetchedHints = [];
                    querySnapshot.forEach({
                        "QueryGuide.useEffect.fetchQuestions": (doc)=>{
                            const data = doc.data();
                            fetchedQuestions.push(data.question);
                            fetchedHints.push(data.hint);
                        }
                    }["QueryGuide.useEffect.fetchQuestions"]);
                    setQuestions(fetchedQuestions);
                    setHints(fetchedHints);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching questions:", error);
                    // 如果獲取失敗，使用默認問題
                    setQuestions([
                        "你為何選擇「資訊管理」而非「純資訊工程」或「商學相關科系」？具體的興趣與目標是什麼？",
                        "請詳細描述你在高中參與的資訊相關專題或比賽",
                        "你在「資訊社社長」的角色中，面臨過什麼挑戰？如何解決？",
                        "你提到對「企業管理或金融分析」有興趣，這些興趣源於什麼經歷？",
                        "在校園導覽APP的開發中，你遇到最大的技術困難是什麼？如何克服？",
                        "你希望在大學期間發展哪些專業技能？為什麼？",
                        "你如何評估自己在程式設計方面的優勢與不足？",
                        "你對人工智能和大數據有什麼看法？這與你的學習目標有何關聯？",
                        "你期望在本校系學到什麼特定知識？為什麼這些對你很重要？",
                        "你的長期職業規劃是什麼？大學學習如何支持這個目標？"
                    ]);
                    setLoading(false);
                }
            }
            fetchQuestions();
        }
    }["QueryGuide.useEffect"], []);
    const switchQuestion = (index)=>{
        setCurrentQuestion(index);
    };
    const saveAnswer = async ()=>{
        const answer = document.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-textarea']}`).value.trim();
        const newAnswers = [
            ...answers
        ];
        newAnswers[currentQuestion - 1] = answer;
        setAnswers(newAnswers);
        const newCompleted = [
            ...completed
        ];
        newCompleted[currentQuestion - 1] = answer !== '';
        setCompleted(newCompleted);
        // 這裡可以加入將答案保存到 Firebase 的邏輯
        alert('答案已儲存！');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "justify-center items-center",
            children: "   Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/queryGuide/page.js",
            lineNumber: 77,
            columnNumber: 11
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['main-content'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['content-header'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['page-title'],
                    children: "　　提問引導與釐清"
                }, void 0, false, {
                    fileName: "[project]/src/app/queryGuide/page.js",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/queryGuide/page.js",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['guidance-container'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-list'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['list-title'],
                                children: "十個引導式問題"
                            }, void 0, false, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-item']} 
                                ${currentQuestion === index + 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['active'] : ''} 
                                ${completed[index] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['completed'] : ''}`,
                                    onClick: ()=>switchQuestion(index + 1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-number'],
                                            children: [
                                                "問題 ",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/queryGuide/page.js",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-preview'],
                                            children: question
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/queryGuide/page.js",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/queryGuide/page.js",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/queryGuide/page.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-area'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-header'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['current-number'],
                                        children: [
                                            "問題 ",
                                            currentQuestion,
                                            " / 10"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['progress-info'],
                                        children: [
                                            "已完成 ",
                                            completed.filter(Boolean).length,
                                            "/10 個問題"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['hint-box'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['hint-title'],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        fill: "none",
                                                        stroke: "#5d8a9e",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 16v-4",
                                                        stroke: "#5d8a9e",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 121,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "8",
                                                        r: "1",
                                                        fill: "#5d8a9e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 122,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/queryGuide/page.js",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this),
                                            "回答提示"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['hint-content'],
                                        children: hints[currentQuestion - 1] || '請詳細說明你的想法，具體的例子和經歷會使你的回答更有說服力。'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['question-content'],
                                children: questions[currentQuestion - 1]
                            }, void 0, false, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-box'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-label'],
                                        children: "你的回答："
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-textarea'],
                                        placeholder: "在這裡輸入你的回答...",
                                        value: answers[currentQuestion - 1],
                                        onChange: (e)=>{
                                            const newAnswers = [
                                                ...answers
                                            ];
                                            newAnswers[currentQuestion - 1] = e.target.value;
                                            setAnswers(newAnswers);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['answer-controls'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['prev-button']}`,
                                        onClick: ()=>switchQuestion(currentQuestion - 1),
                                        disabled: currentQuestion === 1,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 12H5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 156,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 19l-7-7 7-7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 157,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/queryGuide/page.js",
                                                lineNumber: 155,
                                                columnNumber: 29
                                            }, this),
                                            "上一題"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['save-button'],
                                        onClick: saveAnswer,
                                        children: "儲存答案"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['next-button']}`,
                                        onClick: ()=>switchQuestion(currentQuestion + 1),
                                        disabled: currentQuestion === 10,
                                        children: [
                                            "下一題",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 12h14",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 173,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 5l7 7-7 7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/queryGuide/page.js",
                                                        lineNumber: 174,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/queryGuide/page.js",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/queryGuide/page.js",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/queryGuide/page.js",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/queryGuide/page.js",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$queryGuide$2f$queryGuide$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['next-stage-button'],
                onClick: ()=>window.location.href = '/logic-flow',
                children: [
                    "回答好了！檢查邏輯與流暢度",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 12h14",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 184,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 5l7 7-7 7",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/app/queryGuide/page.js",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/queryGuide/page.js",
                        lineNumber: 183,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/queryGuide/page.js",
                lineNumber: 181,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/queryGuide/page.js",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
_s(QueryGuide, "2o3X4KOXEYiPFdzfVFufnVCshrQ=");
_c = QueryGuide;
var _c;
__turbopack_context__.k.register(_c, "QueryGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5adbbeda._.js.map