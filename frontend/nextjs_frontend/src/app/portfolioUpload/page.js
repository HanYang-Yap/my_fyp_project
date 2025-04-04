'use client';
import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '@/../public/css/portfolioUpload.css'; // 確保 CSS 路徑正確

export default function PortfolioUpload() {
  const [targetSchools, setTargetSchools] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [documentType, setDocumentType] = useState('learning');
  const [activeCategory, setActiveCategory] = useState('all');
  const [files, setFiles] = useState([
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
    },
    // ... 其他檔案
  ]);

  useEffect(() => {
    const fetchTargetSchools = async () => {
      try {
        const schoolsRef = collection(db, 'targetSchools');
        const q = query(schoolsRef, where('userId', '==', 'currentUserId')); // 替換成實際用戶 ID
        const querySnapshot = await getDocs(q);
        
        const schools = [];
        querySnapshot.forEach((doc) => {
          schools.push({ id: doc.id, ...doc.data() });
        });
        
        setTargetSchools(schools);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTargetSchools();
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsModalOpen(true);
  };

  const handleConfirmUpload = () => {
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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleAnalyzeClick = () => {
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

  return (
    <div className="main-content">
      <div className="content-container">
        <div className="page-header">
          <h1 className="page-title">學習歷程</h1>
        </div>
        
        <div className="portfolio-container">
          {/* 左側類別選擇 */}
          <div className="portfolio-sidebar">
            <h3 className="category-title">志願學校系所</h3>
            <ul className="category-list">
              <li 
                className={`category-item ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('all')}
              >
                <i className="fas fa-list"></i> 所有文件
              </li>
              {targetSchools.map((school) => (
                <li 
                  key={school.id} 
                  className={`category-item ${activeCategory === school.code ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(school.code)}
                >
                  <i className="fas fa-university"></i> {school.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 右側內容 */}
          <div className="portfolio-content">
            {/* 上傳區域 */}
            <div className="upload-section" id="uploadArea">
              <div className="upload-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3 className="upload-title">上傳你的學習歷程文件</h3>
              <p className="upload-subtitle">支持 PDF、Word、PPT、圖片等格式，最大 20MB</p>
              <button className="upload-button" onClick={() => document.getElementById('fileUpload').click()}>
                <i className="fas fa-plus"></i> 選擇文件
              </button>
              <input 
                type="file" 
                id="fileUpload" 
                style={{ display: 'none' }} 
                onChange={handleFileUpload}
                multiple 
              />
            </div>

            {/* 文件列表 */}
            <div className="files-section">
              <div className="section-header">
                <h3 className="section-title">
                  {activeCategory === 'all' ? '所有文件' : 
                    targetSchools.find(s => s.code === activeCategory)?.name + ' 申請資料'}
                </h3>
              </div>
              
              <ul className="files-list">
                {files
                  .filter(file => activeCategory === 'all' || file.school === activeCategory)
                  .map((file, index) => (
                    <li key={file.id} className="file-item" data-school={file.school} data-type={file.type}>
                      <div className="checkbox-container">
                        <input type="radio" name="fileSelect" id={`file${file.id}`} />
                      </div>
                      <div className="file-icon">
                        <i className="fas fa-file-pdf"></i>
                      </div>
                      <div className="file-details">
                        <div className="file-name">{file.name}</div>
                        <div className="file-meta">{file.size} · 上傳於 {file.uploadDate}</div>
                      </div>
                      <span className={`file-status status-${file.status}`}>
                        {file.status === 'analyzed' ? 
                          `已分析 · ${file.analysisDate} · 評分: ${file.score}` : 
                          '待分析'}
                      </span>
                      <button className="delete-btn">
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  ))}
              </ul>
              
              <div className="analyze-footer">
                <button className="analysis-button" onClick={handleAnalyzeClick}>
                  <i className="fas fa-robot"></i> AI 分析所選文件
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 上傳配置模態框 */}
      {isModalOpen && (
        <div className="modal active">
          <div className="modal-content" style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h3 className="modal-title">設定文件屬性</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="upload-form">
                <div className="form-group">
                  <label htmlFor="schoolSelect">選擇志願學校系所：</label>
                  <select 
                    id="schoolSelect" 
                    className="form-control"
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                  >
                    <option value="">請選擇學校系所...</option>
                    {targetSchools.map(school => (
                      <option key={school.id} value={school.code}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>選擇文件類型：</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="documentType" 
                        value="learning"
                        checked={documentType === 'learning'}
                        onChange={(e) => setDocumentType(e.target.value)}
                      />
                      <span>學習歷程自述</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="documentType" 
                        value="diversity"
                        checked={documentType === 'diversity'}
                        onChange={(e) => setDocumentType(e.target.value)}
                      />
                      <span>多元表現</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>選擇的文件：</label>
                  <div className="selected-file-name">
                    {selectedFile ? selectedFile.name : '尚未選擇文件'}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>最終檔案名稱：</label>
                  <div className="final-file-name">
                    {selectedFile && selectedSchool ? 
                      `${targetSchools.find(s => s.code === selectedSchool)?.name}-${
                        documentType === 'learning' ? '學習歷程自述' : '多元表現'
                      }.${selectedFile.name.split('.').pop()}` : 
                      '-'}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                取消
              </button>
              <button className="modal-btn btn-primary" onClick={handleConfirmUpload}>
                確認上傳
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}