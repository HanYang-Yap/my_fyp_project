(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_initAnalysis_30b6cece._.js", {

"[project]/src/app/initAnalysis/components/DiagnosisLeft.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const DiagnosisLeft = ({ documentData, issues, userInput, onUserInputChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "diagnosis-left bg-white rounded-2xl shadow-sm p-6 h-[calc(100vh-140px)] overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "diagnosis-header flex justify-between items-center pb-4 border-b border-gray-100 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "diagnosis-title text-xl font-bold text-gray-800 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                className: "mr-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76z",
                                        stroke: "#5d8a9e",
                                        strokeWidth: "2",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                        lineNumber: 9,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "16",
                                        y1: "8",
                                        x2: "2",
                                        y2: "22",
                                        stroke: "#5d8a9e",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                        lineNumber: 10,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 8,
                                columnNumber: 11
                            }, this),
                            "診斷結果"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "doc-info flex items-center text-gray-600 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "doc-type bg-blue-600 text-white px-3 py-1 rounded-full text-xs mr-3",
                                children: documentData.documentType
                            }, void 0, false, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "school-info font-semibold",
                                children: documentData.school
                            }, void 0, false, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-panel mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "diagnosis-list space-y-4",
                    children: issues.map((issue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `diagnosis-item ${issue.type} p-4 rounded-lg bg-gray-50 border-l-4`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "issue-code font-bold text-gray-800 inline-block mr-1",
                                    children: issue.code
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "issue-title font-bold text-gray-800",
                                    children: issue.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "issue-desc mt-2 text-gray-600 leading-relaxed",
                                    children: issue.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-input-section mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-input-title text-lg font-bold text-gray-800 mb-4 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                className: "mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "#5d8a9e",
                                        strokeWidth: "2",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3",
                                        stroke: "#5d8a9e",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "17",
                                        r: "0.5",
                                        stroke: "#5d8a9e",
                                        strokeWidth: "2",
                                        fill: "#5d8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            "自我疑問與回饋"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-input-container bg-gray-50 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "user-textarea w-full min-h-[120px] p-3 border border-gray-200 rounded-lg resize-y text-gray-700",
                                placeholder: "請輸入您對文件的疑問、已知問題或需要特別關注的部分...",
                                value: userInput,
                                onChange: onUserInputChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hint-text text-gray-400 text-xs mt-2 italic",
                                children: "若無疑問可留空此欄位"
                            }, void 0, false, {
                                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/initAnalysis/components/DiagnosisLeft.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = DiagnosisLeft;
const __TURBOPACK__default__export__ = DiagnosisLeft;
var _c;
__turbopack_context__.k.register(_c, "DiagnosisLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/initAnalysis/components/DiagnosisRight.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const DiagnosisRight = ({ documentContent, onContentChange })=>{
    const handleContentChange = (e)=>{
        onContentChange(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "diagnosis-right bg-white rounded-2xl shadow-sm p-6 h-[calc(100vh-140px)] overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "diagnosis-header flex justify-between items-center pb-4 border-b border-gray-100 mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "diagnosis-title text-xl font-bold text-gray-800 flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            className: "mr-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M14 3v4a1 1 0 001 1h4",
                                    stroke: "#5d8a9e",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z",
                                    stroke: "#5d8a9e",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 9h6M9 13h6M9 17h4",
                                    stroke: "#5d8a9e",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        "文件內容（可編輯）"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "editable-content w-full h-[calc(100%-60px)] p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 leading-relaxed resize-none",
                value: documentContent,
                onChange: handleContentChange
            }, void 0, false, {
                fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/initAnalysis/components/DiagnosisRight.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = DiagnosisRight;
const __TURBOPACK__default__export__ = DiagnosisRight;
var _c;
__turbopack_context__.k.register(_c, "DiagnosisRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/initAnalysis/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InitAnalysis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$initAnalysis$2f$components$2f$DiagnosisLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/initAnalysis/components/DiagnosisLeft.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$initAnalysis$2f$components$2f$DiagnosisRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/initAnalysis/components/DiagnosisRight.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../styles/initAnalysis.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function InitAnalysis() {
    _s();
    const [documentData, setDocumentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fileName: '',
        documentType: '學習歷程自述檔案',
        school: '國立臺灣大學 - 資訊工程學系',
        content: `在高中三年的學習歷程中，我不斷探索與發掘自己的興趣與專長。藝術創作一直是我從小的興趣，但隨著對科技領域的接觸，我開始發現自己對程式設計和資訊科學有著濃厚的好奇心；不只是試過 C++程式語言，還接觸了 3D 建模軟體和數位繪圖。我發現自己特別喜歡將抽象的概念具體化，這讓我確信資訊管理是我想深入研究的方向。

在校期間，我參與了許多實驗和專題研究。電阻實驗讓我學會如何收集數據並使用Excel進行分析，雖然實驗本身並不複雜，但這過程培養了我的耐心和細心，也是我首次體會到數據分析的魅力。此外，我也積極參與社團活動，擔任電腦社副社長，定期舉辦程式設計工作坊，幫助對程式設計感興趣的同學入門。

資訊領域的實作經驗是我最為重視的部分。大三下學期，我開始學習Python語言，並完成了一個數據分析專案。這是一個針對台灣股市過去十年數據的分析項目，使用pandas和matplotlib進行數據處理和視覺化。首先，我收集了大量的歷史交易數據，然後對數據進行清洗和標準化，去除異常值。接著，我使用各種統計方法分析不同產業的表現趨勢，並開發了一個簡單的線性回歸模型來預測特定股票的短期走勢。這個專案讓我不僅學會了Python編程，還掌握了基本的數據分析流程和技術，從數據收集、清洗到分析和視覺化表達。遇到的最大挑戰是如何處理缺失值，最終我通過研究相關技術文獻，決定採用均值填充法並配合異常值檢測來確保數據質量。

我的語言能力包括流利的中文、中等程度的英文和基礎的日文。英文能力主要體現在閱讀專業文獻和技術文檔方面，雖然口語表達仍有進步空間。邏輯分析能力主要通過程式設計和數學課程培養，尤其擅長結構化思考和問題拆解。

未來，我希望能夠深入學習資料科學和人工智能領域，並探索這些技術在商業決策和市場分析中的應用。同時，我也計劃培養跨領域合作能力，與不同背景的專業人士共同創新。我相信在政治大學資訊管理學系的學習環境中，能夠獲得更全面的專業訓練和實踐機會。`
    });
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [issues, setIssues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            code: '1. O5：',
            title: '[架構檢查]',
            desc: '在"個性和興趣"段落中，對於從藝術到科技興趣轉變的敘述稍顯分散，可以考慮重新組織此段內容，使轉變的原因與過程更具邏輯性。',
            type: 'structure'
        },
        {
            code: '2. P2：',
            title: '[偏題部分]',
            desc: '在校表現與挑戰"段落中提到的電阻實驗和Excel使用，與資訊管理的直接關聯性不明顯，建議刪減或用更相關的內容替代，以更突出與資訊管理的關聯性。',
            type: 'irrelevant'
        },
        {
            code: '3. O3：',
            title: '[精簡建議]',
            desc: '"資訊領域的經驗"段落中，Python專案的細節陳述較為冗長，建議精簡描述，專注於突出重點，例如專案的結果或學習到的關鍵能力。',
            type: 'conciseness'
        },
        {
            code: '4. O6：',
            title: '[完整度]',
            desc: '"語言與其他能力"段落中，關於邏輯分析能力的提及較少，建議加入相關經歷或數據分析案例，以強化該關鍵能力並更符合系所需求。',
            type: 'completeness'
        },
        {
            code: '5. P4：',
            title: '[增長建議]',
            desc: '"未來的規劃與目標"段落中，關於跨領域合作與創新思維的內容較為簡單，建議補充具體計畫或例子，以展現更深入的思考和實際應用的可能性。',
            type: 'improvement'
        },
        {
            code: '6. O1：',
            title: '[錯字與標點符號]',
            desc: '整段多數句子之間缺少明顯的標點符號，尤其是在段與段之間的轉換，應檢查全文標點符號的使用，以提升可讀性與語法正確性。',
            type: 'grammar'
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InitAnalysis.useEffect": ()=>{
            // 從 localStorage 獲取分析信息
            const analysisData = localStorage.getItem('currentAnalysis');
            if (analysisData) {
                try {
                    const { fileName } = JSON.parse(analysisData);
                    setDocumentData({
                        "InitAnalysis.useEffect": (prev)=>({
                                ...prev,
                                fileName
                            })
                    }["InitAnalysis.useEffect"]);
                } catch (e) {
                    console.error('Failed to parse analysis data', e);
                }
            }
        }
    }["InitAnalysis.useEffect"], []);
    const handleDocumentChange = (newContent)=>{
        setDocumentData((prev)=>({
                ...prev,
                content: newContent
            }));
    };
    const handleUserInputChange = (e)=>{
        setUserInput(e.target.value);
    };
    const handleNextStep = ()=>{
        // 保存用戶的編輯和回饋
        localStorage.setItem('documentEdits', documentData.content);
        localStorage.setItem('userFeedback', userInput);
        // 導航到下一頁
        router.push('/guidance');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "page-title",
                    children: "　　初步閱讀與診斷"
                }, void 0, false, {
                    fileName: "[project]/src/app/initAnalysis/page.js",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/initAnalysis/page.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "diagnosis-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$initAnalysis$2f$components$2f$DiagnosisLeft$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        documentData: documentData,
                        issues: issues,
                        userInput: userInput,
                        onUserInputChange: handleUserInputChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/initAnalysis/page.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$initAnalysis$2f$components$2f$DiagnosisRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        content: documentData.content,
                        onChange: handleContentChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/initAnalysis/page.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/initAnalysis/page.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "next-button",
                onClick: handleNextStep,
                children: [
                    "提問引導與釐清",
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
                                fileName: "[project]/src/app/initAnalysis/page.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 5l7 7-7 7",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/app/initAnalysis/page.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/initAnalysis/page.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/initAnalysis/page.js",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/initAnalysis/page.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(InitAnalysis, "t3TipqkPQ3ygJ/vXTN29U7ooYfM=");
_c = InitAnalysis;
var _c;
__turbopack_context__.k.register(_c, "InitAnalysis");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_initAnalysis_30b6cece._.js.map