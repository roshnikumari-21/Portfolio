import AnimationWrapper from './AnimationWrapper';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <AnimationWrapper animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        </AnimationWrapper>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimationWrapper animation="fadeUp" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science Engineering student at NIT Jamshedpur with a passion for building 
                scalable web applications and solving complex problems. With a CGPA of 9.60, I rank in the 
                top 0.57% of my batch of 700+ students.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As an SDE Intern at Flipkart, I enhanced their Content Management Platform, improving 
                automation efficiency by 30% and building reusable components that accelerated feature 
                rollout across multiple teams.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me competing in programming contests, contributing to 
                open-source projects, or exploring new technologies in web development and machine learning.
              </p>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fadeUp" delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Achievements</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-blue-400 mb-2">🏆 Top 20 Finalist - Flipkart Runway Season 5</h4>
                  <p className="text-gray-300 text-sm">Selected among 50,000+ applicants for prestigious internship program</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-green-400 mb-2">🥈 Finalist - BNY Mellon Code Divas 2025</h4>
                  <p className="text-gray-300 text-sm">Competed in prestigious women's coding competition</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-purple-400 mb-2">📊 Competitive Programming</h4>
                  <p className="text-gray-300 text-sm">CodeChef 3★ (1651) • Codeforces Pupil (1227) • LeetCode (1726)</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}