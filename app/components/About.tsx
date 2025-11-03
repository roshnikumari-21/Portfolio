import AnimationWrapper from './AnimationWrapper';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <AnimationWrapper animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        </AnimationWrapper>
        
        <div className="max-w-3xl mx-auto">
          <AnimationWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions and beautiful user experiences.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fadeUp" delay={0.4}>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in JavaScript, React, and Node.js, I enjoy turning 
              complex problems into simple, elegant solutions that make a difference.
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fadeUp" delay={0.6}>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source, or enjoying outdoor activities and photography.
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}