(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/floating-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingNav",
    ()=>FloatingNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FloatingNav() {
    const scrollToSection = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // This creates the smooth gliding animation
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 px-6 py-3 bg-[#2d2d2d]/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl text-white/80 text-sm font-medium",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#work",
                    onClick: (e)=>scrollToSection(e, 'work'),
                    className: "hover:text-cyan-400 transition-colors",
                    children: "Work"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/20",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#projects",
                    onClick: (e)=>scrollToSection(e, 'projects'),
                    className: "hover:text-violet-400 transition-colors",
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/20",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#opensource",
                    onClick: (e)=>scrollToSection(e, 'opensource'),
                    className: "hover:text-fuchsia-400 transition-colors",
                    children: "Open Source"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/20",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    onClick: (e)=>scrollToSection(e, 'contact'),
                    className: "hover:text-amber-400 transition-colors",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/floating-nav.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/floating-nav.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/floating-nav.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = FloatingNav;
var _c;
__turbopack_context__.k.register(_c, "FloatingNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/github-graph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GithubGraph",
    ()=>GithubGraph,
    "buildContributionWeeks",
    ()=>buildContributionWeeks,
    "normalizeGithubAccount",
    ()=>normalizeGithubAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CONTRIBUTIONS_ENDPOINT = "https://github-contributions-api.jogruber.de/v4";
const VARIANTS = {
    github: [
        "#ebedf0",
        "#9be9a8",
        "#40c463",
        "#30a14e",
        "#216e39"
    ],
    graphite: [
        "#eeeeee",
        "#cccccc",
        "#969696",
        "#5f5f5f",
        "#171717"
    ],
    ocean: [
        "#e6f5ff",
        "#b4e2ff",
        "#62bdf5",
        "#2585d8",
        "#124e93"
    ],
    violet: [
        "#f2eaff",
        "#dcc5ff",
        "#b486ff",
        "#8355df",
        "#52269c"
    ]
};
function dateFromISO(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const date = new Date(`${value}T00:00:00.000Z`);
    return Number.isNaN(date.getTime()) ? null : date;
}
function isoDate(date) {
    return date.toISOString().slice(0, 10);
}
function addDays(date, days) {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
}
function fallbackLevel(count, maxCount) {
    if (!Number.isFinite(count) || count <= 0 || maxCount <= 0) return 0;
    return Math.min(4, Math.max(1, Math.ceil(count / maxCount * 4)));
}
function normalizeGithubAccount(account) {
    const normalized = account.trim().replace(/^@+/, "");
    return /^(?!-)[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(normalized) ? normalized : null;
}
function buildContributionWeeks(contributions) {
    const valid = contributions.map((item)=>({
            ...item,
            parsedDate: dateFromISO(item.date)
        })).filter((item)=>item.parsedDate !== null && Number.isFinite(item.count)).sort((a, b)=>a.date.localeCompare(b.date));
    if (valid.length === 0) return [];
    const maxCount = Math.max(0, ...valid.map((item)=>item.count));
    const byDate = new Map(valid.map((item)=>[
            item.date,
            item
        ]));
    const firstDate = valid[0].parsedDate;
    const lastDate = valid[valid.length - 1].parsedDate;
    const startDate = addDays(firstDate, -firstDate.getUTCDay());
    const endDate = addDays(lastDate, 6 - lastDate.getUTCDay());
    const cells = [];
    for(let date = startDate; date <= endDate; date = addDays(date, 1)){
        const key = isoDate(date);
        const contribution = byDate.get(key);
        const count = Math.max(0, contribution?.count ?? 0);
        const explicitLevel = contribution?.level;
        const level = Number.isInteger(explicitLevel) && explicitLevel >= 0 && explicitLevel <= 4 ? count === 0 ? 0 : explicitLevel : fallbackLevel(count, maxCount);
        cells.push({
            date: key,
            count,
            level
        });
    }
    return Array.from({
        length: Math.ceil(cells.length / 7)
    }, (_, index)=>cells.slice(index * 7, index * 7 + 7));
}
function selectRecentContributions(contributions, months) {
    const parsed = contributions.map((contribution)=>({
            contribution,
            date: dateFromISO(contribution.date)
        })).filter((item)=>item.date !== null);
    const latest = parsed.reduce((current, item)=>!current || item.date > current ? item.date : current, null);
    if (!latest) return [];
    const start = new Date(latest);
    start.setUTCMonth(start.getUTCMonth() - Math.max(1, Math.min(12, Math.round(months))));
    return parsed.filter((item)=>item.date >= start).map((item)=>item.contribution);
}
function formatContributionLabel(contribution) {
    const date = new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric"
    }).format(dateFromISO(contribution.date) ?? new Date());
    const label = contribution.count === 1 ? "contribution" : "contributions";
    return `${contribution.count} ${label} · ${date}`;
}
function getCellDelay(animation, weekIndex, dayIndex, speed) {
    if (animation === "none") return 0;
    const step = animation === "wave" ? weekIndex * 0.026 + dayIndex * 0.016 : animation === "scan" ? weekIndex * 0.03 : (weekIndex + dayIndex * 2) * 0.018;
    return step / Math.max(speed, 0.1);
}
function getAmbientCellMotion(effect, intensity, weekIndex, dayIndex, entranceDelay, reducedMotion) {
    if (reducedMotion || effect === "none") {
        return {
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                opacity: {
                    duration: 0.14,
                    delay: entranceDelay
                },
                scale: {
                    type: "spring",
                    stiffness: 900,
                    damping: 32
                }
            }
        };
    }
    const strength = Math.min(1, Math.max(0, intensity));
    const seed = (weekIndex * 17 + dayIndex * 31) % 11 / 10;
    const isTide = effect === "tide";
    const isDrift = effect === "drift";
    const duration = isTide ? 3.2 : isDrift ? 3.8 + seed : 2 + seed * 1.4;
    const delay = entranceDelay + (isTide ? (weekIndex + dayIndex * 1.8) * 0.055 : seed * 0.85);
    const lowOpacity = 1 - (isTide ? 0.24 : isDrift ? 0.16 : 0.34) * strength;
    const smallScale = 1 - (isTide ? 0.07 : isDrift ? 0.04 : 0.08) * strength;
    return {
        animate: {
            opacity: isDrift ? [
                1,
                lowOpacity,
                1 - 0.06 * strength,
                1
            ] : [
                1,
                lowOpacity,
                1
            ],
            scale: isDrift ? [
                1,
                smallScale,
                1 + 0.025 * strength,
                1
            ] : [
                1,
                smallScale,
                1
            ]
        },
        transition: {
            opacity: {
                duration,
                delay,
                ease: "easeInOut",
                repeat: Infinity
            },
            scale: {
                duration,
                delay,
                ease: "easeInOut",
                repeat: Infinity
            }
        }
    };
}
function LoadingGraph({ cellSize, cellGap, cellRadius, months, autoFit, autoFitColumns }) {
    const weekCount = Math.ceil((Math.max(1, months ?? 3) * 31 + 6) / 7);
    if (autoFit) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full",
                style: {
                    gridTemplateColumns: `repeat(${autoFitColumns}, ${cellSize}px)`,
                    gap: cellGap,
                    justifyContent: "space-between"
                },
                "aria-label": "Loading contributions",
                children: Array.from({
                    length: weekCount * 7
                }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse bg-muted",
                        style: {
                            width: cellSize,
                            height: cellSize,
                            borderRadius: cellRadius,
                            animationDelay: `${index * 12}ms`
                        }
                    }, index, false, {
                        fileName: "[project]/src/components/ui/github-graph.tsx",
                        lineNumber: 278,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/github-graph.tsx",
            lineNumber: 267,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-max",
            style: {
                gap: cellGap
            },
            "aria-label": "Loading contributions",
            children: Array.from({
                length: weekCount
            }, (_, week)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-rows-7",
                    style: {
                        gap: cellGap
                    },
                    children: Array.from({
                        length: 7
                    }, (_, day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-pulse bg-muted",
                            style: {
                                width: cellSize,
                                height: cellSize,
                                borderRadius: cellRadius,
                                animationDelay: `${(week + day) * 12}ms`
                            }
                        }, day, false, {
                            fileName: "[project]/src/components/ui/github-graph.tsx",
                            lineNumber: 304,
                            columnNumber: 15
                        }, this))
                }, week, false, {
                    fileName: "[project]/src/components/ui/github-graph.tsx",
                    lineNumber: 302,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/github-graph.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/github-graph.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_c = LoadingGraph;
function GithubGraph({ account = "shadcn", months = 6, variant = "github", animation = "wave", animationSpeed = 1, cellSize = 18, cellGap = 4, cellRadius = 3, autoFit = false, showLegend = false, showAccount = true, ambientEffect = "twinkle", ambientIntensity = 0.65, data, className }) {
    _s();
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const normalizedAccount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GithubGraph.useMemo[normalizedAccount]": ()=>normalizeGithubAccount(account)
    }["GithubGraph.useMemo[normalizedAccount]"], [
        account
    ]);
    const [resource, setResource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "GithubGraph.useState": ()=>{
            if (data) return {
                status: "ready",
                contributions: data
            };
            if (!normalizedAccount) return {
                status: "error",
                message: "Enter a valid GitHub username."
            };
            return {
                status: "loading"
            };
        }
    }["GithubGraph.useState"]);
    const [availableWidth, setAvailableWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [hoveredContribution, setHoveredContribution] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const colors = VARIANTS[variant];
    const resolvedCellRadius = Math.max(0, Math.min(cellRadius, Math.max(0, cellSize) / 2));
    const autoFitColumns = Math.max(1, Math.floor((availableWidth + Math.max(0, cellGap)) / Math.max(1, cellSize + cellGap)));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "GithubGraph.useLayoutEffect": ()=>{
            if (!autoFit || !rootRef.current) return;
            const root = rootRef.current;
            const updateWidth = {
                "GithubGraph.useLayoutEffect.updateWidth": ()=>setAvailableWidth(root.clientWidth)
            }["GithubGraph.useLayoutEffect.updateWidth"];
            updateWidth();
            const observer = new ResizeObserver(updateWidth);
            observer.observe(root);
            return ({
                "GithubGraph.useLayoutEffect": ()=>observer.disconnect()
            })["GithubGraph.useLayoutEffect"];
        }
    }["GithubGraph.useLayoutEffect"], [
        autoFit
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GithubGraph.useEffect": ()=>{
            if (data) return;
            if (!normalizedAccount) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setResource({
                    status: "error",
                    message: "Enter a valid GitHub username."
                });
                return;
            }
            const controller = new AbortController();
            setResource({
                status: "loading"
            });
            fetch(`${CONTRIBUTIONS_ENDPOINT}/${normalizedAccount}?y=last`, {
                signal: controller.signal
            }).then({
                "GithubGraph.useEffect": async (response)=>{
                    if (!response.ok) throw new Error("GitHub account not found.");
                    const payload = await response.json();
                    if (!Array.isArray(payload.contributions)) {
                        throw new Error("No public contributions were returned.");
                    }
                    return payload.contributions;
                }
            }["GithubGraph.useEffect"]).then({
                "GithubGraph.useEffect": (contributions)=>{
                    if (!controller.signal.aborted) {
                        setResource({
                            status: "ready",
                            contributions
                        });
                    }
                }
            }["GithubGraph.useEffect"]).catch({
                "GithubGraph.useEffect": (error)=>{
                    if (controller.signal.aborted) return;
                    setResource({
                        status: "error",
                        message: error instanceof Error ? error.message : "Could not load contributions."
                    });
                }
            }["GithubGraph.useEffect"]);
            return ({
                "GithubGraph.useEffect": ()=>controller.abort()
            })["GithubGraph.useEffect"];
        }
    }["GithubGraph.useEffect"], [
        data,
        normalizedAccount
    ]);
    const weeks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GithubGraph.useMemo[weeks]": ()=>{
            if (resource.status !== "ready") return [];
            return buildContributionWeeks(selectRecentContributions(resource.contributions, months));
        }
    }["GithubGraph.useMemo[weeks]"], [
        months,
        resource
    ]);
    const animationKey = `${normalizedAccount ?? account}-${months}-${variant}-${animation}-${cellSize}-${cellGap}-${autoFit}`;
    const showTooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GithubGraph.useCallback[showTooltip]": (element, contribution, weekIndex, dayIndex, pointer)=>{
            const cellRect = element.getBoundingClientRect();
            const placement = cellRect.top > 56 ? "above" : "below";
            const left = Math.min(Math.max(cellRect.left + cellRect.width / 2, 96), window.innerWidth - 96);
            setHoveredContribution({
                contribution,
                left,
                top: placement === "above" ? cellRect.top - 9 : cellRect.bottom + 9,
                originLeft: pointer?.clientX ?? left,
                originTop: pointer?.clientY ?? cellRect.top + cellRect.height / 2,
                placement,
                weekIndex,
                dayIndex
            });
        }
    }["GithubGraph.useCallback[showTooltip]"], []);
    const renderContribution = (contribution, columnIndex, rowIndex)=>{
        const label = formatContributionLabel(contribution);
        const entranceDelay = reducedMotion ? 0 : getCellDelay(animation, columnIndex, rowIndex, animationSpeed);
        const ambientMotion = getAmbientCellMotion(ambientEffect, ambientIntensity, columnIndex, rowIndex, entranceDelay, reducedMotion);
        const distance = hoveredContribution ? Math.hypot(columnIndex - hoveredContribution.weekIndex, rowIndex - hoveredContribution.dayIndex) : Infinity;
        const waveStrength = Math.max(0, 1 - distance / 3);
        const filter = `brightness(${1 + waveStrength * 0.45}) saturate(${1 + waveStrength * 0.2})`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
            type: "button",
            role: "gridcell",
            "aria-label": label,
            className: "relative outline-none ring-offset-2 ring-offset-background transition-shadow focus-visible:ring-2 focus-visible:ring-foreground/60",
            style: {
                width: cellSize,
                height: cellSize,
                borderRadius: resolvedCellRadius
            },
            initial: reducedMotion || animation === "none" ? false : {
                opacity: 0,
                scale: 0.35,
                y: 4
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0,
                filter
            },
            transition: {
                opacity: {
                    duration: 0.14,
                    delay: entranceDelay
                },
                y: {
                    type: "spring",
                    stiffness: 520,
                    damping: 28,
                    delay: entranceDelay
                },
                scale: {
                    type: "spring",
                    stiffness: 900,
                    damping: 32
                },
                filter: {
                    duration: 0.08,
                    ease: "easeOut"
                }
            },
            onMouseEnter: (event)=>showTooltip(event.currentTarget, contribution, columnIndex, rowIndex, event),
            onFocus: (event)=>showTooltip(event.currentTarget, contribution, columnIndex, rowIndex),
            onBlur: ()=>setHoveredContribution(null),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0",
                style: {
                    backgroundColor: colors[contribution.level],
                    borderRadius: resolvedCellRadius
                },
                animate: ambientMotion.animate,
                transition: ambientMotion.transition
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 537,
                columnNumber: 9
            }, this)
        }, `${animationKey}-${contribution.date}`, false, {
            fileName: "[project]/src/components/ui/github-graph.tsx",
            lineNumber: 495,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(autoFit ? "w-full" : "w-fit max-w-full", className),
        "aria-busy": resource.status === "loading",
        children: [
            showAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-5 text-lg font-medium tracking-tight text-foreground",
                children: [
                    "@",
                    normalizedAccount ?? account
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 558,
                columnNumber: 9
            }, this),
            resource.status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingGraph, {
                cellSize: cellSize,
                cellGap: cellGap,
                cellRadius: resolvedCellRadius,
                months: months,
                autoFit: autoFit,
                autoFitColumns: autoFitColumns
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 564,
                columnNumber: 9
            }, this),
            resource.status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: resource.message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 575,
                columnNumber: 9
            }, this),
            resource.status === "ready" && weeks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", autoFit ? "w-full overflow-hidden" : "overflow-x-auto"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", autoFit ? "grid w-full" : "flex min-w-max"),
                    style: autoFit ? {
                        gridTemplateColumns: `repeat(${autoFitColumns}, ${cellSize}px)`,
                        gap: cellGap,
                        justifyContent: "space-between"
                    } : {
                        gap: cellGap
                    },
                    role: "grid",
                    "aria-label": `GitHub contributions for ${normalizedAccount ?? account}`,
                    onMouseLeave: ()=>setHoveredContribution(null),
                    children: [
                        autoFit ? weeks.flat().map((contribution, index)=>renderContribution(contribution, index % autoFitColumns, Math.floor(index / autoFitColumns))) : weeks.map((week, weekIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-rows-7",
                                style: {
                                    gap: cellGap
                                },
                                role: "row",
                                children: week.map((contribution, dayIndex)=>renderContribution(contribution, weekIndex, dayIndex))
                            }, `${animationKey}-${weekIndex}`, false, {
                                fileName: "[project]/src/components/ui/github-graph.tsx",
                                lineNumber: 614,
                                columnNumber: 19
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: hoveredContribution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                role: "tooltip",
                                className: "pointer-events-none fixed z-50 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background ring-1 ring-foreground/15",
                                initial: {
                                    opacity: 0,
                                    scale: 0.92,
                                    left: hoveredContribution.originLeft,
                                    top: hoveredContribution.originTop,
                                    x: "-50%",
                                    y: hoveredContribution.placement === "above" ? "-100%" : "0%"
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    left: hoveredContribution.left,
                                    top: hoveredContribution.top,
                                    x: "-50%",
                                    y: hoveredContribution.placement === "above" ? "-100%" : "0%"
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.92
                                },
                                transition: {
                                    opacity: {
                                        duration: 0.12
                                    },
                                    scale: {
                                        duration: 0.12
                                    },
                                    left: {
                                        type: "spring",
                                        stiffness: 620,
                                        damping: 42
                                    },
                                    top: {
                                        type: "spring",
                                        stiffness: 620,
                                        damping: 42
                                    },
                                    y: {
                                        duration: 0.12
                                    }
                                },
                                children: formatContributionLabel(hoveredContribution.contribution)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/github-graph.tsx",
                                lineNumber: 627,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/github-graph.tsx",
                            lineNumber: 625,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/github-graph.tsx",
                    lineNumber: 585,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 579,
                columnNumber: 9
            }, this),
            showLegend && resource.status === "ready" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-1.5",
                "aria-label": "Contribution activity legend",
                children: colors.map((color, level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: cellSize,
                            height: cellSize,
                            backgroundColor: color,
                            borderRadius: resolvedCellRadius
                        },
                        "aria-label": `Level ${level}`
                    }, color, false, {
                        fileName: "[project]/src/components/ui/github-graph.tsx",
                        lineNumber: 675,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-graph.tsx",
                lineNumber: 670,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/github-graph.tsx",
        lineNumber: 552,
        columnNumber: 5
    }, this);
}
_s(GithubGraph, "JRWiEBPpZ/nOU6cbiaaNh2Yp+xc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = GithubGraph;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingGraph");
__turbopack_context__.k.register(_c1, "GithubGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/github-projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GithubProjects",
    ()=>GithubProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
const Github = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-projects.tsx",
                lineNumber: 6,
                columnNumber: 192
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 18c-4.51 2-5-2-7-2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/github-projects.tsx",
                lineNumber: 6,
                columnNumber: 452
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/github-projects.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Github;
const selectedProjects = [
    {
        id: "dev-assist",
        title: "Dev Assist AI",
        description: "An AI-powered developer assistant built during the NIAT hackathon to streamline building and shipping code.",
        url: "https://github.com/shreyaskaraiya321/NIAT-hackathon-build-to-ship",
        tags: [
            "AI",
            "Hackathon",
            "Developer Tools"
        ],
        color: {
            bg: "bg-cyan-400/10",
            text: "text-cyan-600",
            hover: "group-hover:text-cyan-600"
        },
        badge: {
            text: "Repository",
            classes: "bg-blue-500/10 text-blue-600 border-blue-500/20"
        }
    },
    {
        id: "flash-card",
        title: "Flash Card AI",
        description: "A Next.js and TypeScript application integrating the Gemini API to stream auto-generated flashcards from uploaded PDFs in real-time.",
        url: "https://github.com/shreyaskaraiya321/Flash-Card-AI",
        tags: [
            "Next.js",
            "TypeScript",
            "Gemini API"
        ],
        color: {
            bg: "bg-violet-500/10",
            text: "text-violet-600",
            hover: "group-hover:text-violet-600"
        },
        badge: {
            text: "Live Demo",
            classes: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
        }
    },
    {
        id: "study-assistant",
        title: "AI Study Assistant",
        description: "A comprehensive AI-driven study companion designed to summarize notes, generate quizzes, and assist with complex topics.",
        url: "https://github.com/shreyaskaraiya321/Ai_study_assistant",
        tags: [
            "AI",
            "Python",
            "LLMs"
        ],
        color: {
            bg: "bg-fuchsia-500/10",
            text: "text-fuchsia-600",
            hover: "group-hover:text-fuchsia-600"
        },
        badge: {
            text: "Repository",
            classes: "bg-blue-500/10 text-blue-600 border-blue-500/20"
        }
    },
    {
        id: "logistics",
        title: "AI Logistics Route Planner",
        description: "Built an AI-powered logistics routing engine using Python, MongoDB Atlas, and Supabase. Deployed on Vercel with Google Cloud API integration to optimize delivery paths.",
        url: "https://github.com/shreyaskaraiya321/AI-Powered-Logistics-Route-Planner",
        tags: [
            "Python",
            "MongoDB",
            "Supabase",
            "Vercel",
            "Google Cloud API"
        ],
        color: {
            bg: "bg-amber-500/10",
            text: "text-amber-600",
            hover: "group-hover:text-amber-600"
        },
        badge: {
            text: "Live Demo",
            classes: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
        }
    }
];
function GithubProjects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: selectedProjects.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-10 w-10 rounded-full ${repo.color.bg} flex items-center justify-center ${repo.color.text}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/github-projects.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/github-projects.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 text-black/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: repo.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-black transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/github-projects.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/github-projects.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: repo.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-black transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/github-projects.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/github-projects.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/github-projects.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/github-projects.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-bold text-[#101010] text-lg ${repo.color.hover} transition-colors`,
                                children: repo.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/github-projects.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${repo.badge.classes}`,
                                children: repo.badge.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/github-projects.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/github-projects.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#101010]/70 text-sm leading-relaxed mb-6 flex-grow",
                        children: repo.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/github-projects.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-auto",
                        children: repo.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 bg-[#f4f4f4] text-[#101010]/80 text-xs font-mono rounded-md",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/src/components/ui/github-projects.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/github-projects.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, repo.id, true, {
                fileName: "[project]/src/components/ui/github-projects.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/github-projects.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = GithubProjects;
var _c, _c1;
__turbopack_context__.k.register(_c, "Github");
__turbopack_context__.k.register(_c1, "GithubProjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/glyph-ring.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlyphRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
// Glyph Ring — Originkit
"use client";
;
;
const CURSOR_FOLLOW = 8.5;
const GLYPH_ART = [
    [
        "....",
        "....",
        ".##.",
        "#..#",
        ".##.",
        "...."
    ],
    [
        "....",
        ".#..",
        "###.",
        ".#..",
        "....",
        "...."
    ],
    [
        "....",
        "#..#",
        ".##.",
        ".##.",
        "#..#",
        "...."
    ],
    [
        "....",
        "####",
        "....",
        "####",
        "....",
        "...."
    ],
    [
        ".##.",
        "#..#",
        "#..#",
        "#..#",
        "#..#",
        ".##."
    ],
    [
        "....",
        "#.#.",
        ".##.",
        ".##.",
        "#.#.",
        "...."
    ],
    [
        "....",
        "..##",
        ".##.",
        "##..",
        "....",
        "...."
    ],
    [
        "....",
        "##..",
        ".##.",
        "..##",
        "....",
        "...."
    ],
    [
        ".#.#",
        "####",
        ".#.#",
        "####",
        ".#.#",
        "...."
    ],
    [
        "....",
        ".##.",
        "#..#",
        "####",
        "#..#",
        "...."
    ],
    [
        "###.",
        "#..#",
        "###.",
        "#..#",
        "###.",
        "...."
    ],
    [
        "..#.",
        ".##.",
        "###.",
        ".##.",
        "..#.",
        "...."
    ]
];
const GLYPHS = GLYPH_ART.map(_c = (rows)=>rows.reduce((bits, row, y)=>bits + Array.from(row).reduce((acc, ch, x)=>acc + (ch === "#" ? Math.pow(2, x + 4 * y) : 0), 0), 0));
_c1 = GLYPHS;
const DEFAULTS = {
    ink: "#FFFFFF",
    lit: "#FFB800",
    rings: 18,
    charSize: 3,
    gap: 6,
    spin: 8,
    beam: 11,
    band: 20,
    churn: 20,
    scale: 200
};
function clamp(v, lo, hi, fallback) {
    const n = typeof v === "number" && isFinite(v) ? v : fallback;
    return Math.max(lo, Math.min(hi, n));
}
function settingsFor(cfg) {
    const scale = clamp(cfg.scale, 20, 200, DEFAULTS.scale) / 100;
    return {
        rings: clamp(cfg.rings, 1, 20, DEFAULTS.rings),
        charH: scale * clamp(cfg.charSize, 1, 20, DEFAULTS.charSize) * 0.008,
        gapH: scale * clamp(cfg.gap, 0, 20, DEFAULTS.gap) * 0.006,
        spin: clamp(cfg.spin, 0, 20, DEFAULTS.spin) * 0.018,
        beam: clamp(cfg.beam, 0, 20, DEFAULTS.beam) * 0.025,
        band: clamp(cfg.band, 0, 20, DEFAULTS.band) * 0.16,
        churn: clamp(cfg.churn, 0, 20, DEFAULTS.churn) * 0.55
    };
}
const QUAD_VERTEX = `
    varying vec2 vUv;
    void main() {
        vUv = uv;

        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`;
const RING_FRAGMENT = `
    precision highp float;

    #define GLYPH_COUNT ${GLYPHS.length}
    #define TAU 6.28318530718

    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform float uHold;
    uniform float uTime;
    uniform float uChurnTime;
    uniform vec3 uInk;
    uniform vec3 uLit;
    uniform float uRings;
    uniform float uCharH;
    uniform float uGapH;
    uniform float uBeam;
    uniform float uBand;
    uniform float uGlyphs[GLYPH_COUNT];

    varying vec2 vUv;

    float hash1(float n) {
        return fract(sin(n * 127.1 + 0.371) * 43758.5453123);
    }

    float hash2(vec2 v) {
        return fract(sin(dot(v, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float glyphAt(int idx, vec2 g) {
        float bits = 0.0;

        for (int i = 0; i < GLYPH_COUNT; i++) {
            if (i == idx) bits = uGlyphs[i];
        }
        float x = min(floor(g.x * 4.0), 3.0);
        float y = min(floor((1.0 - g.y) * 6.0), 5.0);
        return mod(floor(bits / exp2(x + 4.0 * y)), 2.0);
    }

    void main() {
        vec2 centre = uResolution * 0.5;
        vec2 c = vUv * uResolution - centre;
        float radius = length(c);

        float unit = min(uResolution.x, uResolution.y) * 0.5;

        float pitch = unit * (uCharH + uGapH);

        float fill = uCharH / (uCharH + uGapH);

        float ring = floor(radius / pitch);

        if (ring < 1.0 || ring > uRings) discard;

        float slots = max(6.0, floor(TAU * (ring + 0.5)));

        float seed = hash1(ring);

        float heading = mod(ring, 2.0) < 0.5 ? 1.0 : -1.0;
        float turn = uTime * (0.5 + seed * 1.1) * heading + seed;

        float around = fract(atan(c.y, c.x) / TAU + 0.5 + turn);
        float slot = floor(around * slots);

        float lo = (1.0 - fill) * 0.5;
        vec2 g = (vec2(fract(around * slots), fract(radius / pitch)) - lo) / fill;
        if (g.x < 0.0 || g.x > 1.0 || g.y < 0.0 || g.y > 1.0) discard;

        float churn = floor(uChurnTime + seed * 17.0);
        float pick = hash2(vec2(ring, slot) + churn * 5.13);
        int idx = int(min(floor(pick * float(GLYPH_COUNT)), float(GLYPH_COUNT - 1)));
        if (glyphAt(idx, g) < 0.5) discard;

        vec2 pc = uPointer - centre;

        float toBeam = abs(fract((atan(c.y, c.x) - atan(pc.y, pc.x)) / TAU + 0.5) - 0.5);

        float beam = uBeam > 0.0 ? 1.0 - smoothstep(0.0, uBeam, toBeam) : 0.0;
        float onRing = uBand > 0.0
            ? 1.0 - smoothstep(0.0, uBand, abs(radius - length(pc)) / pitch)
            : 0.0;
        float near = clamp(max(beam, onRing), 0.0, 1.0) * uHold;

        vec3 col = mix(uInk, uLit, near);
        float a = 0.4 + 0.6 * near;

        gl_FragColor = vec4(col * a, a);
    }
`;
class RingScene {
    container;
    cfg;
    renderer;
    scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"]();
    geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
    material;
    mesh;
    target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1e4, -1e4);
    eased = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1e4, -1e4);
    hold = 0;
    wantHold = 0;
    time = 0;
    churnTime = 0;
    width = 1;
    height = 1;
    frameId = 0;
    lastT = 0;
    disposed = false;
    constructor(container, cfg){
        this.container = container;
        this.cfg = cfg;
        const S = settingsFor(cfg);
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: false,
            alpha: true
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        this.renderer.setClearColor(0x000000, 0);
        const el = this.renderer.domElement;
        el.style.position = "absolute";
        el.style.inset = "0";
        el.style.width = "100%";
        el.style.height = "100%";
        el.style.touchAction = "none";
        container.appendChild(el);
        this.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            vertexShader: QUAD_VERTEX,
            fragmentShader: RING_FRAGMENT,
            uniforms: {
                uResolution: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                },
                uPointer: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1e4, -1e4)
                },
                uHold: {
                    value: 0
                },
                uTime: {
                    value: 0
                },
                uChurnTime: {
                    value: 0
                },
                uInk: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](cfg.ink)
                },
                uLit: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](cfg.lit)
                },
                uRings: {
                    value: S.rings
                },
                uCharH: {
                    value: S.charH
                },
                uGapH: {
                    value: S.gapH
                },
                uBeam: {
                    value: S.beam
                },
                uBand: {
                    value: S.band
                },
                uGlyphs: {
                    value: GLYPHS
                }
            },
            transparent: true,
            depthTest: false,
            depthWrite: false
        });
        this.mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](this.geometry, this.material);
        this.mesh.frustumCulled = false;
        this.scene.add(this.mesh);
        el.addEventListener("pointermove", this.onPointerMove);
        el.addEventListener("pointerdown", this.onPointerMove);
        el.addEventListener("pointerleave", this.onPointerLeave);
        el.addEventListener("pointercancel", this.onPointerLeave);
    }
    onPointerMove = (e)=>{
        const rect = this.renderer.domElement.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const x = (e.clientX - rect.left) / rect.width * this.width;
        const y = (1 - (e.clientY - rect.top) / rect.height) * this.height;
        this.target.set(x, y);
        if (this.wantHold === 0) this.eased.copy(this.target);
        this.wantHold = 1;
    };
    onPointerLeave = ()=>{
        this.wantHold = 0;
    };
    start() {
        this.lastT = performance.now();
        const loop = ()=>{
            this.frameId = requestAnimationFrame(loop);
            this.step();
        };
        loop();
    }
    setSize(width, height) {
        if (this.disposed || width <= 0 || height <= 0) return;
        this.renderer.setSize(width, height, false);
        const dpr = this.renderer.getPixelRatio();
        this.width = width * dpr;
        this.height = height * dpr;
        this.material.uniforms.uResolution.value.set(this.width, this.height);
    }
    updateConfig(cfg) {
        if (this.disposed) return;
        this.cfg = cfg;
        const u = this.material.uniforms;
        u.uInk.value.set(cfg.ink || DEFAULTS.ink);
        u.uLit.value.set(cfg.lit || DEFAULTS.lit);
    }
    step() {
        if (this.disposed) return;
        const now = performance.now();
        let dt = (now - this.lastT) / 1000;
        this.lastT = now;
        if (!isFinite(dt) || dt < 0) dt = 0;
        if (dt > 0.05) dt = 0.05;
        const S = settingsFor(this.cfg);
        this.time += dt * S.spin;
        this.churnTime += dt * S.churn;
        this.eased.lerp(this.target, 1 - Math.exp(-dt * CURSOR_FOLLOW));
        this.hold += (this.wantHold - this.hold) * (1 - Math.exp(-dt * 5));
        const u = this.material.uniforms;
        u.uTime.value = this.time;
        u.uChurnTime.value = this.churnTime;
        u.uPointer.value.copy(this.eased);
        u.uHold.value = this.hold;
        u.uRings.value = S.rings;
        u.uCharH.value = S.charH;
        u.uGapH.value = S.gapH;
        u.uBeam.value = S.beam;
        u.uBand.value = S.band;
        this.renderer.render(this.scene, this.camera);
    }
    dispose() {
        this.disposed = true;
        cancelAnimationFrame(this.frameId);
        const el = this.renderer.domElement;
        el.removeEventListener("pointermove", this.onPointerMove);
        el.removeEventListener("pointerdown", this.onPointerMove);
        el.removeEventListener("pointerleave", this.onPointerLeave);
        el.removeEventListener("pointercancel", this.onPointerLeave);
        this.geometry.dispose();
        this.material.dispose();
        this.renderer.dispose();
        if (el.parentNode === this.container) this.container.removeChild(el);
    }
}
function OriginkitBase_GlyphRing(props) {
    _s();
    const { ink = DEFAULTS.ink, lit = DEFAULTS.lit, rings = DEFAULTS.rings, charSize = DEFAULTS.charSize, gap = DEFAULTS.gap, spin = DEFAULTS.spin, beam = DEFAULTS.beam, band = DEFAULTS.band, churn = DEFAULTS.churn, scale = DEFAULTS.scale, style } = props;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cfgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        ink,
        lit,
        rings,
        charSize,
        gap,
        spin,
        beam,
        band,
        churn,
        scale
    });
    cfgRef.current = {
        ink,
        lit,
        rings,
        charSize,
        gap,
        spin,
        beam,
        band,
        churn,
        scale
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OriginkitBase_GlyphRing.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            let scene;
            try {
                scene = new RingScene(container, cfgRef.current);
            } catch  {
                return;
            }
            sceneRef.current = scene;
            scene.setSize(container.clientWidth, container.clientHeight);
            scene.start();
            const ro = new ResizeObserver({
                "OriginkitBase_GlyphRing.useEffect": ()=>{
                    scene.setSize(container.clientWidth, container.clientHeight);
                }
            }["OriginkitBase_GlyphRing.useEffect"]);
            ro.observe(container);
            return ({
                "OriginkitBase_GlyphRing.useEffect": ()=>{
                    ro.disconnect();
                    scene.dispose();
                    sceneRef.current = null;
                }
            })["OriginkitBase_GlyphRing.useEffect"];
        }
    }["OriginkitBase_GlyphRing.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OriginkitBase_GlyphRing.useEffect": ()=>{
            sceneRef.current?.updateConfig(cfgRef.current);
        }
    }["OriginkitBase_GlyphRing.useEffect"], [
        ink,
        lit,
        rings,
        charSize,
        gap,
        spin,
        beam,
        band,
        churn,
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        role: "img",
        "aria-label": "Concentric rings of characters turning under a pointer-led beam",
        style: {
            position: "relative",
            width: "100%",
            height: "100%",
            minWidth: 120,
            minHeight: 120,
            overflow: "hidden",
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/glyph-ring.tsx",
        lineNumber: 443,
        columnNumber: 9
    }, this);
}
_s(OriginkitBase_GlyphRing, "vX2TvAKEoy7vqJ8NRKv1JnJrm98=");
_c2 = OriginkitBase_GlyphRing;
GlyphRing.displayName = "Glyph Ring";
const __originkitPresetProps = {
    "ink": "#FFFFFF",
    "lit": "#FFB800",
    "rings": 18,
    "charSize": 3,
    "gap": 6,
    "spin": 8,
    "beam": 11,
    "band": 20,
    "churn": 20,
    "scale": 200
};
function GlyphRing(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OriginkitBase_GlyphRing, {
        ...__originkitPresetProps,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/glyph-ring.tsx",
        lineNumber: 476,
        columnNumber: 10
    }, this);
}
_c3 = GlyphRing;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GLYPHS$GLYPH_ART.map");
__turbopack_context__.k.register(_c1, "GLYPHS");
__turbopack_context__.k.register(_c2, "OriginkitBase_GlyphRing");
__turbopack_context__.k.register(_c3, "GlyphRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/loader-tetris.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TetrisLoader",
    ()=>TetrisLoader,
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateTetrisFrames",
    ()=>generateTetrisFrames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const SHAPES = [
    {
        id: 1,
        rot: [
            [
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    3,
                    1
                ]
            ],
            [
                [
                    2,
                    0
                ],
                [
                    2,
                    1
                ],
                [
                    2,
                    2
                ],
                [
                    2,
                    3
                ]
            ]
        ]
    },
    {
        id: 2,
        rot: [
            [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ]
            ]
        ]
    },
    {
        id: 3,
        rot: [
            [
                [
                    1,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    1,
                    2
                ]
            ],
            [
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    1,
                    2
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    1,
                    2
                ]
            ]
        ]
    },
    {
        id: 4,
        rot: [
            [
                [
                    1,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ]
            ],
            [
                [
                    0,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    1,
                    2
                ]
            ]
        ]
    },
    {
        id: 5,
        rot: [
            [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    0,
                    2
                ]
            ]
        ]
    },
    {
        id: 6,
        rot: [
            [
                [
                    0,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    1,
                    2
                ]
            ],
            [
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    2,
                    2
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    0,
                    2
                ],
                [
                    1,
                    2
                ]
            ]
        ]
    },
    {
        id: 7,
        rot: [
            [
                [
                    2,
                    0
                ],
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ]
            ],
            [
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    1,
                    2
                ],
                [
                    2,
                    2
                ]
            ],
            [
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    0,
                    2
                ]
            ],
            [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    1,
                    1
                ],
                [
                    1,
                    2
                ]
            ]
        ]
    }
];
const PIECES = SHAPES.map(_c = ({ id, rot })=>({
        id,
        rot: rot.map((cells)=>{
            const left = Math.min(...cells.map((c)=>c[0]));
            const top = Math.min(...cells.map((c)=>c[1]));
            return cells.map(([x, y])=>[
                    x - left,
                    y - top
                ]);
        })
    }));
_c1 = PIECES;
function hits(board, cells, ox, oy, w, h) {
    for (const [cx, cy] of cells){
        const x = ox + cx;
        const y = oy + cy;
        if (x < 0 || x >= w || y >= h) return true;
        if (y >= 0 && board[y * w + x]) return true;
    }
    return false;
}
function fall(board, cells, ox, from, w, h) {
    let y = from;
    while(!hits(board, cells, ox, y + 1, w, h))y++;
    return y;
}
function stamp(board, cells, ox, oy, id, w) {
    const next = [
        ...board
    ];
    for (const [cx, cy] of cells){
        const y = oy + cy;
        if (y >= 0) next[y * w + ox + cx] = id;
    }
    return next;
}
function fullRows(board, w, h) {
    const rows = [];
    for(let r = 0; r < h; r++){
        let full = true;
        for(let c = 0; c < w; c++){
            if (!board[r * w + c]) {
                full = false;
                break;
            }
        }
        if (full) rows.push(r);
    }
    return rows;
}
function collapse(board, rows, w, h) {
    const kept = [];
    for(let r = 0; r < h; r++){
        if (rows.includes(r)) continue;
        kept.push(board.slice(r * w, r * w + w));
    }
    const next = new Array((h - kept.length) * w).fill(0);
    for (const row of kept)next.push(...row);
    return next;
}
function rate(board, lines, w, h) {
    const heights = [];
    let holes = 0;
    for(let c = 0; c < w; c++){
        let top = h;
        for(let r = 0; r < h; r++){
            if (board[r * w + c]) {
                top = r;
                break;
            }
        }
        heights.push(h - top);
        for(let r = top + 1; r < h; r++)if (!board[r * w + c]) holes++;
    }
    let stack = 0;
    let bumps = 0;
    for(let c = 0; c < w; c++){
        stack += heights[c];
        if (c) bumps += Math.abs(heights[c] - heights[c - 1]);
    }
    return -0.51 * stack + 0.76 * lines - 0.36 * holes - 0.18 * bumps;
}
function moves(board, piece, w, h) {
    const out = [];
    for(let r = 0; r < piece.rot.length; r++){
        const cells = piece.rot[r];
        const span = Math.max(...cells.map((c)=>c[0]));
        for(let x = 0; x + span < w; x++){
            const y = fall(board, cells, x, -4, w, h);
            const landed = stamp(board, cells, x, y, piece.id, w);
            const lines = fullRows(landed, w, h);
            out.push({
                rot: r,
                x,
                y,
                value: rate(collapse(landed, lines, w, h), lines.length, w, h)
            });
        }
    }
    return out.sort((a, b)=>b.value - a.value);
}
function bag() {
    const order = [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ];
    for(let i = order.length - 1; i > 0; i--){
        const j = Math.random() * (i + 1) | 0;
        [order[i], order[j]] = [
            order[j],
            order[i]
        ];
    }
    return order;
}
function generateTetrisFrames(w, h) {
    const cells = w * h;
    const frames = [];
    let board = new Array(cells).fill(0);
    let queue = [];
    let placed = 0;
    let alive = true;
    while(alive && placed < 60 && frames.length < 900){
        if (!queue.length) queue = bag();
        const piece = PIECES[queue.shift()];
        const spots = moves(board, piece, w, h);
        if (!spots.length) break;
        const slip = Math.max(0, placed - 10) * 0.06;
        const spot = spots[Math.random() < slip ? Math.min(spots.length - 1, 1 + (Math.random() * 2 | 0)) : 0];
        const shape = piece.rot[spot.rot];
        const tall = Math.max(...shape.map((c)=>c[1])) + 1;
        for(let y = -tall; y <= spot.y; y++){
            if (y + tall <= 0) continue;
            frames.push(stamp(board, shape, spot.x, y, piece.id, w));
        }
        board = stamp(board, shape, spot.x, spot.y, piece.id, w);
        if (shape.some(([, cy])=>spot.y + cy < 0)) alive = false;
        const rows = fullRows(board, w, h);
        if (rows.length) {
            const flash = [
                ...board
            ];
            for (const r of rows)for(let c = 0; c < w; c++)flash[r * w + c] = 8;
            frames.push(flash, [
                ...board
            ], flash);
            board = collapse(board, rows, w, h);
            frames.push([
                ...board
            ], [
                ...board
            ]);
        }
        placed++;
    }
    const flood = [
        ...board
    ];
    for(let r = h - 1; r >= 0; r--){
        for(let c = 0; c < w; c++)flood[r * w + c] = 9;
        frames.push([
            ...flood
        ]);
    }
    const empty = new Array(cells).fill(0);
    frames.push([
        ...flood
    ], empty, [
        ...flood
    ], empty, empty);
    return frames;
}
/* -------------------------------------------------------------------------- */ /*                                  component                                 */ /* -------------------------------------------------------------------------- */ const PALETTE = [
    "var(--tetris-1, oklch(0.797 0.134 211.5))",
    "var(--tetris-2, oklch(0.861 0.173 91.9))",
    "var(--tetris-3, oklch(0.709 0.159 293.5))",
    "var(--tetris-4, oklch(0.800 0.182 151.7))",
    "var(--tetris-5, oklch(0.711 0.166 22.2))",
    "var(--tetris-6, oklch(0.714 0.143 254.6))",
    "var(--tetris-7, oklch(0.758 0.159 55.9))"
];
const size = (value)=>typeof value === "number" ? `${value}px` : value;
function useReducedMotion() {
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            const query = window.matchMedia("(prefers-reduced-motion: reduce)");
            const read = {
                "useReducedMotion.useEffect.read": ()=>setReduced(query.matches)
            }["useReducedMotion.useEffect.read"];
            read();
            query.addEventListener("change", read);
            return ({
                "useReducedMotion.useEffect": ()=>query.removeEventListener("change", read)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return reduced;
}
_s(useReducedMotion, "PAG4zvF6+IsK2eHB7xTPE8NJ12w=");
function TetrisLoader({ columns = 8, rows = 16, cellSize = 6, gap = 2, speed = 40, playing = true, loop = true, onComplete, label = "Loading", colors = PALETTE, flashColor = "var(--tetris-flash, var(--foreground, currentColor))", deadColor = "var(--tetris-dead, color-mix(in oklab, var(--foreground, currentColor) 45%, transparent))", dotClassName, className, style, ...props }) {
    _s1();
    const width = Math.max(4, Math.round(columns));
    const height = Math.max(6, Math.round(rows));
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reduced = useReducedMotion();
    const [round, setRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TetrisLoader.useMemo[game]": ()=>{
            void round;
            return generateTetrisFrames(width, height);
        }
    }["TetrisLoader.useMemo[game]"], [
        width,
        height,
        round
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TetrisLoader.useEffect": ()=>{
            frame.current = 0;
        }
    }["TetrisLoader.useEffect"], [
        game
    ]);
    const completeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TetrisLoader.useEffect": ()=>{
            completeRef.current = onComplete;
        }
    }["TetrisLoader.useEffect"], [
        onComplete
    ]);
    const paint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TetrisLoader.useCallback[paint]": (dots, index)=>{
            const board = game?.[index];
            if (!board) return;
            dots.forEach({
                "TetrisLoader.useCallback[paint]": (dot, i)=>{
                    const value = board[i] ?? 0;
                    dot.style.backgroundColor = value ? `var(--tetris-cell-${value})` : "";
                }
            }["TetrisLoader.useCallback[paint]"]);
        }
    }["TetrisLoader.useCallback[paint]"], [
        game
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TetrisLoader.useEffect": ()=>{
            if (!game) return;
            const grid = gridRef.current;
            if (!grid) return;
            const dots = Array.from(grid.children);
            if (frame.current >= game.length) frame.current = 0;
            if (reduced) {
                paint(dots, Math.floor(game.length * 0.55));
                return;
            }
            paint(dots, frame.current);
            if (!playing) return;
            let request = 0;
            let last = performance.now();
            let owed = 0;
            const tick = {
                "TetrisLoader.useEffect.tick": (now)=>{
                    owed += now - last;
                    last = now;
                    if (owed > speed * 4) owed = speed;
                    let ended = false;
                    while(owed >= speed){
                        owed -= speed;
                        frame.current++;
                        if (frame.current >= game.length) {
                            ended = true;
                            break;
                        }
                    }
                    paint(dots, Math.min(frame.current, game.length - 1));
                    if (!ended) {
                        request = requestAnimationFrame(tick);
                        return;
                    }
                    completeRef.current?.();
                    if (loop) setRound({
                        "TetrisLoader.useEffect.tick": (r)=>r + 1
                    }["TetrisLoader.useEffect.tick"]);
                    else frame.current = game.length - 1;
                }
            }["TetrisLoader.useEffect.tick"];
            request = requestAnimationFrame(tick);
            return ({
                "TetrisLoader.useEffect": ()=>cancelAnimationFrame(request)
            })["TetrisLoader.useEffect"];
        }
    }["TetrisLoader.useEffect"], [
        game,
        playing,
        speed,
        loop,
        paint,
        reduced
    ]);
    const vars = {
        "--tetris-cell": size(cellSize),
        "--tetris-gap": size(gap),
        "--tetris-cell-8": flashColor,
        "--tetris-cell-9": deadColor
    };
    for(let i = 0; i < 7; i++)vars[`--tetris-cell-${i + 1}`] = colors[i] ?? PALETTE[i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gridRef,
        role: "status",
        "aria-label": label,
        "aria-busy": playing && !reduced,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid w-fit", className),
        style: {
            gridTemplateColumns: `repeat(${width}, var(--tetris-cell))`,
            gap: "var(--tetris-gap)",
            ...vars,
            ...style
        },
        ...props,
        children: Array.from({
            length: width * height
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "var(--tetris-cell)",
                    borderRadius: "calc(var(--tetris-cell) / 3)"
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground/10", dotClassName)
            }, i, false, {
                fileName: "[project]/src/components/ui/loader-tetris.tsx",
                lineNumber: 355,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/loader-tetris.tsx",
        lineNumber: 338,
        columnNumber: 9
    }, this);
}
_s1(TetrisLoader, "n7KcJ5Uc9dd1mHl6DFzv2cMhP8Y=", false, function() {
    return [
        useReducedMotion
    ];
});
_c2 = TetrisLoader;
const __TURBOPACK__default__export__ = TetrisLoader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PIECES$SHAPES.map");
__turbopack_context__.k.register(_c1, "PIECES");
__turbopack_context__.k.register(_c2, "TetrisLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/pixel-scroll-transition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PixelScrollTransition",
    ()=>PixelScrollTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function makeRng(seed) {
    let a = seed >>> 0;
    return function next() {
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const clamp01 = (v)=>v < 0 ? 0 : v > 1 ? 1 : v;
function PixelScrollTransition({ from, to, pixelSize = 28, fromColor = "#101010", toColor = "#e4e4e4", accentColors = [
    "#e0562d",
    "#31b497",
    "#f2b70d"
], accentChance = 0.18, accentHold = 0.12, jitter = 0.55, direction = "up", scrollLength = 1, seed = 20260820, className = "", onProgress = undefined }) {
    _s();
    const zoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        cols: 0,
        rows: 0,
        w: 0,
        h: 0,
        thr: null,
        accent: null
    });
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelScrollTransition.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            const apply = {
                "PixelScrollTransition.useEffect.apply": ()=>setReduced(mq.matches)
            }["PixelScrollTransition.useEffect.apply"];
            apply();
            mq.addEventListener("change", apply);
            return ({
                "PixelScrollTransition.useEffect": ()=>mq.removeEventListener("change", apply)
            })["PixelScrollTransition.useEffect"];
        }
    }["PixelScrollTransition.useEffect"], []);
    const buildGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelScrollTransition.useCallback[buildGrid]": (w, h)=>{
            const cols = Math.max(1, Math.ceil(w / pixelSize));
            const rows = Math.max(1, Math.ceil(h / pixelSize));
            const count = cols * rows;
            const thr = new Float32Array(count);
            const accent = new Int8Array(count).fill(-1);
            const rng = makeRng(seed);
            const denomC = Math.max(1, cols - 1);
            const denomR = Math.max(1, rows - 1);
            const chance = reduced ? 0 : accentChance;
            const hold = reduced ? 0 : accentHold;
            for(let r = 0; r < rows; r++){
                for(let c = 0; c < cols; c++){
                    const i = r * cols + c;
                    let f;
                    if (direction === "down") f = r / denomR;
                    else if (direction === "left") f = (cols - 1 - c) / denomC;
                    else if (direction === "right") f = c / denomC;
                    else f = (rows - 1 - r) / denomR;
                    const noise = rng();
                    thr[i] = (f * (1 - jitter) + noise * jitter) * (1 - hold);
                    if (rng() < chance && accentColors.length > 0) {
                        accent[i] = Math.floor(rng() * accentColors.length) % accentColors.length;
                    }
                }
            }
            gridRef.current = {
                cols,
                rows,
                w,
                h,
                thr,
                accent
            };
        }
    }["PixelScrollTransition.useCallback[buildGrid]"], [
        pixelSize,
        seed,
        jitter,
        direction,
        accentChance,
        accentHold,
        accentColors,
        reduced
    ]);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelScrollTransition.useCallback[draw]": ()=>{
            const canvas = canvasRef.current;
            const grid = gridRef.current;
            if (!canvas || !grid.thr || !grid.accent) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const { cols, rows, w, h, thr, accent } = grid;
            const p = progressRef.current;
            const hold = reduced ? 0 : accentHold;
            const bleed = 0.6;
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = toColor;
            for(let r = 0; r < rows; r++){
                const y = r * pixelSize;
                for(let c = 0; c < cols; c++){
                    const i = r * cols + c;
                    const t = thr[i];
                    if (p < t) continue;
                    if (accent[i] >= 0 && p < t + hold) continue;
                    ctx.fillRect(c * pixelSize, y, pixelSize + bleed, pixelSize + bleed);
                }
            }
            if (hold > 0) {
                for(let k = 0; k < accentColors.length; k++){
                    ctx.fillStyle = accentColors[k];
                    for(let r = 0; r < rows; r++){
                        const y = r * pixelSize;
                        for(let c = 0; c < cols; c++){
                            const i = r * cols + c;
                            if (accent[i] !== k) continue;
                            const t = thr[i];
                            if (p < t || p >= t + hold) continue;
                            ctx.fillRect(c * pixelSize, y, pixelSize + bleed, pixelSize + bleed);
                        }
                    }
                }
            }
        }
    }["PixelScrollTransition.useCallback[draw]"], [
        pixelSize,
        toColor,
        accentColors,
        accentHold,
        reduced
    ]);
    const resize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelScrollTransition.useCallback[resize]": ()=>{
            const canvas = canvasRef.current;
            const panel = panelRef.current;
            if (!canvas || !panel) return;
            const w = panel.clientWidth;
            const h = panel.clientHeight;
            if (w === 0 || h === 0) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
            buildGrid(w, h);
            draw();
        }
    }["PixelScrollTransition.useCallback[resize]"], [
        buildGrid,
        draw
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelScrollTransition.useCallback[update]": ()=>{
            rafRef.current = 0;
            const zone = zoneRef.current;
            if (!zone) return;
            const rect = zone.getBoundingClientRect();
            const travel = rect.height - window.innerHeight;
            const p = travel <= 0 ? rect.top <= 0 ? 1 : 0 : clamp01(-rect.top / travel);
            if (p === progressRef.current) return;
            progressRef.current = p;
            draw();
            if (onProgress) onProgress(p);
        }
    }["PixelScrollTransition.useCallback[update]"], [
        draw,
        onProgress
    ]);
    const schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PixelScrollTransition.useCallback[schedule]": ()=>{
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(update);
        }
    }["PixelScrollTransition.useCallback[schedule]"], [
        update
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PixelScrollTransition.useLayoutEffect": ()=>{
            resize();
            update();
            window.addEventListener("scroll", schedule, {
                passive: true
            });
            window.addEventListener("resize", resize);
            let ro;
            if (typeof ResizeObserver !== "undefined" && panelRef.current) {
                ro = new ResizeObserver(resize);
                ro.observe(panelRef.current);
            }
            return ({
                "PixelScrollTransition.useLayoutEffect": ()=>{
                    window.removeEventListener("scroll", schedule);
                    window.removeEventListener("resize", resize);
                    if (ro) ro.disconnect();
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                }
            })["PixelScrollTransition.useLayoutEffect"];
        }
    }["PixelScrollTransition.useLayoutEffect"], [
        resize,
        schedule,
        update
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            from,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: zoneRef,
                style: {
                    height: `calc(100dvh * ${1 + Math.max(0.1, scrollLength)})`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: panelRef,
                    className: "sticky top-0 h-screen w-full overflow-hidden",
                    style: {
                        height: "100dvh",
                        backgroundColor: fromColor
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "absolute inset-0 block h-full w-full",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/pixel-scroll-transition.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/pixel-scroll-transition.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/pixel-scroll-transition.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            to
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/pixel-scroll-transition.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(PixelScrollTransition, "kERMalt2z7wEM9Io5JhkRkaiOK0=");
_c = PixelScrollTransition;
var _c;
__turbopack_context__.k.register(_c, "PixelScrollTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/profile-ascii.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileAsciiArt",
    ()=>ProfileAsciiArt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ProfileAsciiArt = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-sm mx-auto aspect-square flex items-center justify-center overflow-hidden rounded-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: "w-full h-full object-cover mix-blend-multiply opacity-85 pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/images/ascii-art-21st.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/profile-ascii.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                "Your browser does not support the video tag."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/profile-ascii.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/profile-ascii.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProfileAsciiArt;
var _c;
__turbopack_context__.k.register(_c, "ProfileAsciiArt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/project-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectShowcase",
    ()=>ProjectShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const projects = [
    {
        id: "dreamscape",
        title: "DreamScape Wallpapers",
        subtitle: "Digital Wallpaper Gallery",
        image: "/images/dreamscape.jpg",
        url: "https://dev-dream-scape-wallpapers.pantheonsite.io/"
    },
    {
        id: "squadlink",
        title: "SquadLink",
        subtitle: "Esports & Gaming Identity Platform",
        image: "/images/squadlink.jpg",
        url: "https://squadlink.in"
    },
    {
        id: "usafe",
        title: "U-Safe Solutions",
        subtitle: "Food Safety & Sanitation",
        image: "/images/usafe.png",
        url: "https://usafe-solutions.com"
    },
    {
        id: "flashmedia",
        title: "Flash Media",
        subtitle: "Independent Film Production",
        image: "/images/flashmedia.jpg",
        url: "https://flashmediaproduction.in"
    },
    {
        id: "flash-ai",
        title: "Flash AI",
        subtitle: "Free AI Flashcard Generator from PDF & Text",
        image: "/images/flashai.png",
        url: "https://github.com/shreyaskaraiya321/Flash-Card-AI"
    }
];
function ProjectShowcase() {
    _s();
    // Default to the middle card being expanded on load
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row w-full max-w-6xl mx-auto h-[500px] md:h-[600px] gap-4 px-4 py-8",
        children: projects.map((project, index)=>{
            const isActive = hoveredIndex === index;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].a, {
                href: project.url,
                target: "_blank",
                rel: "noopener noreferrer",
                onMouseEnter: ()=>setHoveredIndex(index),
                className: "relative overflow-hidden rounded-2xl cursor-pointer group flex flex-col justify-end ring-1 ring-black/10 shadow-lg",
                animate: {
                    flex: isActive ? 3 : 1
                },
                transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.2
                },
                style: {
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 transition-opacity duration-500", isActive ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100" : "bg-black/50 group-hover:bg-black/30")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        className: "relative z-10 p-6 md:p-8 flex flex-col gap-2",
                        initial: false,
                        animate: {
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20
                        },
                        transition: {
                            duration: 0.3,
                            delay: isActive ? 0.1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl md:text-4xl font-bold text-white flex items-center gap-3",
                                children: [
                                    project.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "w-6 h-6 text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/project-showcase.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 font-medium text-sm md:text-base",
                                children: project.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/project-showcase.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        animate: {
                            opacity: isActive ? 0 : 1
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white font-bold tracking-widest uppercase origin-center -rotate-90 whitespace-nowrap opacity-50 text-xl",
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/project-showcase.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this)
                ]
            }, project.id, true, {
                fileName: "[project]/src/components/ui/project-showcase.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/project-showcase.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(ProjectShowcase, "QBFETI5rYWNdWx55fzP7xKhewcs=");
_c = ProjectShowcase;
var _c;
__turbopack_context__.k.register(_c, "ProjectShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1m3obuu._.js.map