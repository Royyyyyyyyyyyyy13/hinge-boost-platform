import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();

  // 模拟分析结果数据
  const analysisResults = {
    overallScore: 78,
    dimensions: [
      { name: '照片质量', score: 85, feedback: '照片清晰度很好，光线充足' },
      { name: '个人魅力', score: 72, feedback: '表情自然，但可以更加自信' },
      { name: '背景环境', score: 68, feedback: '背景略显杂乱，建议选择简洁背景' },
      { name: '整体印象', score: 82, feedback: '给人留下积极正面的印象' },
      { name: '匹配潜力', score: 75, feedback: '具有良好的匹配潜力' }
    ],
    suggestions: [
      '尝试在自然光下拍摄，避免强烈的人工光源',
      '选择简洁干净的背景，突出个人形象',
      '保持自然的微笑，展现真实的个性',
      '可以尝试不同的角度和姿势',
      '确保照片中的你是主要焦点'
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/upload')}
                className="text-gray-600 hover:text-black transition-colors"
              >
                重新分析
              </button>
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-black transition-colors"
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">你的约会照片分析报告</h1>
          <p className="text-xl text-gray-600">基于AI深度学习的专业分析结果</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧 - 总体评分 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-black mb-6">总体评分</h2>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${analysisResults.overallScore * 3.14} 314`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">{analysisResults.overallScore}</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-4">你的照片表现不错！</p>
              <div className="text-sm text-gray-500">
                <p>高于 65% 的用户</p>
              </div>
            </div>

            {/* 快速操作 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-black mb-4">快速操作</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/upload')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  分析更多照片
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  下载详细报告
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  分享结果
                </button>
              </div>
            </div>
          </div>

          {/* 右侧 - 详细分析 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 各维度评分 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">详细评分</h2>
              <div className="space-y-6">
                {analysisResults.dimensions.map((dimension, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-black">{dimension.name}</span>
                      <span className={`text-lg font-bold ${getScoreColor(dimension.score)}`}>
                        {dimension.score}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${getScoreBarColor(dimension.score)}`}
                        style={{ width: `${dimension.score}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600">{dimension.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 改进建议 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">💡 改进建议</h2>
              <div className="space-y-4">
                {analysisResults.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 成功案例 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-black mb-4">🎉 你知道吗？</h2>
              <p className="text-lg text-gray-700 mb-4">
                根据我们的数据分析，按照这些建议优化照片的用户，平均匹配率提升了 <span className="font-bold text-blue-600">73%</span>！
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">73%</div>
                  <div className="text-sm text-gray-600">匹配率提升</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2.5x</div>
                  <div className="text-sm text-gray-600">更多对话</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">89%</div>
                  <div className="text-sm text-gray-600">用户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">想要更深入的分析？</h3>
            <p className="text-lg text-gray-600 mb-6">
              升级到专业版，获得更详细的分析报告、个性化建议和专家指导
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
              升级到专业版
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;