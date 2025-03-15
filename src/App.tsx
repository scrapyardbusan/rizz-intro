import React from 'react';
import { HeartCrack, MessageCircleHeart, Sparkles, Brain, Send, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* 히어로 섹션 */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <MessageCircleHeart className="h-16 w-16 text-pink-500 animate-bounce" />
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Rizz
            </h1>
          </div>
          <p className="text-2xl text-gray-600 mt-4">
            여자친구의 "괜찮아"가 진짜 괜찮은게 아니라는 걸
            <br />
            <span className="text-pink-500 font-semibold">이제는 AI가 알려드립니다</span> 
          </p>
        </div>

        {/* 메인 소개 */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 text-center border-b border-gray-100">
              <h2 className="text-3xl font-bold mb-4">
                "나 괜찮아. 잘게."
              </h2>
              <p className="text-gray-500 text-lg">
                이 한마디에 담긴 수만 가지의 뜻, 
                <br />
                <span className="font-semibold">이제 해석이 필요한 순간입니다.</span>
              </p>
            </div>
            <div className="grid md:grid-cols-3 divide-x divide-gray-100">
              <div className="p-8 text-center hover:bg-pink-50 transition-colors">
                <Brain className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">화난 정도 측정</h3>
                <p className="text-gray-600">
                  Lv.1 (애교) 부터
                  <br />
                  Lv.10 (격분) 까지
                </p>
              </div>
              <div className="p-8 text-center hover:bg-purple-50 transition-colors">
                <HeartCrack className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">숨은 뜻 해석</h3>
                <p className="text-gray-600">
                  "괜찮아"의 
                  <br />
                  진짜 의미 파악
                </p>
              </div>
              <div className="p-8 text-center hover:bg-indigo-50 transition-colors">
                <Sparkles className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">해결책 제시</h3>
                <p className="text-gray-600">
                  엉뚱하지만
                  <br />
                  효과적인 방법
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 예시 시나리오 */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">실제 사용 예시</h2>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full p-3">
                  <Send className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">입력된 메시지</h3>
                  <p className="text-gray-700 text-lg">"좀 지친다. 나 그냥 잘게..."</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <Brain className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">화난 정도</h3>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-[#F34164]"></div>
                  </div>
                  <p className="mt-2 text-gray-600">Level 6 - 위험 수준입니다! 🚨</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <HeartCrack className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">숨은 뜻 해석</h3>
                  <p className="text-gray-700">
                    "지금 당신과 대화하는 게 너무 힘들어요. 더 이야기하면 화가 날 것 같아서 도망가고 싶어요."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 rounded-full p-3">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">추천 해결책</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-[#5046E5]" />
                      <span>"여보세요? 고객님? 제 마음속에 계신데요? 여보세요?"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-[#5046E5]" />
                      <span>"아니 벌써 꿈나라 가신다고요? 내 꿈에 초대장 보냈는데..."</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-[#5046E5]" />
                      <span>(귀여운 강아지 사진과 함께) "이 친구가 지금 내 상태예요 🥺"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 마지막 CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            이제 더 이상 고민하지 마세요
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            여자친구의 마음을 읽는 AI의 시대,
            <br />
            <span className="text-pink-500 font-semibold">Rizz</span>가 도와드리겠습니다
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
            지금 바로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;