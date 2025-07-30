import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleAnalyze = async () => {
    if (selectedFiles.length === 0) return;

    setIsAnalyzing(true);
    setProgress(0);

    // 模拟分析进度
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/results');
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-black">HingeBoost</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-black transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">上传你的约会照片</h1>
          <p className="text-xl text-gray-600">我们的AI将在60秒内为你提供专业分析</p>
        </div>

        {!isAnalyzing ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* 文件上传区域 */}
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">拖拽照片到这里或点击上传</h3>
              <p className="text-gray-600 mb-4">支持 JPG, PNG, WEBP 格式，最大 10MB</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                选择文件
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* 已选择的文件列表 */}
            {selectedFiles.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-black mb-4">已选择的照片 ({selectedFiles.length})</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`预览 ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                      <p className="text-sm text-gray-600 mt-2 truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 分析按钮 */}
            {selectedFiles.length > 0 && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleAnalyze}
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  开始AI分析 ({selectedFiles.length} 张照片)
                </button>
              </div>
            )}
          </div>
        ) : (
          /* 分析进度 */
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">AI正在分析你的照片...</h3>
            <p className="text-gray-600 mb-8">请稍等，我们正在进行深度分析</p>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{Math.round(progress)}% 完成</p>
          </div>
        )}

        {/* 提示信息 */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">💡 获得最佳分析结果的小贴士：</h4>
          <ul className="space-y-2 text-blue-800">
            <li>• 上传清晰、光线良好的照片</li>
            <li>• 包含不同角度和场景的照片</li>
            <li>• 确保照片中的你是主要焦点</li>
            <li>• 避免过度修图或滤镜</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;