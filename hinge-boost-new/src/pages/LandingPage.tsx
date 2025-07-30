import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-black">HingeBoost</span>
            </div>
            
            {/* 导航菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">
                Pricing
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-black transition-colors">
                Reviews
              </a>
              <button className="text-gray-600 hover:text-black transition-colors">
                Log In
              </button>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Is Your Dating<br />
                Profile Repelling<br />
                Matches?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Upload One Photo and Our AI Will Reveal the Truth for<br />
                Free in 60 seconds. Stop Guessing, Start Matching.
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Analyze My Photo For Free
              </button>
            </div>
          </div>

          {/* 右侧插图 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 思考泡泡 */}
              <div className="absolute -top-8 -left-8 bg-white rounded-full p-4 shadow-lg border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              
              {/* 女性角色插图 */}
              <div className="w-80 h-96 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-4xl">👩🏻‍💼</span>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">思考中的现代女性</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works 部分 */}
      <div id="how-it-works" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">HOW IT WORKS</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our AI doesn't just analyze technical aspects like lighting and composition. It delves deeper, 
              assessing how your photo communicates your personality, interests, and lifestyle. We 
              evaluate factors like authenticity, approachability, and how well your photo represents you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📤</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Upload</h3>
              <p className="text-gray-600 text-lg">Upload your dating profile photo.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">AI Analysis</h3>
              <p className="text-gray-600 text-lg">Our AI analyzes your photo, focusing on value delivery, not just aesthetics.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Instant Insights</h3>
              <p className="text-gray-600 text-lg">Receive instant insights to improve your profile.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Are You Facing These Challenges 部分 */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-black mb-12">Are You Facing These Challenges?</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 border-2 border-blue-600 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-xl text-gray-700">No Likes Back?</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 border-2 border-blue-600 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-xl text-gray-700">Conversations Fizzle?</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 border-2 border-blue-600 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-xl text-gray-700">Struggling to Stand Out?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Thousands 部分 */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">Trusted by Thousands</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 社交媒体展示 */}
            <div className="bg-black rounded-3xl p-12 flex items-center justify-center h-48">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🐦</span>
                </div>
                <span className="text-white text-lg font-semibold">Featured on Social Media</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-12 flex items-center justify-center h-48">
              <div className="text-center">
                <div className="text-white text-3xl font-bold mb-2">TikTok</div>
                <div className="w-12 h-12 bg-white rounded-lg mx-auto"></div>
                <div className="text-teal-200 text-sm mt-2">Viral Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-6">Ready to Transform Your Dating Profile?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands who have already improved their dating success</p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Free Analysis Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;