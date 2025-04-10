'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './queryGuide.module.css';  // 確保這行正確導入
import { db } from '@/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export default function QueryGuide() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState(Array(10).fill(''));
    const [completed, setCompleted] = useState(Array(10).fill(false));
    const [questions, setQuestions] = useState([]);
    const [hints, setHints] = useState([]);
    const [loading, setLoading] = useState(false);

    // 從 Firebase 獲取問題和提示
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const questionsRef = collection(db, 'guidanceQuestions');
                const querySnapshot = await getDocs(questionsRef);
                const fetchedQuestions = [];
                const fetchedHints = [];
                
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    fetchedQuestions.push(data.question);
                    fetchedHints.push(data.hint);
                });

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
    }, []);

    const switchQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const saveAnswer = async () => {
        const answer = document.querySelector(`.${styles['answer-textarea']}`).value.trim();
        const newAnswers = [...answers];
        newAnswers[currentQuestion - 1] = answer;
        setAnswers(newAnswers);

        const newCompleted = [...completed];
        newCompleted[currentQuestion - 1] = answer !== '';
        setCompleted(newCompleted);

        // 這裡可以加入將答案保存到 Firebase 的邏輯
        alert('答案已儲存！');
    };

    if (loading) {
        return(
          <div className="justify-center items-center">   Loading...</div>
        );
    }

    return (
        <div className={styles['main-content']}>
            <div className={styles['content-header']}>
                <h1 className={styles['page-title']}>　　提問引導與釐清</h1>
            </div>
            
            <div className={styles['guidance-container']}>
                {/* 左側問題列表 */}
                <div className={styles['question-list']}>
                    <div className={styles['list-title']}>十個引導式問題</div>
                    
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className={`${styles['question-item']} 
                                ${currentQuestion === index + 1 ? styles['active'] : ''} 
                                ${completed[index] ? styles['completed'] : ''}`}
                            onClick={() => switchQuestion(index + 1)}
                        >
                            <div className={styles['question-number']}>問題 {index + 1}</div>
                            <div className={styles['question-preview']}>{question}</div>
                        </div>
                    ))}
                </div>
                
                {/* 右側答題區 */}
                <div className={styles['answer-area']}>
                    <div className={styles['question-header']}>
                        <div className={styles['current-number']}>
                            問題 {currentQuestion} / 10
                        </div>
                        <div className={styles['progress-info']}>
                            已完成 {completed.filter(Boolean).length}/10 個問題
                        </div>
                    </div>
                    
                    <div className={styles['hint-box']}>
                        <div className={styles['hint-title']}>
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="none" stroke="#5d8a9e" strokeWidth="2" />
                                <path d="M12 16v-4" stroke="#5d8a9e" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="12" cy="8" r="1" fill="#5d8a9e" />
                            </svg>
                            回答提示
                        </div>
                        <div className={styles['hint-content']}>
                            {hints[currentQuestion - 1] || '請詳細說明你的想法，具體的例子和經歷會使你的回答更有說服力。'}
                        </div>
                    </div>
                    
                    <div className={styles['question-content']}>
                        {questions[currentQuestion - 1]}
                    </div>
                    
                    <div className={styles['answer-box']}>
                        <div className={styles['answer-label']}>你的回答：</div>
                        <textarea 
                            className={styles['answer-textarea']} 
                            placeholder="在這裡輸入你的回答..."
                            value={answers[currentQuestion - 1]}
                            onChange={(e) => {
                                const newAnswers = [...answers];
                                newAnswers[currentQuestion - 1] = e.target.value;
                                setAnswers(newAnswers);
                            }}
                        />
                    </div>
                    
                    <div className={styles['answer-controls']}>
                        <button 
                            className={`${styles['nav-button']} ${styles['prev-button']}`}
                            onClick={() => switchQuestion(currentQuestion - 1)}
                            disabled={currentQuestion === 1}
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            上一題
                        </button>
                        
                        <button className={styles['save-button']} onClick={saveAnswer}>
                            儲存答案
                        </button>
                        
                        <button 
                            className={`${styles['nav-button']} ${styles['next-button']}`}
                            onClick={() => switchQuestion(currentQuestion + 1)}
                            disabled={currentQuestion === 10}
                        >
                            下一題
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <button className={styles['next-stage-button']} onClick={() => window.location.href='/detailedRevision'}>
                回答好了！檢查邏輯與流暢度
                <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
} 